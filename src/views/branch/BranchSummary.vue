<template>
    <div class="container container-top container-wide">
        <div class="row d-flex justify-content-between px-3">
            <div class="heading-text">Branch</div>
            <div class="mb-3">
                <router-link to="/tenant/branch/addbranch"
                    class="default-btn bg-primary border-secondary text-white font-weight-bold c-pointer">
                    Add Branch
                </router-link>
            </div>
        </div>
        <div class="contanier-fluid">
            <div class="row mb-3 ">
                <div class="col-12 d-flex justify-content-end">
                    <div class="mr-3">
                        <Dropdown  v-model="selectedPeriod" :options="periods" optionLabel="name" placeholder="Select a period" class="w-100" />
                    </div>
                    <div>
                        <Dropdown  v-model="selectedBranch" :options="branches" optionLabel="name" placeholder="Select branch" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid mb-3">
            <!-- <div class="container-fluid"> -->
            <div class="row justify-content-between mother-row">
                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <i class="pi pi-users text-center"></i>
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total">2000</div>
                    </div>
                    <div class="row p-2">
                        <p class="item-text ml-2">Total Branches </p>
                    </div>
                </div>

                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <img class="trend-icon" src="/img/trend-icon.b63f0d8d.svg" alt="">
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total pl-0">5000</div>
                    </div>
                    <div class="row p-2 ">
                        <p class="item-text ml-2 text-truncate">Total People</p>
                    </div>
                </div>

                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <i class="pi pi-list text-center"></i>
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total">500</div>
                    </div>
                    <div class="row p-2">
                        <p class="item-text ml-2 text-truncate">Average Attendance</p>
                    </div>
                </div>

                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <i class="pi pi-list text-center"></i>
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total">1000</div>
                    </div>
                <div class="row p-2">
                    <p class="item-text ml-2 text-truncate">Average monthly income/expense</p>
                </div>
            </div>
      <!-- </div> -->
    </div>
        </div>
        <div class="container-fluid mb-3 ">
            <div class="row">
                <div class="col-12 border " style="height: 100%; border-radius: 5px">
                    <Organisation domId="orgchart2"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import Organisation from "../../components/charts/OrgChart2.vue"
export default {
    components: {
        Organisation,
        Dropdown
    },
    setup() {
        const periods = ref([
            { name: "One Week" },
            { name: "This Week" },
            { name: "Last Week" },
            { name: "This Month" },
            { name: "Last Month" },
            { name: "Last 30days" },
            { name: "Last 90days" },
            { name: "One Year" },
        ]);
        const branches = ref([
            { name: "Region" },
            { name: "District" },
            { name: "Zone" },
            { name: "Area" },
            { name: "Branch" },
        ]);
        

        return {
            periods,
            branches
        }
    },
}
</script>

<style scoped>
    .heading-text {
        font: normal normal 800 1.5rem Nunito sans;
}
.item-Area{
border-radius: 5px;
/* margin-left: 1.5rem; */
padding: 0px 10px;
background: #fff;
border: 1px solid #00204424;
}
.top-icon-div{
color: #136acd;
font-size: 24px;
width:50px;
height:50px;
background: #f1f5f8;
padding: 4px;
border-radius: 50%;
}
.item-text{
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
}

.item-total{
font-size: 20px;
font-weight: 500;
line-height: 1.2;
}

.pi{
font-size: 1.5rem;
}

</style>