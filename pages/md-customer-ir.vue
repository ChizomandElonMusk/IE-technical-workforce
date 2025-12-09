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
                MD Customer I & R
            </h6>
            </div>
        </div>
  
      
  
      <div class="row">
        
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
                                <option value="MD KAM">MD KAM</option>
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
                        <!-- DT name -->
                        <div class="col s12">
                            <input type="text" placeholder="DT name" v-model="dt_name">
                        </div>
                    </div>


                    <br>
                    <div class="row">
                        <!-- DT CAPACITY -->
                        <div class="col s12">
                            <select v-model="dt_capacity">
                                <option value="" disabled selected>Dt capacity</option>
                                <option value="25KVA">25KVA</option>
                                <option value="50KVA">50KVA</option>
                                <option value="100KVA">100KVA</option>
                                <option value="200KVA">200KVA</option>
                                <option value="300KVA">300KVA</option>
                                <option value="500KVA">500KVA</option>
                                <option value="750KVA">750KVA</option>
                                <option value="1000KVA">1000KVA</option>
                                <option value="2500KVA">2500KVA</option>
                                <option value="5000KVA">5000KVA</option>
                                <option value="7500KVA">7500KVA</option>
                                <option value="15000KVA">15000KVA</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <br>
                    <div class="row">
                        <!-- DT Type -->
                        <div class="col s12">
                            <select v-model="dt_type">
                                <option value="" disabled selected>Dt Type</option>
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Photo of DT nameplate -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of DT nameplate
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForDtNameplate()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- output for pic-of-meter-nameplate-one -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-dt-nameplate" />
                        </div>
                    </div>
                    <br>


                    
                    <div class="row">
                        <!-- cutomer address -->
                        <div class="col s12">
                            <input type="text" placeholder="Customer address" v-model="customer_address">
                        </div>
                    </div>


                    <div class="row">
                        <!--CIS account number -->
                        <div class="col s12">
                            <input type="text" placeholder="CIS account number " v-model="cis_account_number">
                        </div>
                    </div>


                    <br>
                    <div class="row">
                        <!-- Present tarrif Class -->
                        <div class="col s12">
                            <select v-model="present_tariff_class">
                                <option value="" disabled selected>Present tarrif Class</option>
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
                                <option value="D2">D2</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>



                    <br>
                    <div class="row">
                        <!-- Proposed tarrif Class -->
                        <div class="col s12">
                            <select v-model="proposed_tariff_class">
                                <option value="" disabled selected>Recommended tarrif</option>
                                <option value="A - Bilateral">A - Bilateral</option>
                                <option value="A - MD1">A - MD1</option>
                                <option value="A - MD2">A - MD2</option>
                                <option value="A - Non-MD">A - Non-MD</option>
                                <option value="B - MD1">B - MD1</option>
                                <option value="B - MD2">B - MD2</option>
                                <option value="B - Non-MD">B - Non-MD</option>
                                <option value="C - MD1">C - MD1</option>
                                <option value="C - MD2">C - MD2</option>
                                <option value="C - Non-MD">C - Non-MD</option>
                                <option value="D - MD1">D - MD1</option>
                                <option value="D - MD2">D - MD2</option>
                                <option value="D - Non-MD">D - Non-MD</option>
                                <option value="E - MD1">E - MD1</option>
                                <option value="E - MD2">E - MD2</option>
                                <option value="E - Non-MD">E - Non-MD</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <br>
                    <div class="row">
                        <!-- Meter status -->
                        <div class="col s12">
                            <select v-model="meter_status">
                                <option value="" disabled selected>Meter status</option>
                                <option value="Metered">Metered</option>
                                <option value="Not Metered">Not Metered</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <br>
                    <div class="row">
                        <!-- Account Status -->
                        <div class="col s12">
                            <select v-model="account_status">
                                <option value="" disabled selected>Account Status</option>
                                <option value="Active">Active</option>
                                <option value="Suspended">Suspended</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!-- Photo of Bill -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Bill
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForBill()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- output for pic-of-bill -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-bill" />
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!--Feeder name -->
                        <div class="col s12">
                            <input type="text" placeholder="Feeder name " v-model="feeder_name">
                        </div>
                    </div>


                    <br>
                    <div class="row">
                        <!-- Dt Status -->
                        <div class="col s12">
                            <select v-model="dt_status">
                                <option value="" disabled selected>Dt Status</option>
                                <option value="Connected">Connected</option>
                                <option value="DNP">DNP</option>
                                <option value="Faulty">Faulty</option>
                                <option value="Out of circuit">Out of circuit</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!--Nature of business -->
                        <div class="col s12">
                            <input type="text" placeholder="Nature of business " v-model="nature_of_business">
                        </div>
                    </div>


                    <br>
                    <div class="row">
                        <!-- Meter type -->
                        <div class="col s12">
                            <select v-model="meter_type">
                                <option value="" disabled selected>Meter type</option>
                                <option value="LV-WHOLE CURRENT">LV-WHOLE CURRENT</option>
                                <option value="LV-CT OPERATED">LV-CT OPERATED</option>
                                <option value="HT-POLE MOUNTED">HT-POLE MOUNTED</option>
                                <option value="HT-PANEL">HT-PANEL</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <br>
                    <div class="row">
                        <!-- Meter make -->
                        <div class="col s12">
                            <select v-model="meter_make">
                                <option value="" disabled selected>Meter Manufacturer</option>
                                <option value="MOJECT & BLUESTAR">MOJECT & BLUESTAR</option>
                                <option value="MOJEC & SHJL">MOJEC & SHJL</option>
                                <option value="SHJL">SHJL</option>
                                <option value="MOJEC & MICROSTAR">MOJEC & MICROSTAR</option>
                                <option value="CLOU">CLOU</option>
                                <option value="ITRON">ITRON</option>
                                <option value="MOMAS">MOMMAS</option>
                                <option value="LAURSEN & TOURBO">LAURSEN & TOURBO</option>
                                <option value="EDMI">EDMI</option>
                                <option value="LANDIS & GYR">LANDIS & GYR</option>
                                <option value="ANALOG">ANALOG</option>
                                <option value="ELSTER">ELSTER</option>
                                <option value="PREMIER">PREMIER</option>
                                <option value="PRI">PRI</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!--Meter number -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter number " v-model="meter_number">
                        </div>
                    </div>

                    <div class="row">
                        <!--Meter constant -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter constant " v-model="meter_constant">
                        </div>
                    </div>



                    <br>
                    <div class="row">
                        <!-- Meter Accuracy class -->
                        <div class="col s12">
                            <select v-model="meter_accuracy_class">
                                <option value="" disabled selected>Meter Accuracy class</option>
                                <option value="0.5">0.5</option>
                                <option value="0.5s">0.5s</option>
                                <option value="1.0">1.0</option>
                                <option value="2.0">2.0</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!-- Photo of meter as met -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of meter as met
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMeterAsMet()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- output for pic-of-meter-nameplate-one -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-as-met" />
                        </div>
                    </div>
                    <br>




                    

                    <div class="row center red-text">
                        <h6>FROM METER</h6>
                    </div>

                    <div class="row">
                        <!--Present KWH -->
                        <div class="col s12">
                            <input type="text" placeholder="Present KWH " v-model="present_kwh">
                        </div>
                    </div>


                    <div class="row">
                        <!-- Photo of present KWH -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of present KWH
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPresentKWH()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of present KWH -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-present-KWH" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Present KVA -->
                        <div class="col s12">
                            <input type="text" placeholder="Present KVA " v-model="present_kva">
                        </div>
                    </div>


                    <div class="row">
                        <!-- Photo of present KVA -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of present KVA
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPresentKWA()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of present KVA -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-present-KWA" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Phase A voltage on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase A voltage on meter " v-model="phase_A_voltage_on_meter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase A voltage on meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase A voltage on meter
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseAVoltageOnMeter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase A voltage on meter -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-A-voltage-on-meter" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Phase B voltage on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase B voltage on meter " v-model="phase_B_voltage_on_meter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase A voltage on meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase B voltage on meter
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseBVoltageOnMeter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase B voltage on meter -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-B-voltage-on-meter" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Phase C voltage on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase C voltage on meter " v-model="phase_C_voltage_on_meter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase C voltage on meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase C voltage on meter
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseCVoltageOnMeter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase C voltage on meter -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-C-voltage-on-meter" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Phase A current on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase A current on meter " v-model="phase_A_current_on_meter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase A current on meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase A current on meter
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseACurrentOnMeter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase A current on meter -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-A-current-on-meter" />
                        </div>
                    </div>
                    <br>


                    
                    <div class="row">
                        <!--Phase B current on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase B current on meter " v-model="phase_B_current_on_meter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase A current on meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase B current on meter
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseBCurrentOnMeter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase B current on meter -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-B-current-on-meter" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Phase C current on meter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase C current on meter " v-model="phase_C_current_on_meter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase C current on meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase C current on meter
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseCCurrentOnMeter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase C current on meter -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-C-current-on-meter" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Power factor -->
                        <div class="col s12">
                            <input type="text" placeholder="Power factor " v-model="power_facter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Power factor -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Power factor
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPowerFactor()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Power factor -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-power-factor" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Meter CT ratio -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter CT ratio " v-model="meter_ct_ratio">
                        </div>
                    </div>


                    <div class="row">
                        <!--Meter CT ratio -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Meter CT ratio
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMeterCTRatio()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Meter CT ratio -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-ct-ratio" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Meter VT ratio -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter VT ratio " v-model="meter_vt_ratio">
                        </div>
                    </div>


                    <div class="row">
                        <!--Meter VT ratio -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Meter VT ratio
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMeterVTRatio()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Meter VT ratio -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-vt-ratio" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Multiplying Factor -->
                        <div class="col s12">
                            <input type="text" placeholder="Multiplying Factor " v-model="multiplying_factor">
                        </div>
                    </div>


                    <div class="row">
                        <!--Multiplying Factor -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Multiplying Factor
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMultiplyingFactor()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Multiplying Factor -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-multiplying-factor" />
                        </div>
                    </div>
                    <br>





                    <div class="row center red-text">
                        <h6>RECERTIFICATION</h6>
                    </div>



                    <div class="row">
                        <!--installation -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of installation
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForInstallation()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of installation -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-installation" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Old meter box seal -->
                        <div class="col s12">
                            <input type="text" placeholder="Old meter box seal " v-model="old_meter_box_seal">
                        </div>
                    </div>


                    <div class="row">
                        <!--old meter box seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of old meter box seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForOldMeterBoxSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of old meter box seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-old-meter-box-seal" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Old meter seal -->
                        <div class="col s12">
                            <input type="text" placeholder="Old meter seal " v-model="old_meter_seal">
                        </div>
                    </div>

                    <div class="row">
                        <!--old meter seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of old meter seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForOldMeterSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of old meter seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-old-meter-seal" />
                        </div>
                    </div>
                    <br>





                    <div class="row">
                        <!--Old TTB seal -->
                        <div class="col s12">
                            <input type="text" placeholder="Old TTB seal " v-model="old_ttb_seal">
                        </div>
                    </div>

                    <div class="row">
                        <!--old meter seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Old TTB seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForOldTTBSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Old TTB seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-old-ttb-seal" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Old CT Box seal -->
                        <div class="col s12">
                            <input type="text" placeholder="Old CT Box seal " v-model="old_ct_box_seal">
                        </div>
                    </div>

                    <div class="row">
                        <!--old meter seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Old CT Box seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForOldCTBoxSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Old CT Box seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-old-ct-box-seal" />
                        </div>
                    </div>
                    <br>


                    <br>
                    <div class="row">
                        <!-- Instrument CT ratio -->
                        <div class="col s12">
                            <select v-model="instrument_ct_ratio">
                                <option value="" disabled selected>Instrument CT ratio</option>
                                <option value="1">1</option>
                                <option value="100/5">100/5</option>
                                <option value="150/5">150/5</option>
                                <option value="200/5">200/5</option>
                                <option value="300/5">300/5</option>
                                <option value="400/5">400/5</option>
                                <option value="500/5">500/5</option>
                                <option value="800/5">800/5</option>
                                <option value="10/5">10/5</option>
                                <option value="15/5">15/5</option>
                                <option value="25/5">25/5</option>
                                <option value="30/5">30/5</option>
                                <option value="50/5">50/5</option>
                                <option value="10/1">10/1</option>
                                <option value="15/1">15/1</option>
                                <option value="20/1">20/1</option>
                                <option value="25/1">25/1</option>
                                <option value="30/1">30/1</option>
                                <option value="50/1">50/1</option>
                                <option value="75/1">75/1</option>
                                <option value="100/1">100/1</option>
                                <option value="150/1">150/1</option>
                                <option value="200/1">200/1</option>
                                <option value="300/1">300/1</option>
                                <option value="400/1">400/1</option>
                                <option value="450/1">450/1</option>
                                <option value="500/1">500/1</option>
                                <option value="600/1">600/1</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <br>
                    <div class="row">
                        <!-- Instrument CT ratio -->
                        <div class="col s12">
                            <select v-model="instrument_vt_ratio">
                                <option value="" disabled selected>Instrument VT ratio</option>
                                <option value="11000/110">11000/110</option>
                                <option value="33000/110">33000/110</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!--Phase A (P) Current with Ammeter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase A (P) Current with Ammeter " v-model="phase_A_P_current_with_ammeter">
                        </div>
                    </div>

                    <div class="row">
                        <!--Phase A (S) Current with Ammeter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase A (S) Current with Ammeter " v-model="phase_A_S_current_with_ammeter">
                        </div>
                    </div>


                    
                    <div class="row">
                        <!--Phase A (P&S) Comparison -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase A (P&S) Comparison
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseAPSComparison()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase A (P&S) Comparison -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-a-ps-comparison" />
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!--Phase B (P) Current with Ammeter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase B (P) Current with Ammeter " v-model="phase_B_P_current_with_ammeter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase B (S) Current with Ammeter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase B (S) Current with Ammeter " v-model="phase_B_S_current_with_ammeter">
                        </div>
                    </div>



                    <div class="row">
                        <!--Phase B (P&S) Comparison -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase B (P&S) Comparison
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseBPSComparison()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase B (P&S) Comparison -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-b-ps-comparison" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Phase C (P) Current with Ammeter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase C (P) Current with Ammeter " v-model="phase_C_P_current_with_ammeter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase C (S) Current with Ammeter -->
                        <div class="col s12">
                            <input type="text" placeholder="Phase C (S) Current with Ammeter " v-model="phase_C_S_current_with_ammeter">
                        </div>
                    </div>


                    <div class="row">
                        <!--Phase C (P&S) Comparison -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Phase C (P&S) Comparison
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForPhaseCPSComparison()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Phase C (P&S) Comparison -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-phase-c-ps-comparison" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Actual value measurement from zera (Before) -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Actual value measurement from zera (Before)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForActualValueMeasurementFromZeraBefore()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Actual value measurement from zera (Before) -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-actual-value-measurement-from-zera-before" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Vector display from zera (before) -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Vector display from zera (before)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForVectorDisplayFromZeraBefore()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Vector display from zera (before) -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-vector-display-from-zera-before" />
                        </div>
                    </div>
                    <br>


                    <div class="row">
                        <!--Observation -->
                        <div class="col s12">
                            <input type="text" placeholder="Observation " v-model="observation">
                        </div>
                    </div>




                    <div class="row">
                        <!--Actual value measurement from zera (after) -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Actual value measurement from zera (after)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForActualValueMeasurementFromZeraAfter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Actual value measurement from zera (after) -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-actual-value-measurement-from-zera-after" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Vector display from zera (before) -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Vector display from zera (after)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForVectorDisplayFromZeraAfter()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Vector display from zera (after) -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-vector-display-from-zera-after" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!-- Error measurement -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of Error measurement
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForErrorMeasurement()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of Error measurement -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-error-measurement" />
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--Action taken -->
                        <div class="col s12">
                            <input type="text" placeholder="Action taken " v-model="action_taken">
                        </div>
                    </div>
                    <br>



                    <div class="row">
                        <!--New meter box seal -->
                        <div class="col s12">
                            <input type="text" placeholder="New meter box seal " v-model="new_meter_box_seal">
                        </div>
                    </div>



                    <div class="row">
                        <!-- New meter box seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of New meter box seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForNewMeterBoxSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of New meter box seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-new-meter-box-seal" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--New meter seal -->
                        <div class="col s12">
                            <input type="text" placeholder="New meter seal " v-model="new_meter_seal">
                        </div>
                    </div>



                    <div class="row">
                        <!-- New meter seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of New meter seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForNewMeterSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of New meter seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-new-meter-seal" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--New TTB seal -->
                        <div class="col s12">
                            <input type="text" placeholder="New TTB seal " v-model="new_ttb_seal">
                        </div>
                    </div>



                    <div class="row">
                        <!-- New TTB seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of New TTB seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForNewTTBSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of New TTB seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-new-ttb-seal" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--New CT box seal -->
                        <div class="col s12">
                            <input type="text" placeholder="New CT box seal " v-model="new_ct_box_seal">
                        </div>
                    </div>



                    <div class="row">
                        <!-- New CT box seal -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of New CT box seal
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForNewCTBoxSeal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of New CT box seal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-new-ct-box-seal" />
                        </div>
                    </div>
                    <br>





                    <div class="row">
                        <!-- Any other observations -->
                        <div class="col s12">
                            <input type="text" placeholder=" Any other observations " v-model="any_other_observations">
                        </div>
                    </div>



                    <div class="row">
                        <!-- any other observations -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Photo of any other observations
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForAnyOtherObservations()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>
                    <!-- Photo of any other observations -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-any-other-observations" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!-- Customer phone number -->
                        <div class="col s12">
                            <input type="text" placeholder=" Customer phone number " v-model="customer_phone_number">
                        </div>
                    </div>


                    <div class="row">
                        <!-- Remarks -->
                        <div class="col s12">
                            <input type="text" placeholder=" Remarks " v-model="remarks">
                        </div>
                    </div>


                    <br>
                    <div class="row">
                        <!-- Inspection conclustion -->
                        <div class="col s12">
                            <select v-model="inspection_conclusion">
                                <option value="" disabled selected>Inspection conclustion</option>
                                <option value="LOW POWER FACTOR">LOW POWER FACTOR</option>
                                <option value="BYPASS (ENERGY THEFT)"> BYPASS (ENERGY THEFT) </option>
                                <option value="CT current loss">CT LOSS (Current Loss)</option>
                                <option value="VT LOSS (Voltage Loss)">VT LOSS (Voltage Loss)</option>
                                <option value="PARTIAL CT LOSS (Transformation)">PARTIAL CT LOSS (Transformation)</option>
                                <option value="PARTIAL VT LOSS (Transformation)">PARTIAL VT LOSS (Transformation)</option>
                                <option value="NOT CAPTURED FOR BILLING (On Grid File)">NOT CAPTURED FOR BILLING (On Grid File)</option>
                                <option value="METER OKAY">METER OKAY</option>
                                <option value="CT LOSS (Current Loss) & VT LOSS (Voltage Loss)">CT LOSS (Current Loss) & VT LOSS (Voltage Loss)</option>
                                <option value="CT LOSS (Current Loss) & LOW POWER FACTOR">CT LOSS (Current Loss) & LOW POWER FACTOR</option>
                                <option value="VT LOSS (Voltage Loss) & LOW POWER FACTOR">VT LOSS (Voltage Loss) & LOW POWER FACTOR</option>
                                <option value="PARTIAL VT LOSS (Transformation) & PARTIAL CT LOSS (Transformation)">PARTIAL VT LOSS (Transformation) & PARTIAL CT LOSS (Transformation)</option>
                                <option value="PARTIAL VT LOSS (Transformation) & CT LOSS (Current Loss)">PARTIAL VT LOSS (Transformation) & CT LOSS (Current Loss)</option>
                                <option value="PARTIAL CT LOSS (Transformation) & VT LOSS (Voltage Loss)">PARTIAL CT LOSS (Transformation) & VT LOSS (Voltage Loss)</option>
                                <option value="PARTIAL CT LOSS (Transformation) & LOW POWER FACTOR">PARTIAL CT LOSS (Transformation) & LOW POWER FACTOR</option>
                                <option value="PARTIAL VT LOSS (Transformation) & LOW POWER FACTOR">PARTIAL VT LOSS (Transformation) & LOW POWER FACTOR</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                    </div>
                    <br>

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
    //   components: {
    //     VPerfectSignature,
    //   },
      data() {
        return {
            business_unit: '',
            undertaking_one: '',
            customer_name: '',
            dt_name: '',
            dt_capacity: '',
            dt_type: '',
            customer_address: '',
            cis_account_number: '',
            present_tariff_class: '',
            proposed_tariff_class: '',
            meter_status: '',
            account_status: '',
            pic_of_dt_nameplate: '',
            pic_of_bill: '',
            feeder_name: '',
            dt_status: '',
            nature_of_business: '',
            meter_type: '',
            meter_make: '',
            meter_number: '',
            meter_constant: '',
            meter_accuracy_class: '',
            pic_of_meter_as_met: '',
            present_kwh: '',
            pic_present_kwh: '',
            present_kva: '',
            pic_of_present_kva: '',
            phase_A_voltage_on_meter: '',
            pic_of_phase_A_voltage_on_meter: '',
            phase_B_voltage_on_meter: '',
            pic_of_phase_B_voltage_on_meter: '',
            phase_C_voltage_on_meter: '',
            pic_of_phase_c_volage_on_meter: '',
            phase_A_current_on_meter: '',
            pic_of_phase_A_current_on_meter: '',
            phase_B_current_on_meter: '',
            pic_of_phase_B_current_on_meter: '',
            phase_C_current_on_meter: '',
            pic_of_phase_C_current_on_meter: '',
            power_facter: '',
            pic_of_power_facter: '',
            meter_ct_ratio: '',
            pic_of_meter_ct_ratio: '',
            meter_vt_ratio: '',
            pic_of_meter_vt_ratio: '',
            multiplying_factor: '',
            pic_of_multiplying_factor: '',
            pic_of_installation: '',
            old_meter_box_seal: '',
            pic_of_old_meter_box_seal: '',
            old_meter_seal: '',
            pic_of_old_meter_seal: '',
            old_ttb_seal: '',
            pic_of_old_ttb_seal: '',
            old_ct_box_seal: '',
            pic_of_old_ct_box_seal: '',
            instrument_ct_ratio: '',
            instrument_vt_ratio: '',
            phase_A_P_current_with_ammeter: '',
            phase_A_S_current_with_ammeter: '',
            pic_of_phase_a_p_s_comparison: '',
            pic_of_phase_b_p_s_comparison: '',
            phase_B_P_current_with_ammeter: '',
            phase_B_S_current_with_ammeter: '',
            pic_of_pase_b_p_s_comparison: '',
            phase_C_P_current_with_ammeter: '',
            phase_C_S_current_with_ammeter: '',
            pic_of_phase_c_p_s_comparison: '',
            pic_of_actual_value_measurement_from_zera_before: '',
            pic_of_vector_display_from_zera_before: '',
            observation: '',
            pic_of_actual_value_measurement_from_zera_after: '',
            pic_of_vector_display_from_zera_after: '',
            pic_of_error_measurement: '',
            action_taken: '',
            new_meter_box_seal: '',
            pic_of_new_meter_box_seal: '',
            new_meter_seal: '',
            pic_of_new_meter_seal: '',
            new_ttb_seal: '',
            pic_of_new_ttb_seal: '',
            new_ct_box_seal: '',
            pic_of_new_ct_box_seal: '',
            any_other_observations: '',
            pic_of_any_other_observations: '',
            customer_phone_number: '',
            remarks: '',
            inspection_conclusion: '',

            
            
            lat: '',
            long: '',

            hideLoader: true,
            showSignature: false,

            hideModal: true,
            hideForm: false,

        }
      },

      methods: {

        

        

        async imagePickerForDtNameplate () {

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

            this.doSomethingWithFilesImagePickerForDtNameplate(blob)
        },

        async doSomethingWithFilesImagePickerForDtNameplate(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-dt-nameplate');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_dt_nameplate = new File([compressedFile], `photoOfDTNameplate${compressedFile.type.replace('image/', '.')}`)
            
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },









        async imagePickerForBill () {

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

            this.doSomethingWithFilesImagePickerForBill(blob)
        },

            async doSomethingWithFilesImagePickerForBill(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-bill');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_bill = new File([compressedFile], `photoOfBill${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },







        async imagePickerForMeterAsMet () {

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

            this.doSomethingWithFilesImagePickerForMeterAsMet(blob)
        },

            async doSomethingWithFilesImagePickerForMeterAsMet(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-meter-as-met');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_meter_as_met = new File([compressedFile], `photoOfMeterAsMet${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },







        async imagePickerForPresentKWH () {

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

            this.doSomethingWithFilesImagePickerForPresentKWH(blob)
        },

        async doSomethingWithFilesImagePickerForPresentKWH(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-present-KWH');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_present_kwh = new File([compressedFile], `presentKWH1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForPresentKWA () {

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

            this.doSomethingWithFilesImagePickerForPresentKWA(blob)
        },

        async doSomethingWithFilesImagePickerForPresentKWA(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-present-KWA');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_present_kva = new File([compressedFile], `presentKWA${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForPhaseAVoltageOnMeter () {

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

            this.doSomethingWithFilesImagePickerForPhaseAVoltageOnMeter(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseAVoltageOnMeter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-A-voltage-on-meter');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_A_voltage_on_meter = new File([compressedFile], `phaseAVoltageOnMeter1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForPhaseBVoltageOnMeter () {

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

            this.doSomethingWithFilesImagePickerForPhaseBVoltageOnMeter(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseBVoltageOnMeter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-B-voltage-on-meter');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_B_voltage_on_meter = new File([compressedFile], `phaseBVoltageOnMeter1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForPhaseCVoltageOnMeter () {

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

            this.doSomethingWithFilesImagePickerForPhaseCVoltageOnMeter(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseCVoltageOnMeter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-C-voltage-on-meter');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_C_volage_on_meter = new File([compressedFile], `phaseCVoltageOnMeter1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForPhaseACurrentOnMeter () {

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

            this.doSomethingWithFilesImagePickerForPhaseACurrentOnMeter(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseACurrentOnMeter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-A-current-on-meter');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_A_current_on_meter = new File([compressedFile], `phaseACurrentOnMeter1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForPhaseBCurrentOnMeter () {

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

            this.doSomethingWithFilesImagePickerForPhaseBCurrentOnMeter(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseBCurrentOnMeter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-B-current-on-meter');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_B_current_on_meter = new File([compressedFile], `phaseBCurrentOnMeter1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForPhaseCCurrentOnMeter () {

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

            this.doSomethingWithFilesImagePickerForPhaseCCurrentOnMeter(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseCCurrentOnMeter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-C-current-on-meter');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_C_current_on_meter = new File([compressedFile], `phaseCCurrentOnMeter1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },








        async imagePickerForPowerFactor () {

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

            this.doSomethingWithFilesImagePickerForPowerFactor(blob)
        },

        async doSomethingWithFilesImagePickerForPowerFactor(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-power-factor');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_power_facter = new File([compressedFile], `powerFactor1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForMeterCTRatio () {

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

            this.doSomethingWithFilesImagePickerForMeterCTRatio(blob)
        },

        async doSomethingWithFilesImagePickerForMeterCTRatio(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-meter-ct-ratio');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_meter_ct_ratio = new File([compressedFile], `meterCTRatio1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },







        async imagePickerForMeterVTRatio () {

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

            this.doSomethingWithFilesImagePickerForMeterVTRatio(blob)
        },

        async doSomethingWithFilesImagePickerForMeterVTRatio(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-meter-vt-ratio');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_meter_vt_ratio = new File([compressedFile], `meterVTRatio1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },







        async imagePickerForMultiplyingFactor () {

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

            this.doSomethingWithFilesImagePickerForMultiplyingFactor(blob)
        },

        async doSomethingWithFilesImagePickerForMultiplyingFactor(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-multiplying-factor');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_multiplying_factor = new File([compressedFile], `multiplyingFactor1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForInstallation () {

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

            this.doSomethingWithFilesImagePickerForInstallation(blob)
        },

            async doSomethingWithFilesImagePickerForInstallation(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-installation');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_installation = new File([compressedFile], `pictureOfInstallation${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForOldMeterBoxSeal () {

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

            this.doSomethingWithFilesImagePickerForOldMeterBoxSeal(blob)
        },

        async doSomethingWithFilesImagePickerForOldMeterBoxSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-old-meter-box-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_old_meter_box_seal = new File([compressedFile], `oldMeterBoxSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForOldMeterSeal () {

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

            this.doSomethingWithFilesImagePickerForOldMeterSeal(blob)
        },

        async doSomethingWithFilesImagePickerForOldMeterSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-old-meter-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_old_meter_seal = new File([compressedFile], `oldMeterSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForOldTTBSeal () {

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

            this.doSomethingWithFilesImagePickerForOldTTBSeal(blob)
        },

        async doSomethingWithFilesImagePickerForOldTTBSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-old-ttb-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_old_ttb_seal = new File([compressedFile], `oldTTBSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForOldCTBoxSeal () {

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

            this.doSomethingWithFilesImagePickerForOldCTBoxSeal(blob)
        },

        async doSomethingWithFilesImagePickerForOldCTBoxSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-old-ct-box-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_old_ct_box_seal = new File([compressedFile], `oldCTBoxSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForPhaseAPSComparison () {

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

            this.doSomethingWithFilesImagePickerForPhaseAPSComparison(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseAPSComparison(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-a-ps-comparison');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_a_p_s_comparison = new File([compressedFile], `phaseAPSComparison${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForPhaseBPSComparison () {

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

            this.doSomethingWithFilesImagePickerForPhaseBPSComparison(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseBPSComparison(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-b-ps-comparison');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_b_p_s_comparison = new File([compressedFile], `phaseBPSComparison${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForPhaseCPSComparison () {

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

            this.doSomethingWithFilesImagePickerForPhaseCPSComparison(blob)
        },

        async doSomethingWithFilesImagePickerForPhaseCPSComparison(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-phase-c-ps-comparison');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_phase_c_p_s_comparison = new File([compressedFile], `phaseCPSComparison${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForActualValueMeasurementFromZeraBefore () {

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

            this.doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraBefore(blob)
        },

        async doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraBefore(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-actual-value-measurement-from-zera-before');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_actual_value_measurement_from_zera_before = new File([compressedFile], `actualValueMeasurementBefore${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },



        



        async imagePickerForVectorDisplayFromZeraBefore () {

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

            this.doSomethingWithFilesImagePickerForVectorDisplayFromZeraBefore(blob)
        },

        async doSomethingWithFilesImagePickerForVectorDisplayFromZeraBefore(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-vector-display-from-zera-before');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_vector_display_from_zera_before = new File([compressedFile], `vectorDisplayBefore${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForActualValueMeasurementFromZeraAfter () {

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

            this.doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraAfter(blob)
        },

        async doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraAfter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-actual-value-measurement-from-zera-after');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_actual_value_measurement_from_zera_after = new File([compressedFile], `actualValueMeasurementAfter${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForVectorDisplayFromZeraAfter () {

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

            this.doSomethingWithFilesImagePickerForVectorDisplayFromZeraAfter(blob)
        },

        async doSomethingWithFilesImagePickerForVectorDisplayFromZeraAfter(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-vector-display-from-zera-after');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_vector_display_from_zera_after = new File([compressedFile], `vectorDisplayAfter${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForErrorMeasurement () {

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

            this.doSomethingWithFilesImagePickerForErrorMeasurement(blob)
        },

        async doSomethingWithFilesImagePickerForErrorMeasurement(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-error-measurement');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_error_measurement = new File([compressedFile], `errorMeasurement${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },







        async imagePickerForNewMeterBoxSeal () {

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

            this.doSomethingWithFilesImagePickerForNewMeterBoxSeal(blob)
        },

        async doSomethingWithFilesImagePickerForNewMeterBoxSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-new-meter-box-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_new_meter_box_seal = new File([compressedFile], `newMeterBoxSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },
        
        
        async imagePickerForNewMeterSeal () {

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

            this.doSomethingWithFilesImagePickerForNewMeterSeal(blob)
        },

        async doSomethingWithFilesImagePickerForNewMeterSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-new-meter-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_new_meter_seal = new File([compressedFile], `newMeterSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },



        




        async imagePickerForNewTTBSeal () {

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

            this.doSomethingWithFilesImagePickerForNewTTBSeal(blob)
        },

        async doSomethingWithFilesImagePickerForNewTTBSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-new-ttb-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_new_ttb_seal = new File([compressedFile], `newTTBSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForNewCTBoxSeal () {

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

            this.doSomethingWithFilesImagePickerForNewCTBoxSeal(blob)
        },

        async doSomethingWithFilesImagePickerForNewCTBoxSeal(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-new-ct-box-seal');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_new_ct_box_seal = new File([compressedFile], `newCTBoxSeal1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },







        async imagePickerForAnyOtherObservations () {

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

            this.doSomethingWithFilesImagePickerForAnyOtherObservations(blob)
        },

        async doSomethingWithFilesImagePickerForAnyOtherObservations(event) {

            const imageFile = event;

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-any-other-observations');

                const compressedFile = await imageCompression(imageFile, options);
                
                this.pic_of_any_other_observations = new File([compressedFile], `anyOtherObservations1${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                
            } catch (error) {
                // // console.log(error);
            }

        },




 

        





        async sumbitVSM() {
            this.hideLoader = false
            this.business_unit = this.business_unit.trim()

            
            if (this.business_unit == '') {

            
                M.toast({html: '<b class="red-text">Fill all the field marked with *</b>'})
                this.hideLoader = true
            } else {

                var checkList = ""
                checkList = {
                    meterMake: this.meter_make,
                    oldMeterSeal: this.old_meter_seal,
                    anyOtherObservations16: "",
                    phaseBCurrentOnMeter: this.phase_B_current_on_meter,
                    anyOtherObservations17: "",
                    anyOtherObservations18: "",
                    anyOtherObservations19: "",
                    multiplyingFactor: this.multiplying_factor,
                    newTTBSeal1: "",
                    newCTBoxSeal: this.new_ct_box_seal,
                    phaseCPCurrentWithAmmeter: this.phase_C_P_current_with_ammeter,
                    anyOtherObservations10: "",
                    anyOtherObservations11: "",
                    anyOtherObservations12: "",
                    anyOtherObservations13: "",
                    anyOtherObservations1: "",
                    anyOtherObservations14: "",
                    dtName: this.dt_name,
                    anyOtherObservations2: "",
                    anyOtherObservations15: "",
                    picturesOfShuntingTTB: "",
                    anyOtherObservations3: "",
                    anyOtherObservations4: "",
                    anyOtherObservations5: "",
                    anyOtherObservations6: "",
                    anyOtherObservations7: "",
                    vectorDisplayAfter: "",
                    anyOtherObservations8: "",
                    pictureOfInstallation: "",
                    anyOtherObservations9: "",
                    picturesOfThePoleAndBuilding: "",
                    customerAddress: this.customer_address,
                    picturesOfTheBuildingShowingGate1: "",
                    anyOtherObservations27: "",
                    pictureOfThePointOfDiversion: "",
                    anyOtherObservations28: "",
                    anyOtherObservations29: "",
                    phaseCVoltageOnMeter: this.phase_C_voltage_on_meter,
                    customerName: this.customer_name,
                    pictureOfTamperingWithVoltage: "",
                    meterStatus: this.meter_status,
                    newMeterBoxSeal: this.new_meter_box_seal,
                    anyOtherObservations20: "",
                    anyOtherObservations21: "",
                    anyOtherObservations22: "",
                    anyOtherObservations23: "",
                    anyOtherObservations24: "",
                    anyOtherObservations25: "",
                    anyOtherObservations26: "",
                    picturesOfThePoleBypassWire: "",
                    feederName: this.feeder_name,
                    instrumentVTRatio: this.instrument_vt_ratio,
                    newCTBoxSeal1: "",
                    customerPhoneNumber: this.customer_phone_number,
                    additionalPictureFields10: "",
                    meterNumber: this.meter_number,
                    latitude: this.latitude,
                    natureOfBusiness: this.nature_of_business,
                    phaseBVoltageOnMeter: this.phase_B_voltage_on_meter,
                    meterAccuracyClass: this.meter_accuracy_class,
                    accountStatus: this.account_status,
                    phaseAVoltageOnMeter: this.phase_A_voltage_on_meter,
                    instrumentCTRatio: this.instrument_ct_ratio,
                    phaseBPCurrentWithAmmeter: this.phase_B_P_current_with_ammeter,
                    proposedTariffClass: this.proposed_tariff_class,
                    newMeterSeal: this.new_meter_seal,
                    observation: this.observation,
                    cisAccountNumber: this.cis_account_number,
                    createdDate: "",
                    phaseCCurrentOnMeter: this.phase_C_current_on_meter,
                    meterType: this.meter_type,
                    newMeterSeal1: "",
                    oldTTBSeal: this.old_ttb_seal,
                    businessUnit: this.business_unit,
                    meterVTRatio: this.meter_vt_ratio,
                    actualValueMeasurementBefore: "",
                    phaseBSCurrentWithAmmeter: this.phase_B_S_current_with_ammeter,
                    phaseAPCurrentWithAmmeter: this.phase_A_P_current_with_ammeter,
                    longitude: this.longitude,
                    formId: "",
                    phaseACurrentOnMeter: this.phase_A_current_on_meter,
                    editEndTime: "",
                    anyOtherObservations: this.any_other_observations,
                    inspectionConclusion: this.inspection_conclusion,
                    presentTariffClass: this.present_tariff_class,
                    presentKWH: this.present_kwh,
                    meterConstant: this.meter_constant,
                    lastUpdateTime: "",
                    powerFactor: this.power_facter,
                    dtType: this.dt_type,
                    meterCTRatio: this.meter_ct_ratio,
                    oldMeterBoxSeal: this.old_meter_box_seal,
                    picturesOfTheMeterNumbers: "",
                    anyOtherObservations30: "",
                    anyOtherObservations31: "",
                    anyOtherObservations32: "",
                    anyOtherObservations33: "",
                    anyOtherObservations34: "",
                    anyOtherObservations35: "",
                    editStartTime: "",
                    dtStatus: this.dt_status,
                    errorMeasurement: "",
                    newTTBSeal: this.new_ttb_seal,
                    phaseCSCurrentWithAmmeter: this.phase_C_S_current_with_ammeter,
                    phaseASCurrentWithAmmeter: this.phase_A_S_current_with_ammeter,
                    presentKVA: this.present_kva,
                    newMeterBoxSeal1: "",
                    oldMeterBoxSeal1: "",
                    multiplyingFactor1: "",
                    dtCapacity: this.dt_capacity,
                    oldCTBoxSeal1: "",
                    actualValueMeasurementAfter: "",
                    vectorDisplayBefore: "",
                    actionTaken: this.action_taken,
                    undertaking: this.undertaking_one,
                    oldCTBoxSeal: this.old_ct_box_seal,
                    oldTTBSeal1: "",
                    user: localStorage.getItem('fullname'),
                    remarks: this.remarks,
                    additionalPictureFields: ""
                    
                }

                checkList = JSON.stringify(checkList)
                // // console.log(this.last_purchase_date)
                let newDate = new Date("Nov 28, 2022 6:42:46 PM")
                // console.log(newDate)
                
                var formData = new FormData()
                formData.append("files", this.pic_of_dt_nameplate);
                formData.append("files", this.pic_of_bill);
                formData.append("files", this.pic_of_meter_as_met);
                formData.append("files", this.pic_present_kwh);
                formData.append("files", this.pic_of_present_kva);
                formData.append("files", this.pic_of_phase_A_voltage_on_meter);
                formData.append("files", this.pic_of_phase_B_voltage_on_meter);
                formData.append("files", this.pic_of_phase_C_volage_on_meter);
                formData.append("files", this.pic_of_phase_A_current_on_meter);
                formData.append("files", this.pic_of_phase_B_current_on_meter);
                formData.append("files", this.pic_of_phase_C_current_on_meter);
                formData.append("files", this.pic_of_power_facter);
                formData.append("files", this.pic_of_meter_ct_ratio);
                formData.append("files", this.pic_of_meter_vt_ratio);
                formData.append("files", this.pic_of_multiplying_factor);
                formData.append("files", this.pic_of_installation);
                formData.append("files", this.pic_of_old_meter_box_seal);
                formData.append("files", this.pic_of_old_meter_seal);
                formData.append("files", this.pic_of_old_ttb_seal);
                formData.append("files", this.pic_of_old_ct_box_seal);
                formData.append("files", this.pic_of_phase_a_p_s_comparison);
                formData.append("files", this.pic_of_phase_b_p_s_comparison);
                formData.append("files", this.pic_of_phase_c_p_s_comparison);
                formData.append("files", this.pic_of_actual_value_measurement_from_zera_before);
                formData.append("files", this.pic_of_vector_display_from_zera_before);
                formData.append("files", this.pic_of_actual_value_measurement_from_zera_after);
                formData.append("files", this.pic_of_vector_display_from_zera_after);
                formData.append("files", this.pic_of_error_measurement);
                formData.append("files", this.pic_of_new_meter_box_seal);
                formData.append("files", this.pic_of_new_meter_seal);
                formData.append("files", this.pic_of_new_ttb_seal);
                formData.append("files", this.pic_of_new_ct_box_seal);
                formData.append("files", this.pic_of_any_other_observations);
                
                formData.append("checklist", checkList)
                


                
                try {
                    const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.token, 
                            'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b', 
                            'form_type': 'MDCUSTOMERIR',

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
                } catch (error) {
                    // console.log(error)
                    M.toast({html: `<b class="red-text">${error}</b>`})
                }

                }

            

        },

        

        // get longitude and latitude
        async printCurrentPosition () {
            if (process.client) {
                const coordinates = await Geolocation.getCurrentPosition();

                this.lat = coordinates.coords.latitude
                this.long = coordinates.coords.longitude
            }
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