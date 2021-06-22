<template>
    <div class="container-wide container-top">
        <div class="row d-flex justify-content-center justify-content-sm-between">
            <div class="dashboard-header">Dashboard</div>
            <router-link :to="{ name: 'CheckinEvent' }">
            <div class="register-event default-btn border-0 text-white">Register for this event</div>
            </router-link>
        </div>
        <div class="row d-flex justify-content-center justify-content-sm-between mt-5" >
            <div class="analytics-text">Analytics Overview</div>
            <div class="mt-2 mt-sm-0"><input type="datetime-local" class="form-control"></div>
        </div>
        <div class="row mt-4">
            <div class="col-12 card analytic">
                <div class="row">
                    <div class="col-12 col-sm-6 py-2 pl-4">
                         <!-- header="Analytics Overview" -->
                        <ColumnChart
                            domId="chart1"
                            title="Event Attendance"
                            subtitle="Weekly Attendance of Events"
                           
                            :data="chartData"
                            :series="series"
                            :attendanceSeries="attendanceSeries"
                        />
                        
                    </div>
                    <div class="col-10 col-sm-4 my-3 d-flex align-items-center total-attendant offset-1">
                        <div class="container">
                            <div class="row mt-5">
                                <div class="col-12 attendant-text">Total Event Attendant</div>
                                <div class="col-12 attendant-amount">123,456</div>
                                <div class="col-12 mt-4">+3.48% Since last month</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-sm-8">
                <div class="row">
                    <div class="col-12">
                        <div class="family-text">Family Members</div>
                    </div>
                        <div class="col-12 px-0 mb-0 table">
                            <div class="top-con">
                                <div class="table-top">
                                    <div
                                    class="filter col-2"
                                    >
                                <p class="mt-2">
                                    <i class="fa fa-print"></i>
                                    SORT
                                </p>
                                </div>
                                <div class="filter col-2">
                                <p @click="toggleFilterFormVissibility" class="mt-2">
                                    <i class="fas fa-filter"></i>
                                    FILTER
                                </p>
                                </div>
                                <div class="col-2">
                                <p @click="toggleSearch" class="search-text w-100 mt-2">
                                    <i class="fa fa-search"></i> SEARCH
                                </p>
                                </div>

                                <div class="search d-flex ml-2">
                                <label
                                    class="label-search d-flex"
                                    :class="{
                                    'show-search': searchIsVisible,
                                    'hide-search': !searchIsVisible,
                                    }"
                                >
                                    <input
                                    type="text"
                                    placeholder="Search..."
                                    v-model="searchText"
                                    />
                                    <span class="empty-btn">x</span>
                                    <span class="search-btn">
                                    <i class="fa fa-search"></i>
                                    </span>
                                </label>
                                </div>
                            </div>
                            </div>
                            <div
                            class="filter-options"
                            :class="{ 'filter-options-shown': filterFormIsVissible }"
                            id="ignore1"
                            >
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-md-9">
                                    <div class="row">
                                    <div
                                        class="col-12 col-sm-6 col-md-4 offset-sm-3 offset-md-0 form-group inp w-100"
                                    >
                                        <!-- <div class="input-field"> -->

                                        <input
                                        type="text"
                                        class="input w-100"
                                        placeholder="First name"
                        
                                        />
                                    </div>

                             
                                    <div class="col-12 col-md-4 form-group d-none d-md-block">
                                        <input
                                        type="text"
                                        class="input w-100"
                                        placeholder="Role"
                                
                                        />
                                    </div>
                                    </div>
                                </div>

                                <div class="col-md-3 d-flex flex-column align-items-center">
                                    <button class="apply-btn text-white" @click="applyFilter">
                                    Apply
                                    </button>
                                    <span class="mt-2">
                                    <a class="clear-link mr-2" @click="clearAll">Clear all</a>
                                    <span class="mx-2"
                                        ><i class="fas fa-circle" style="font-size: 4px"></i></span
                                    ><a class="hide-link ml-2" @click="hide">Hide</a>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>

                            <!-- contribution -->
                            <!-- <div v-if="searchContribution.length > 0"> -->
                            <div class="container-fluid d-none d-md-block">
                                <div class="row t-header">
                                <!-- <div class="col-12 parent-desc first p-2 pl-4"> -->
                                    <div class="col-md-1 px-3"></div>
                                    <div class="small-text text-capitalize col-md-2 font-weight-bold">PICTURE</div>
                                    <div class="small-text text-capitalize col-md-3 font-weight-bold">FIRSTNAME</div>
                                    <div class="small-text text-capitalize col-md-3 font-weight-bold">PHONE</div>
                                    <div class="small-text text-capitalize col-md-2 font-weight-bold">ROLE</div>
                                    <div class="small-text text-capitalize col-md-1 font-weight-bold"></div>
                                <!-- </div> -->
                                </div>
                            </div>
                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >
                                
                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end align-self-center">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="col-md-2" style="height: 52px">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">
                                            <div class="child-pic"></div>
                                        </span>
                                    </p>
                                    </div>

                                    <div class="col-md-3 align-self-center">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>
                                        
                                        <div class="desc text-right text-md-left"> Oladapo </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-3 align-self-center">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span>080912384833</span>
                                    </p>
                                    </div>

                                    <div class="col-md-2 align-self-center">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="c-pointer"
                                        > Father</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="col-md-1 align-self-center">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                            <a class="dropdown-item elipsis-items">
                                        Delete
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >
                                
                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end align-self-center">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="col-md-2" style="height: 52px">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">
                                            <div class="child-pic"></div>
                                        </span>
                                    </p>
                                    </div>

                                    <div class="col-md-3 align-self-center">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>
                                        
                                        <div class="desc text-right text-md-left"> Oladapo </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-3 align-self-center">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span>080912384833</span>
                                    </p>
                                    </div>

                                    <div class="col-md-2 align-self-center">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="c-pointer"
                                        > Father</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="col-md-1 align-self-center">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                            <a class="dropdown-item elipsis-items">
                                        Delete
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >
                                
                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end align-self-center">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="col-md-2" style="height: 52px">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">
                                            <div class="child-pic"></div>
                                        </span>
                                    </p>
                                    </div>

                                    <div class="col-md-3 align-self-center">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>
                                        
                                        <div class="desc text-right text-md-left"> Oladapo </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-3 align-self-center">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span>080912384833</span>
                                    </p>
                                    </div>

                                    <div class="col-md-2 align-self-center">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="c-pointer"
                                        > Father</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="col-md-1 align-self-center">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                            <a class="dropdown-item elipsis-items">
                                        Delete
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>



                           


                    </div>
                </div>
            </div>
            <div class="col-10 col-sm-3 p-0 offset-1">
                <div class="upcoming-event">
                    <router-link :to="{ name: 'CheckinEvent' }">
                    <div class="container">
                        <div class="row mt-2 p-3 d-flex justify-content-between align-items-center">
                            <div class="upcoming-text">Upcoming Event</div>
                            <div class="upcoming-date"><i class="pi pi-calendar"></i>6 Sep 20</div>
                            <div class="col-12 p-0">
                                <img src="../../assets/checkin-assets/Rectangle17190.png" class="mt-4 w-100">
                            </div>
                            <div class="col-12 mt-4 text-white text-center">
                                Taste and see that the Lord is Good. Join us this Sunday at 9am, Let's worship Him together.
                            </div>
                            <div class="col-12 mt-2 text-white text-center font-weight-700 cursor-pointer">
                                See all upcoming events.
                            </div>
                        </div>
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import ColumnChart from "@/components/charts/ColumnChart.vue";
// import { useRoute } from "vue-router"
// import axios from "@/gateway/backendapi";
export default {
    components: {
        ColumnChart
    },
    setup () {
        // const route = useRoute()
        const filterFormIsVissible = ref(false);
        const searchIsVisible = ref(false);
        const chartData = ref({ "name": "Attendance", "color": "", "data": [ 175, 220, 75, 31, 151, 7, 540 ] })
        const series = ref([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ])
        const attendanceSeries = ref([1, 2, 3, 4, 5, 6, 7])


        const toggleFilterFormVissibility = () =>
        (filterFormIsVissible.value = !filterFormIsVissible.value);
        const toggleSearch = () => {
        searchIsVisible.value = !searchIsVisible.value;
        };


        // const getFamilyMembers = async() => {
        //     try {
        //         const res = await axios.get(`/api/Family/family?personId=${route.query.person}`)
        //         console.log(res)
        //         console.log("gkfd,mnklvdnklnlkn")

        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // }
        // getFamilyMembers()
        return {
            filterFormIsVissible, toggleFilterFormVissibility, searchIsVisible, toggleSearch, chartData, series, attendanceSeries
        }
    }
}
</script>

