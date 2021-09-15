<template>
    <div class="container-wide container-top mb-5">
        <div class="row d-flex justify-content-between">
            <div class="header">Attendance Report</div>
            <div @click="() => showExport = !showExport" class="cursor-pointer default-btn border-0 bg-secondary d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-chevron-down"></i></div>
        </div>
        <div class="row my-4 d-flex justify-content-end" v-if="showExport">
            <!-- <div class="col-sm-2">Enter file name</div> -->
            <div class="col-sm-4">
                <!-- <input type="text" class="form-control" /> -->
                <span class="p-float-label">
                    <InputText id="inputtext" class="w-100" type="text" v-model="fileName" />
                    <label for="inputtext">Enter file name</label>
                </span>
            </div>
            <div class="col-sm-3">
                <Dropdown v-model="selectedFileType" :options="bookTypeList" placeholder="Select file type" />
            </div>
            <!-- <div class="">Export</div> -->
            <div @click="downLoadExcel" class="col-"><div class="default-btn d-flex align-items-center justify-content-center">Export</div></div>
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
                        <Calendar id="icon" class="w-100" v-model="startDate" :showIcon="true" />
                    </div>
                </div>
                <div class="col-sm-6 mt-4">
                    <div class="font-weight-600">End Date</div>
                    <div class="mt-2">
                        <Calendar id="icon" class="w-100" v-model="endDate" :showIcon="true" />
                    </div>
                </div>
                </div>
            </div>
            <div class="offset-sm-1 col-sm-2">
                <div style="height: 33%"></div>
                <div class="mt-2 default-btn primary-bg text-center border-0 text-white" @click="getAttendanceReport">Generate</div>
            </div>
        </div>



        <div class="row mt-4">
            <GroupReportTable :groupedReport="groupedReport" :groupedReportByDate="groupedReportByDate" @data-to-export="setDataToExport" @data-header-to-export="setTableHeaderData"/>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import GroupReportTable from "./CheckinAttendanceReportTable.vue"
import axios from "@/gateway/backendapi";
import ExcelExport from "../../../services/exportFile/exportToExcel"
// import axio from "axios"
export default {
    components: {
        Dropdown,
        Calendar,
        InputText,
        GroupReportTable
    },
    setup() {
        const startDate = ref("")
        const endDate = ref("")
        const events = ref([])
        const groups = ref([])
        const selectedEvent = ref({})
        const selectedGroups = ref({})
        const attendanceReport = ref([])
        const groupedReport = ref([])
        const groupedReportByDate = ref([])
        const bookTypeList = ref([ 'xlsx', 'csv', 'txt', 'pdf' ])
        const selectedFileType = ref("")
        const fileName = ref("")
        const showExport = ref(false)
        const fileToExport = ref([])
        const fileHeaderToExport = ref([])

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
            let start = new Date(startDate.value).toLocaleDateString()
            let end = new Date(endDate.value).toLocaleDateString()
            try {
                let { data } = await axios.get(`/api/Reports/events/getCheckInAttendanceReport?groupID=${selectedGroups.value.id}&eventID=${selectedEvent.value.id}&startDate=${start}&endDate=${end}`)
                    console.log(data)
                    attendanceReport.value = data
                    groupReport(data, 'name')
                    groupReportByDate(data, 'activityDate')

                    groupedReport.value.forEach(i => {
                            for (let j = 0; i.value.length < groupedReportByDate.value.length; j++) {
                                    i.value.unshift({ attendance: '' })             
                            }  
                    })
            }
            catch (err) {
                console.log(err)
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
            const filterVal = fileHeaderToExport.value.map((i, index) => index)
            // Object.keys(attendanceReport.value[0])
            const list = fileToExport.value
            const header = fileHeaderToExport.value
            // Object.keys(attendanceReport.value[0])
            console.log(filterVal)
            console.log(fileHeaderToExport.value)
             
            ExcelExport.exportToExcel(filterVal, list, header, fileName.value, selectedFileType.value)
                // .then(res => console.log(res))
                // .catch((err) => console.log(err))
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
            fileHeaderToExport
        }
    }
}
</script>

<style scoped>
.header {
    font: normal normal 800 29px Nunito sans;
}
</style>