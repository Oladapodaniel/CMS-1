<template>
  <div class="container-fluid px-5">
    <!-- header area -->
    <div class="container">
      <div
        class="
          row
          d-flex
          flex-row
          justify-content-between
          mt-5
          align-items-center
        "
      >
        <div class="centered-items">
          <h3 class="heading-text ml-2">First Timers Report</h3>
        </div>

        <div class="centered-items">
          <button class="default-btn font-weight-normal">
            Export &nbsp; &nbsp; <i class="pi pi-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
    <!--end of header area -->
    <!-- date area -->
    <div class="container-fluid my-3 px-0 bg-area">
      <div
        style="padding: 0.2rem 0 1.2rem 0"
        class="row d-flex flex-row justify-content-center align-items-center"
      >
        <div class="col-md-2">
          <h4 class="small font-weight-bold ml-2">Date Range</h4>
        </div>

        <div class="col-md-7 d-sm-flex">
          <div class="p-field p-col-12 p-md-4 mt-1">
            <!-- <label for="icon">Start Date</label> -->
            <Calendar id="icon" v-model="startDate" :showIcon="true" />
          </div>
          <div class="p-field p-col-12 p-md-4 my-1">
            <!-- <label for="icon">End Date</label> -->
            <Calendar id="endDate" v-model="endDate" :showIcon="true" />
          </div>
        </div>

        <div class="col-md-3 d-sm-flex justify-content-end align-items-center">
          <button
            class="default-btn generate-report c-pointer font-weight-normal"
            @click="generateReport"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
    <!--end of date area -->

    <section>
      <!-- chart area -->
      <div
       class="chart row"
       :class="firstTimerInChurch && firstTimerInChurch.length > 0 ? 'graph-area' : '' ">
        <div class="chart1 col-12 col-md-6 ">
          <ByGenderChart
            domId="chart"
            title="By Gender"
            distance="5"
            :titleMargin="10"
            :summary="data"
          />
        </div>
        <div  class="chart1 col-12 col-md-6 ">
          <ByGenderChart
            domId="chartid"
            title="Marital Status"
            distance="5"
            :titleMargin="10"
            :summary="maritalChartInfo"
          />
        </div>
      </div>
      <!--end of chart area -->
    </section>

    <section>
      <!-- table header -->
      <div class="container-fluid table-main px-0 remove-styles2 remove-border responsiveness">
        <table class="table remove-styles mt-0  table-hover table-header-area">
          <thead class="table-header-area-main">
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
            <tr v-for="(firstTimer, index) in firstTimerInChurch"
            :key="index">
              <td>{{ firstTimer.event }}</td>
              <td>{{ firstTimer.lastName }} {{ firstTimer.firstName }}</td>
              <td>{{ firstTimer.mobilePhone }}</td>
              <td>{{ firstTimer.email }}</td>
              <td>{{ firstTimer.homeAddress }}</td>
              <td>{{ firstTimer.gender }}</td>
              <td>{{ firstTimer.maritalStatus }}</td>
              <td>{{ formatDate(firstTimer.activityDate) }}</td>
              <td>{{ firstTimer.status }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="table-foot d-flex justify-content-end mt-n3">
          <PaginationButtons />
        </div> -->
      </div>
      <!--end table header -->
    </section>
  </div>
</template>

<script>
import {  ref } from "vue";
import Calendar from "primevue/calendar";
import ByGenderChart from "@/components/charts/PieChart.vue";
// import PaginationButtons from "../../../components/pagination/PaginationButtons";
import axios from "@/gateway/backendapi";
import dateFormatter from  "../../../services/dates/dateformatter";

export default {
  components: {
    Calendar,
    ByGenderChart,
    // PaginationButtons
  },
  setup() {
    const startDate = ref(new Date());
    const endDate = ref("");
    const firstTimerInChurch = ref([]);
    const genderChartResult = ref([]);
    const data= ref([]);
    const maritalChartInfo = ref([]);
    const generateReport = () => {
      axios
        .get(`/api/Reports/people/getFirstTimersReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}`)
        .then((res) => {
          firstTimerInChurch.value = res.data;
          console.log(firstTimerInChurch.value, "✌️✌️");
          data.value = getGenderChart(res.data)
          maritalChartInfo.value = maritalChart(res.data)
          console.log(maritalChartInfo.value, "🎉🎉🎉🎉✌️✌️")

          // genderChart(res.data, 'gender')
          // genderChart(res.data, 'maritalStatus')
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getGenderChart = arr => {
      return [
        getSumOfItems(arr, 'gender', 'Male'),
        getSumOfItems(arr, 'gender', 'Female'),
        getSumOfItems(arr, 'gender',  null),
        getSumOfItems(arr, 'gender', 'Other'),
        ]
    }

    const maritalChart = arr => {
      return[
        getSumOfItems(arr, 'maritalStatus', 'Married'),
        getSumOfItems(arr, 'maritalStatus', 'Single'),
        getSumOfItems(arr, 'maritalStatus', null),
      ]
    }

    // const getMaritalStatusChart =(arr, key, value) => {
    //   return {
    //     name: value,
    //     value: firstTimerInChurch.value.filter(i => i[key] === value).length
    //   }
    //   }

   const getSumOfItems = (arr, key, value) => {
      return {
        name: value,
        value: firstTimerInChurch.value.filter(i => i[key] === value).length
    }
   }

 /*   const genderChart = (array, key) => {
       // Accepts the array and key
      // Return the end result
      let result = array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
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
      console.log(genderChartResult.value, "💐💐💐");
      return genderChartResult.value
      // console.log(genderChartResult.value, )
    };
*/


      const formatDate = (activityDate) => {
      return dateFormatter.monthDayYear(activityDate);
    };

    // const mappedGender = computed(() => {
    //   if (genderChartResult.value.length === 0) return []
    //   return genderChartResult.value.map(i => i)
    // });


    return {
      Calendar,
      startDate,
      endDate,
      firstTimerInChurch,
      generateReport,
      formatDate,
      // genderChart,
      genderChartResult,
      // mappedGender,
      data,
     maritalChartInfo
    }
   }
  };
</script>

<style scoped>
.default-btn {
  font-weight: 800;
  font-size: 1rem;
  white-space: initial;
  border-radius: 3rem;
  border: 1px solid #136acd;
  padding: 0.5rem 1.25rem;
  color: #136acd;
  width: auto;
  outline: transparent !important;
  max-height: 2.5rem;
  background: #fff;
  min-width: 7.6rem;
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
    /* border-radius: 30px !important; */
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

.graph-area{
    border: 1px solid #dde2e6;
    border-radius: 0.5rem;
    padding: 1rem 0rem;
    margin: 2rem 0rem !important;
     width: 100% !important;
  box-shadow: 0 0.063rem 0.25rem #02172e45;
}

.responsiveness{
  max-width: 100%;
  overflow-y: scroll;
}
</style>