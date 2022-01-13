<template>
<div class="container container-top container-wide">
  <div class="row">
    <div class="col-12 my-2 heading-text">Archived People</div>
  </div>
  <div class="table table-responsive  ">
    <div class="row table-header mt-5 font-weight-700">
      <div class="col-1 d-none d-md-block" ></div>
      <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Name</div>
      <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Phone</div>
      <div class="col-3 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Email</div>
      <div class="col-3 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Home Address</div>
      <div class="col-1 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Action</div>
      <!-- <div class="col-1 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Action</div> -->
                    <!-- <div class="col-2 d-none d-md-block">NEW CONVERTS</div> -->
  </div>
  <div class="row table-body font-weight-small mt-3">
      <div class="col-1 d-none d-md-block" ></div>
      <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:13px;">Ogbara Godstar</div>
      <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:13px;">07067664473</div>
      <div class="col-3 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:13px;">ogbaragodstar@gmail.com</div>
      <div class="col-3 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:13px;">Festac Mile 2 road</div>
      <div class="col-1 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:13px;">

        <div class="dropdown ">
                <i
                  class="fas fa-ellipsis-v cursor-pointer alignLeft"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item cursor-pointer elipsis-items">
                    Set to active
                  </a>
                  <a class="dropdown-item cursor-pointer  elipsis-items">
                    Edit
                  </a>
                  <a class="dropdown-item elipsis-items">
                    <!-- <router-link
                      :to="`/tenant/people/add/${person.id}`"
                      class="text-color"
                      >Delete</router-link
                    > -->
                  </a>
                  <a
                    class="
                      dropdown-item
                      elipsis-items
                      text-color
                      cursor-pointer
                    "
                    @click.prevent="showConfirmModal(person.id, index)"
                    >Delete</a
                  >
                </div>
              </div>
      </div>
      <!-- <div class="col-1 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Action</div> -->
                    <!-- <div class="col-2 d-none d-md-block">NEW CONVERTS</div> -->
  </div>
  </div>
</div>
</template>

<script>

import axios from "@/gateway/backendapi";
export default {
  setup() {
    
      const getArchivedPeople = () => {
        axios
        .get(`/api/Reports/people/getFirstTimersReport?startDate=${new Date(startDate.value).toLocaleDateString("en-US")}&endDate=${new Date(endDate.value).toLocaleDateString("en-US")}`)
        .then((res) => {
          console.log(res, "🎄🎄🎄");
        })
        .catch((err) => {
          console.log(err);
        });
      }
      getArchivedPeople()

    return{

    }
  },
}
</script>

<style scoped>
  .table-header{

    background: #f1f3f9!important;
    color: #8898aa!important;
    font-size: 11px!important;
    text-align: left!important;
    box-shadow: 0px 3px 6px #2c28281c!important;
}

.heading-text {
  font: normal normal 800 1.5rem Nunito sans;
}
</style>
