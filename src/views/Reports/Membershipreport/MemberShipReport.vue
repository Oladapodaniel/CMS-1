<template>
    <div class="container container-top container-wide mb-4">
       <div class="row d-flex justify-content-between px-3">
            <div class="heading-text">People Report</div>
            <div @click="() => showExport = !showExport" class="cursor-pointer default-btn border-0 bg-secondary d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-chevron-down"></i></div>
        </div>
        <div class="row my-4" v-if="showExport">
            <!-- <div class="col-sm-2">Enter file name</div> -->
            <div class="col-sm-5">
                <!-- <input type="text" class="form-control" /> -->
                <span class="p-float-label">
                    <InputText id="inputtext" class="w-100" type="text" v-model="fileName" />
                    <label for="inputtext">Enter file name</label>
                </span>
            </div>
            <div class="col-sm-4">
                <Dropdown v-model="selectedFileType" class="w-100" :options="bookTypeList" placeholder="Select file type" />
            </div>
            <!-- <div class="">Export</div> -->
            <div @click="downLoadExcel" class="col-sm-2 offset-sm-1"><div class="default-btn d-flex align-items-center c-pointer justify-content-center">Export</div></div>
        </div>
        <div class="container-fluid mt-2 ">
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
                        <button class="btn default-btn border-0 primary-bg "><div class="text-white">Generate Report</div></button>
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
                    <div class="container-top container-fluid table-main px-0 remove-styles2 remove-border responsiveness   ">
                        <table class="table remove-styles mt-0 table-hover table-header-area " id="table" > 
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
import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
import ExcelExport from "../../../services/exportFile/exportToExcel"
import InputText from 'primevue/inputtext';
import printJS from "print-js";
import html2pdf from "html2pdf.js"
// import Piechart from "../../../components/charts/PieChart2.vue"
export default {
    components: {
        // GenderPieChart,
        InputText,
        MembershipPieChart,
        Dropdown, 
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
    const showExport = ref(false);
    const fileName = ref("")
    const bookTypeList = ref([ 'xlsx', 'csv', 'txt' ])
    const selectedFileType = ref("");
    const fileHeaderToExport = ref([])
    const fileToExport = ref([]);

    
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
        //  genderChartResult.value = []
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
        // memberChartResult.value = []
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
        // maritalStatusChartResult.value = []
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
        // ageGroupChartResult.value = []
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


     const downLoadExcel = () => {
            if (selectedFileType.value === "pdf") {
                // printJS({
                // //   ignoreElements: ['ignore1', 'ignore2'],
                //   maxWidth: 867,
                //   header: 'DONATION TRANSACTIONS',
                //   printable: [{
                //         DATE: '543',
                //         EVENT: '5242',
                //         DONATION: '4242',
                //         AMOUNT: 23432,
                //         DONOR: '234234234'
                //         }],
                //   properties: ['DATE', 'DONATION', 'AMOUNT', 'DONOR'],
                //   type: 'json',
                //   headerStyle:
                //     'font-family: Nunito Sans, Calibri; text-align: center;',
                //   gridHeaderStyle:
                //     'border: 1.5px solid #6d6d6d19; font-family: Nunito Sans, calibri; padding: 7px; text-align: left;',
                //   gridStyle:
                //     'border: 1.5px solid #6d6d6d19; font-family: Nunito Sans, calibri; padding: 7px; font-weight: 300',
                // })
                var element = document.getElementById('element-to-print');
                var opt = {
                    // margin:       1,
                    filename:     `${fileName.value}.pdf`,
                    // image:        { type: 'jpeg', quality: 0.98 },
                    // html2canvas:  { scale: 2 },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
                    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
                };

                    // New Promise-based usage:
                    html2pdf().set(opt).from(element).save();
                // html2pdf(element);
            } else {
                const filterVal = fileHeaderToExport.value.map((i, index) => index)
                const list = fileToExport.value
                const header = fileHeaderToExport.value
                console.log(filterVal)
                console.log(fileHeaderToExport.value)
                
                ExcelExport.exportToExcel(filterVal, list, header, fileName.value, selectedFileType.value)
            }
        }

      const tableHeaderToJson = () => {
            // let _htmlToJSON = function(){
                // let _tr = _table.getElementsByTagName("tr")[index];
                let _th = document.getElementsByTagName("th");
                let _arr = [].map.call( _th, function( th ) {
                    return th.innerHTML;
                }).join( ',' );
                let _data = _arr.split(",");
                console.log(_data)
                console.log("html to JSON", _data);
                // emit('data-header-to-export', _data)  
                 fileHeaderToExport.value = _data       
            // };
                // _htmlToJSON();
      }

      const tableToJson = () => {
            let _table = document.getElementById("table");
            let _trLength = _table.getElementsByTagName("tr").length;
            let _jsonData = [];
            let _obj = {};

            let _htmlToJSON = function(index){
                let _tr = _table.getElementsByTagName("tr")[index];
                let _td = _tr.getElementsByTagName("td");
                let _arr = [].map.call( _td, function( td ) {
                    return td.innerHTML;
                }).join( ',' );
                let _data = _arr.split(",");
                // console.log(_data)
                
                _obj = Object.assign({}, _data)
                
                _jsonData.push(_obj);
                
            };
            for(var i = 1; i < _trLength; i++){
                _htmlToJSON(i);
            }
            fileToExport.value = _jsonData
            console.log("html to JSON",_jsonData);
            // emit('data-to-export', _jsonData)
        }

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
            setTimeout(() => {
                        tableHeaderToJson()
                        tableToJson()
                    }, 1000)
          
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
        selectedMaritalStatus,
        showExport,
        fileName,
        bookTypeList, 
        selectedFileType,
        fileToExport,
        fileHeaderToExport,
        printJS,
        downLoadExcel
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


.generate-report {
  font-size: 1rem;
  color: #fff;
  background-color: #136acd;
  border: none;
  min-width: 7rem;
  border: 0
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
overflow-x: scroll;
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