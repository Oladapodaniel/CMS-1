<template>
  <div class="container-wide">
    <div class="row my-3">
      <div class="col-sm-4 first-timers-text">
        <h2 class="page-header">Contributions</h2>
      </div>

      <div class="col-sm-8 d-flex head-button">
        <router-link to="/tenant/offeringcategory">
        <button class="default-btn mr-5">Add Contribution Category</button></router-link>
        <router-link to="/tenant/addoffering" class="add-btn">
          Add Contribution
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
          <div class="table">
            <div class="top-con">
              <div class="table-top my-4 px-4">
                <div class="filter offset-md-8">
                  <p @click="toggleFilterFormVissibility">
                    <i class="fas fa-filter"></i>
                    FILTER
                  </p>
                </div>
                <p @click="toggleSearch" class="search-text text-right">
                  <i class="fa fa-search"></i> SEARCH
                </p>
                <div class="search d-flex">
                  <label
                    class="label-search d-flex"
                    :class="{ 'show-search': searchIsVisible }"
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
            >
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-9">
                    <div class="row">
                      <div
                        class="col-12 col-sm-6 offset-sm-3 offset-md-0 form-group inp w-100"
                      >
                        <!-- <div class="input-field"> -->

                        <input
                          type="text"
                          class="input w-100"
                          placeholder="First Name"
                      
                        />
                        <!-- </div> -->
                      </div>

                      <div class="col-12 col-sm-6 form-group d-none d-md-block">
                        <input
                          type="date"
                          class="form-control input inp w-100"
                     
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-sm-6 form-group d-none d-md-block">
                        <input
                          type="text"
                          class="input w-100"
                          placeholder="Last Name"
            
                        />
                      </div>

                      <div class="col-12 col-sm-6 form-group d-none d-md-block">
                        <input
                          type="text"
                          class="input w-100"
                          placeholder="Phone Number"
                  
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

            <div class="responsive-table">
              <table class="table-borderless w-100">
                <thead class="header">
                  <tr class="">
                    <!-- <th></th> -->
                    <th class="">DATE</th>
                    <th class="">EVENT</th>
                    <th>CONTRIBUTION</th>
                    <th>AMOUNT</th>
                    <th>CONTACT</th>
                    <!-- <th>STATUS</th> -->
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(offering, index) in contributionTransactions" :key="index">
                  
                      <td>{{ offering.date }}</td>
                      <td>{{ offering.eventName }}</td>
                      <td class="">{{ offering.contribution }}</td>

                      <td style="display: flex">
                        <select class="currency">
                          <option value="NGN">NGN</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="ZAR">ZAR</option>
                          <option value="GBP">GBP</option>
                          <option value="CAD">CAD</option>
                          <option value="GHS">GHS</option>
                        </select>

                        <input
                          type=""
                          class="form-control"
                          style="width: 100px"
                          v-model="offering.amount"
                        />
                      </td>
                      <td class="">{{ offering.donor }}</td>
                      <td>
                        <i
                          class="fa fa-trash"
                          style="color: #adadad"
                          aria-hidden="true"
                        ></i>
                      </td>
               
                  </tr>
                </tbody>

                <!-- <tbody
                  v-if="
                    filterResult.length > 0 &&
                    (filter.filterFirstName ||
                      filter.filterLastName ||
                      filter.phoneNumber)
                  "
                >
                  <tr v-for="person in filterResult" :key="person.id">
                     <td>
                      <input
                        type="checkbox"
                        name="all"
                        id="all"
                        v-model="selectAll"
                        @click="toggleSelect"
                      />
                    </td> 
                    <td>
                      <router-link
                        :to="`/tenant/people/addfirsttimer/${person.id}`"
                        class="itemroute-color"
                        >{{
                          person.fullName
                            ? person.fullName
                            : `${person.firstName} ${person.lastName}`
                        }}</router-link
                      >
                    </td>
                    <td>
                      <router-link
                        :to="``"
                        class="data-value itemroute-color"
                        >{{ person.phoneNumber }}</router-link
                      >
                    </td>
                    <td class="itemroute-color">
                      {{ person.howDidYouAboutUsName }}
                    </td>
                    <td class="itemroute-color">
                      {{
                        person.interestedInJoining === "Not_Specified"
                          ? "Not Sure"
                          : person.interestedInJoining
                      }}
                    </td>
                    <td class="itemroute-color">
                      {{
                        moment.parseZone(
                          new Date(person.date).toLocaleDateString(),
                          "YYYY MM DD HH ZZ"
                        )._i
                      }}
                    </td>
                    <td>
                      <router-link
                        :to="`/tenant/people/addfirsttimer/${person.personID}`"
                        class="data-value itemroute-color"
                      ></router-link>
                    </td>
                    <td>
                      <div class="dropdown">
                        <div class="col-2" @click="delOffering(index)">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody> -->

                <!-- <tbody v-else-if="filterResult.length == 0 && noRecords">
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="no-record text-center my-4">No record found</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody> -->

                <!--
                <tbody v-else-if="searchMember.length > 0">
                  <tr v-for="person in searchMember" :key="person.id">
                      <input
                        type="checkbox"
                        name="all"
                        id="all"
                        @click="toggleSelect"
                      />
                    </td> 
                    <td>
                      <router-link
                        :to="`/tenant/people/addfirsttimer/${person.id}`"
                        class="itemroute-color"
                        >{{ person.fullName }}</router-link
                      >
                    </td>
                    <td>
                      <router-link
                        :to="``"
                        class="data-value itemroute-color"
                        >{{ person.phoneNumber }}</router-link
                      >
                    </td>
                    <td class="itemroute-color">
                      {{ person.howDidYouAboutUsName }}
                    </td>
                    <td class="itemroute-color">
                      {{
                        person.interestedInJoining === "Not_Specified"
                          ? "Not Sure"
                          : person.interestedInJoining == "On_Transit"
                          ? "On Transit"
                          : person.interestedInJoining
                      }}
                    </td>
                    <td class="itemroute-color">
                      {{
                        moment.parseZone(
                          new Date(person.date).toLocaleDateString(),
                          "YYYY MM DD HH ZZ"
                        )._i
                      }}
                    </td>
                    <td>
                      <router-link
                        :to="`/tenant/people/addfirsttimer/${person.id}`"
                        class="data-value itemroute-color"
                      ></router-link>
                    </td>
                    <td>
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
                          <a class="dropdown-item" href="#"
                            >Convert to member</a
                          >
                          <a class="dropdown-item" href="#"
                            >Assign to follow-up</a
                          >
                          <a class="dropdown-item" v-if="person.phoneNumber">
                            <router-link
                              :to="`/tenant/sms/compose?phone=${person.phoneNumber}`"
                              >Send SMS</router-link
                            >
                          </a>
                          <a class="dropdown-item" href="#">Send Email</a>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="showConfirmModal(person.id)"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody> -->
              </table>
            </div>
            <ConfirmDialog />
            <Toast />

            <div class="table-footer">
              <!-- <Pagination
                
              /> -->
              <!-- @getcontent="getPeopleByPage"
                :itemsCount="membersCount"
                :currentPage="currentPage" -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "@/gateway/backendapi";
