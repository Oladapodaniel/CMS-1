<template>
  <div class="container-wide container-top">
    <div class="row my-3">
      <div class="col-sm-4 first-timers-text">
        <h2 class="page-header">First Timers</h2>
      </div>

      <div class="col-sm-8 d-flex head-button">
        <button class="more default-btn">More <i class="fa fa-angle-down ml-2"></i></button>
        <router-link to="/tenant/people/add-first-timer" class="add-btn default-btn">
          Add First timer
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="my-con">
          <!-- <div class="summary">
            <p class="summary-header">Summary</p>
           

            <div class="boards mb-4">
              <div class="board members-count">
                <div class="board-top">
                  <p class="total-text mb-0 font-weight-700">TOTAL MEMBERS</p>
                  <img
                    class="trend-icon"
                    src="../../assets/dashboardlinks/trend-icon.svg"
                    alt=""
                  />
                </div>
                <h4 class="total">{{ getFirstTimerSummary.totalFirstTimer }}</h4>
                <p>
                  <span class="percent">+{{ getFirstTimerSummary.firstTimerPercentageGrowth }}% </span>
                  <span class="percent-text"> Since last month</span>
                </p>
              </div>

        
              <div class="board fig">
                <ByGenderChart
                  domId="chart"
                  title="Invitation Source"
                  distance="5"
                  :titleMargin="10"
                  :summary="getFirstTimerSummary.invitationSource"
                />
              </div>
              <div class="board fig">
                <ByMaritalStatusChart
                  domId="second"
                  title="Interested In Joining"
                  :titleMargin="10"
                  :summary="getFirstTimerSummary.interestedInJoining"
                />
              </div>
              <div class="board fig">
                <ByMaritalStatusChart
                  domId="set"
                  title="To Be Contacted"
                  style="height: 100%"
                  :titleMargin="10"
                  :summary="getFirstTimerSummary.toBeContacted"
                />
              </div> -->
              <!-- <div  class="board fig">
          <ByMaritalStatusChart domId="third" title="TO BE CONTACTED" distance="5" />
        </div> -->

              <!-- </div> -->
            <!-- </div>
          </div> -->

          <div class="summary px-3">
      <p class="summary-header">Summary</p>
      <div class="boards">
        <div class="board">
          <div class="board-top">
            <p class="total-text mb-0">TOTAL MEMBERS</p>
            <img
              class="trend-icon"
              src="../../assets/dashboardlinks/trend-icon.svg"
              alt=""
            />
          </div>
          <h4 class="total">{{ getFirstTimerSummary.totalFirstTimer }}</h4>
          <p>
            <span class="percent"
              >+{{ getFirstTimerSummary.firstTimerPercentageGrowth }}%
            </span>
            <span class="percent-text"> Since last month</span>
          </p>
        </div>

        <div class="chart-con">
          <div style="width: 45%" class="ml-md-4 chart1">
            <ByGenderChart
              domId="chart"
              title="Invitation"
              distance="5"
              :titleMargin="10"
              :summary="getFirstTimerSummary.invitationSource"
            />
          </div>
          <div style="width: 45%;" class="chart2">
            <ByMaritalStatusChart
              domId="second"
              title="Interested"
              :titleMargin="10"
              :summary="getFirstTimerSummary.interestedInJoining"
            />
          </div>
        </div>
      </div>
    </div>


          <div class="table">
            <div class="top-con">
              <div class="table-top my-4 px-4">
        <div class="select-all">
          <input type="checkbox" name="all" id="all" v-model="selectAll" @click="toggleSelect"/>
          <label>SELECT ALL</label>
        </div>
        <div class="filter">
          <p @click="toggleFilterFormVissibility">
            <i class="fas fa-filter"></i>
            FILTER
          </p>
        </div>
        <p @click="toggleSearch" class="search-text">
            <i class="fa fa-search"></i> SEARCH
          </p>
        <div class="search d-flex" >
          <label 
            class="label-search d-flex"
            :class="{ 'show-search': searchIsVisible }"
          >
            <input type="text" placeholder="Search..." v-model="searchText" />
            <span class="empty-btn">x</span>
            <span class="search-btn">
              <i class="fa fa-search"></i>
            </span>
          </label>
        </div>
      </div>
              <!-- <div
                class="filter-options"
                :class="{ 'filter-options-shown': filterFormIsVissible }"
              >
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-9">
                      <div class="row">
                        <div class="col-md-5 form-group inp">
                          <input
                              type="text"
                              class="input"
                              placeholder="Name"
                              v-model="filter.filterName"
                            />
                        </div>

                        <div class="col-md-5 offset-md-2 form-group">
                          <input type="date" class="form-control inp" v-model="filter.filterDate"/>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-5 form-group">
                          <input
                              type="text"
                              class="input"
                              placeholder="Source"
                              v-model="filter.filterSource"
                            />
                        </div>

                        <div class="col-md-5 offset-md-2 form-group">
                          <input
                              type="text"
                              class="input"
                              placeholder="Status"
                              v-model="filter.filterStatus"
                            />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 d-flex flex-column align-items-end">
                      <button class="apply-btn" @click="applyFilter">Apply</button>
                      <span class="mt-2">
                        <a class="clear-link mr-2">Clear all</a>
                        <span class="mx-2"
                          ><i
                            class="fas fa-circle"
                            style="font-size: 4px"
                          ></i></span
                        ><a class="hide-link ml-2">Hide</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
            <div
        class="filter-options"
        :class="{ 'filter-options-shown': filterFormIsVissible }"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-9">
              <div class="row">
                <div class="col-12 col-sm-6 offset-sm-3 offset-md-0 form-group inp w-100">
                  <!-- <div class="input-field"> -->

                  <input
                    type="text"
                    class="input w-100"
                    placeholder="First Name"
                    v-model="filter.filterFirstName"
                  />
                  <!-- </div> -->
                </div>

                <div class="col-12 col-sm-6 form-group d-none d-md-block">
                  <input
                    type="date"
                    class="form-control input inp w-100"
                    v-model="filter.filterDate"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-6 form-group d-none d-md-block">
                  <input
                    type="text"
                    class="input w-100"
                    placeholder="Last Name"
                    v-model="filter.filterLastName"
                  />
                </div>

                <div class="col-12 col-sm-6 form-group d-none d-md-block">
                  <input
                    type="text"
                    class="input w-100"
                    placeholder="Phone Number"
                    v-model="filter.phoneNumber"
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

            <div class="table-header font-weight-700">
              <div class="check"></div>
              <div class="picture theader">
                <p>NAME</p>
              </div>
              <div class="picture theader">
                <p>PHONE NUMBER</p>
              </div>
              <div class="picture theader">
                <p>SOURCE</p>
              </div>
              <div class="firstname theader">
                <p>INTERESTED</p>
              </div>
              <div class="lastname theader">
                <p>DATE</p>
              </div>
              <div class="phone theader">
                <p>STATUS</p>
              </div>
              <div class="action"></div>
            </div>

            <div v-if="filterResult.length > 0 && ( filter.filterFirstName || filter.filterLastName || filter.phoneNumber )">
              <div
              class="table-body"
              v-for="person in filterResult"
              :key="person.id"
            >
              <div class="data-row">
                <div class="check data">
                  <input type="checkbox" name="" id="" />
                </div>
                <div class="picture data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Name</p>
                    </div>
                    <div class="data-value">
                      {{ person.fullName ? person.fullName : `${person.firstName}` }}
                    </div>
                  </div>
                </div>
                <div class="firstname data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Phone Number</p>
                    </div>
                    <div class="data-value">{{ person.phoneNumber }}</div>
                  </div>
                </div>
                <div class="lastname data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Source</p>
                    </div>
                    <div class="data-value">Social media</div>
                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Interested</p>
                    </div>
                    <div class="data-value">
                      {{ person.interestedInJoining }}
                    </div>
                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Date</p>
                    </div>
                    <div class="data-value">
                      {{ new Date(person.date).toLocaleDateString() }}
                    </div>
                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Status</p>
                    </div>
                    <div class="data-value">{{ person.status }}</div>
                  </div>
                </div>
                <div class="action data action-icon">
                  <div class="dropdown">
                    <i
                      class="fas fa-ellipsis-v"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></i>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">Convert to member</a>
                      <a class="dropdown-item" href="#">Assign to follow-up</a>
                      <a class="dropdown-item" v-if="person.phoneNumber">
                        <router-link
                          :to="`/tenant/sms-communications/compose-message?phone=${person.phoneNumber}`"
                          >Send SMS</router-link
                        >
                      </a>
                      <a class="dropdown-item" href="#">Send Email</a>
                      <a class="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="row-divider" />
            </div>
            </div>
            <div v-else-if="filterResult.length == 0 && noRecords">
              <div class="no-record text-center my-4">No records found</div>
            </div>
            <div v-else>
              <div v-if="searchMember.length > 0" class="list-body">
                <div
              class="table-body"
              v-for="person in searchMember"
              :key="person.personID"
            >
              <div class="data-row">
                <div class="check data">
                  <input type="checkbox" name="" id="" />
                </div>
                <div class="picture data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Name</p>
                    </div>
                    <div class="data-value">
                      <router-link :to="{name: 'AddFirstTimer', params: { id: person.personID}}">{{ person.fullName }}</router-link>
                    </div>

                  </div>
                </div>
                <div class="firstname data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Phone Number</p>
                    </div>
                    <router-link
                      :to="`/tenant/people/add-first-timer/${person.personID}`"
                      class="data-value itemroute-color">
                      {{ person.phoneNumber }}
                    </router-link>
                  </div>
                </div>
                <div class="lastname data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Source</p>
                    </div>
                    <router-link
                      :to="`/tenant/people/add-first-timer/${person.personID}`"
                      class="data-value itemroute-color">
                      Social media
                      </router-link>
                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Interested</p>
                    </div>
                    <div class="data-value">
                      {{ person.interestedInJoining === "Not_Specified" ? "Not Specified" : person.interestedInJoining }}
                    </div>

                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Date</p>
                    </div>
                    <div class="data-value">
                      {{ moment.parseZone(new Date(person.date).toLocaleDateString(), 'YYYY MM DD HH ZZ')._i }}
                    </div>

                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Status</p>
                    </div>
                    <router-link
                      :to="`/tenant/people/add-first-timer/${person.personID}`"
                      class="data-value itemroute-color">
                    {{ person.status }}
                    </router-link>
                  </div>
                </div>
                <div class="action data action-icon">
                  <div class="dropdown">
                    <i
                      class="fas fa-ellipsis-v"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></i>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">Convert to member</a>
                      <a class="dropdown-item" href="#">Assign to follow-up</a>
                      <a class="dropdown-item" v-if="person.phoneNumber">
                        <router-link
                          :to="`/tenant/sms-communications/compose-message?phone=${person.phoneNumber}`"
                          >Send SMS</router-link
                        >
                      </a>
                      <a class="dropdown-item" href="#">Send Email</a>
                      <a class="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="row-divider" />
            </div>
              </div>
              <div v-else>
                <div class="no-record text-center my-4">No records found</div>
              </div>
            </div>

            <div class="table-footer">
              <!-- <button class="tbl-footer-btn">
                <i class="fa fa-angle-left"></i>
              </button>
              <button class="tbl-footer-btn">A</button>
              <button class="tbl-footer-btn">A</button>
              <button class="tbl-footer-btn">
                <i class="fa fa-angle-right"></i>
              </button> -->
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import ByGenderChart from "@/components/charts/PieChart.vue";
import ByMaritalStatusChart from "@/components/charts/PieChart.vue";
import axios from "@/gateway/backendapi";
import Pagination from "../../components/pagination/PaginationButtons";
import { useRoute } from "vue-router";
import moment from 'moment'

