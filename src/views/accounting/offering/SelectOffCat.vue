<template>
  <div class="container-wide">
    <div class="row my-3">
      <div class="col-sm-4 first-timers-text">
        <h2 class="page-header"><bold>Offerings</bold></h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
    </div>

    <!-- input area -->
    <div class="row my-5 mx-auto">
      <div class="col-lg-9 col-sm-12 my-auto">
        <div class="input-field">
          <label for="" class="label">Name</label>
          <input
            type="text"
            class="input form-control"
            placeholder=""
            required
          />
        </div>
        <div class="input-field">
          <label for="" class="label">Income Account</label>
          <input type="text" class="input form-control" placeholder="" />
        </div>
        <div class="input-field">
          <label for="" class="label">Cash Account</label>
          <input type="text" class="input form-control" placeholder="" />
        </div>
      </div>
    </div>
    <!-- End input area -->

    <!-- elipse Area -->
    <div class="col-sm-12 ml-2" @click="toggleRem">
      <span class="row">
        <!-- <input type="checkbox" class="form-check" /> -->
        <i class="check-it mr-2">
          <span class="child" v-if="applyRem"></span>
        </i>
        <h6>Apply Remitance</h6>
      </span>
    </div>
    <!-- End of elipse Area -->

    <!-- diisplay bottom area -->
    <div class="row my-3" v-if="applyRem">
      <div class="col-md-12">
        <hr />
      </div>
    </div>

    <div class="col-lg-12" v-if="applyRem">
      <div class="row">
        <div class="col-sm-4 col-12 offset-sm-1">
          <div class="">Account</div>
          <select class="form-control mt-2">
            <option selected>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="col-sm-4 col-12 mt-3 mt-sm-0">
          <div class="">Percentage %</div>

          <div class="mt-2">
            <input type="text" class="form-control" placeholder="" />
          </div>
        </div>

        <div class="col col-sm-2 col-12 mt-3 mt-sm-0">
          <button
            v-on:click="enableGroupName"
            class="btn btnIcons btn-secondary"
          >
            <i class="fa fa-plus-circle icons" aria-hidden="true"></i>
            Add
          </button>
        </div>
      </div>
    </div>
    <!--end of diisplay bottom area -->
  </div>
</template>









<script>
import { ref } from "vue";
export default {
  setup() {
    const applyRem = ref(false);

    const toggleRem = () => {
      applyRem.value = !applyRem.value;
    };

    return {
      applyRem,
      toggleRem,
    };
  },
};
</script>

<style scoped>
.btnIcons {
  width: 110px;
  height: 35px;
  color: #136acd;
  background-color: #dde2e6;
  border-radius: 40px;
  border: none;
}

.check-it {
  border: 2px solid #136acd;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: -1px;
}

.icons {
  color: #136acd;
}
.check-it .child {
  /* border: 2px solid red; */
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #136acd;
  position: relative;
  left: 3px;
  top: -4px;
}

@media (min-width: 576px) {
  .btnIcons {
    margin-top: 33px;
  }
}

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
  /* padding: 0 21px; */
}
/* 
.

.table-header p.name {
  width: 20em;
  margin-left: 0;
}

.picture .phoneNum {
  margin-left: 14px;
}

.picture .source, .firstname .interested {
  margin-left: 17px;
}

.lastname .date {
  margin-left: 19px;
}

.phone .status {
  margin-left: 20px;
} */

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
  background: #f1f3f9;

  /*
    ; */
}

.header tr {
  color: #8898aa;
  font-size: 11px;
  box-shadow: 0px 3px 6px #2c28281c;
}

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


