<template>
    <div class="container-top container-wide mb-4  ">
        <div class="heading-text col-12 pl-2">
            People Report
        </div>
        <div class="container-fluid ">
            <div class="row py-5 " style="background: #ebeff4;  border-radius: 0.5rem;">
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">Select Members</label></div>
                    <div>
                        <MultiSelect v-model="selectedMember" :options="memberShips" optionLabel="name" placeholder="Select Member" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Select Member
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
                    <div class=""><label for="" class=" ml-2 font-weight-bold">Gender</label></div>
                    <div>
                        <MultiSelect v-model="selectedGender" :options="memberGender" optionLabel="name" placeholder="Select gender" :filter="true" class="multiselect-custom w-100">
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
                    <div><label for="" class="font-weight-bold">Marital Status</label></div>
                    <div>
                        <MultiSelect v-model="selectedMaritalStatus" :options="memberMaritalStatus" optionLabel="name" placeholder="Marital status" :filter="true" class="multiselect-custom w-100">
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
                    <div class="mt-2" @click="genarateReport">
                        <button class="btn default-btn primary-bg "><div class="text-white">Generate Report</div></button>
                    </div>
                </div> 
            </div>
        </div>
        <div class="container-fluid  ">
            <div class="row">
                <div class="col-12 ">
                    <div class="mt-5 text-center Display-1 heading-text">
                        Congregation Members Report 
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="col-12 border  text-center" style="height: 40vh;">
                        <div class="col-12 font-weight-bold">Membership By Gender</div>
                        <div class="col-12"  :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12" style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="chart1"
                                distance="5"
                                :titleMargin="10"
                                :summary="genderSummary"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12 border mt-3 mt-sm-3 mt-md-0 mt-lg-0 text-center" style="height: 40vh;">
                        <div class="col-12  font-weight-bold">Membership By Marital Status</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="chart2"
                                distance="5"
                                :titleMargin="10"
                                :summary="maritalStatusSummary"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12 border text-center mt-3 mt-sm-3 mt-md-0 mt-lg-0 " style="height: 40vh; ">
                        <div class="col-12  font-weight-bold ">Membership By Distribution</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="chart3"
                                distance="5"
                                :titleMargin="10"
                                :summary="membersSummary"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12  border text-center mt-3 mt-sm-3 mt-md-0 mt-lg-0  " style="height: 40vh;">
                        <div class="col-12 w-100  font-weight-bold">Membership By Age Group</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="char4"
                                distance="5"
                                :titleMargin="10"
                                :summary="ageGroupSummary"
                               
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div > -->
            <!-- <div class="row "> -->
                <section>
                    <!-- table header -->
                    <div class=" container container-top table-main px-0  remove-styles2 remove-border "
                    :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                        <table class="table remove-styles mt-0 table-responsive table-hover table-header-area">
                        <thead class="table-header-area-main" >
                            <tr
                            class="small-text text-capitalize text-nowrap"
                            style="border-bottom: 0"
                            >
                            <th scope="col">Church Activity</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Home Address</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Marital Status</th>
                            <th scope="col">Activity Date</th>
                            <th scope="col">Current Status</th>
                            </tr>
                        </thead>
                        <tbody class="font-weight-normal text-nowrap">
                            <tr>
                            <td>Childrens Day Program</td>
                            <td>Ajose Oluwatosin</td>
                            <td>07090875463</td>
                            <td>nonitosinajose7@gmail.com</td>
                            <td>41 imam dauda Str. Lagos</td>
                            <td>Female</td>
                            <td>Married</td>
                            <td>24/10/2021</td>
                            <td>Active</td>
                            </tr>
                            <tr>
                            <td>Childrens Day Program</td>
                            <td>Ajose Oluwatosin</td>
                            <td>07090875463</td>
                            <td>nonitosinajose7@gmail.com</td>
                            <td>41 imam dauda Str. Lagos</td>
                            <td>Female</td>
                            <td>Married</td>
                            <td>24/10/2021</td>
                            <td>Active</td>
                            </tr>
                            <tr>
                            <td>Childrens Day Program</td>
                            <td>Ajose Oluwatosin</td>
                            <td>07090875463</td>
                            <td>nonitosinajose7@gmail.com</td>
                            <td>41 imam dauda Str. Lagos</td>
                            <td>Female</td>
                            <td>Married</td>
                            <td>24/10/2021</td>
                            <td>Active</td>
                            </tr>
                            <tr>
                            <td>Childrens Day Program</td>
                            <td>Ajose Oluwatosin</td>
                            <td>07090875463</td>
                            <td>nonitosinajose7@gmail.com</td>
                            <td>41 imam dauda Str. Lagos</td>
                            <td>Female</td>
                            <td>Married</td>
                            <td>24/10/2021</td>
                            <td>Active</td>
                            </tr>
                        </tbody>
                        </table>
                        <div class="table-foot d-flex justify-content-end mt-n3">
                        <PaginationButtons />
                        </div>
                    </div>
                    <!--end table header -->
                </section>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
