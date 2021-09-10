<template>
    <div class="container container-top container-wide mb-4">
        <div class="heading-text col-12 pl-2">
           Offering And Contribution Report
        </div>
        <div class="col-12 pl-2">
           This reports provides a detailed list of all the offerings and contribution reports, you can also generate report for individual contributions 
        </div>
        <div class="container-fluid ">
                <div class="row py-5 " style="background: #ebeff4;  border-radius: 0.5rem;">
                    <div class="p-field col-12 col-md-3 col-lg-3 font-weight-bold  mt-1">
                        <label for="icon" >Start Date</label>
                        <Calendar id="icon" v-model="startDate" :showIcon="true" />
                    </div>
                    <div class="p-field col-12 col-md-3 col-lg-3 font-weight-bold my-1">
                        <label for="icon">End Date</label>
                        <Calendar id="endDate" v-model="endDate" :showIcon="true" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div><label for="" class="font-weight-bold">Select Members</label></div>
                        <div class="dropdown">
                        <button id="dropdownMenuButton" data-toggle="dropdown">Select Member</button> 
                            <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton" >
                                 <input type="text" class="form-control" 
                                    v-model="userSearchString"
                                    @input="searchForUsers"
                                />
                                <a
                                class="dropdown-item font-weight-700 small-text" href="#"
                                v-for="(member, index) in searchedMembers"
                                :key="index"
                                @click="addExistingMember(member)"
                                >{{ member.name }}</a>
                                <a
                                class="dropdown-item font-weight-700 small-text"
                                href="#"
                                v-if="
                                    searchingForMembers && searchedMembers.length === 0
                                "
                                ><i class="pi pi-spin pi-spinner"></i></a>
                                <p
                                class="modal-promt pl-1 bg-secondary m-0"
                                v-if="
                                    userSearchString.length < 3 &&
                                    searchedMembers.length === 0
                                "
                                >
                                Enter 3 or moore characters
                                </p>
                                <a
                                class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
                                style="border-top: 1px solid #002044; color: #136acd"
                                @click="showAddMemberForm"
                                data-dismiss="modal"
                                >
                                <i
                                    class="pi pi-plus-circle mr-2 primary-text d-flex align-items-center"
                                    style="color: #136acd"
                                ></i>
                                    Create Person
                                </a>
                            </div>
                        </div>
                        <!-- <div>
                            <MultiSelect v-model="selectedMember" :options="memberShip" optionLabel="name" placeholder="Select Member" :filter="true" class="multiselect-custom w-100">
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
                        </div> -->
                    </div>
                    <div class="col-12 col-md-6 col-lg-2">
                        <label for="" ></label>
                        <div class="mt-2" @click="genarateReport">
                            <button class="btn default-btn primary-bg "><div class="text-white">Generate</div></button>
                        </div>
                    </div> 
                </div>
        </div>
        <div class="container-fluid  ">
            <div class="row">
                <div class="col-12 ">
                    <div class="mt-5 display-1 font-weight-bold text-center heading-text">
                      Offering And Givings Report
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="col-12 border  text-center" >
                        <!-- <div class="col-12 font-weight-bold">Membership By Gender</div> -->
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <OfferingColumnChart
                                
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                    <div class="col-12  text-center" >
                        <!-- <div class="col-12  font-weight-bold">Membership By Marital Status</div> -->
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <OfferingPieChart
                              domId="chart3"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedOffering"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
           <section>
                    <!-- table header -->
                <div class=" container container-top table-main px-0  remove-styles2 remove-border "
                     :class="{ 'show-report': showReport, 'hide-report' : !showReport}" >
                        <table class="table remove-styles mt-0 w-100 table-responsive table-hover table-header-area">
                        <div class="table-header-area-main row w-100">
                            <div
                            class="small-text text-capitalize col-12 d-flex text-nowrap"
                            style="border-bottom: 0"
                            >
                            <!-- <th scope="col-2">Building Project</th> -->
                            <div scope="col-2">Offering name</div>
                            <div scope="col-2">Amount</div>
                            <div scope="col-2">Event Name</div>
                            <div scope="col-2">Date</div>
                            <div scope="col-2">Contact Name</div>
                            <div scope="col-2">Channel</div>
                            </div>
                        </div>
                        <tbody class="font-weight-normal text-nowrap">
                            <tr v-for="(OfferingList, index) in offeringInChurch" :key="index">
                            <td>{{ OfferingList.contributionName }}</td>
                            <td>{{ OfferingList.amount }}</td>
                            <td>{{ OfferingList.eventName }}</td>
                            <td>{{ formatDate(OfferingList.date) }}</td>
                            <td>{{ OfferingList.contactName }}</td>
                            <td>{{ OfferingList.channel }}</td>
                            </tr>
                        </tbody>
                        </table>
                        <div class="table-foot d-flex justify-content-end mt-n3">
                        <PaginationButtons />
                        </div>
                </div>
                    <!--end table header -->
            </section>
    </div>