export default {
  props: ["list"],
  components: {
    ByGenderChart,
    ByMaritalStatusChart,
    Pagination,
  },

   setup() {
    const churchMembers = ref([]);
    const getFirstTimerSummary = ref({})
    const filter = ref({})
    const searchIsVisible = ref(false)
    const filterResult = ref([])
    const noRecords = ref(false)
    const searchText = ref("")

    // if ()

    const route = useRoute();
    const filterFormIsVissible = ref(false);
    const toggleFilterFormVissibility = () =>
      (filterFormIsVissible.value = !filterFormIsVissible.value);

    const toggleSearch = () => {
      searchIsVisible.value = !searchIsVisible.value
   }
      

     const firstTimerSummary = () => {
      axios.get("/api/People/GetFirsttimerSummary")
          .then(res => {
            getFirstTimerSummary.value = res.data;
            console.log(res.data)
          })
          .catch(err => console.log(err))
      }
    firstTimerSummary()

      const searchMember = computed(() => {
        if (searchText.value !== "") {
          return churchMembers.value.filter(i => {
            return i.fullName.toLowerCase().includes(searchText.value.toLowerCase())
          })
        } else {
          return churchMembers.value
        }
      })

    // const getFirstTimers = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       `/api/People/FirstTimer`
    //     );
    //     churchMembers.value = data;
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };


    onMounted(() => {
      console.log(route, "route");
        axios.get("/api/People/FirstTimer")
          .then(res => {
            churchMembers.value = res.data;
            console.log(res.data)
          })
    });

    const applyFilter = () => {
        noRecords.value = true

        filter.value.filterFirstName = filter.value.filterFirstName == undefined ? "" : filter.value.filterFirstName
        filter.value.filterLastName = filter.value.filterLastName == undefined ? "" : filter.value.filterLastName
        filter.value.phoneNumber = filter.value.phoneNumber == undefined ? "" : filter.value.phoneNumber
    
         let url = "/api/People/FilterMembers?firstname="+filter.value.filterFirstName +"&lastname="+filter.value.filterLastName +"&phone_number="+ filter.value.phoneNumber +"&page=1"
      axios.get(url).then((res) => {
        
        filterResult.value = res.data
        console.log(filterResult.value);
      }) .catch(err => console.log(err))
    }

    return {
      churchMembers,
      filterFormIsVissible,
      toggleFilterFormVissibility,
      moment,
      firstTimerSummary,
      getFirstTimerSummary,
      applyFilter,
      filter,
      toggleSearch,
      searchIsVisible,
      filterResult,
      noRecords,
      searchText,
      searchMember
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #02172e;
}

.data-value a {
  color: #136acd;
  text-decoration: none;
}

.page-header {
  font-weight: 500;
  font-size: 2rem;
}

.my-con {
  /* display: flex; */
  justify-content: space-between;
  margin: 18px 0;
}

.summary {
    /* width: 20%; */
    border-radius: 30px;
    /* box-shadow: 0px 3px 6px #2c28281c; */
    padding: 24px 10px;
    background: #fff;
    box-shadow: 0px 3px 6px #2c28281c;
    border: 1px solid #00204424;
}

.table {
  width: 100% !important;
  box-shadow: 0px 1px 4px #02172e45;
  border: 1px solid #dde2e6;
  border-radius: 30px;
  text-align: left;
  margin-bottom: auto !important;
  /* padding: 0 21px; */
}

.table-header {
  padding: 0 30px;
}

.summary-header {
  color: #136acd !important;
  margin: 0 10px;
  color: #02172e;
  opacity: 0.8;
  font-size: 22px;
  font-weight: 600;
}

.boards {
  display: flex;
}

.board {
  width: 30%;
  border-radius: 10px;
  /* padding: 0 8px; */
  /* box-shadow: 0px 1px 4px #02172e45; */
}

.chart-con {
  width: 70%;
  display: flex;
  justify-content: space-between;
}

.board-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  box-shadow: 0px 3px 6px #2c28281c;
  padding: 4px;
}

