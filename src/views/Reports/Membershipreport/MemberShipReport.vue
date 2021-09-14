<template>
    <div class="container container-top container-wide mb-4">
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
                <div class="col-12 table d-flex flex-wrap">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="col-12 mt-sm-3 mt-md-0 mt-lg-2  text-center">
                        <div class="col-12 font-weight-bold">Membership By Gender</div>
                        <div class="col-12"  :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12" :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="chart1"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedGender"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12  mt-3 mt-sm-3 mt-md-0 mt-lg-2 text-center">
                        <div class="col-12  font-weight-bold">Membership By Marital Status</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="chart2"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedMaritalStatus"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
              <div class="col-12 table d-flex flex-wrap">
                  <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12 text-center mt-3 mt-sm-3 mt-md-0 mt-lg-2 " >
                        <div class="col-12  font-weight-bold ">Membership By Members</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="chart3"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedMember"
                            />
                        </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12   text-center mt-3 mt-sm-3 mt-md-0 mt-lg-2  ">
                        <div class="col-12 w-100  font-weight-bold">Membership By Age Group</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <MembershipPieChart
                                domId="char4"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedAgeGroup"
                               
                            />
                        </div>
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
                            <!-- <th scope="col">Church Activity</th> -->
                            <th scope="col">Membership</th>
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
                            <tr v-for="(member, index) in membersInChurch" :key="index">
                            <!-- <td>{{member.churchActivity}}</td> -->
                            <td>{{member.membership}}</td>
                            <td>{{member.name}}</td>
                            <td>{{member.mobilePhone}}</td>
                            <td>{{member.email}}</td>
                            <td>{{member.homeAddress}}</td>
                            <td>{{member.gender}}</td>
                            <td>{{member.maritalStatus}}</td>
                            <td>{{member.activityDate}}</td>
                            <td>{{member.isActive}}</td>
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
import {computed, ref } from "vue";
import axios from "@/gateway/backendapi";
import MembershipPieChart from '../../../components/charts/PieChart.vue';
import PaginationButtons from "../../../components/pagination/PaginationButtons";
// import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
// import Piechart from "../../../components/charts/PieChart2.vue"
export default {
    components: {
        // GenderPieChart,
        MembershipPieChart,
        // Dropdown, 
        MultiSelect, 
        PaginationButtons },
    setup() {
    const selectedMember = ref();
    const selectedGender = ref();
    const selectedMaritalStatus = ref();
    const showReport = ref(false)
    const memberShips = ref({});
    const memberMaritalStatus = ref({});
    const memberGender = ref({});
    // const genderSummary = ref([]);
    const membersInChurch = ref([]);
    const genderChartResult = ref([]);
    const memberChartResult = ref([]);
    const maritalStatusChartResult = ref([]);
    const ageGroupChartResult = ref([]);

    
   const genderChart = (array, key) => {
       // Accepts the array and key
      // Return the end result
      let result = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
      }, []); // empty object is the initial value for result object
      // genderChartResult.value
      for (const prop in result) {
        // genderChartResult.value
        console.log(prop, result[prop])
        genderChartResult.value.push({
          name: prop,
          value: result[prop].length
        })
      }
      console.log(genderChartResult.value)
    };

    const mappedGender = computed(() => {
      if (genderChartResult.value.length === 0) return []
      return genderChartResult.value.map(i => i)
    })
   const memberChart = (array, key) => {
       // Accepts the array and key
      // Return the end result
      let result = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, []); // empty object is the initial value for result object
      // genderChartResult.value

      for (const prop in result) {
        // genderChartResult.value
        console.log(prop, result[prop])
        memberChartResult.value.push({
          name: prop,
          value: result[prop].length
        })
      }
    };

    const mappedMember = computed(() => {
      if (memberChartResult.value.length === 0) return []
      return memberChartResult.value.map(i => i)
    })
   const maritalStatusChart = (array, key) => {
       // Accepts the array and key
      // Return the end result
      let result = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, []); // empty object is the initial value for result object
      // genderChartResult.value
      for (const prop in result) {
        // genderChartResult.value
        console.log(prop, result[prop])
        maritalStatusChartResult.value.push({
          name: prop,
          value: result[prop].length
        })
      }
      console.log(maritalStatusChartResult.value)
    };

    const mappedMaritalStatus = computed(() => {
      if (maritalStatusChartResult.value.length === 0) return []
      return maritalStatusChartResult.value.map(i => i)
    })
   const ageGroupChart = (array, key) => {
       // Accepts the array and key
      // Return the end result
      let result = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, []); // empty object is the initial value for result object
      // genderChartResult.value
      for (const prop in result) {
        // genderChartResult.value
        console.log(prop, result[prop])
        ageGroupChartResult.value.push({
          name: prop,
          value: result[prop].length
        })
      }
    };

    const mappedAgeGroup = computed(() => {
      if (ageGroupChartResult.value.length === 0) return []
      return ageGroupChartResult.value.map(i => i)
    })


    const genarateReport = () => {
        const memberID =  selectedMember.value.map((i) => i.id)
        const genderID =  selectedGender.value.map((i) => i.id)
        const maritalStatusID = selectedMaritalStatus.value.map((i) => i.id)
        let body = {
        gender : genderID,
        maritalStatus : maritalStatusID,
        membershipStatus : maritalStatusID,
        membershipType : memberID
        }
        axios.post('/api/Reports/people/getAllContactsByParameterReport',body)
        .then((res) =>{
            console.log(res.data)
            membersInChurch.value = res.data;
            console.log(membersInChurch.value, 'allbyGideon')
            genderChart(res.data,'gender')
            memberChart(res.data,'membership')
            maritalStatusChart(res.data,'maritalStatus')
            ageGroupChart(res.data,'ageGroup')
          
        }).catch((error) =>{
            console.log(error)
        })

          showReport.value = true;

    }

    
    const getMemberClassification = async () => {
      try {
        axios
          .get('/api/Reports/people/getMemberClassification')
          .then((res) => {
            // tenantCurrency.value = res.data;
            memberShips.value = res.data;
            // console.log(res.data,'Fejiro');
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
            // console.log(res,'gideon');
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
            // console.log(res,'Samson');
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
         genderChartResult,
         memberChartResult,
         maritalStatusChartResult,
         ageGroupChartResult,
         genderChart,
         memberChart,
         maritalStatusChart,
         ageGroupChart,
         showReport,
        //  genderSummary,
         memberShips,
         memberMaritalStatus,
         memberGender,
         membersInChurch,
         mappedGender,
         mappedMember,
         mappedMaritalStatus,
         mappedAgeGroup,
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