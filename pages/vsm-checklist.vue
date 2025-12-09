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
                VSM CHECKLIST
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
                        <!-- cutomer name -->
                        <div class="col s12">
                            <input type="text" placeholder="Customer name" v-model="customer_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- address -->
                        <div class="col s12">
                            <input type="text" placeholder="Address" v-model="address">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Account Number -->
                        <div class="col s12">
                            <input type="text" placeholder="Account number" v-model="account_number">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Customer category -->
                        <div class="col s12">
                            <select v-model="customer_category">
                                <option value="" disabled selected>Customer Category</option>
                                <option value="Prepaid">Prepaid</option>
                                <option value="Postpaid">Postpaid</option>
                                <option value="Freerider">Freerider</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <br>
                    <div class="row">
                        <!-- Customer category -->
                        <div class="col s12">
                            <select v-model="customer_type">
                                <option value="" disabled selected>Customer Type</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Residential">Residential</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!-- Nature of business -->
                        <div class="col s12">
                            <input type="text" placeholder="Nature of business" v-model="nature_of_business">
                        </div>
                    </div>

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
                        <!-- DT capacity -->
                        <div class="col s12">
                            <input type="text" placeholder="DT capacity (KVA)" v-model="dt_capacity">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Alignment status -->
                        <div class="col s12">
                            <select v-model="alignment_status">
                                <option value="" disabled selected>Alignment status</option>
                                <option value="Correct">Correct</option>
                                <option value="Wrong">Wrong</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Current tariff -->
                        <div class="col s12">
                            <select v-model="current_tariff">
                                <option value="" disabled selected>Current tariff</option>
                                <option value="A1SP">A1SP</option>
                                <option value="A1TP">A1TP</option>
                                <option value="A2">A2</option>
                                <option value="C1SP">C1SP</option>
                                <option value="C1TP">C1TP</option>
                                <option value="C2">C2</option>
                                <option value="R1">R1</option>
                                <option value="R2SP">R2SP</option>
                                <option value="R2TP">R2TP</option>
                                <option value="R3">R3</option>
                                <option value="R4">R4</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="N/A">N/A</option>
                                <option value="P47">P47</option>
                                <option value="P50">P50</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Recommended tariff -->
                        <div class="col s12">
                            <select v-model="recommended_tariff">
                                <option value="" disabled selected>Recommended tariff *</option>
                                <option value="A-Bilateral">A-Bilateral</option>
                                <option value="A-MD1">A-MD1</option>
                                <option value="A-MD2">A-MD2</option>
                                <option value="A-Non-MD">A-Non-MD</option>
                                <option value="B-MD1">B-MD1</option>
                                <option value="B-MD2">B-MD2</option>
                                <option value="B-Non-MD">B-Non-MD</option>
                                <option value="C-MD1">C-MD1</option>
                                <option value="C-MD2">C-MD2</option>
                                <option value="C-Non-MD">C-Non-MD</option>
                                <option value="D-MD1">D-MD1</option>
                                <option value="D-MD2">D-MD2</option>
                                <option value="D-Non-MD">D-Non-MD</option>
                                <option value="E-MD1">E-MD1</option>
                                <option value="E-MD2">E-MD2</option>
                                <option value="E-Non-MD">E-Non-MD</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Metering status -->
                        <div class="col s12">
                            <select v-model="meter_status">
                                <option value="" disabled selected>Metering status </option>
                                <option value="Metered">Metered</option>
                                <option value="Not metered">Not metered</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter serial number -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter serial number" v-model="meter_serial_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Replacement meter serial number -->
                        <div class="col s12">
                            <input type="text" placeholder="Replacement meter serial number" v-model="replacement_meter_serial_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Meter Manufacturer -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter Manufacturer" v-model="meter_manufacturer">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Meter type by manufacturer -->
                        <div class="col s12">
                            <select v-model="meter_type_by_manufacturer">
                                <option value="" disabled selected>Meter Manufacturer</option>
                                <option value="Analog Meter (R)">Analog Meter (R)</option>
                                <option value="Clou">Clou</option>
                                <option value="Clou (Whole Current)">Clou (Whole Current)</option>
                                <option value="Conlog">Conlog</option>
                                <option value="EDMI">EDMI</option>
                                <option value="Erasco">Erasco</option>
                                <option value="Henan Star Hi-Tech Co., Ltd.">Henan Star Hi-Tech Co., Ltd.</option>
                                <option value="Hexcell">Hexcell</option>
                                <option value="Holley">Holley</option>
                                <option value="Mojec">Mojec</option>
                                <option value="Mojec (Whole Current)">Mojec (Whole Current)</option>
                                <option value="Momas">Momas</option>
                                <option value="Others">Others</option>
                                <option value="Postpaid Bill (C, E)">Postpaid Bill (C, E)</option>
                                <option value="Unistar">Unistar</option>
                                <option value="Ziklagsis">Ziklagsis</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter payment type -->
                        <div class="col s12">
                            <select v-model="meter_payment_type">
                                <option value="" disabled selected>Meter payment type</option>
                                <option value="AMI STS (Token)">AMI STS (Token)</option>
                                <option value="Analogue (Postpaid)">Analogue (Postpaid)</option>
                                <option value="Non-AMI STS (Token)">Non-AMI STS (Token)</option>
                                <option value="Others">Others</option>
                                <option value="Smartcard">Smartcard</option>
                                <option value="Whole current (Postpaid)">Whole current (Postpaid)</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter type -->
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
                        <!-- Meter type box -->
                        <div class="col s12">
                            <select v-model="meter_type_box">
                                <option value="" disabled selected>Meter type box</option>
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
                                <option value="" disabled selected>MCB</option>
                                <option value="Bad">Bad</option>
                                <option value="Good">Good</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter condition -->
                        <div class="col s12">
                            <select v-model="meter_condition">
                                <option value="" disabled selected>Meter condition</option>
                                <option value="Functional">Functional</option>
                                <option value="Faulty">Faulty</option>
                                <option value="Burnt">Burnt</option>
                                <option value="Not sighted">Not sighted</option>
                                <option value="Negative reading">Negative reading</option>
                                <option value="Abondoned">Abondoned</option>
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
                        <!-- Last purchase date -->
                        <div class="col s12">
                            <h6 class="red-text">Last purchase date:</h6>
                            <input type="date" v-model="last_purchase_date" id="startDate">
                            <label for="startDate">Last purchase date:</label>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Last purchase amount -->
                        <div class="col s12">
                            <input type="text" placeholder="Last purchase amount" v-model="last_purchase_amount">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Credit/Reading on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Credit/Reading on meter" v-model="credit_reading_on_meter">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Seal status -->
                        <div class="col s12">
                            <select v-model="seal_status">
                                <option value="" disabled selected>Seal status</option>
                                <option value="Intact">Intact</option>
                                <option value="Tampered">Tampered</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <!-- old seal -->

                    <div class="row">
                        <div class="col s8">
                            <input type="text" v-model="old_seal" placeholder="Enter old seal value">
                        </div>
                    </div>


                    <!-- new seal -->

                    <div class="row">
                        <div class="col s8">
                            <input type="text" v-model="new_seal" placeholder="Enter new seal value">
                        </div>
                    </div>


                    <br>
                    <div class="row">
                        <!-- Inspection conclusion -->
                        <div class="col s12">
                            <select v-model="inspection_conclusion">
                                <option value="" disabled selected>Inspection conclusion *</option>
                                <option value="Access denied">Access denied</option>
                                <option value="Broken seal">Broken seal</option>
                                <option value="Demolished building">Demolished building</option>
                                <option value="Fault meter not on pospaid acct">Fault meter not on pospaid acct</option>
                                <option value="Freerider">Freerider</option>
                                <option value="Further checks required">Further checks required</option>
                                <option value="Good">Good</option>
                                <option value="Infraction corrected">Infraction corrected</option>
                                <option value="Meter abandoned due to huge outstanding">Meter abandoned due to huge outstanding</option>
                                <option value="Meter burnt not on pospaid acct">Meter burnt not on pospaid acct</option>
                                <option value="Meter Bypassed">Meter Bypassed</option>
                                <option value="Meter Bypass from installation">Meter Bypass from installation</option>
                                <option value="Meter dispensing free energy">Meter dispensing free energy</option>
                                <option value="Meter not in use">Meter not in use</option>
                                <option value="Meter not seen at address">Meter not seen at address</option>
                                <option value="Meter relocation advised">Meter relocation advised</option>
                                <option value="Meter tampered">Meter tampered</option>
                                <option value="Nagative reading">Nagative reading</option>
                                <option value="No access">No access</option>
                                <option value="Pumping machine on direct">Pumping machine on direct</option>
                                <option value="Token issue">Token issue</option>
                                <option value="Under-billing">Under-billing</option>
                                <option value="Vacant apartment">Vacant apartment</option>
                                <option value="Vulnerable">Vulnerable</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!-- Recommendation -->
                        <div class="col s12">
                            <select v-model="recommendation">
                                <option value="" disabled selected>Recommendation</option>
                                <option value="Close monitoring">Close monitoring</option>
                                <option value="Disconnection">Disconnection</option>
                                <option value="Meter re-certification required">Meter re-certification required</option>
                                <option value="Meter replacement">Meter replacement</option>
                                <option value="No futher action">No futher action</option>
                                
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Further remarks -->
                        <div class="col s12">
                            <input type="text" placeholder="Further remarks" v-model="further_remarks">
                        </div>
                    </div>


                    <div class="row">
                        <div class="col s12">
                            <input type="text" v-model="phone_number" placeholder="Customer phone number">
                        </div>
                    </div>





                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">
                            
                            <h6 class="red-text">Picture of the service wire from pole metering point</h6>
                            <button class="btn red btn-large" @click="imagePickerForTheServiceWireFromPoleToMeteringPoint()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-the-service-wire-from-pole-to-metering-point" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of building* -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of building *</h6>
                            <button class="btn red btn-large" @click="imagePickerBuilding()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of building -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-building" />
                        </div>
                    </div>




                    <div class="row">
                        <!--  Picture of installation /Cut Out/ metering point 1 * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of installation /Cut Out/ metering point 1 
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInstallationCutOutMeteringPointOne()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point one -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-installation-cut-out-metering-point-one" />
                        </div>
                    </div>






                    <div class="row">
                        <!--  Picture of installation /Cut Out/ metering point 2 * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of installation /Cut Out/ metering point 2 
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInstallationCutOutMeteringPointOne2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point one 2 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-installation-cut-out-metering-point-one2" />
                        </div>
                    </div>






                    <div class="row">
                        <!--  Picture of installation /Cut Out/ metering point 3 * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of installation /Cut Out/ metering point 3 
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInstallationCutOutMeteringPointOne3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point one 3 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-installation-cut-out-metering-point-one3" />
                        </div>
                    </div>

                    




                    <div class="row">
                        <!-- Picture of meter nameplate 1 -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of meter nameplate 1
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMeteringNameplateOne()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic-of-meter-nameplate-one -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-nameplate-one" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Picture of meter nameplate 2 -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of meter nameplate 2
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMeteringNameplateOne2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic-of-meter-nameplate-one -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-nameplate-one2" />
                        </div>
                    </div>




                    <div class="row">
                        <!-- Picture of meter nameplate 3 -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of meter nameplate 3
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMeteringNameplateOne3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic-of-meter-nameplate-one -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-nameplate-one3" />
                        </div>
                    </div>


                    




                    <div class="row">
                        <!-- Picture of seal as met * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of seal as met
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForSealAsMet()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for Picture of seal as met  -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-seal-as-met" />
                        </div>
                    </div>




                    <div class="row">
                        <!-- Picture of internal connection if seal is broken -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of internal connection if seal is broken
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInternalConnectionIfSealIsBroken()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-internal-connection-if-seal-is-broken" />
                        </div>
                    </div>





                    <!-- <div class="row">
                        Picture of internal connection if seal is broken 2
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of internal connection if seal is broken 2
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInternalConnectionIfSealIsBroken2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    output for Picture of internal connection if seal is broken 2
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-internal-connection-if-seal-is-broken2" />
                        </div>
                    </div> -->


                    




                    <div class="row">
                        <!-- Pic of bypass * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of Bypass
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForByPass()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-bypass" />
                        </div>
                    </div>


                    

                    <div class="row">
                        <!-- Pic of bypass 2 * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of Bypass 2
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForByPass2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-bypass2" />
                        </div>
                    </div>




                    <div class="row">
                        <!-- Pic of bypass 3 * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Picture of Bypass 3
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForByPass3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-bypass3" />
                        </div>
                    </div>




                    <div class="row">
                        <!--Last bill vending receipt -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Last bill vending receipt
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForLastBillVendingReceipt()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for Last bill vending receipt -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-last-billing-vending-receipt" />
                        </div>
                    </div>




                    <div class="row">
                        <!--Last bill vending receipt 2 -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Last bill vending receipt 2
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForLastBillVendingReceipt2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for Last bill vending receipt -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-last-billing-vending-receipt2" />
                        </div>
                    </div>




                    <div class="row">
                        <!--Last bill vending receipt 3 -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Last bill vending receipt 3
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForLastBillVendingReceipt3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for Last bill vending receipt -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-last-billing-vending-receipt3" />
                        </div>
                    </div>




                    <div class="row">
                        <!-- Invitation notice to customer * -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Invitation notice to customer
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInvitationNoticeToCustomer()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for Invitation notice to customer -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-invitation-notice-customer" />
                        </div>
                    </div>
                    

                    

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
  import { defineCustomElements } from '@ionic/pwa-elements/loader';

  export default {
      layout: 'admin_main',
      data() {
        return {
            business_unit: '',
            undertaking_one: '',
            customer_name: '',
            address: '',
            account_number: '',
            customer_category: '',
            customer_type: '',
            nature_of_business: '',
            feeder_name: '',
            dt_name: '',
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
            signature: '',
            phone_number: '',
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
                var file = new Blob([ia], {type:mimeString});
                this.signature = new File([file], `ieOfficerSignature${file.type.replace('image/', '.')}`)
            }
        },



        // all test on compression comes here

        async imagePickerForTheServiceWireFromPoleToMeteringPoint () {

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
            const blob = new Blob([arr], {type: 'image/jpeg'});
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
        async imagePickerBuilding () {
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
            const blob = new Blob([arr], {type: 'image/png'});
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
        





        async sumbitVSM() {
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
            const months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
            let month = months[today.getMonth()];
            var date = month+' '+today.getDate()+', '+today.getFullYear();
            var time = this.formatAMPM(new Date);
            this.last_purchase_date = date + ' '+ time

            
            if (this.business_unit == '' || this.inspection_conclusion == '') {

            
                M.toast({html: '<b class="red-text">Fill all the field marked with *</b>'})
                this.hideLoader = true
            } else {

                var checkList = ""
                checkList = {
                    oldSealNumber: this.old_seal,
                    businessUnit: this.business_unit,
                    meterPaymentType: this.meter_payment_type,
                    meterMake: this.meter_manufacturer,
                    recommendation: this.recommendation,
                    mcb: this.mcb,
                    recommendedEnergyRecovery: "",
                    recommendedTariff: this.recommended_tariff,
                    remainingTime: "",
                    customerType: this.customer_type,
                    customerCategory: this.customer_category,
                    dtName: this.dt_name,
                    energyData: "",
                    readingTime1: "",
                    longitude: this.long,
                    currentTariff: this.current_tariff,
                    customersSignature: "",
                    editEndTime: "",
                    customerName: this.customer_name,
                    meterBoxType: this.meter_type_box,
                    meteringStatus: this.meter_status,
                    tube: this.tube,
                    numberOfServiceWires: this.no_of_service_wires,
                    feederName: this.feeder_name,
                    ieOfficersName: localStorage.getItem('fullname'),
                    lastUpdateTime: "",
                    meteringInitiative: '',
                    customersName: this.customer_name,
                    meterNumber: this.meter_serial_number,
                    activity: '',
                    newSealNumber: this.new_seal,
                    latitude: this.lat,
                    creditOnMeter: this.credit_reading_on_meter,
                    simSerialNumber: "",
                    readingTime: "",
                    phoneNumber: this.phone_number,
                    editStartTime: "",
                    address: this.address,
                    srNumber: this.meter_serial_number,
                    meterSerialNumber: this.meter_serial_number,
                    dtCapacity: this.dt_capacity,
                    accountNumber: this.account_number,
                    furtherRemarks: this.further_remarks,
                    undertaking: this.undertaking_one,
                    meterManufacturer: this.meter_manufacturer,
                    meterType: this.meter_type,
                    serviceWireToMeter: this.no_of_service_wires,
                    inspectionConclusion: this.inspection_conclusion,
                    user: localStorage.getItem('fullname'),
                    natureOfBusiness: this.nature_of_business,
                    alignmentStatus: this.alignment_status,
                    replacementMeterSerialNumber: this.replacement_meter_serial_number,
                    meterTypeByManufacturer: this.meter_type_by_manufacturer,
                    meterCondition: this.meter_condition,
                    lastPurchaseDate: this.last_purchase_date,
                    lastPurchaseAmount: this.last_purchase_amount,
                    sealStatus: this.seal_status
                }

                checkList = JSON.stringify(checkList)

                
                
                var formData = new FormData()
                formData.append("files", this.pic_of_the_service_wire_from_pole_to_metering_point);
                formData.append("files", this.pic_of_internal_connection_if_seal_is_broken);
                // formData.append("files", this.pic_of_internal_connection_if_seal_is_broken2);
                formData.append("files", this.pic_of_installation_cutout_metering_point);
                formData.append("files", this.pic_of_installation_cutout_metering_point2);
                formData.append("files", this.pic_of_installation_cutout_metering_point3);
                formData.append("files", this.pic_of_invitation_notice_to_customer);
                formData.append("files", this.pic_of_last_bill_vending_receipt);
                formData.append("files", this.pic_of_last_bill_vending_receipt2);
                formData.append("files", this.pic_of_last_bill_vending_receipt3);
                formData.append("files", this.pic_of_meter_nameplate);
                formData.append("files", this.pic_of_meter_nameplate2);
                formData.append("files", this.pic_of_meter_nameplate3);
                formData.append("files", this.pic_of_seal_as_met);
                formData.append("files", this.pic_of_building);
                formData.append("files", this.pic_of_bypass);
                formData.append("files", this.pic_of_bypass2);
                formData.append("files", this.pic_of_bypass3);
                formData.append('files', this.signature)
                
                formData.append("checklist", checkList)

                // console.log(this.signature)
                // console.log('clicked')
                
                


                
                try {
                    const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.token, 
                            'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b', 
                            'form_type': 'vsm',

                        },
                        body: formData,
                    })

                    const response = await rawResponse.json()

                    // console.log(response)

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
                } catch (error) {
                    // console.log(error)
                    M.toast({html: `<b class="red-text">${error}</b>`})
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
            minutes = minutes < 10 ? '0'+minutes : minutes;
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
            var instances = M.FormSelect.init(elems);
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