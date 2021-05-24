<template>
 <!-- <div class="row"> -->
          <div class="col-12 table" id="table">
            <div class="top-con" id="ignore2">
              <div class="table-top my-4 px-4">
                <div class="select-all"></div>
                <div class="filter" @click="printJS({ 
                  ignoreElements: ['ignore1', 'ignore2'], 
                  maxWidth: 867, 
                  header: 'CONTRIBUTION TRANSACTIONS', 
                  printable: printContribution, 
                  properties: ['DATE', 'EVENT','CONTRIBUTION', 'AMOUNT', 'DONOR'], 
                  type: 'json', 
                  headerStyle: 'font-family: Nunito Sans, Calibri; text-align: center;', 
                  gridHeaderStyle: 'border: 1.5px solid #6d6d6d19; font-family: Nunito Sans, calibri; padding: 7px; text-align: left;', 
                  gridStyle: 'border: 1.5px solid #6d6d6d19; font-family: Nunito Sans, calibri; padding: 7px; font-weight: 300' })">
                  <p class="mt-2">
                    <i class="fa fa-print"></i>
                    PRINT
                  </p>
                </div>
                <div class="filter">
                  <p @click="toggleFilterFormVissibility" class="mt-2">
                    <i class="fas fa-filter"></i>
                    FILTER
                  </p>
                </div>
                <p @click="toggleSearch" class="search-text mt-2">
                  <i class="fa fa-search"></i> SEARCH
                </p>
                <div class="search d-flex ml-2">
                  <label
                    class="label-search d-flex"
                    :class="{ 'show-search': searchIsVisible, 'hide-search' : !searchIsVisible }"
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
                          placeholder="Contribution"
                          v-model="filter.contribution"
                        />
                      </div>

                      <div class="col-12 col-md-4 form-group d-none d-md-block">
                        <input
                          type="text"
                          class="input w-100"
                          placeholder="event"
                          v-model="filter.event"
                        />
                      </div>

                      <div class="col-12 col-md-4 form-group d-none d-md-block">
                        <input
                          type="text"
                          class="input w-100"
                          placeholder="donor"
                          v-model="filter.donor"
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
                        ><i
                          class="fas fa-circle"
                          style="font-size: 4px"
                        ></i></span
                      ><a class="hide-link ml-2" @click="hide">Hide</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

           
            <div v-if="!noRecords">
              <div class="row table-header">
                <div class="col-sm-2 d-none d-sm-block">
                    DATE
                </div>
                    <div class="col-sm-3 d-none d-sm-block">
                    EVENT
                </div>
                    <div class="col-sm-3 d-none d-sm-block">
                    CONTRIBUTION
                </div>
                    <div class="col-sm-2 d-none d-sm-block">
                    AMOUNT
                </div>
                    <div class="col-sm-1 d-none d-sm-block" style="font-weight: 800">
                    DONOR
                </div>
            </div>


            <div class="table-body row" v-for="(offering, index) in searchContribution" :key="offering.id">
                <div class="col-6 d-block d-sm-none">
                <div class="col-sm-3">
                    DATE
                </div>
                    <div class="col-sm-2">
                    EVENT
                </div>
                    <div class="col-sm-2">
                    CONTRIBUTION
                </div>
                    <div class="col-sm-2">
                    AMOUNT
                </div>
                    <div class="col-sm-2" style="font-weight: 800">
                    DONOR
                </div>
            </div>
            <div class="col-6 col-sm-12">
                <div class="row">
                <div class="col-sm-2">
                    <div>{{ date(offering.date) }}</div>
                </div>
                <div class="col-sm-3">
                     <div>{{ offering.eventName ? offering.eventName : "Online Giving" }}</div>
                </div>
                <div class="col-sm-3">
                     <div>{{ offering.contribution }}</div>
                </div>
                <div class="col-sm-2">
                     <div class="d-flex"> <div class="currency" v-if="offering.currencyName">{{ offering.currencyName }}</div><div class="align-self-center ml-2">{{ offering.amount }}</div></div>
                </div>
                <div class="col-sm-1" style="font-weight: 800">
                     <div>{{ offering.donor }}</div>
                </div>
                <div class="col-sm-1">
                    <div class="dropdown">
              <i
                class="fas fa-ellipsis-v cursor-pointer"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               
              
                <!-- <a class="dropdown-item elipsis-items">
                 Edit
                </a> -->
                <a
                  class="dropdown-item elipsis-items cursor-pointer"
                  @click="showConfirmModal(offering.id, index)"
                  >Delete</a
                >
              </div>
            </div>
            </div>
            </div>
          
                </div>
            </div>
            </div>
            <div v-else class="text-danger">No records found</div>
            <div class="col-12">
                    <div class="table-footer">
                      <Pagination  @getcontent="getPeopleByPage" :itemsCount="offeringCount" :currentPage="currentPage"/>
                    </div>
                </div>
            
            <ConfirmDialog />
            <Toast />
            
          </div>

    <!-- </div></div> -->

