<template>
    <div class="container-wide container-top mb-5">
        <div class="row d-flex justify-content-between">
            <div class="header">Attendance Report</div>
            <div class="default-btn border-secondary font-weight-normal c-pointer"
                @click="() => (showExport = !showExport)"
                style="width: fixed; position:relative">Export &nbsp; &nbsp; <i class="pi pi-angle-down" ></i>
                <div class=" c-pointer" style="width: 6rem; z-index:1000; position:absolute" v-if="showExport">
                      <Listbox @click="downLoadExcel" v-model="selectedFileType" :options="bookTypeList" optionLabel="name"/>
                </div>
            </div>
            <!-- <div @click="() => showExport = !showExport" class="cursor-pointer default-btn border-0 bg-secondary d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-chevron-down"></i></div> -->
        </div>
        <div class="row mt-4 py-4 px-3" style="background: #ebeff4;  border-radius: 0.5rem;">
            <!-- <div class="col-sm-2">Date Range</div> -->
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="font-weight-600">Select Event</div>
                        <div class="mt-2">
                            <Dropdown placeholder="Select event" style="width: 100%" :options="events" optionLabel="text" v-model="selectedEvent"/>
                            <!-- <Dropdown placeholder="Select group" style="width: 100%" :options="groups" optionLabel="name" v-model="selectedGroups"/> -->
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="font-weight-600">Select Group</div>
                        <div class="mt-2">
                            <!-- <Dropdown placeholder="Select event" style="width: 100%" :options="events" optionLabel="text" v-model="selectedEvent"/> -->
                            <Dropdown placeholder="Select group" style="width: 100%" :options="groups" optionLabel="name" v-model="selectedGroups"/>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-4">
                        <div class="font-weight-600">Start Date</div>
                        <div class="mt-2">
                            <Calendar id="icon" class="w-100" v-model="startDate" :showIcon="true" dateFormat="dd/mm/yy" />
                        </div>
                    </div>
                    <div class="col-sm-6 mt-4">
                        <div class="font-weight-600">End Date</div>
                        <div class="mt-2">
                            <Calendar id="icon" class="w-100" v-model="endDate" :showIcon="true" dateFormat="dd/mm/yy" />
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-sm-2 col-md-3 ">
                <div style="height: 33%"></div>
                <div class="default-btn mt-2 generate-report text-center col-md-10 col-lg-10 col-10 c-pointer font-weight-bold" @click="getAttendanceReport"><i class="pi pi-spin" v-show="loading"></i>Generate Report</div>
            </div>
        </div>



        <div class="row mt-4" id="element-to-print" v-if="groupedReport.length > 0 && searched">
            <GroupReportTable :groupedReport="groupedReport" :groupedReportByDate="groupedReportByDate" @data-to-export="setDataToExport" @data-header-to-export="setTableHeaderData"/>
        </div>
        <!-- <div class="row mt-4" id="element-to-print" v-if="groupedReport.length === 0 && searched">
            No data available for this date range
        </div> -->
        <Toast />
    </div>
</template>

