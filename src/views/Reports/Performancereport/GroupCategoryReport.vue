<template>
    <div class="container-wide container-top mb-5">
        <div class="d-flex justify-content-between">
            <div class="header">Group Category Report</div>
            <div class="default-btn  d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-sort-down"></i></div>
        </div>
        <div class="row mt-4">
            <!-- <div class="col-sm-2">Date Range</div> -->
            <div class="col-sm-3">
                <div class="font-weight-600">Select Event</div>
                <div class="mt-2">
                    <Dropdown placeholder="--Select--" style="width: 100%" />
                </div>
            </div>
            <div class="col-sm-3">
                <div class="font-weight-600">Start Date</div>
                <div class="mt-2">
                    <Calendar id="icon" v-model="startDate" :showIcon="true" />
                </div>
            </div>
            <div class="col-sm-3">
                <div class="font-weight-600">End Date</div>
                <div class="mt-2">
                    <Calendar id="icon" v-model="endDate" :showIcon="true" />
                </div>
            </div>
            <div class="offset-sm-1 col-sm-2">
                <div style="height: 33%"></div>
                <div class="mt-2 default-btn primary-bg text-center border-0 text-white">Generate</div>
            </div>
        </div>



        <div class="row mt-4">
            <GroupReportTable />
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
import Calendar from 'primevue/calendar';
import GroupReportTable from "./GroupReportTable.vue"
export default {
    components: {
        Dropdown,
        Calendar,
        GroupReportTable
    },
    setup() {
        const startDate = ref("")
        const endDate = ref("")
        return {
            startDate,
            endDate
        }
    }
}
</script>

<style scoped>
.header {
    font: normal normal 800 29px Nunito sans;
}
</style>