</template>

<script>

 import { onMounted,computed, ref } from "vue";
 import Calendar from "primevue/calendar";
 import MultiSelect from 'primevue/multiselect';
 import axios from "@/gateway/backendapi";
 import PaginationButtons from "../../../components/pagination/PaginationButtons";
 import OfferingPieChart from '../../../components/charts/PieChart.vue';
 import OfferingColumnChart from "../../../components/charts/ColumnChart.vue";
 import membershipService from "../../../services/membership/membershipservice";
 import dateFormatter from  "../../../services/dates/dateformatter";

export default {
      components: {
        OfferingPieChart,
        OfferingColumnChart,
        Calendar,
        MultiSelect, 
        PaginationButtons 
        },
    setup() {
        const showReport = ref(false);
        const startDate = ref(new Date());
        const endDate = ref(new Date());
        const selectedMember = ref();
        const selectedofferingCategory = ref();
        const userSearchString = ref("");
        const searchingForMembers = ref(false);
        const searchedMembers = ref([]);
        const offeringReportItem = ref('');
        const offeringInChurch = ref([]);
        const display = ref(false);
        const offeringChartResult = ref([]);
        const pieChart= ref([])
         
        onMounted(()=>{
        pieChart.value = { name: "First Timer ", value: 2, name: "First Timer ", value: 2, };
        })
         const memberShip = ref([
      { name: "FIRST-TIMER" },
      { name: "NEW-CONVERT" },
      { name: "FULL MEMBER" },
    ]);
        const offeringCategory = ref([
      { name: "WORSHIP CENTER" },
      { name: "FAITH CLINIC" },
      { name: "MEMBER 1" },
      { name: "MEMBER 2" },
      { name: "CONCERT" },
    ]);
     const offeringChart = (array, key) => {
       // Accepts the array and key
      // Return the end result
      let result = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
      }, []); // empty object is the initial value for result object
      for (const prop in result) {
        // genderChartResult.value
        console.log(prop, result[prop])
        offeringChartResult.value.push({
          name: prop,
          value: result[prop].length
        })
      }
      console.log(offeringChartResult.value)
    };
    const mappedOffering = computed(() => {
      if (offeringChartResult.value.length === 0) return []
      return offeringChartResult.value.map(i => i)
    })


     const genarateReport = () => {
        axios.get(`/api/Reports/financials/getContactAllContributionsReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}&personID=${offeringReportItem.value}`)
        .then((res) => {
          console.log(res, "🎄🎄🎄");
          offeringInChurch.value = res.data;
          console.log(offeringInChurch.value, "✌️✌️");
          offeringChart(res.data,'contributionName')
        //   maritalStatusChart(res.data,'maritalStatus')
        //   eventDateChart(res.data,'activityDate')
        })
        .catch((err) => {
          console.log(err);
        });
        showReport.value = true;

    }
    const searchForUsers = () => {
          if (userSearchString.value.length >= 3) {
            startSearch(userSearchString.value);
          }
        };
    const startSearch = async (str) => {
          try {
            searchingForMembers.value = true;
            const response = await membershipService.searchMembers(str);
            searchingForMembers.value = false;
            searchedMembers.value = response;
          } catch (error) {
            searchingForMembers.value = false;
            console.log(error);
          }
        };
        const addExistingMember = (member) => {
          userSearchString.value = member.name;
          offeringReportItem.value = member.id
          console.log(userSearchString.value, member)
        }
        const showAddMemberForm = () => {
          display.value = true;
        };
         const formatDate = (date) => {
      return dateFormatter.monthDayYear(date);
    };

        return{
            offeringChart,
            mappedOffering,
            offeringChartResult,
            display,
            startDate,
            formatDate,
            showAddMemberForm,
            addExistingMember,
            searchForUsers,
            userSearchString,
            searchingForMembers,
            searchedMembers,
            offeringReportItem,
            offeringInChurch,
            endDate,
            memberShip,
            offeringCategory,
            genarateReport,
            showReport,
            selectedMember,
            selectedofferingCategory,
            pieChart
            
        }
    },
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

.heading-text {
  font: normal normal 800 1.5rem Nunito sans;
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
