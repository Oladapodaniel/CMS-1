<template>
<div class="container container-wide mt-5 mb-4">
     <div>
            <h3 class="font-weight-bold mt-5 mb-2">Church Activities Attendance Report</h3>
            <span class="mt-5 mb-3">This reports gives an indepth view of the growth and attendance pattern of the ministry.</span>

        </div>
        <div class="row">
  <div style="background: #ebeff4;" class="row mx-2 w-100 py-5" >
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">SELECT EVENT</label></div>

                    <div>
                        <Dropdown v-model="selectedEvents" :options="allEvents" optionLabel="text" class="w-100" placeholder="Select Member" :filter="false" filterPlaceholder="Find Car"/>
                    </div>

                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class=""><label for="" class=" ml-2 font-weight-bold mt-3">START DATE</label></div>
                    <div>
                        <div>
                            <Calendar id="icon" v-model="startDate" class="calendar1 w-100" :showIcon="true" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold mt-3">END DATE</label></div>
                     <div>
                            <Calendar id="icon" class="w-100" v-model="endDate" :showIcon="true" />
                        </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="" ></label>
                    <div class="mt-2">
                        <button @click="getActivityReport()" class="btn default-btn primary-bg "><div class="text-white">Generate Report</div></button>
                    </div>
                </div>
             </div>
             </div>
             <div>
                 <h3 class="font-weight-bold mt-5 ml-2"  v-show="activityReport > 0">SERVICE PERFORMANCE ANALYSIS REPORT </h3>

                 <div class=" borderInner mb-2">
                     <h5 class="ml-3 mt-4"></h5>
                         <div class="" v-show="activityReport.length > 0">
                        <PerformanceColumnChart
                            domId="chart"
                            title="Attendance Analysis Chart"
                            distance="5"
                            :titleMargin="10"
                            :data ="attendanceChart"
                            :series = "series"
                            :seriesText="`Attendance analysis`"

                        />
                        </div>
                 </div>
                 <div
                      class="area-chart mt-5"
                      v-show="
                        activityReport.length > 0
                      "
                    >
                      <ReportAreaChart
                        elemId="chart"
                        domId="areaChart1"
                        title="Attendance Analysis Line Graph"
                        subtitle=""
                        lineColor="#50AB00"
                        :xAxis="series"
                        :series="attendanceData"
                      />
                    </div>

                    <div class=" borderInner mb-2">
                     <h5 class="ml-3 mt-4"></h5>
                         <div class="" v-show="activityReport.length > 0">
                        <PerformanceColumnChart
                            domId="chart1"
                            title="Attendance Analysis Chart By Category"
                            distance="5"
                            :titleMargin="10"
                            :data ="summaryChart"
                            :series = "series"
                            :seriesText="`Attendance analysis`"

                        />
                        </div>
                 </div>
                 <!-- <div
                      class="area-chart mt-5"
                      v-show="
                        activityReport.length > 0
                      "
                    >
                      <ReportAreaChart
                        elemId="chart"
                        domId="areaChart"
                        title="Attendance Analysis Line Graph By Category"
                        subtitle=""
                       lineColor="#50AB00"
                        :xAxis="series"
                        :series="categoryData"
                      />
                    </div> -->
             </div>
             <section>
                 <!-- table header -->

      <div class="container-fluid table-main px-0 remove-styles2 remove-border responsiveness mb-5 mt-2" >
        <table class="table remove-styles mt-0 table-hover table-header-area">
          <thead class="table-header-area-main">
            <tr
              class="small-text text-capitalize text-nowrap"
              style="border-bottom: 0"
            >
              <th scope="col">Event Name & Date</th>
              <th scope="col">Category</th>
              <th scope="col">Category Attendance</th>
            </tr>
          </thead>
          <tbody class="font-weight-normal text-nowrap">
            <tr v-for="(activityTable, index) in grousService" :key="index" >
              <td>{{ activityTable.name}}</td>
              <td>
              <div v-for="(item, index) in activityTable.value" :key="index">
                <div class="py-2">{{item.attendanceCategory}}</div>
              </div>
              </td>
              <td>
                <div v-for="(item, index) in activityTable.value" :key="index">
                  <div class="py-2">{{item.attendance}}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="table-foot d-flex justify-content-end">
          <PaginationButtons />
        </div> -->
      </div>
      <!--end table header -->
      </section>
             </div>


