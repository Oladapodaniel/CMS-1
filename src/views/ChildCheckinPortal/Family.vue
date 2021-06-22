<template>
  <div
    class="container-fluid container-wide container-top">
    <!-- Header Area -->
    <div
      class="row d-flex justify-content-center justify-content-sm-between">
      <div class="family-header">Family</div>
      <div
        class="
          button-add-member
          default-btn
          border-0
          text-white
          c-pointer
          modal-dialog-centered
        "
        data-toggle="modal"
        data-target="#familyModal"
        style="border: 2px solid yellow"
      >
        Add Member
      </div>
    </div>
    <!--End of Header Area -->

    <!-- Button trigger modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="familyModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-large">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title header1" id="exampleModalLabel">Add New Member</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <memberform/>
          </div>

        </div>
      </div>
    </div>
     <!--End of Modal -->

    <!-- Table Area -->
    <div class="row mt-5">
      <div class="col-12 col-sm-12">
        <div class="row">
          <div class="col-12 px-0 mb-0 table">
            <div class="top-con">
              <div class="table-top">
                <div class="filter col-2">
                  <p class="mt-2">
                    <i class="fa fa-print"></i>
                    SORT
                  </p>
                </div>
                <div class="filter col-2">
                  <p @click="toggleFilterFormAppearance" class="mt-2">
                    <i class="fas fa-filter"></i>
                    FILTER
                  </p>
                </div>
                <div class="col-2">
                  <p @click="toggleSearchBtn" class="search-text w-100 mt-2">
                    <i class="fa fa-search"></i> SEARCH
                  </p>
                </div>

                <div class="search d-flex ml-2">
                  <label
                    class="label-search d-flex"
                    :class="{
                      'show-search': showSearch,
                      'hide-search': !showSearch,
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
              :class="{ 'filter-options-shown': showFilterForm }"
              id="ignore1"
            >
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-9">
                    <div class="row">
                      <div
                        class="
                          col-12 col-sm-6 col-md-4
                          offset-sm-3 offset-md-0
                          form-group
                          inp
                          w-100
                        "
                      >
                        <!-- <div class="input-field"> -->

                        <input
                          type="text"
                          class="input w-100"
                          placeholder="Name"
                        />
                      </div>

                      <div class="col-12 col-md-4 form-group d-none d-md-block">
                        <input
                          type="text"
                          class="input w-100"
                          placeholder="PhoneNumber"
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

            <!-- contribution -->
            <!-- <div v-if="searchContribution.length > 0"> -->
            <div class="container-fluid d-none d-md-block">
              <div class="row t-header">
                <!-- <div class="col-12 parent-desc first p-2 pl-4"> -->
                <div class="col-md-1 px-3"></div>
                <div
                  class="small-text text-capitalize col-md-1 font-weight-bold header-textarea"
                >
                  PICTURE
                </div>
                <div
                  class="small-text text-capitalize col-md-2 font-weight-bold header-textarea"
                >
                  FIRSTNAME
                </div>
                <div
                  class="small-text text-capitalize col-md-2 font-weight-bold header-textarea"
                >
                  LASTNAME
                </div>
                <div
                  class="small-text text-capitalize col-md-2 font-weight-bold header-textarea"
                >
                  PHONE
                </div>
                <div
                  class="small-text text-capitalize col-md-1 font-weight-bold header-textarea"
                >
                  ROLE
                </div>
                <div
                  class="small-text text-capitalize col-md-2 font-weight-bold header-textarea"
                >
                  GROUP
                </div>
                <!-- </div> -->
              </div>
            </div>

            <div class="row" style="margin: 0">
              <div
                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom hover">
                <div class="row w-100" style="margin: 0">
                  <div
                    class="col-md-1 d-flex d-md-block px-3 justify-content-end"
                  >
                    <input type="checkbox" class="form-check" />
                  </div>

                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PICTURE</span
                      >
                      <span class="text-decoration-none img-resize"> <img class="img-resize2" src="../../assets/checkin-assets/random.jpg" w="40" alt=""> </span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >FIRSTNAME</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          Tolani
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="desc-head small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >LASTNAME</span
                      >
                      <span> Ajose</span>
                    </p>
                  </div>

                  <div class="small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PHONE</span
                      >
                      <span
                        ><span class="primary-text c-pointer">
                          07051175205</span
                        ></span
                      >
                    </p>
                  </div>


                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >ROLE</span
                      >
                      <span class="text-decoration-none">FATHER</span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >GROUP</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          LightBearer
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="small-text col-md-1">
                    <div class="action data action-icon">
                      <div class="dropdown">
                        <i
                          class="fas fa-ellipsis-v cursor-pointer"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></i>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item elipsis-items">
                            View Report
                          </a>
                          <a class="dropdown-item elipsis-items"> Edit </a>
                          <a
                            class="dropdown-item elipsis-items cursor-pointer"
                            @click="showConfirmModal(item.id, index)"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" style="margin: 0">
              <div
                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom hover">
                <div class="row w-100" style="margin: 0">
                  <div
                    class="col-md-1 d-flex d-md-block px-3 justify-content-end"
                  >
                    <input type="checkbox" class="form-check" />
                  </div>

                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PICTURE</span
                      >
                      <span class="text-decoration-none img-resize"> <img class="img-resize2" src="../../assets/checkin-assets/random.jpg" w="40" alt=""> </span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >FIRSTNAME</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          Tolani
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="desc-head small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >LASTNAME</span
                      >
                      <span> Ajose</span>
                    </p>
                  </div>

                  <div class="small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PHONE</span
                      >
                      <span
                        ><span class="primary-text c-pointer">
                          07051175205</span
                        ></span
                      >
                    </p>
                  </div>


                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >ROLE</span
                      >
                      <span class="text-decoration-none">FATHER</span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >GROUP</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          LightBearer
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="small-text col-md-1">
                    <div class="action data action-icon">
                      <div class="dropdown">
                        <i
                          class="fas fa-ellipsis-v cursor-pointer"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></i>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item elipsis-items">
                            View Report
                          </a>
                          <a class="dropdown-item elipsis-items"> Edit </a>
                          <a
                            class="dropdown-item elipsis-items cursor-pointer"
                            @click="showConfirmModal(item.id, index)"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="row" style="margin: 0">
              <div
                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom hover">
                <div class="row w-100" style="margin: 0">
                  <div
                    class="col-md-1 d-flex d-md-block px-3 justify-content-end"
                  >
                    <input type="checkbox" class="form-check" />
                  </div>

                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PICTURE</span
                      >
                      <span class="text-decoration-none img-resize"> <img class="img-resize2" src="../../assets/checkin-assets/random.jpg" w="40" alt=""> </span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >FIRSTNAME</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          Tolani
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="desc-head small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >LASTNAME</span
                      >
                      <span> Ajose</span>
                    </p>
                  </div>

                  <div class="small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PHONE</span
                      >
                      <span
                        ><span class="primary-text c-pointer">
                          07051175205</span
                        ></span
                      >
                    </p>
                  </div>


                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >ROLE</span
                      >
                      <span class="text-decoration-none">FATHER</span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >GROUP</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          LightBearer
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="small-text col-md-1">
                    <div class="action data action-icon">
                      <div class="dropdown">
                        <i
                          class="fas fa-ellipsis-v cursor-pointer"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></i>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item elipsis-items">
                            View Report
                          </a>
                          <a class="dropdown-item elipsis-items"> Edit </a>
                          <a
                            class="dropdown-item elipsis-items cursor-pointer"
                            @click="showConfirmModal(item.id, index)"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" style="margin: 0">
              <div
                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom hover">
                <div class="row w-100" style="margin: 0">
                  <div
                    class="col-md-1 d-flex d-md-block px-3 justify-content-end"
                  >
                    <input type="checkbox" class="form-check" />
                  </div>

                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PICTURE</span
                      >
                      <span class="text-decoration-none img-resize"> <img class="img-resize2" src="../../assets/checkin-assets/random.jpg" w="40" alt=""> </span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >FIRSTNAME</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          Tolani
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="desc-head small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >LASTNAME</span
                      >
                      <span> Ajose</span>
                    </p>
                  </div>

                  <div class="small-text col-md-2">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >PHONE</span
                      >
                      <span
                        ><span class="primary-text c-pointer">
                          07051175205</span
                        ></span
                      >
                    </p>
                  </div>


                  <div class="desc small-text col-md-1">
                    <p class="mb-0 d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >ROLE</span
                      >
                      <span class="text-decoration-none">FATHER</span>
                    </p>
                  </div>

                  <div class="col-md-2">
                    <div class="d-flex justify-content-between">
                      <span class="text-dark font-weight-bold d-flex d-md-none"
                        >GROUP</span
                      >
                      <div>
                        <div class="desc small-text text-right text-md-left">
                          LightBearer
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="small-text col-md-1">
                    <div class="action data action-icon">
                      <div class="dropdown">
                        <i
                          class="fas fa-ellipsis-v cursor-pointer"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></i>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item elipsis-items">
                            View Report
                          </a>
                          <a class="dropdown-item elipsis-items"> Edit </a>
                          <a
                            class="dropdown-item elipsis-items cursor-pointer"
                            @click="showConfirmModal(item.id, index)"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <!--End of Table Area -->
  </div>
