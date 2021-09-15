<template>
    <div class="container-top container-wide mb-4  ">
        <div >
            <p class="heading-text col-12 p-0 m-0 text-secondary"> Church Activities Attendance Report</p>
            <p class=" text-secondary sub-heading">This reports gives an indepth view of the growth and attendance pattern of the ministry.</p>
        </div>
        <div class="container-fluid ">
            <div class="row py-5 " style="background: #ebeff4;  border-radius: 0.5rem;">
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold text-secondary">Select Event</label></div>
                    <div class="selectedmember">
                        <MultiSelect v-model="selectedMember" :options="membership" optionLabel="name" placeholder="Select Member" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Select Event
                                </template>
                            </template>
                            <template #option="slotProps">
                                <div class="country-item">
                                    <div>{{slotProps.option.name}}</div>
                                </div>
                            </template>
                        </MultiSelect>
                    </div>

                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class=""><label for="" class=" ml-2 font-weight-bold text-secondary">Start Date</label></div>
                    <div>
                        <MultiSelect v-model="selectedGender" :options="gender" optionLabel="name" placeholder="Select gender" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Select Gender
                                </template>
                            </template>
                            <template #option="slotProps">
                                <div class="country-item">
                                    <div>{{slotProps.option.name}}</div>
                                </div>
                            </template>
                        </MultiSelect>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold text-secondary">End Date</label></div>
                    <div>
                        <MultiSelect v-model="selectedMaritalStatus" :options="maritalStatus" optionLabel="name" placeholder="Marital status" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small " v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Marital status
                                </template>
                            </template>
                            <template #option="slotProps">
                                <div class="country-item">
                                    <div>{{slotProps.option.name}}</div>
                                </div>
                            </template>
                        </MultiSelect>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="" ></label>
                    <div class="mt-2">
                        <button class="btn default-btn primary-bg " @click="attendanceReport"><div class="text-white">Generate Report</div></button>
                    </div>
                </div> 
            </div>
        </div>
        <div class="container-fluid" :class="{'hideAttendanceReport':!attendanceReportToggle,'showAttendanceReport':attendanceReportToggle}" >
            <div class="row">
                <div class="col-12 ">
                    <div class="mt-5 text-center heading-text text-secondary serviceAttendance">
                        SERVICE ATTENDANCE ANALYSIS REPORT 
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12 border  text-center" style="height: 60vh;">
                        <div class="col-12  font-weight-bold">Membership By Marital Status</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                         <ByMaritalStatusChart
                            domId="chart"
                            title="Interested In Joining"
                            :titleMargin="10"
                            :summary="summary"
                         />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12 border  text-center" style="height: 60vh;">
                        <div class="col-12  font-weight-bold">Membership By Marital Status</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                         <ByMaritalStatusChart
                            domId="chart1"
                            title="Interested In Joining"
                            :titleMargin="10"
                            :summary="summary"
                         />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12 border text-center mt-3" style="height: 60vh; ">
                        <div class="col-12  font-weight-bold ">Membership By Distribution</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                            <ByMaritalStatusChart
                                domId="chart2"
                                title="Interested In Joining"
                                :titleMargin="10"
                                :summary="summary"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12  border text-center mt-3 " style="height: 60vh;">
                        <div class="col-12 w-100  font-weight-bold">Membership By Age Group</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                             <ByMaritalStatusChart
                                domId="chart3"
                                title="Interested In Joining"
                                :titleMargin="10"
                                :summary="summary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref } from "vue";
// import { computed, onMounted, ref } from "vue";
import axios from "@/gateway/backendapi";