.total {
  margin-bottom: 40px;
  font-size: 37px;
}

.total-text {
  font-size: 12px;
}

.percent {
  color: #136acd;
}

.hr {
  border: 1px solid #0020440a;
  margin: 0 4px 10px 0;
}

.tbl-footer-btn {
  background: transparent;
  padding: 4px;
  margin: 4px 8px;
  border-radius: 50%;
  width: 29px;
  border: none;
  border: 1px solid #8898aa80;
  outline: transparent;
}

.action-icon {
  text-align: center;
}

.list-body {
  padding: 0 21px;
}

.data-value {
  display: flex;
  padding-left: 6px;
}

.theader {
  padding-left: 2px;
  text-align: left;
}

.filter-options {
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.filter-options-shown {
  height: 120px !important;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}



.clear-link,
.hide-link {
  color: #136acd;
}

.table-top {
  font-weight: 800;
  font-size: 12px;
}

.table-top label:hover,
.table-top p:hover {
  cursor: pointer;
}

.label-search {
  width: 0;
  background: transparent;
  padding: 4px;
  overflow: hidden;
  transition: all 0.5 ease-in-out;
}
.label-search input {
  border: transparent;
  background: transparent;
  width: 70%;
  outline: none;
}

.label-search .search-btn {
  display: flex;
  align-items: center;
  background: #7894a6;
  padding: 4px;
  border-radius: 5px;
}

.label-search .empty-btn {
  display: flex;
  align-items: center;
  padding: 0 5px;
}

.show-search {
  width: 174px;
  overflow: hidden;
  transition: all 0.5 ease-in-out;
  border: 1px solid #dde2e6;
  border-radius: 5px 0px 0px 5px;
  background: #ebeff4;
  transition: all 0.5s ease-in-out;
}

/* .filter,
.search {
    width: 25% !important
} */

.select-all input {
  margin: 0 8px 0 -5px !important;
}

.head-button {
  display: flex;
  justify-content: flex-end;
}

.add-btn {
  width: 180px;
  background: #136acd;
  border-radius: 22px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
}

.more {
  background: #dde2e6;
  border-radius: 22px;
  width: 180px;
  font-weight: bold;
  border: transparent;
  outline: transparent;
  height: 42px;
  margin-right: 1rem;
}

.fa-ellipsis-v:hover {
  cursor: pointer;
}

#chart {
  width: 48%;
  max-height: 310px;
  border-radius: 10px;
}

  /* .boards { */
    /* flex-direction: column; */
    /* flex-wrap: wrap;
    justify-content: space-between;
  } */

  /* .board {
    width: 45%;
    margin: 10px 0;
    max-height: 310px;
  } */

  .board.members-count {
    padding: 24px;
  }

  .page-header {
    font-size: 1.7rem;
  }

  .no-record {
  color: rgba(184, 5, 5, 0.726);
  font-size: 1.1em;
  }

  .chart1,
  .chart2 {
    border-radius: 10px;
  }

  .itemroute-color {
    color: #136acd;
  }


