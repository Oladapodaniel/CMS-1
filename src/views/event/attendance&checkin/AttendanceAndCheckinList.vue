
<template>
  <div class="container-wide">
    <!-- <div class="row d-flex my-3">
      <div class="col-sm-4 mt-4">
        <h2 class="page-header">Attendance and Checkin</h2>
      </div>

      <div class="col-sm-8 head-button mt-3">
        <button class="add-btn">Add New Attendance</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <hr />
      </div>
    </div> -->

    <!-- table area -->
    <div class="table mx-0">
      <div
        class="d-none d-md-flex table-header font-weight-700 justify-content-between"
      >
        <div class="col-md-4 alist">
          <p>Attendance List</p>
        </div>
        <div class="col-md-3 dcreated">
          <p>Date Created</p>
        </div>
        <div class="col-md-3 tattendance">
          <p>Total Attendance</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      <!--end of table header area -->

      <!-- table body starts here -->
      <!-- <hr class="mt-n4" /> -->
      <!-- table body starts here -->

      <div class="row font-weight-700 justify-content-between">
        <div class="col-md-4">
          <p class="d-flex ml-2 justify-content-between">
            <span class="d-flex d-md-none alist2">Attendance List</span>
            <span class="elist elist2">Sunday List</span>
          </p>
        </div>
        <div class="col-md-3">
          <p class="d-flex justify-content-between">
            <span class="d-flex d-md-none tattendance2">Date Created</span>
            <span class="edate edate2">12/12/20201</span>
          </p>
        </div>
        <div class="col-md-3">
          <p class="d-flex justify-content-between">
            <span class="d-flex d-md-none dcreated2">Total Attendance</span>
            <span class="eattendance eattendance2">100</span>
          </p>
        </div>

        <div class="col-md-2" @click="toggleEllips">
          <i
            class="d-flex fas fa-ellipsis-v ion ion2 c-pointer"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></i>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item elipsis-items"> View Details </a>
            <a class="dropdown-item elipsis-items"> Checkin </a>
            <a
              class="dropdown-item elipsis-items"
              href="#"
              @click.prevent="showConfirmModal(person.id, index)"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end of table area -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const expose = ref(false);

    const toggleEllips = () => {
      toggleEllips.value = !toggleEllips.value;
    };

    return {
      expose,
      toggleEllips,
    };
  },
};
</script>

<style scoped>
* {
  font-size: 62.5%;
}

.table {
  border-radius: 0.5rem;
}

.table-header {
  border-radius: 0.5rem 0.5rem 0 0;
}

.page-header {
  font-family: Nunito sans;
  font-size: 22px;
  font-weight: 800;
  color: #212529;
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
  font-size: 1rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
}

.dcreated,
.tattendance,
.alist {
  font-size: 1.3rem;
  font-weight: 700;
  color: #212529;
}

.dropdown-item {
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  cursor: pointer;
}

.dcreated2,
.tattendance2,
.alist2 {
  font-size: 0.8rem;
  font-weight: 700;
  color: #212529;
  margin: 0.8rem 0.8rem;
}

.elist,
.eattendance,
.edate {
  font-size: 1rem;
  font-weight: 300;
  color: #212529;
}

.elist2,
.eattendance2,
.edate2 {
  font-size: 1rem;
  font-weight: 300;
  color: #212529;
  margin: 0.8rem 0.8rem;
}

.ion {
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: start;
}

.ion2 {
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: end;
  margin: 0.8rem 0.8rem;
}

.hr {
  margin-top: -2rem;
}

/* background: #0f529f; */

@media (max-width: 414px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .page-header {
    font-family: Nunito sans;
    font-size: 22px;
    font-weight: 800;
    color: #212529;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: -0.8rem;
  }

  .add-btn {
    width: 180px;
    background: #136acd;
    border-radius: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.8rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    text-decoration: none;
    margin-top: 1rem;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    justify-items: left;
  }
}

@media (max-width: 575px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .page-header {
    font-family: Nunito sans;
    font-size: 22px;
    font-weight: 800;
    color: #212529;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: -0.8rem;
  }

  .add-btn {
    width: 180px;
    background: #136acd;
    border-radius: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.8rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    text-decoration: none;
    margin-top: 1rem;
  }

  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }
}
</style>