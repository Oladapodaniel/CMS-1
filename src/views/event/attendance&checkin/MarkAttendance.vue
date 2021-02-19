<template>
  <div class="container-fluid">
    <Dialog
      header="Create New Member"
      v-model:visible="display"
      :style="{ width: '70vw', maxWidth: '600px' }"
      :modal="true"
      position="top"
    >
      
      <div class="row">
          <div class="col-md-12">
              <NewMember />
          </div>
      </div>
      
    
    </Dialog>
    <div class="row my-5" :class="{ 'd-none': isKioskMode }">
      <div class="col-md-12">
        <h4 class="font-weight-bold">Marked Attendance</h4>
        <p class="small-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </p>
      </div>
    </div>

    <div class="row over-con">
      <div class="col-md-12 py-4">
        <div class="row">
          <div class="col-md-8">
            <p class="search-span px-2">
              <i class="pi pi-search p-2" style="height: 30px; width: 30px"></i>
              <input
                type="text"
                class="search-control"
                placeholder="Type name to filter list..."
              />
            </p>
          </div>
          <div class="col-md-4 d-md-flex justify-content-end d-none">
            <button
              class="default-btn kiosk-mode font-weight-700"
              @click="enterKioskMode"
            >
              {{ kioskButtonText }} kiosk mode
            </button>
          </div>
        </div>

        <div
          class="row mt-4 main-th font-weight-700 py-2 grey-rounded-bg"
          :class="{ 'kiosk-th-size': isKioskMode }"
        >
          <div class="col-md-5" :class="{ 'order-3': isKioskMode }">Name</div>
          <div class="col-md-3" :class="{ 'order-4': isKioskMode }">Phone</div>
          <div
            class="col-md-2 d-none"
            :class="{ 'd-flex order-2': isKioskMode }"
          >
            Picture
          </div>
          <div class="col-md-2" :class="{ 'order-1': isKioskMode }">
            Check-in
          </div>
          <div class="col-md-2" :class="{ 'd-none': isKioskMode }">
            Check-out
          </div>
        </div>

        <div class="row py-2 tb-row" :class="{ 'kiosk-tb-size': isKioskMode }">
          <div class="col-md-5" :class="{ 'order-3': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Name</span>
              <span><router-link to="/tenant/attendancecheckin/tag">name</router-link></span>
            </span>
          </div>
          <div class="col-md-3" :class="{ 'order-4': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700"
                >Phone Number</span
              >
              <span>09887654434444</span>
            </span>
          </div>
          <div class="col-md-2" :class="{ 'order-1': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Check-in</span>
              <span>
                <Checkbox id="binary" :binary="true" />
              </span>
            </span>
          </div>
          <div
            class="col-md-2 d-none"
            :class="{ 'order-1 d-flex': isKioskMode }"
          >
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Picture</span>
              <span
                style="
                  width: 35px;
                  height: 35px;
                  border: 1px solid;
                  border-radius: 50%;
                "
              ></span>
            </span>
          </div>
          <div class="col-md-2" :class="{ 'd-none': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Check-out</span>
              <span><Checkbox id="binary" :binary="true" /></span>
            </span>
          </div>
        </div>

        <div class="row py-4">
          <div class="col-md-12 text-center">
            <p class="my-2">No records found</p>
          </div>
          <div class="col-md-12 d-flex justify-content-center mt-4">
            <button
              class="default-btn primary-bg border-0 text-white"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add member
            </button>
          </div>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">Add Member</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row my-4">
                  <div class="col-md-4 text-md-right">
                    <label for="" class="font-weight-600">Name</label>
                  </div>
                  <div class="col-md-7">
                    <div class="dropdown">
                      <button
                        class="default-btn w-100 text-left pr-1"
                        type="button"
                        style="
                          border-radius: 4px;
                          border: 1px solid #ced4da;
                          color: #6c757d;
                        "
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select member from the database
                        <div
                          class="pi pi-chevron-down manual-dd-icon float-right pr-1"
                        ></div>
                      </button>
                      <div
                        class="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="row w-100 mx-auto">
                          <div class="col-md-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Find event"
                            />
                          </div>
                        </div>

                        <a
                          class="dropdown-item font-weight-700 small-text"
                          href="#"
                          >Action</a
                        >
                        <a
                          class="dropdown-item font-weight-700 small-text"
                          href="#"
                          >Another action</a
                        >
                        <a
                          class="dropdown-item font-weight-700 small-text"
                          href="#"
                          >Something else here</a
                        >
                        <a
                          class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
                          style="border-top: 1px solid #002044; color: #136acd"
                           @click="showAddMemberForm"
                           data-dismiss="modal"
                        >
                          <i class="pi pi-plus-circle mr-2 primary-text d-flex align-items-center" style="color: #136acd"></i>
                          Create new event
                        </a>
                      </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-6 d-md-flex justify-content-end">
                            <button class="default-btn">Cancel</button>
                        </div>
                        <div class="col-md-6">
                            <button class="default-btn primary-bg border-0 text-white" data-dismiss="modal">Save</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import NewMember from "../../../views/event/attendance&checkin/NewMember";

export default {
  components: { NewMember },
  setup() {
    const isKioskMode = ref(false);
    const route = useRoute();
    const display = ref(false);

    const enterKioskMode = () => {
      isKioskMode.value = !isKioskMode.value;
      route.query.mode = "kiosk";
    };

    const kioskButtonText = computed(() => {
      return isKioskMode.value ? "Exit" : "Launch";
    });

    const showAddMemberForm = () => {
        display.value = true;
    };

    return {
      isKioskMode,
      enterKioskMode,
      kioskButtonText,
      display,
      showAddMemberForm,
    };
  },
};
</script>

<style scoped>
* {
  color: #02172e;
  /* font-family: Nunito Sans !important; */
}

.hide {
  display: none !important;
}

@media screen and (max-width: 767px) {
  .main-th {
    display: none;
  }

  .hide {
    display: flex !important;
  }
}

.search-control {
  width: calc(100% - 30px);
  padding: 0.38rem;
  border: none;
  background: transparent;
  outline: transparent;
}

.search-span {
  background: #f5f8f9;
  border-radius: 200px;
  width: 100%;
}

.kiosk-mode {
  background: #dde2e6;
  border-radius: 20px;
  border: transparent;
}

.main-th {
  background: #f5f8f9;
  border: 1px solid #4762f01f;
}

.tb-row {
  border-bottom: 1px solid #4762f01f;
}

.over-con {
  border: 1px solid #4762f01f;
}

.kiosk-th-size {
  font-size: 20px;
}

.kiosk-tb-size {
  font-size: 18px;
}

.modal-lg {
    max-width: 600px;
}
</style>