@media screen and (max-width: 500px) {
  .picture,
  .firstname,
  .lastname,
  .phone {
    width: 100%;
  }


  .chart1,
  .chart2,
  .board,
  .chart-con {
    width: 100% !important;
  }

  .table-body .check {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }

  .data-text {
    display: inline-block;
  }

  .data-row {
    flex-direction: column;
  }

  .data-con {
    text-align: center;
    display: flex;
    justify-content: space-between;
  }

  .action-icon {
    width: 100%;
    text-align: right;
  }

  .table-header {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .board {
    width: 100% !important;
  }
}

@media screen and (min-width: 500px) {
  .theader {
    width: 23%;
  }

  .table-body .check {
    width: 3%;
  }

  .action {
    width: 5%;
  }
}

@media (max-width: 414px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .more {
    margin-right: 0;
  }
}

@media (max-width: 575px) {
  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }

  .add-btn, .more {
    margin-top: 10px;
  }

  .first-timers-text {
    text-align: center
  }
}

@media screen and (min-width: 501px) and (max-width: 768px) {
  .boards {
    flex-direction: column;
    align-items: center !important;
    flex-wrap: nowrap !important;
  }

  .chart-con {
    width: 85% !important;
  }

  .chart-con div {
    width: 40%;
  }

  .board {
    width: 100% !important;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 768px) {
  .filter-options-shown {
    height: 300px !important;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .boards {
    flex-wrap: nowrap;
  }
}

@media screen and (max-width: 1024px) {
  .my-con {
    flex-direction: column;
  }

  .table {
    width: 98%;
    margin: 24px auto;
  }

  .summary {
    width: 98%;
    margin: auto;
  }
}

.row-divider {
  border: 1px solid #0020440a;
  margin: 0;
}

.table-footer {
  display: flex;
  justify-content: flex-end;
  background: #fff;
  padding: 10px 0;
  border-radius: 0px 0px 22px 22px;
}

.board.members-count {
  max-height: 216px;
}
</style>