</template>


<script>
import { computed, ref } from 'vue';
import PerformanceColumnChart from "@/components/charts/ColumnChart2.vue";
import groupData from '../../../services/groupArray/groupResponse'

import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import ReportAreaChart from "@/components/charts/AreaChart.vue";
import axios from "@/gateway/backendapi";
import dateFormatter from "../../../services/dates/dateformatter.js"
    export default {
        components:{
          Dropdown,
            Calendar,
            PerformanceColumnChart,
            ReportAreaChart

        },

        setup() {
     const formatDate = (date) => {
      return dateFormatter.monthDayYear(date);
    };
    const allEvents = ref({});
    const selectedEvents =ref()
    const series = ref([])
    const activityReport = ref([])
    const startDate = ref('');
    const endDate = ref('');
    const attendanceData = ref([])
    const babiesData = ref([])
    const womenData = ref([])
    const maleData = ref([])
    const boyData = ref([])
    const girlData = ref([])
    const ChildrenData = ref([])
    const TeenagersData = ref([])
    const SinglesData = ref([])
    const mainAttendanceData = ref([])
    const categoryData = ref([])
    const attendanceGroup = ref({})
    const grousService = ref([])

    const getAllEvents = ()=>{
            axios.get('/api/Reports/events/getEvents')
            .then((res)=>{
                allEvents.value = res.data;
                console.log(res, 'welcome');
            })
            .catch((err)=> console.log(err));
    }
     getAllEvents()
     const getActivityReport = ()=>{
         axios.get(`/api/Reports/events/getActivityAttendanceReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}&activityId=${selectedEvents.value.id}`)
         .then((res)=>{
             activityReport.value = res.data;
             console.log(activityReport.value);
             mainAttendanceData.value = []
             attendanceData.value = []
             series.value = []
             groupCategory()
             groupName()
             categoryData.value = []
             getActivityServices()
          })
         .catch((err)=> console.log(err))
     };

     const groupCategory = () => {
        attendanceGroup.value = groupData.groupData(activityReport.value, 'attendanceCategory');
            console.log(attendanceGroup.value)
     }
     const groupName = () =>{
       const result = groupData.groupData(activityReport.value, 'name');
        for (const prop in result) {
                grousService.value.push({
                name: prop,
                value: result[prop]
                })
            }
       console.log(grousService.value);

     }

     const attendanceChart = computed(() => {
         if (activityReport.value.length === 0) return []
           activityReport.value.forEach(i => {
            let attendanceIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let attendanceValue = Object.values(i)[attendanceIndex]
            attendanceData.value.unshift(attendanceValue)
         });

         mainAttendanceData.value.push({
             name: 'Attendance',
             color: '#f94144',
             data: attendanceData.value
         })
         return mainAttendanceData.value

     })
     const getActivityServices = () => {
           activityReport.value.forEach(i => {
            let serviceIndex = Object.keys(i).findIndex(i => i === 'date')
            let serviceValue = Object.values(i)[serviceIndex]
            series.value.unshift(dateFormatter.monthDayYear(serviceValue))
           })
           console.log(series.value)
           console.log(attendanceData.value)

     }

    const summaryChart = computed(() => {
         if (Object.keys(attendanceGroup.value).length === 0) return new Object()
            attendanceGroup.value.Babies.forEach(i => {
            let babiesIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let babiesValue = Object.values(i)[babiesIndex]
            babiesData.value.unshift(babiesValue)
            console.log(babiesData.value)
        })

         categoryData.value.push({
                name: 'Babies',
                color: '#3f37c9',
                data: babiesData.value
            })

           attendanceGroup.value.FeMale.forEach(i => {
            let womenIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let womenValue = Object.values(i)[womenIndex]
            womenData.value.unshift(womenValue)
            console.log(womenData)
        })
         categoryData.value.push({
                name: 'Women',
                color: '#43eb10',
                data: womenData
            })
            attendanceGroup.value.Male.forEach(i => {
            let maleIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let maleValue = Object.values(i)[maleIndex]
            maleData.value.unshift(maleValue)
            console.log(maleData)
        })
         categoryData.value.push({
                name: 'male',
                color: '#a207f0',
                data: maleData
            })
            attendanceGroup.value.Boy.forEach(i => {
            let boyIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let boyValue = Object.values(i)[boyIndex]
            boyData.value.unshift(boyValue)
            console.log(boyData)
        })
         categoryData.value.push({
                name: 'Boy',
                color: '#e7f20c',
                data: boyData
            })
            attendanceGroup.value.Girl.forEach(i => {
            let girlIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let girlValue = Object.values(i)[girlIndex]
            girlData.value.unshift(girlValue)
            console.log(girlData)
        })
         categoryData.value.push({
                name: 'Girl',
                color: '#818182',
                data: girlData
            })
             attendanceGroup.value.Children.forEach(i => {
            let ChildrenIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let ChildrenValue = Object.values(i)[ChildrenIndex]
            ChildrenData.value.unshift(ChildrenValue)
            console.log(ChildrenData)
        })
         categoryData.value.push({
                name: 'Children',
                color: '#ed6109',
                data: ChildrenData
            })
             attendanceGroup.value.Teenagers.forEach(i => {
            let TeenagersIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let TeenagersValue = Object.values(i)[TeenagersIndex]
           TeenagersData.value.unshift(TeenagersValue)
            console.log(TeenagersData)
        })
         categoryData.value.push({
                name: 'Teenagers',
                color: '#b01105',
                data: TeenagersData
            })
            attendanceGroup.value.singles.forEach(i => {
            let SinglesIndex = Object.keys(i).findIndex(i => i === 'attendance')
            let SinglesValue = Object.values(i)[SinglesIndex]
           SinglesData.value.unshift(SinglesValue)
            console.log(SinglesData)
        })
         categoryData.value.push({
                name: 'Singles',
                color: '#f7d68f',
                data: SinglesData
            })
            console.log(categoryData.value);

        return categoryData.value

      })

        return{
            formatDate,
            startDate,
            endDate,
            selectedEvents,
            allEvents,
            activityReport,
           getActivityReport,
            series,
            attendanceChart,
            womenData,
            maleData,
            boyData,
            girlData,
            ChildrenData,
            TeenagersData,
            SinglesData,
            attendanceData,
            mainAttendanceData,
           categoryData,
            babiesData,
            summaryChart,
            attendanceGroup,
            grousService
        }

    }

    }

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.table {
  width: 100% !important;
  box-shadow: 0 0.063rem 0.25rem #02172e45;
  border: 0.063rem solid #dde2e6;
  border-radius: 30px;
  text-align: left;
  margin-bottom: auto !important;
  padding-bottom: 0.9rem;
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
.tablerow-style {
  min-width: 100%;
  border-bottom: 0px;
}

.graph-area{
    border: 1px solid #dde2e6;
    border-radius: 0.5rem;
    padding: 1rem 0rem;
    margin: 2rem 0rem;
}

.responsiveness{
  max-width: 100%;
  overflow-y: scroll;
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
    .border{
    border-color:  #b0b2b5!important;
    border-radius: 15px!important;

    }
    .borderInner{
        width: 100%;
        /* height: 700px; */
    }
        img.flag {
            width: 17px;
        }
        .primary-bg{
            background-color: rgb(19, 106, 205)!important;
            border-style: none!important;
        };
        .p-button.p-button-icon-only{
            background-color: red!important;

        }


@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}

</style>