<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
// import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import Calendar from 'primevue/calendar';
import GroupReportTable from "./CheckinAttendanceReportTable.vue"
import axios from "@/gateway/backendapi";
import ExcelExport from "../../../services/exportFile/exportToExcel"
import { useToast } from 'primevue/usetoast';
// import printJS from "print-js";
import html2pdf from "html2pdf.js"
// import axio from "axios"
export default {
    components: {
        Dropdown,
        Calendar,
        Listbox,
        // InputText,
        GroupReportTable
    },
    setup() {
        const toast = useToast()
        const startDate = ref("")
        const endDate = ref("")
        const events = ref([])
        const groups = ref([])
        const selectedEvent = ref({})
        const selectedGroups = ref({})
        const attendanceReport = ref([])
        const groupedReport = ref([])
        const groupedReportByDate = ref([])
        const bookTypeList = ref([{ name : 'xlsx'}, { name: 'csv'}, {name: 'txt'}, {name: 'pdf'} ])
        const selectedFileType = ref({})
        const fileName = ref("")
        const showExport = ref(false)
        const fileToExport = ref([])
        const fileHeaderToExport = ref([])
        const searched = ref(false)
        const loading = ref(false)

        const getEvents = async() => {
            try {
                let { data } = await axios.get(`/api/Reports/events/getEvents`)
                    events.value = data
            }
            catch (err) {
               console.log(err)
            }
              
        }
        getEvents()
        
        const getGroups = async() => {
            try {
                let { data } = await axios.get(`/api/Reports/people/getAllGroups`)
                    groups.value = data
                    console.log(data)
            }
            catch (err) {
               console.log(err)
            }
              
        }
        getGroups()

        const getAttendanceReport = async() => {
            let start = new Date(startDate.value).toLocaleDateString("en-US")
            let end = new Date(endDate.value).toLocaleDateString("en-US")
            loading.value = true
            try {
                let { data } = await axios.get(`/api/Reports/events/getCheckInAttendanceReport?groupID=${selectedGroups.value.id}&eventID=${selectedEvent.value.id}&startDate=${start}&endDate=${end}`)
                    searched.value = true
                    loading.value = false
                    console.log(data)
                    attendanceReport.value = data
                    groupReport(data, 'personId')
                    groupReportByDate(data, 'activityID')

                    if(data.length === 0 && searched.value) {
                        toast.add({
                            severity: 'warn', 
                            summary:'No data for this date range', 
                            detail:'Select other parameters to generate report', 
                            life: 8000
                        })
                    }

                    // groupedReport.value.forEach(i => {
                    //         for (let j = 0; i.value.length < groupedReportByDate.value.length; j++) {
                    //                 i.value.unshift({ attendance: '' })             
                    //         }  
                    // })
            }
            catch (err) {
                console.log(err)
                loading.value = false
            }
                
        }

        const groupReport = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
            console.log(result)
            groupedReport.value = []
            for (const prop in result) {
                console.log(prop, result[prop])
                groupedReport.value.push({
                name: prop,
                value: result[prop]
                })
            }
            console.log(groupedReport.value)
        };

        const groupReportByDate = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
            console.log(result)
            groupedReportByDate.value = []
            for (const prop in result) {
                console.log(prop, result[prop])
                groupedReportByDate.value.push({
                name: prop,
                value: result[prop]
                })
            }
            console.log(groupedReportByDate.value)
        };

        // const getIPDetails = async() => {
        //     try {
        //         let data = await axio.get('http://www.geoplugin.net/json.gp?ip=52.25.109.230')
        //         console.log(data)
        //     }
        //     catch (err) {
        //         console.log(err)
        //     }
        // }


        // getIPDetails()

        const downLoadExcel = () => {
            if (selectedFileType.value.name === "pdf") {
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
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 2 },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
                    pagebreak: { mode: ['avoid-all'] }
                };

                    // New Promise-based usage:
                    html2pdf().set(opt).from(element).save();
                html2pdf(element);

                // var doc = new jsPDF();  //create jsPDF object
                // doc.fromHTML(document.getElementById("element-to-print"), // page element which you want to print as PDF
                // 15,
                // 15, 
                // {
                //     'width': 170  //set width
                // },
                // function(a) 
                // {
                //     doc.save(`${fileName.value}.pdf`); // save file name as HTML2PDF.pdf
                // });
            } else {
                const filterVal = fileHeaderToExport.value.map((i, index) => index)
                const list = fileToExport.value
                const header = fileHeaderToExport.value
                console.log(filterVal)
                console.log(fileHeaderToExport.value)
                
                ExcelExport.exportToExcel(filterVal, list, header, fileName.value, selectedFileType.value.name)
            }
        }

        const setDataToExport = (payload) => {
            fileToExport.value = payload
        }

        const setTableHeaderData = (payload) => {
            fileHeaderToExport.value = payload
        }

        return {
            startDate,
            endDate,
            events,
            groups,
            selectedEvent,
            getAttendanceReport,
            startDate,
            endDate,
            selectedGroups,
            attendanceReport,
            groupReport,
            groupedReport,
            groupReportByDate,
            groupedReportByDate,
            downLoadExcel,
            selectedFileType,
            bookTypeList,
            fileName,
            showExport,
            setDataToExport,
            fileToExport,
            setTableHeaderData,
            fileHeaderToExport,
            searched,
            loading
        }
    }
}
</script>

<style scoped>
.header {
    font: normal normal 800 29px Nunito sans;
}
/* .default-btn {
    font-weight: 600;
    white-space: initial;
    font-size: 1rem;
    border-radius: 3rem;
    padding: .5rem 1.25rem;
    width: auto;
	border:none;
    max-height: 40px;
    background: #6c757d47 !important;
    color:#000;
    text-decoration: none;
    min-width: 121px;
} */

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
</style>