</template>

<script>
import { ref } from "vue";
import memberform from "./memberform.vue";
export default {
   components: { memberform},
  setup() {
    const showFilterForm = ref(false);
    const showSearch = ref(false);
    const toggleFilterFormAppearance = () =>
      (showFilterForm.value = !showFilterForm.value);
    const toggleSearchBtn = () => {
      showSearch.value = !showSearch.value;
    };



    return {
      showFilterForm,
      toggleFilterFormAppearance,
      showSearch,
      toggleSearchBtn,
    };
  },
};
</script>

<style scoped>
.modal-large{
  width:100%;
  max-width: 680px;
}
.t-header {
  background: #F1F3F9 0% 0% no-repeat padding-box;
  /* font-size: 16px; */
  width: 103%;
  height: 45px;
  padding: .5rem 0;
}

.button-add-member {
  background: #136acd 0% 0% no-repeat padding-box;
  border-radius: 22px;
}

.family-header {
  font: normal normal 800 29px/46px Nunito Sans;
  letter-spacing: 0px;
  color: #02172e;
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

.header-textarea{
  font: normal normal normal 11px/13px Nunito Sans;
  color: #8898AA;
}

.img-resize{
  width:2.2rem ;
  height:2.2rem ;
}

.img-resize2{
 width:100%;
  height:100%;
  border-radius: 50%;
}

/* modal style */
.header1{
font: normal normal 800 34px/46px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.image1{
border-radius: 22px;
width: 267px;
height: 336px;
}
.person-img{
width: 170px;
height: 174px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 20px;
opacity: 1;
}

/*End of modal style */
</style>