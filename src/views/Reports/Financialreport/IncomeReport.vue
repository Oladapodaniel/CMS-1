<template>
  <div class="container-fluid px-5 mt-5">
     <div class="row d-flex justify-content-between px-3">
            <h3 class="heading-text ml-1">Basic Income And Revenue Report</h3>
<<<<<<< HEAD
            <div @click="() => showExport = !showExport" class="cursor-pointer default-btn  d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-chevron-down"></i></div>
=======
            <div class="default-btn  font-weight-normal c-pointer"
                @click="() => (showExport = !showExport)"
                style="width: fixed; position:relative">Export &nbsp; &nbsp; <i class="pi pi-angle-down" ></i>
                <div class=" c-pointer" style="width: 6rem; z-index:1000; position:absolute" v-if="showExport">
                      <Listbox @click="downloadFile" v-model="selectedFileType" :options="bookTypeList" optionLabel="name"/>
                </div>
          </div>
            <!-- <div @click="() => showExport = !showExport" class="cursor-pointer default-btn border-0 bg-secondary d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-chevron-down"></i></div> -->
>>>>>>> a534212218f750233c566bc05fc4119e5737870c
      </div>
      <!-- <div class="row my-4" v-if="showExport">
          <div class="col-sm-5">
              <span class="p-float-label">
                  <InputText id="inputtext" class="w-100" type="text" v-model="fileName" />
                  <label for="inputtext">Enter file name</label>
              </span>
          </div>
          <div class="col-sm-4">
              <Dropdown v-model="selectedFileType" class="w-100" :options="bookTypeList" placeholder="Select file type" />
          </div>
          <div @click="downloadFile" class="col-sm-2 offset-sm-1"><div class="default-btn d-flex align-items-center justify-content-center c-pointer exportButton">Export</div></div>
      </div> -->
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
      </div>
    </div>
    <!--end of header area -->

    <!-- date area -->
    <div class="container-fluid my-3 px-0 bg-area">
      <div
        style="padding: 0.2rem 0 1.2rem 0"
        class="row d-flex flex-row justify-content-center align-items-center"
      >
        <!-- <div class="col-md-2">
          <h4 class="small font-weight-bold ml-2">Date Range</h4>
        </div> -->

        <div class="col-md-7 d-sm-flex">
          <div class="p-field p-col-12 p-md-4 mt-1">
            <div><label for="icon" class="font-weight-bold">Start Date</label></div>
            <Calendar id="icon" v-model="startDate" :showIcon="true" />
          </div>
          <div class="p-field p-col-12 p-md-4 my-1">
            <div><label for="icon" class="font-weight-bold">End Date</label></div>
            <Calendar id="endDate" v-model="endDate" :showIcon="true" />
          </div>
        </div>
        
        <div class="col-md-3 d-sm-flex justify-content-end align-items-center mt-4">
          <button
            class="default-btn generate-report c-pointer font-weight-normal"
            @click="incomeEndPoint"
          >
            Generate &nbsp; &nbsp; <i class="pi pi-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
    <section id="element-to-print" :class="{'hideClass' : !toggleReport, 'showClass':toggleReport}"> 
        <!-- chart area -->
          <div class="row">
                <div class="col-12 ">
                    <div class="my-5 text-center  serviceAttendance">
                       <span class="heading-text">INCOME STATEMENT</span> <span class="statement">-[Statement of Activities]</span> 
                    </div>
                </div>
                <div class="col-12 col-sm-12  col-md-12 col-lg-12">
                    <div class="col-12 text-center" style="">
                        <!-- <div class="col-12  font-weight-bold pt-3">Membership By Marital Status</div> -->
                        <!-- <div class="col-12">No Data Available</div> -->
                        <div class="col-12 " style="">
                         <ColumnChart2
                            domId="chart"
                            title=""
                            :titleMargin="10"
                            :series="series"
                            :yAxisText="'Amount'"
                            :data="columnChartData"
                         />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div class="col-12 text-center">
                        <!-- <div class="col-12 font-weight-bold pt-3">Membership By Marital Status</div> -->
                        <!-- <div class="col-12">No Data Available</div> -->
                        <div class="col-12 chart-div " style="">
                         <ByMaritalStatusChart
                            domId="chart1"
                            title=""
                            :titleMargin="10"
                            :summary="pieChartData"
                         />
                        </div>
                    </div>
                </div>
                <!-- <div class="col-12 col-sm-12  col-md-6 col-lg-6">
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
                </div> -->
                <!-- <div class="col-12 col-sm-12  col-md-6 col-lg-6">
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
                </div> -->
            </div>
      <!-- table header -->
      <div class="container-fluid table-main px-0 remove-styles2 remove-border my-5" >
        <table class="table remove-styles mt-0 table-responsive table-hover table-header-area" id="table">
          <thead class="table-header-area-main">
            <tr
              class="small-text text-capitalize text-nowrap"
              style="border-bottom: 0"
            >
              <th scope="col">Fund</th>
              <th scope="col">Account Category</th>
              <th scope="col">Account Name</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody class="font-weight-normal text-nowrap">
            <tr v-for="(getIncomeDetail, index) in getIncomeDetails" :key='index'>
              <td>{{getIncomeDetail ? getIncomeDetail.fund : ''}}</td>
              <td>{{getIncomeDetail ? getIncomeDetail.accountCategory : ''}}</td>
              <td>{{getIncomeDetail ? getIncomeDetail.accountName : ''}}</td>
              <td>{{getIncomeDetail ? getIncomeDetail.description : ''}}</td>
              <td>{{getIncomeDetail ? getIncomeDetail.amount : ''}}</td>
              <td>{{getIncomeDetail ? formatDate(getIncomeDetail.date): ''}}</td>
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
import { ref, onMounted} from "vue";
import Calendar from "primevue/calendar";
import ByGenderChart from "@/components/charts/PieChart.vue";
import PaginationButtons from "../../../components/pagination/PaginationButtons";
import ByMaritalStatusChart from "@/components/charts/PieChart";
import ColumnChart2 from "@/components/charts/ColumnChart2";
// import InputText from 'primevue/inputtext';
// import Dropdown from "primevue/dropdown";
import Listbox from 'primevue/listbox';
import exportService from "../../../services/exportFile/exportservice"
import axios from "@/gateway/backendapi";
import axioz from "axios";
import dateFormatter from  "../../../services/dates/dateformatter";