// import { useStore } from 'vuex'
// import { store } from "../../../store/store"
// import Pagination from "../../../components/pagination/PaginationButtons";
// import { useRoute } from "vue-router";
// import moment from "moment";
// import { useConfirm } from "primevue/useConfirm";
// import { useToast } from "primevue/usetoast";

export default {
  // props: ["list"],
  components: {
    // ByGenderChart,
    // ByMaritalStatusChart,
    // Pagination,
  },

  setup() {
    const contributionTransactions = ref([]);
    // const getFirstTimerSummary = ref({});
    const filter = ref({});
    const searchIsVisible = ref(false);
    // const filterResult = ref([]);
    // const noRecords = ref(false);
    const searchText = ref("");

    // if ()

    // const route = useRoute();
    const filterFormIsVissible = ref(false);
    const toggleFilterFormVissibility = () =>
      (filterFormIsVissible.value = !filterFormIsVissible.value);

    const toggleSearch = () => {
      searchIsVisible.value = !searchIsVisible.value;
    };

    const getContributionTranactions = () => {
      // let store = useStore()
      axios
        .get("/api/Financials/Contributions/Transactions")
        .then((res) => {
          contributionTransactions.value = res.data;
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    // get from  to store
    // console.log(store.getters['contributions/contributionList'])
    // savev to sstore
    // store.dispatch('contributions/contributionList')
    };
    getContributionTranactions();

    // const searchMember = computed(() => {
    //   if (searchText.value !== "") {
    //     return churchMembers.value.filter((i) => {
    //       return i.fullName
    //         .toLowerCase()
    //         .includes(searchText.value.toLowerCase());
    //     });
    //   } else {
    //     return churchMembers.value;
    //   }
    // });

    // const deleteMember = (id) => {
    //   //  delete firtimer
    //   axios
    //     .delete(`/api/People/DeleteOnePerson/${id}`)
    //     .then((res) => {
    //       console.log(res);
    //       toast.add({
    //         severity: "success",
    //         summary: "Confirmed",
    //         detail: "Member Deleted",
    //         life: 3000,
    //       });
    //       churchMembers.value = churchMembers.value.filter(
    //         (item) => item.id !== id
    //       );

    //       // update first timer summary while deleting
    //       axios
    //         .get("/api/People/GetFirsttimerSummary")
    //         .then((res) => {
    //           getFirstTimerSummary.value = res.data;
    //           console.log(res.data);
    //         })
    //         .catch((err) => console.log(err));
    //     })
    //     .catch((err) => {
    //       /*eslint no-undef: "warn"*/
    //       NProgress.done();
    //       if (err.response.status === 400) {
    //         toast.add({
    //           severity: "error",
    //           summary: "Unable to delete",
    //           detail: "Ensure this member is not in any group",
    //           life: 3000,
    //         });
    //       } else {
    //         toast.add({
    //           severity: "error",
    //           summary: "Unable to delete",
    //           detail: "An error occurred, please try again",
    //           life: 3000,
    //         });
    //       }
    //     });
    // };

    // const confirm = useConfirm();
    // let toast = useToast();
    // const showConfirmModal = (id) => {
    //   confirm.require({
    //     message: "Are you sure you want to proceed?",
    //     header: "Confirmation",
    //     icon: "pi pi-exclamation-triangle",
    //     acceptClass: "confirm-delete",
    //     rejectClass: "cancel-delete",
    //     accept: () => {
    //       deleteMember(id);
    //       // toast.add({severity:'info', summary:'Confirmed', detail:'Member Deleted', life: 3000});
    //     },
    //     reject: () => {
    //       toast.add({
    //         severity: "info",
    //         summary: "Rejected",
    //         detail: "You have rejected",
    //         life: 3000,
    //       });
    //     },
    //   });
    // };

    // // const getFirstTimers = async () => {
    // //   try {
    // //     const { data } = await axios.get(
    // //       `/api/People/FirstTimer`
    // //     );
    // //     churchMembers.value = data;
    // //     console.log(data)
    // //   } catch (error) {
    // //     console.log(error);
    // //   }
    // // };

    // onMounted(() => {
    //   console.log(route, "route");
    //   axios.get("/api/People/FirstTimer").then((res) => {
    //     churchMembers.value = res.data;
    //     console.log(churchMembers.value);
    //   });
    // });

    // const applyFilter = () => {
    //   filter.value.filterFirstName =
    //     filter.value.filterFirstName == undefined
    //       ? ""
    //       : filter.value.filterFirstName;
    //   filter.value.filterLastName =
    //     filter.value.filterLastName == undefined
    //       ? ""
    //       : filter.value.filterLastName;
    //   filter.value.phoneNumber =
    //     filter.value.phoneNumber == undefined ? "" : filter.value.phoneNumber;

    //   let url =
    //     "/api/People/FilterMembers?firstname=" +
    //     filter.value.filterFirstName +
    //     "&lastname=" +
    //     filter.value.filterLastName +
    //     "&phone_number=" +
    //     filter.value.phoneNumber +
    //     "&page=1";
    //   axios
    //     .get(url)
    //     .then((res) => {
    //       noRecords.value = true;
    //       filterResult.value = res.data;
    //       console.log(filterResult.value);
    //     })
    //     .catch((err) => console.log(err));
    // };

    // const membersCount = computed(() => {
    //   if (getFirstTimerSummary.value.totalFirstTimer > 20)
    //     return Math.ceil(getFirstTimerSummary.value.totalFirstTimer / 20);
    //   return 0;
    // });

    // const currentPage = ref(1);
    // const getPeopleByPage = async (page) => {
    //   if (page < 1) return false;
    //   try {
    //     const { data } = await axios.get(
    //       `/api/People/GetPeopleBasicInfo?page=${page}`
    //     );
    //     filterResult.value = [];
    //     searchMember.value = [];
    //     noRecords.value = false;
    //     churchMembers.value = data;
    //     currentPage.value = page;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    return {
      contributionTransactions,
      // churchMembers,
      filterFormIsVissible,
      toggleFilterFormVissibility,
      // moment,
      // firstTimerSummary,
      // getFirstTimerSummary,
      // applyFilter,
      filter,
      toggleSearch,
      searchIsVisible,
      // filterResult,
      // noRecords,
      searchText,
      // searchMember,
      // showConfirmModal,
      // deleteMember,
      // membersCount,
      // currentPage,
      // getPeopleByPage,
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
  font-size: 2rem;
}

.my-con {
  /* display: flex; */
  justify-content: space-between;
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
  width: 28%;
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
  font: normal normal 800 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #1C252C;
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

  /* @media (max-width: 767px) {
    .table-responsive .dropdown-menu {
        position: static !important;
    }
}
@media (min-width: 768px) {
    .table-responsive {
        overflow: visible;
    }
} */

  /* .table-header {
    display: none;
  } */
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

  .add-btn,
  .more {
    margin-top: 10px;
  }

  .first-timers-text {
    text-align: center;
  }
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
</style>


