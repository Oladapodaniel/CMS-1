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
  <div class="row table-body font-weight-small mt-3" v-for="(archived,index) in archivedMember" :key="index">
      <div class="col-1 text-center d-none d-md-block" > <input type="checkbox"></div>
      <div class="col-2 d-none d-md-block small-text text-secondary text-capitalize " style="font-size:14px;">{{archived.firstName}} {{archived.lastName}}</div>
      <div class="col-2 d-none d-md-block small-text text-secondary  text-capitalize " style="font-size:14px;">{{archived.mobilePhone}}</div>
      <div class="col-3 d-none d-md-block small-text text-secondary  text-capitalize " style="font-size:14px;">{{archived.email}}</div>
      <div class="col-3 d-none d-md-block small-text text-secondary  text-capitalize " style="font-size:14px;">{{archived.homeAddress}}</div>
      <div class="col-1 d-none d-md-block small-text text-secondary  text-capitalize " style="font-size:14px;">

        <div class="dropdown text-center ">
                <i
                  class="fas fa-ellipsis-v cursor-pointer alignLeft"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item cursor-pointer elipsis-items"
                  >
                    Unarchive
                  </a>
                  <div class="dropdown-item cursor-pointer  elipsis-items">
                     <router-link
                              :to="{
                                name: 'AddPerson',
                                params: { personId: archived.id },
                              }"
                            >
                              <a class="dropdown-item cursor-pointer elipsis-items"> Edit </a>
                            </router-link>
                    <!-- Edit -->
                  </div>
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
import  { ref } from "vue";
import axios from "@/gateway/backendapi";
export default {

  setup() {
      // const ArchivedMember = ref([]);
      const archivedMember = ref([]);

      const getArchivedPeople = () => {
        axios
        .get('/api/People/archivedmembers')
        .then((res) => {
          archivedMember.value = res.data;
          console.log(res.data, "🎄🎄🎄");
        })
        .catch((err) => {
          console.log(err);
        });
      }
      getArchivedPeople()

    return{
      archivedMember
      // ArchivedMember,
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