export default {
  components: {
    ByMaritalStatusChart,
    ColumnChart2,
    Calendar,
    ByGenderChart,
    PaginationButtons,
<<<<<<< HEAD
    InputText,
    Dropdown
=======
    // InputText,
    // Dropdown,
    Listbox
>>>>>>> a534212218f750233c566bc05fc4119e5737870c
  },
  setup() {
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const membersInChurch = ref([]);
    const toggleReport = ref(false);
    const summary = ref([]);
    const columnChartData = ref([]);
    const series = ref([]);
    const showReport = ref(false)
    //   onMounted (() => {
    //        columnChartData.value = [
    //             {
    //                 name: "Male",
    //                 color: "#ddd",
    //                 data: [50],
    //             },
    //             {
    //                 name: "Female",
    //                 data: [50],
    //                 color: "#ddd",
    //             },
    //             {
    //                 name: "Both",
    //                 data: [30],
    //                 color: "#ddd",
    //             },
    //           ];
    //  })
     const pieChartData = ref([]);
     const fileName = ref("");
     const selectedFileType = ref("");
    const bookTypeList = ref([{ name : 'xlsx'}, { name: 'csv'}, {name: 'txt'},{name: 'pdf'} ])
     const fileHeaderToExport = ref([]);
     const fileToExport = ref([]);
     const getIncomeDetails = ref([]);
     const showExport = ref(false);
     const formatDate = (activityDate) => {
        return dateFormatter.normalDate(activityDate);
      };

     const incomeEndPoint = () => {
        axios
        .get(`/api/Reports/financials/getIncomeStatementReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}`)
        .then((res) => {
            pieChartData.value = [];
             console.log(res, 'income response');
             toggleReport.value = true;
             getIncomeDetails.value = res.data
             console.log(res.data, 'getIncomeDetails');
             const accountNameMap = res.data.map(i => i && i.accountName ? i.accountName : '')
            //  console.log(accountNameMap, "CCCCCCCC");
             const groupAccountName = new Set(accountNameMap)
             series.value = groupAccountName
            //  console.log(series.value, 'serrrrr');
            console.log(groupAccountName, 'groupAccountName...');
            groupAccountName.forEach(i => {
                const data = {
                    name: i,
                    value: res.data.filter(j => j && j.accountName ? j.accountName === i : false).length
                }
                pieChartData.value.push(data)
                // console.log(i, 'groupAccountNameLLL');
            })

            columnChartData.value = constructChartData(res.data, groupAccountName);
            console.log(columnChartData.value, "COLUMN CHART DATA");
            console.log(pieChartData.value, 'pieChartData,,,,');

            setTimeout(() => {
                fileHeaderToExport.value = exportService.tableHeaderToJson(document.getElementsByTagName("th"))
                fileToExport.value = exportService.tableToJson(document.getElementById("table"))
            }, 1000)
          
        }).catch((error) =>{
            console.log(error)
        })

          showReport.value = true;
    }
    const downloadFile = () => {
      exportService.downLoadExcel(selectedFileType.value.name, document.getElementById('element-to-print'), fileName.value, fileHeaderToExport.value, fileToExport.value)
    }

    // incomeEndPoint();
    const constructChartData  = (accounts, series) => {
        console.log(series, 'SERIES...');
        const data = []
        series.forEach(i => {

            const datum = {
                name: i,
                color: getRandomColor(),
                data: Array.from( new Set(accounts.filter(j => j && j.accountName ? j.accountName === i : false)
                .map(i => Math.abs(i.amount))))
            }
            console.log(datum, 'DATUM');
            data.push(datum)
            // console.log(i, 'groupAccountNameLLL');
        })
            console.log(data, 'DATUM');
        return data;
    }
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    axioz.post(`/v1/users/login`, { headers: { 'Authorization': 'Basic base64(admin: secret)'} }, { 'new_password': "new_password" }).then(res => {
      console.log(res ,'whatsapp login');
    })
   
    return {
      summary,
      Calendar,
      startDate,
      endDate,
      membersInChurch,
      toggleReport,
      getIncomeDetails,
      pieChartData,
      columnChartData,
      series,
      showExport,
      fileName,
      showReport,
      selectedFileType,
      bookTypeList,
      fileHeaderToExport,
      fileToExport,
      downloadFile,
      formatDate,
      incomeEndPoint,
      getRandomColor,

    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
<<<<<<< HEAD
=======
.default-btn {
    font-weight: 600;
    white-space: initial;
    font-size: 1rem;
    border-radius: 3rem;
    /* border: 1px solid #002044; */
    padding: .5rem 1.25rem;
    width: auto;
	border:none;
    /* outline: transparent !important; */
    max-height: 40px;
    background: #6c757d47 !important;
    color:#000;
    text-decoration: none;
    min-width: 121px;
}
>>>>>>> a534212218f750233c566bc05fc4119e5737870c

.default-btn:hover {
  text-decoration: none;
}


.generate-report {
  font-size: 1rem;
  color: #fff;
  background-color: #136acd !important ;
  border: none;
  min-width: 7rem;
}
.statement {
    font-size: 1rem;
    font: normal normal 700 1.5rem Nunito sans;
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

 .chart-div{
         border: 1px solid #DDE2E6;
        border-radius: 30px;
        margin: 0 0 24px 0;
        box-shadow: 0px 1px 4px #02172E45;
        border: 1px solid #DDE2E6;
        padding: 25px 0;
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
.hideClass {
    display: none;
}
.showClass { 
    display: block;
}
.exportButton {
    font-weight: 800;
    font-size: 1rem;
    white-space: initial;
    border-radius: 3rem;
    border: 1px solid #136acd;
    padding: 0.5rem 1.25rem;
    color: black;
    width: auto;
    outline: transparent !important;
    max-height: 2.5rem;
    background: #fff;
    min-width: 7.6rem;
}
</style>