</template>

<script>
import { ref, computed } from "vue";
import axios from "@/gateway/backendapi";
// import { useStore } from 'vuex'
// import { store } from "../../../store/store"
import Pagination from "../../../components/pagination/PaginationButtons";
// import { useRoute } from "vue-router";
import moment from "moment";
import { useConfirm } from "primevue/useConfirm";
import { useToast } from "primevue/usetoast";
import finish from '../../../services/progressbar/progress'
import monthDayYear from '../../../services/dates/dateformatter'
import printJS from 'print-js'

export default {
  props: ["contributionTransactions"],
  components: {
    // ByGenderChart,
    // ByMaritalStatusChart,
    Pagination,
  },

  setup(props, { emit }) {
    // const contributionTransactions = ref([]);
    // const getFirstTimerSummary = ref({});
    const filter = ref({});
    const searchIsVisible = ref(false);
    const filterResult = ref([]);
    const noRecords = ref(false);
    const searchText = ref("");

    // if ()

    // const route = useRoute();
    const filterFormIsVissible = ref(false);
    const toggleFilterFormVissibility = () =>
      (filterFormIsVissible.value = !filterFormIsVissible.value);

    const toggleSearch = () => {
      searchIsVisible.value = !searchIsVisible.value;
    };

    // const getContributionTranactions = () => {
    //   // let store = useStore()
    //   axios
    //     .get("/api/Financials/Contributions/Transactions")
    //     .then((res) => {
    //       contributionTransactions.value = res.data;
    //       console.log(res.data);
    //     })
    //     .catch((err) => console.log(err));
    // // get from  to store
    // // console.log(store.getters['contributions/contributionList'])
    // // savev to sstore
    // // store.dispatch('contributions/contributionList')
    // };
    // getContributionTranactions();

    const searchContribution = computed(() => {
      if (searchText.value !== "") {
        return props.contributionTransactions.filter((i) => {
          return i.contribution
            .toLowerCase()
            .includes(searchText.value.toLowerCase());
        });
      } else if (filterResult.value.length > 0 && (filter.value.contribution || filter.value.event || filter.value.donor)) {
          return filterResult.value
      } else {
        return props.contributionTransactions;
      }
    });

    const printContribution = computed(() => {
      if (props.contributionTransactions.length === 0) return []
      return props.contributionTransactions.map(i => {
        return {
          DATE: monthDayYear.monthDayYear(i.eventDate),
          EVENT: i.eventName,
          CONTRIBUTION: i.contribution,
          AMOUNT: i.amount,
          DONOR: i.donor ? i.donor : ""
        }
      })
    })

    const deleteOffering = (id, index) => {

      axios
        .delete(`/api/Financials/Contributions/Transactions/Delete?ID=${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            toast.add({
            severity: "success",
            summary: "Delete Successful",
            detail: `Contribution Transaction Deleted`,
            life: 3000,
          });
          emit('contri-transac', index)
          } else {
            toast.add({
            severity: "warn",
            summary: "Delete Failed",
            detail: `Please Try Again`,
            life: 3000,
          });
          }
        })
        .catch((err) => {
          finish()
          if (err.response) {
            console.log(err.response)
            toast.add({
              severity: "error",
              summary: "Unable to delete",
              detail: `${err.response}`,
              life: 3000,
            });
          }
        });
    };

    const confirm = useConfirm();
    let toast = useToast();
    const showConfirmModal = (id, index) => {
      confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptClass: "confirm-delete",
        rejectClass: "cancel-delete",
        accept: () => {
          deleteOffering(id, index);
          // toast.add({severity:'info', summary:'Confirmed', detail:'Member Deleted', life: 3000});
        },
        reject: () => {
          toast.add({
            severity: "info",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };
    const currentPage = ref(1);

    const getPeopleByPage = async (page) => {
      if (page < 1) return false;
      try {
        const { data } = await axios.get(
          `/api/Financials/Contributions/Transactions?page=${page}`
        );
        // filterResult.value = [ ];
        // searchMember.value = [ ];
        // noRecords.value = false;
        // props.contributionTransactions = data;
        emit('get-pages', data)
        currentPage.value = page;
      } catch (error) {
        console.log(error);
      }
    };

    const offeringCount = computed(() => {
      if (props.contributionTransactions.length > 50) return Math.ceil(props.contributionTransactions.length / 50);
      return 1;
    })

    const date = (offDate) => {
      return monthDayYear.monthDayYear(offDate)
    }

    // onMounted(() => {
    //   console.log(route, "route");
    //   axios.get("/api/People/FirstTimer").then((res) => {
    //     churchMembers.value = res.data;
    //     console.log(churchMembers.value);
    //   });
    // });

    const applyFilter = () => {
      filter.value.contribution = filter.value.contribution == undefined ? "" : filter.value.contribution;
      filter.value.event = filter.value.event == undefined ? "" : filter.value.event;
      filter.value.donor = filter.value.donor == undefined ? "" : filter.value.donor;

      let url = "/api/Financials/Contributions/FilteredTransactions?contribution=" + filter.value.contribution + "&eventname=" + filter.value.event + "&donor=" + filter.value.donor
        // "/api/People/FilterMembers?firstname=" +
        // filter.value.filterFirstName +
        // "&lastname=" +
        // filter.value.filterLastName +
        // "&phone_number=" +
        // filter.value.phoneNumber +
        // "&page=1";
        
      axios
        .get(url)
        .then((res) => {
          // noRecords.value = true;
          filterResult.value = res.data;
          console.log(res.data)
          if (res.data.length === 0) {
            noRecords.value = true
          } else {
            noRecords.value = false
          }
        })
        .catch((err) => console.log(err));
    };

    // const membersCount = computed(() => {
    //   if (getFirstTimerSummary.value.totalFirstTimer > 20)
    //     return Math.ceil(getFirstTimerSummary.value.totalFirstTimer / 20);
    //   return 0;
    // });


    return {
      // contributionTransactions,
      deleteOffering,
      filterFormIsVissible,
      toggleFilterFormVissibility,
      moment,
      // firstTimerSummary,
      // getFirstTimerSummary,
      applyFilter,
      filter,
      toggleSearch,
      searchIsVisible,
      filterResult,
      noRecords,
      searchText,
      searchContribution,
      showConfirmModal,
      // deleteMember,
      offeringCount,
      currentPage,
      getPeopleByPage,
      date,
      printJS,
      printContribution
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
  width: 241px;
}

.page-header {
  font-weight: 700;
  font-size: 1.7rem;
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
}

.boards {
  display: flex;
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
  font-size: 15px;
  font-weight: 700;
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
  height: 80px !important;
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

@media (max-width: 660px) {
  .select-all {
    display: none;
  }
}


.header {
  background: #DDE2E6 0% 0% no-repeat padding-box;
  font: normal normal bold 13px/13px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
}

.header tr {
  color: #8898aa;
  font-size: 11px;
  box-shadow: 0px 3px 6px #2c28281c;
  background: #DDE2E6 0% 0% no-repeat padding-box;
}

.select-all input {
  margin: 0 8px 0 -5px !important;
}

.currency {
  background: #DDE2E6 0% 0% no-repeat padding-box;
  border: 1px solid #C5D9F2;
  border-radius: 5px;
  letter-spacing: 0px;
  color: #1C252C;
  padding: 5px;
}

.offering-amount {
  border: 1px solid #00204424;
  padding: 5px;
  border-radius: 5px;
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



.board.members-count {
  padding: 24px;
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


 @media (max-width: 767px) {
 
   .first-timers-text {
    text-align: center;
  }
  .head-button {
    display: flex;
    justify-content: center
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

@media (max-width: 577px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .more {
    margin-right: 0;
  }

  .add-btn {
    margin-top: 10px
  } 
}

@media (max-width: 575px) {
  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }

  /* .add-btn,
  .more {
    margin-top: 10px;
  } */

  
}

@media screen and (min-width: 501px) and (max-width: 768px) {
  /* .boards {
    flex-direction: column;
    align-items: center !important;
    flex-wrap: nowrap !important;
  }

  .chart-con {
    width: 85% !important;
  }

  .chart-con div {
    width: 40%;
  } */

  .board {
    width: 50% !important;
    margin-bottom: 10px;
  }

  .summary-header {
    width: 50%;
    margin-left: 25%;
  }
}

@media screen and (max-width: 768px) {
  .filter-options-shown {
    height: 150px !important;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .boards {
    flex-wrap: nowrap;
  }

  .responsive-table {
    max-width: 100%;
    overflow-x: scroll;
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

.table-header {
    padding: 12px;
    color: black;
    box-shadow: none;
    font-size: 11px;
    font-weight: 700
}

.table-body {
    padding: 12px;
    border-bottom: 1.5px solid #6d6d6d19
    

}

.itemroute-color {
  color: #136acd;
}

.itemroute-color:hover {
  text-decoration: none;
}
</style>


