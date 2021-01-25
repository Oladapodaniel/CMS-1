<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="top mt-3">
          <div class="header">
            <h2>Events</h2>
          </div>
          <div class="actions">
            <button class="more-btn button">
              More
              <span><i class="fa fa-angle-down btn-icon"></i></span>
            </button>
            
            <button @click="addPersonClicked" class="button add-person-btn">
              Add Event
            </button>
    
          </div>
        </div>
      </div>
    </div>
  </div> -->
        <!-- <hr class="hr" /> -->
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="avg">Overall Average</div>
            </div>
          </div>
                 
            <div class="row avg-table">
                <div class="col-6 col-md-3 first-row">
                    <div>Attendance</div>
                    <div>{{ eventSummary.attendance }}</div>
                </div>
                <div class="col-6 col-md-3">
                    <div>Offering</div>
                    <div>${{ eventSummary.offerings }}</div>
                </div>
                <div class="col-6 col-md-3">
                    <div>First Timers</div>
                    <div>{{ eventSummary.firstTimers }}</div>
                </div>
                <div class="col-6 col-md-3">
                    <div>New Converts</div>
                    <div>{{ eventSummary.newConverts }}</div>
                </div>
                <div class="col-12">
                  <div>Last Updated 2 hours ago</div>
                </div>
            </div>
            </div>
          <hr class="hr" />
        <!-- </div> -->
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="table table-responsive">
            <div class="top-con">
              <!-- <div class="table-top my-2">
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
                <div class="filter">
                  <p>
                    <i class="fas fa-filter"></i>
                    SORT
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
              </div> -->
              <div class="table-top my-3">
                  <div class="select-all">
                    <input type="checkbox" name="all" id="all" @click="toggleSelect" v-model="selectAll"/>
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
                      <input type="text" placeholder="Search..." />
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
                        <div class="col-md-5 form-group">
                          <select name="" id="" class="form-control inp">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                          </select>
                        </div>

                        <div class="col-md-5 form-group">
                          <select name="" id="" class="form-control inp">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                          </select>
                        </div>
                      </div>

                      <div class="row">
                        

                        <div class="col-md-5 form-group">
                          <input type="date" class="form-control inp" />
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
              </div> -->
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
                  <button class="apply-btn text-white" @click="applyFilter" :disabled="disableBtn">
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
            </div>

            
            <table class="w-100" >
                <thead class="thead">
                <tr>
                  <th>STATUS</th>
                  <th>EVENT NAME</th>
                  <th>TITLE</th>
                  <th>DATE</th>
                  <th>ATTENDANCE</th>
                  <th>FIRST TIMERS</th>
                  <th>NEW CONVERTS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(event,index) in events"
              :key="index">
                  <td> <div class="td-first">Unsent</div></td>
                  <td>{{ event.eventName }}</td>
                  <td>{{ event.title }}</td>
                  <td>{{ event.activityDate }}</td>
                  <td>{{ event.attendances }}</td>
                  <td>{{ event.firstTimers }}</td>
                  <td>{{ event.newConverts }}</td>
              </tr>
              </tbody>
              </table>

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

        


    
</template>

<script>
import axios from '@/gateway/backendapi'
import { ref } from 'vue'
export default {
    setup() {
      const events = ref(getEventList())
      const  filterFormIsVissible = ref(false)
      const searchIsVisible = ref(false)
      // const attendanceAverage = ref(null)
      // const firstTimerAverage = ref(null)
      // const newConvertAverage = ref(null)
      const eventSummary = ref({})

      async function getEventList () {
        return await axios.get('/api/eventreports/eventReports')
          .then(res => {
            events.value = res.data
            console.log(res.data)
            // attendanceAverage.value = res.data.map(i => { return i.attendances }).reduce((a, b) => { return a + b })
            // firstTimerAverage.value = res.data.map(i => { return i.firstTimers }).reduce((a, b) => { return a + b })
            // newConvertAverage.value = res.data.map(i => { return i.newConverts }).reduce((a, b) => { return a + b })
          })
          .catch(err => console.log(err))
      }

      const getEventSummary = async () => {
        try {
          const { data } = await axios.get("/api/Events/Eventsummary")
          console.log(data)
          eventSummary.value = data
        }
        catch (err) {
          console.log(err.response)
        }
      }
      getEventSummary()

      const toggleFilterFormVissibility = () => {
         filterFormIsVissible.value = ! filterFormIsVissible.value
      }

      const toggleSearch = () => {
      searchIsVisible.value = !searchIsVisible.value
   }

      // const attendanceAverage = computed(() => {
        // return events.value.reduce( (a, b) => { return a.attendances + b.attendances })
        // return events.value
        // return events.value.map(i => { return i.attendances })
        // return events.value.forEach(i => {return i.attendances })
      // })

      return { events,  filterFormIsVissible, toggleFilterFormVissibility, searchIsVisible, toggleSearch, eventSummary }
    }
}
</script>