// import store from '../../store/store'
// import userService from '../../services/user/userservice'
// import { useToast } from "primevue/usetoast";
// import stopProgressBar from "../../services/progressbar/progress"
// import membershipService from "../../services/membership/membershipservice";
// import { v4 as uuidv4 } from 'uuid';
// import MembershipPieChart from '../../../components/charts/PieChart.vue';
import ByMaritalStatusChart from "@/components/charts/PieChart";
import MembershipPieChart from '../../../components/charts/ReportPieChart.vue';
import PaginationButtons from "../../../components/pagination/PaginationButtons";
import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
// import Piechart from "../../../components/charts/PieChart2.vue"
export default {
    components: {
        ByMaritalStatusChart,
        MembershipPieChart,
        Dropdown, 
        MultiSelect, 
        PaginationButtons },
    setup() {
        const membership = ref([
      { name: "FIRST-TIMER" },
      { name: "NEW-CONVERT" },
      { name: "FULL MEMBER" },
    ]);
        const gender = ref([
      { name: "MALE" },
      { name: "FEMALE" },
    ]);
        const maritalStatus = ref([
      { name: "SINGLE" },
      { name: "MARRIED" },
      { name: "ENGAGED" },
      { name: "SINGLE PARENT" },
      { name: "DIVORCED" },
      { name: "SEPERATED" },
      { name: "WIDOW" },
      { name: "WIDOWER" },
    ]);

    const selectedMember = ref();
    const selectedGender = ref();
    // const selectedMaritalStatus = ref({ name: "SINGLE" });
    const selectedMaritalStatus = ref();
    const summary = ref([]);
    onMounted (() => {
           summary.value = [
                {
                    name: "Male",
                    value: 50,
                },
                {
                    name: "Female",
                    value: 50,
                },
                {
                    name: "Both",
                    value: 30,
                },
              ];

    })
    
    const pieChart = ref([ { name: null, value: 4 }, { name: "Newsletter", value: 1 } ] );
        axios
            .get(`/api/Reports/people/getAllContactsReport`)
            .then((res) => {
                console.log(res, 'get all contact report');
            })
            .catch((err) => {
                console.log(err);
            });

    const attendanceReportToggle = ref(false);
    const attendanceReport = () => {
        attendanceReportToggle.value = true;    }        

     return {
         pieChart,
         membership,
         gender,
         maritalStatus,
         selectedMember,
         selectedGender,
         selectedMaritalStatus,
         summary,
         attendanceReport,
         attendanceReportToggle
     }
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.default-btn {
  font-weight: 800;
  /* font-size: 1rem; */
  /* white-space: initial; */
  /* border-radius: 3rem; */
  border: 1px solid #136acd;
  /* padding: 0.5rem 1.25rem; */
  /* color: #136acd; */
  /* width: auto; */
  outline: transparent !important;
  /* max-height: 2.5rem; */
  background: #fff;
  /* min-width: 7.6rem; */
}


.generate-report {
  font-size: 1rem;
  color: #fff;
  background-color: #136acd;
  border: none;
  min-width: 7rem;
}

.heading-text {
  font: normal normal 800 1.5rem Nunito sans;
}

.bg-area {
  background-color: #ebeff4;
  border-radius: 0.5rem;
  padding: 0.2rem 0 1.2rem 0;
}

.table {
  width: 100% !important;
  box-shadow: 0 0.063rem 0.25rem #02172e45;
  border: 0.063rem solid #dde2e6;
  border-radius: 30px;
  text-align: left;
  margin-bottom: auto !important;
  padding-bottom: 0.5rem;
}

.table-header-area {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.table-header-area-main {
  background-color: #ebeff4;
}

.table-main {
    width: 100% !important;
    box-shadow: 0 0.063rem 0.25rem #02172e45 !important;
    border: 0.063rem solid #dde2e6 !important;
    border-radius: 30px !important;
    text-align: left !important;
    margin-bottom: auto !important;
    padding-bottom: 0.5rem !important;
}

.remove-styles{
  border: none !important;
box-shadow: none !important;
    border-bottom: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.remove-styles2{
padding-right: 0;
 padding-left: 0;
border-top-left-radius: 0 !important;
border-top-right-radius: 0 !important;
}

.remove-border{
    box-shadow: none !important;
}

.p-multiselect {
    width: 18rem;
}

.multiselect-custom {
    
        padding-top: .1rem;
        padding-bottom: .1rem;
    
}

    .country-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        /* background-color:  */
        /* background-color: var(--primary-color); */
        /* color: var(--primary-color-text); */
    }
        img.flag {
            width: 17px;
        }
        .sub-heading {
            font-size: 12px;
        }

.hideAttendanceReport {
    display: none;
}
.showAttendanceReport {
    display: block;
}
.serviceAttendance {
    padding: 19px 0;
    font-size: 15px;
}

@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}
</style>