import {onMounted, ref } from "vue";
import axios from "@/gateway/backendapi";
import MembershipPieChart from '../../../components/charts/PieChart.vue';
import PaginationButtons from "../../../components/pagination/PaginationButtons";
import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
// import Piechart from "../../../components/charts/PieChart2.vue"
export default {
    components: {
        // GenderPieChart,
        MembershipPieChart,
        Dropdown, 
        MultiSelect, 
        PaginationButtons },
    setup() {
    //     const membership = ref([
    //   { name: "FIRST-TIMER" },
    //   { name: "NEW-CONVERT" },
    //   { name: "FULL MEMBER" },
    // ]);
    //     const gender = ref([
    //   { name: "MALE" },
    //   { name: "FEMALE" },
    // ]);
    //     const maritalStatus = ref([
    //   { name: "SINGLE" },
    //   { name: "MARRIED" },
    //   { name: "ENGAGED" },
    //   { name: "SINGLE PARENT" },
    //   { name: "DIVORCED" },
    //   { name: "SEPERATED" },
    //   { name: "WIDOW" },
    //   { name: "WIDOWER" },
    // ]);

    const selectedMember = ref();
    const selectedGender = ref();
    const selectedMaritalStatus = ref();
    const showReport = ref(false)
    const memberShips = ref({});
    const memberMaritalStatus = ref({});
    const memberGender = ref({});
    const genderSummary = ref([]);
    const membersSummary = ref([]);
    const maritalStatusSummary = ref([]);
    const ageGroupSummary = ref([]);

    onMounted(() =>{
        genderSummary.value =  [ { name: 'male', value: 4 }, { name: "female", value: 1 } ];
        membersSummary.value =  [ { name: 'Full-member', value: 9 }, { name: "New-Convert", value: 6 },{ name: "First-Timer", value: 3 } ];
        maritalStatusSummary.value =  [ { name: 'Single', value: 10 }, { name: "Married", value: 4 },{ name: "Widow", value: 10 }  ];
        ageGroupSummary.value =  [ { name: '13years Above', value: 10 }, { name: "22years Above", value: 4 },{ name: "35years", value: 10 }  ];
    })
    
    const genarateReport = () => {
        const memberID =  selectedMember.value.map((i) => i.id)
        const genderID =  selectedGender.value.map((i) => i.id)
        const maritalStatusID = selectedMaritalStatus.value.map((i) => i.id)
        // console.log(memberID)
        // console.log(genderID)
        // console.log(maritalStatusID)

        let body = {
        gender : genderID,
        maritalStatus : maritalStatusID,
        membershipType : memberID
        }
        axios.post('/api/Reports/people/getAllContactsByParameterReport',body)
        .then((res) =>{
            console.log(res)
          
        }).catch((error) =>{
            console.log(error)
        })

          showReport.value = true;
        console.log(selectedMember.value);
        console.log(selectedGender.value);
        console.log(selectedMaritalStatus.value);

    }

    
    const getMemberClassification = async () => {
      try {
        axios
          .get('/api/Reports/people/getMemberClassification')
          .then((res) => {
            // tenantCurrency.value = res.data;
            memberShips.value = res.data;
            console.log(res.data,'Fejiro');
          })
          .catch((err) => console.log(err));
        // donationSummary.value = data;
      } catch (err) {
        console.log(err);
      }
    };
    getMemberClassification();

    const getMaritalStatus = async () => {
      try {
        axios
          .get('/api/Reports/people/getMaritalStatus')
          .then((res) => {
            memberMaritalStatus.value = res.data;
            console.log(res,'gideon');
          })
          .catch((err) => console.log(err));
        // donationSummary.value = data;
      } catch (err) {
        console.log(err);
      }
    };
    getMaritalStatus();

    const getGender = async () => {
      try {
        axios
          .get('/api/Reports/people/getGender')
          .then((res) => {
            memberGender.value = res.data;
            console.log(res,'Samson');
          })
          .catch((err) => console.log(err));
        // donationSummary.value = data;
      } catch (err) {
        console.log(err);
      }
    };
    getGender();

     return {
         genarateReport,
         showReport,
         genderSummary,
         membersSummary,
         maritalStatusSummary,
         memberShips,
         memberMaritalStatus,
         memberGender,
         ageGroupSummary,
        //  pieChart,
        //  membership,
        //  gender,
        //  maritalStatus,
         selectedMember,
         selectedGender,
         selectedMaritalStatus
     }
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.show-report{
    display: block;
}
.hide-report{
    display: none;
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


@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}
</style>