<style scoped>
    * {
  box-sizing: border-box;
}

/* .events {
  font: normal normal 800 28px Nunito sans;
}

.btn-preview {
  border: 1px solid #797e81;
  border-radius: 22px;
}

.btn-save {
  background: #136acd 0% 0% no-repeat padding-box;
  border-radius: 22px;
  color: white;
  /* border: 2px solid red; 
} */
.whole-con {
  display: flex;
  /* background: #f1f5f8; */
  /* height: 100vh; */
}

.main-con {
  width: 100%;
  height: 70%;
}

.main-body {
  height: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.button {
  padding: 8px 10px;
  border: none;
  border-radius: 22px;
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
}

.button:hover {
  cursor: pointer;
}

.add-person-btn {
  background: #136acd;
  color: #fff;
}

.btn-icon {
  padding: 0 8px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.page-header {
    font-weight: 800;
    font-size: 40px;
}
.more-btn {
  background: #dde2e6;
}

.my-con {
  /* display: flex; */
  justify-content: space-between;
  margin: 24px 0;
}

.summary {
  /* width: 20%; */
  border-radius: 30px;
  box-shadow: 0px 3px 6px #2c28281c;
  padding: 0px 20px 0 20px;
  background: #fff;
  margin-bottom: 24px;
}

.table {
  /* box-shadow: 0px 1px 4px #02172e45; */
  border: 1px solid #dde2e6;
  border-radius: 30px;
  text-align: left;
  width: 100%;
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
  /* box-shadow: 0px 3px 6px #2c28281c; */
  padding: 0 4px;
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
  /* padding-left: 6px; */
}

.theader {
  margin: 0;
}

.filter-options {
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.filter-options-shown {
  height: 130px !important;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.apply-btn {
  background: #136acd;
  color: #fff;
  border-radius: 111px;
  width: 101px;
  height: 41px;
  border: none;
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
  padding-top: 20px;
  padding-left: 20px;
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
    background: #136ACD;
    border-radius: 22px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
}

.more {
    background: #DDE2E6;
    border-radius: 22px;
    width: 180px;
    font-weight: bold;
    border: transparent;
    outline: transparent;
    height: 42px;
}

.average {
    box-shadow: 0px 1px 4px #02172e45;
  border: 1px solid #dde2e6;
  border-radius: 30px;
  padding: 10px;
}

/* .average  */
.avg {
  font: normal normal bold 24px/32px Nunito Sans;
  letter-spacing: 0px;
  color: #136ACD;
  margin-top: 1em;
}

.avg-table {
  margin-top: 2em;
  border: 1px solid #00204445;
  border-radius: 10px;
  margin: 2em 10px;
  padding: 10px;
}
.avg-table > div > div:first-child {
  font: normal normal 600 16px/13px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
  padding: 15px;
}

.avg-table > div > div:nth-child(2) {
  font: normal normal normal 32px/13px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
  padding: 15px;
}

.avg-table > div:nth-child(5) {
  font: normal normal normal 14px/13px Nunito Sans;
letter-spacing: 0px;
color: #002044;
}

.thead {
  background: #f1f3f9;
  padding: 0 25px;
  font-size: 0.7em;
}

.td-first {
  font: normal normal 800 14px/19px Nunito Sans;
letter-spacing: 0px;
color: #700303;
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;
background: #da320870;
padding: 7px;
}

.top-con {
  padding: 0px 25px;
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
    /* text-align: center; */
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

@media screen and (min-width: 500px) {
  /* .picture,
  .firstname,
  .lastname,
  .phone {
    width: 19%;
  } */
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
  padding: 10px 25px;
  border-radius: 0px 0px 22px 22px;
}

@media screen and (max-width: 1399px) {
  .boards {
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: space-around;
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
}

@media screen and (min-width: 1400px) {
  .table {
    margin-top: 2em;
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