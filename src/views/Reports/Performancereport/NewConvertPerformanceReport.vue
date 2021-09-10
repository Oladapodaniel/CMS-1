<template>
    <div class="container-top container-wide mb-4  ">
        <div class="heading-text col-12 pl-2">
            New Convert Performance Report
        </div>
           <!-- date area -->
        <div class="container-fluid my-2 py-5   bg-area">
            <div class="row justify-content-center pl-3 ">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 "> 
                    <div><label for="icon" class="font-weight-bold">Start Date</label></div>
                    <div>
                        <Calendar id="icon" v-model="startDate" :showIcon="true" />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 ">
                    <div><label for="icon" class="font-weight-bold">End Date</label></div>
                    <div>
                        <Calendar id="icon" v-model="endDate" :showIcon="true" />
                    </div>
                </div>

                <div @click="genarateReport" class="col-12 col-sm-6 col-md-4 col-lg-3 ">
                    <label for="icon"></label>
                    <div class="mt-2">
                        <button class=" default-btn primary-bg text-white  c-pointer font-weight-bold">
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    <!--end of date area -->
        <div class="container-fluid ">
            <div class="row w-100">
                <div class="col-12 ">
                    <div class="mt-5 display-1 font-weight-bold text-center heading-text">
                       New Convert Analysis Report 
                    </div>
                </div>
                <!-- <div class="col-12 w-100 text-center ">
                    <div class="col-12   text-center">
                        <div class="col-12 font-weight-bold">Firsttimer By Event Date</div>
                        <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                        <div class="col-12 " :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <PerformanceColumnChart
                                domId="chart1"
                                title="Firsttimer By Event Date"
                                distance="5"
                                :titleMargin="10"
                                :data="pieChart"
                                subtitle="Monthly Attendance of Events"
                                :series="mappedEventDate"
                                :attendanceSeries="attendanceSeries"
                        
                            />
                        </div>            
                    </div>
                </div> -->
             </div>
            <div class="  row ">
                <div class="col-12 container-fluid table d-flex flex-wrap">
                    <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                        <div class="col-12  text-center">
                            <div class="col-12  font-weight-bold">Gender Distribution</div>
                            <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                            <div class="col-12 "  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                                <PerformancePieChart
                                domId="chart2"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedGender"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12  col-md-6 col-lg-6">
                        <div class="col-12  text-center mt-3 mt-sm-0 mt-md-0 mt-lg-0 ">
                            <div class="col-12  font-weight-bold ">Marital Status</div>
                            <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                            <div class="col-12 "   :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <PerformancePieChart
                               domId="chart3"
                                distance="5"
                                :titleMargin="10"
                                :summary="mappedMaritalStatus"
                            />
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-12 col-sm-12  col-md-4 col-lg-4">
                        <div class="col-12 text-center mt-3 mt-sm-0 mt-md-0 mt-lg-0 ">
                            <div class="col-12  font-weight-bold ">Current Status</div>
                            <div class="col-12" :class="{ 'show-report': !showReport, 'hide-report' : showReport}">No Data Available</div>
                            <div class="col-12 " style="height: 30vh;"  :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
                            <PerformancePieChart
                               domId="chart4"
                                distance="5"
                                :titleMargin="10"
                                :summary="pieChart"
                            />
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- <div > -->
            <!-- <div class="row "> -->
        <section>
            <!-- table header -->
            <div class=" container container-top table-main px-0  remove-styles2 remove-border "
                :class="{ 'show-report': showReport, 'hide-report' : !showReport}" >
                <table class="table remove-styles mt-0 table-responsive table-hover table-header-area">
                <thead class="table-header-area-main">
                    <tr
                    class="small-text text-capitalize text-nowrap"
                    style="border-bottom: 0"
                    >
                    <!-- <th scope="col">Church Activity</th> -->
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Home Address</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Marital Status</th>
                    <th scope="col">Activity Date</th>
                    <!-- <th scope="col">Current Status</th> -->
                    </tr>
                </thead>
                <tbody class="font-weight-normal text-nowrap">
                    <tr v-for="(NewConvert, index) in newConvertInChurch" :key="index">
                    <!-- <td>{{ firstTimer.event }}</td> -->
                    <td>{{ NewConvert.lastName }} {{ NewConvert.firstName }}</td>
                    <td>{{ NewConvert.mobilePhone }}</td>
                    <td>{{ NewConvert.email }}</td>
                    <td>{{ NewConvert.homeAddress }}</td>
                    <td>{{ NewConvert.gender }}</td>
                    <td>{{ NewConvert.maritalStatus }}</td>
                    <td>{{ formatDate(NewConvert.activityDate) }}</td>
                    <!-- <td>{{ firstTimer.status }}</td> -->
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
import {computed,ref } from "vue";
// import PerformancePieChart from '../../../components/charts/PieChart.vue';
import Calendar from "primevue/calendar";
import axios from "@/gateway/backendapi";
import PerformancePieChart from '../../../components/charts/PieChart.vue';
import PaginationButtons from "../../../components/pagination/PaginationButtons";
import PerformanceColumnChart from "../../../components/charts/ColumnChart.vue";
// import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
import dateFormatter from  "../../../services/dates/dateformatter";
// import Piechart from "../../../components/charts/PieChart2.vue"
export default {
    components: {
        MultiSelect,
        PerformancePieChart,
        PerformanceColumnChart,
        // Dropdown, 
        Calendar, 
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

    // const selectedMember = ref();
    // const selectedGender = ref();
    // const selectedMaritalStatus = ref();
    const showReport = ref(false);
    const pieChart = ref([{ name: "First Timer ", color: "#002044", data: [ 0, 3, 13, 14, 0, 15, 20, 20 ] }]);
    // const series = ref([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 24, 25, 26, 27, 28, 29, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52 ]);
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const newConvertInChurch = ref([]);
    const genderChartResult = ref([]);
    const maritalStatusChartResult = ref([]);
    const eventDateChartResult = ref([]);
    const attendanceSeries = ref("weekly");
    const attendanceData = ref([]);
    const mainAttendanceData = ref([]);

    const attendanceChart = computed(() => {
         if (newConvertInChurch.value.length === 0) return []
           newConvertInChurch.value.forEach(i => {
            let attendanceIndex = Object.keys(i).findIndex(i => i === 'activityDate')
            let attendanceValue = Object.values(i)[attendanceIndex]
            attendanceData.value.push(attendanceValue)     
         });
         mainAttendanceData.value.push({
             name: 'Attendance',
             color: '#002044',
             data: attendanceData.value
         })
         return mainAttendanceData.value  
     })
    const genderChart = (array, key) => {
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
    const eventDateChart = (array, key) => {
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
        eventDateChartResult.value.push({
          name: prop,
        //   value: result[prop].length
        })
      }
      console.log(eventDateChartResult.value)
    };

    const mappedEventDate = computed(() => {
      if (eventDateChartResult.value.length === 0) return []
      return eventDateChartResult.value.map(i => formatDate(i.name))
    })

    const genarateReport = () => {
        axios
        .get(`/api/Reports/people/getFirstTimersReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}`)
        .then((res) => {

          console.log(res, "🎄🎄🎄");
          newConvertInChurch.value = res.data;
          console.log(newConvertInChurch.value, "✌️✌️");
          genderChart(res.data,'gender')
          maritalStatusChart(res.data,'maritalStatus')
          eventDateChart(res.data,'activityDate')
        })
        .catch((err) => {
          console.log(err);
        });
        showReport.value = true;

    }

     const formatDate = (activityDate) => {
      return dateFormatter.monthDayYear(activityDate);
    };

    
    // const getMemberClassification = async () => {
    //   try {
    //     axios
    //       .get('/api/Reports/people/getAllContactsReport')
    //       .then((res) => {
    //         // tenantCurrency.value = res.data;
    //         console.log(res.data,'myall');
    //       })
    //       .catch((err) => console.log(err));
    //     // donationSummary.value = data;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getMemberClassification();

     return {
        //  allMembersInChurch,
        attendanceChart,
        mainAttendanceData,
        attendanceData,
        genderChartResult,
        attendanceSeries,
        maritalStatusChart,
        genderChart,
        eventDateChart,
        mappedGender,
        mappedMaritalStatus,
        mappedEventDate,
        maritalStatusChartResult,
        eventDateChartResult,
         startDate,
         endDate,
         genarateReport,
         showReport,
         pieChart,
        //  series,
        //  membership,
        //  gender,
        //  maritalStatus,
         formatDate,
         newConvertInChurch
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