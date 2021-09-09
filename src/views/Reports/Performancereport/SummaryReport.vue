<template>
<div class="container container-wide mt-5 overflow-hidden border mb-4">
     <div>
            <h3 class="font-weight-bold mt-5">Church Activities Performance Analysis Report</h3>
        </div>
        <div class="row">
  <div style="background: #ebeff4;" class="row mx-2 w-100 py-5" >
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">SELECT EVENT</label></div>
                    <div>
                        <Dropdown v-model="selectedSummary" :options="allEvents" optionLabel="text" class="w-100" placeholder="All Events" :filter="false" filterPlaceholder="Find Car"/>
                        <!-- <MultiSelect v-model="selectedSummary" :options="allEvents" optionLabel="text" placeholder="Select Summary" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.text}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    All Events
                                </template>
                            </template>
                            <template #option="slotProps">
                                <div class="country-item">
                                    <div>{{slotProps.option.text}}</div>
                                </div>
                            </template>
                        </MultiSelect> -->
                    </div>

                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class=""><label for="" class=" ml-2 font-weight-bold">START DATE</label></div>
                    <div>
                        <div>
                            <Calendar id="icon" v-model="startDate" class="calendar1" :showIcon="true" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">END DATE</label></div>
                     <div>
                            <Calendar id="icon" v-model="endDate" :showIcon="true" />
                        </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="" ></label>
                    <div class="mt-2">
                        <button @click="getAnalysisReport()" class="btn default-btn primary-bg "><div class="text-white">Generate Report</div></button>
                    </div>
                </div>
             </div> 
             </div>
             <div style="width: 45%" class="ml-md-4 chart1">
          <ByGenderChart
            domId="chart"
            title="Analysis"
            distance="5"
            :titleMargin="10"
            :summary="report"
          />
        </div>
             <div>
                 <h3 class="font-weight-bold mt-5 ml-2">SERVICE PERFORMANCE ANALYSIS REPORT </h3>
                 <div class="border borderInner mb-5">
                     <h5 class="ml-3 mt-4">Service performance Chart</h5>
                  
        

                 </div>
                  <div class="border borderInner mb-5">
                     <h5 class="ml-3 mt-4">Attendance Analysis Chart</h5>

                 </div>
                   <div class="border borderInner mb-2">
                     <h5 class="ml-3 mt-4">First Timers Analysis Chart</h5>

                 </div>
             </div>
             </div>

</template>


<script>
import { onMounted,ref} from 'vue';
import ByGenderChart from "@/components/charts/PieChart.vue";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import axios from "@/gateway/backendapi";
// import MultiSelect from 'primevue/multiselect'

    export default {
        components:{
            Dropdown,
            Calendar,
            ByGenderChart

        }, 

        setup() {
    const allEvents = ref({});
    const analysisReport = ref({})
    const startDate = ref('');
    const endDate = ref('');
    const selectedSummary = ref();
    const selectedSummaryChart = ref([]);
    const report = ref([])
    const getAllEvents = ()=>{
            axios.get('/api/Reports/events/getEvents')
            .then((res)=>{
                allEvents.value = res.data;
                console.log(res, 'welcome');
            })
            .catch((err)=> console.log(err));
    }
     getAllEvents()
     const getAnalysisReport = ()=>{
         axios.get(`/api/Reports/events/getActivityAnalysisReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}&activityId=${selectedSummary.value.id}`)
         .then((res)=>{
             analysisReport.value = res.data;
             report.value = getAttendanceChart(res.data)
             console.log(report.value); 
             console.log(res, 'Good');

         })
         .catch((err)=> console.log(err))
     };
    //    onMounted(() => {
    //   selectedSummaryChart.value = [{name: "Dapo", value: 77}]
    // })
    const getAttendanceChart = arr =>{
        return[
            getSumReport(arr, 'date' )
        ]
    }
    const getSumReport = (arr, key, value)=>{
        return{
            name: value,
            value:arr.filter(i => i[key] === value).length 
            
        }
    }
     

        return{
            startDate,
            endDate,
            selectedSummary,
            selectedSummaryChart,
            allEvents,
            analysisReport,
            getAnalysisReport
            
        }
        
    }
        
    }
    
</script>

<style scoped>
* {
  box-sizing: border-box;
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
        height: 200px;
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