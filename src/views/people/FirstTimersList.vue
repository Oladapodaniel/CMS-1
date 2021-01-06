<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-4">
        <h2 class="page-header">First Timers</h2>
      </div>

      <div class="col-md-8 d-flex justify-content-end">
        <button class="more mr-3">More <i class="fa fa-angle-down"></i></button>
        <router-link to="/tenant/people/add-first-timer" class="add-btn">
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
          <div class="summary px-0">
            <p class="summary-header">Summary</p>
            <hr class="hr" />

            <div class="boards">
              <div class="board members-count">
                <div class="board-top">
                  <p class="total-text mb-0">TOTAL MEMBERS</p>
                  <img
                    class="trend-icon"
                    src="../../assets/dashboardlinks/trend-icon.svg"
                    alt=""
                  />
                </div>
                <h4 class="total">123,456</h4>
                <p>
                  <span class="percent">+3.48% </span>
                  <span class="percent-text"> Since last month</span>
                </p>
              </div>

              <!-- <div class="chart-con"> -->
              <div class="board fig">
                <ByGenderChart
                  domId="chart"
                  title="INVITATION SOURCE"
                  distance="5"
                  :titleMargin="70"
                />
              </div>
              <div class="board fig">
                <ByMaritalStatusChart
                  domId="second"
                  title="INTERESTING IN JOINING"
                  :titleMargin="70"
                />
              </div>
              <div class="board fig">
                <ByMaritalStatusChart
                  domId="set"
                  title="TO BE CONTACTED"
                  style="height: 100%"
                  :titleMargin="20"
                />
              </div>
              <!-- <div  class="board fig">
          <ByMaritalStatusChart domId="third" title="TO BE CONTACTED" distance="5" />
        </div> -->

              <!-- </div> -->
            </div>
          </div>
          <div class="table">
            <div class="top-con">
              <div class="table-top my-2">
                <div class="select-all">
                  <input type="checkbox" name="all" id="all" />
                  <label>SELECT ALL</label>
                </div>
                <div class="filter">
                  <p @click="toggleFilterFormVissibility">
                    <i class="fas fa-filter"></i>
                    FILTER
                  </p>
                </div>
                <div class="search d-flex">
                  <label
                    class="label-search d-flex"
                    :class="{ 'show-search': filterFormIsVissible }"
                  >
                    <input type="text" />
                    <span class="empty-btn">x</span>
                    <span class="search-btn">
                      <i class="fa fa-search"></i>
                    </span>
                  </label>
                  <p v-if="!filterFormIsVissible">
                    <i class="fa fa-search"></i> SEARCH
                  </p>
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
                        <div class="col-md-5 form-group inp">
                          <select name="" id="" class="form-control">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                          </select>
                        </div>

                        <div class="col-md-5 offset-md-2 form-group">
                          <input type="date" class="form-control inp" />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-5 form-group">
                          <select name="" id="" class="form-control inp">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                          </select>
                        </div>

                        <div class="col-md-5 offset-md-2 form-group">
                          <select name="" id="" class="form-control inp">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 d-flex flex-column align-items-end">
                      <button class="apply-btn">Apply</button>
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
              </div>
            </div>

            <div class="table-header">
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

            <div
              class="table-body"
              v-for="person in churchMembers"
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
                      {{ person.fullName }}
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
                    <div class="data-value">{{ person.interestedInJoining }}</div>
                  </div>
                </div>
                <div class="phone data">
                  <div class="data-con">
                    <div class="data-text">
                      <p>Date</p>
                    </div>
                    <div class="data-value">{{ person.date }}</div>
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
                    <i class="fas fa-ellipsis-v"
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
                      <a class="dropdown-item" href="#">Send SMS</a>
                      <a class="dropdown-item" href="#">Send Email</a>
                      <a class="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="row-divider" />
            </div>

            <div class="table-footer">
              <button class="tbl-footer-btn">
                <i class="fa fa-angle-left"></i>
              </button>
              <button class="tbl-footer-btn">A</button>
              <button class="tbl-footer-btn">A</button>
              <button class="tbl-footer-btn">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ByGenderChart from "@/components/charts/PieChart.vue";