<style scoped>
.dashboard-header {
    font: normal normal 800 29px/46px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.register-event {
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 22px;
}

.analytics-text, .family-text {
    font: normal normal 700 21px/32px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.table-top {
  font-weight: 800;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
}
.table-top label:hover,
.table-top p:hover {
  cursor: pointer;
}

.filter-options {
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
.filter-options-shown {
  height: 80px !important;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.t-header {
  background: #dde2e6 0% 0% no-repeat padding-box;
  font-size: 16px;
  padding: .5rem 0;
}

.upcoming-event {
    background: #1369CD 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
    /* width: 275px; */
}

.upcoming-text {
    font: normal normal bold 16px/27px Nunito Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.upcoming-date {
    font: normal normal 600 12px/12px Nunito Sans;
    letter-spacing: 0px;
    color: #FEFEFF;
}

.total-attendant {
    background: #EEFDFD 0% 0% no-repeat padding-box;
    border: 1px solid #F2E8FF;
    border-radius: 10px;
    /* margin: 30px; */
}

.attendant-text {
    font: normal normal bold 17px/16px Nunito Sans;
letter-spacing: 0px;
color: #020E1C; 
}

.attendant-amount {
    font: normal normal bold 53px/54px Nunito Sans;
    letter-spacing: 0px;
    color: #020E1C;
    margin-top: 50px
}

.card.analytic {
    box-shadow: 0px 3px 6px #2c28281c;
    border-radius: 30px;
}

.child-pic {
    border: 1px solid black;
    width: 55px;
    height: 55px;
    border-radius: 50%
}
</style>