import ByMaritalStatusChart from "@/components/charts/PieChart.vue";
import axios from "@/gateway/backendapi";

export default {
  props: ["list"],
  components: {
    ByGenderChart,
    ByMaritalStatusChart,
  },

  setup(props) {
    const churchMembers = ref([
      
    ]);
    // if ()

    const filterFormIsVissible = ref(false);
    const toggleFilterFormVissibility = () =>
      (filterFormIsVissible.value = !filterFormIsVissible.value);

    onMounted(() => {
      console.log(props.list, "props");
      axios.get("/api/People/FirstTimer")
          .then(res => {
            churchMembers.value = res.data;
          })
    });

    return {
      churchMembers,
      filterFormIsVissible,
      toggleFilterFormVissibility,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page-header {
  font-weight: 500;
  font-size: 2rem;
}

.my-con {
  /* display: flex; */
  justify-content: space-between;
  margin: 24px 0;
}

.summary {
  /* width: 20%; */
  border-radius: 30px;
  /* box-shadow: 0px 3px 6px #2c28281c; */
  padding: 0px 20px 0 20px;
  background: #fff;
  /* margin-bottom: 24px; */
}

.table {
  width: 99% !important;
  box-shadow: 0px 1px 4px #02172e45;
  border: 1px solid #dde2e6;
  border-radius: 30px;
  text-align: left;
}

.summary-header {
  margin: 0 10px;
  color: #02172e;
  opacity: 0.8;
  font-size: 26px;
  font-weight: 600;
}

.boards {
  display: flex;
}

.board {
  width: 30%;
  border-radius: 10px;
  border: 0.4000000059604645px solid #dde2e6;
  /* padding: 0 8px; */
  box-shadow: 0px 1px 4px #02172e45;
  box-shadow: 0px 1px 4px #02172e45;
  border: 1px solid #dde2e6;
}

.chart-con {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
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
  height: 110px !important;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.apply-btn {
  background: #136acd;
  color: #fff;
  border: 1px solid #002044;
  border-radius: 111px;
  width: 101px;
  height: 41px;
  font-weight: 700;
  outline: transparent;
}

.clear-link,
.hide-link {
  color: #136acd;
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
}

.fa-ellipsis-v:hover {
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .picture,
  .firstname,
  .lastname,
  .phone {
    width: 100%;
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

@media screen and (max-width: 768px) {
  .filter-options-shown {
    height: 300px !important;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
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

@media screen and (max-width: 1399px) {
  .boards {
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .board {
    width: 45%;
    margin: 8px;
    max-height: 310px;
  }

  .board.fig {
    box-shadow: none !important;
    border: none;
  }

  .board.members-count {
    padding: 24px;
  }

  .chart-con {
    flex-direction: column;
  }

  .summary {
    border-radius: none !important;
    box-shadow: none !important;
  }

  .board.fig {
    box-shadow: none !important;
    border: none;
  }

  .page-header {
    font-size: 1.7rem;
  }

  .total {
    font-size: 27px;
  }
}

@media screen and (min-width: 1400px) {
  .table {
    width: 68%;
    margin-top: 0;
  }

  .total-text {
    font-size: 18px;
  }

  .summary {
    width: 30%;
  }

  .my-con {
    display: flex;
    flex-direction: row-reverse;
  }

  .boards {
    display: flex;
    flex-direction: column;
  }

  .board {
    width: 100%;
    margin-bottom: 22px;
    padding: 0 8px;
  }

  .board.fig {
    padding: 24px 8px 0 8px;
    border: none;
    box-shadow: none;
  }

  .board.members-count {
    width: 95% !important;
    margin: auto;
  }

  .chart-con {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .chart-con div {
    width: 100% !important;
    margin-bottom: 10px !important;
    min-height: 390px !important;
  }
}
</style>

