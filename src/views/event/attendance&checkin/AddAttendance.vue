<template>
  <div class="container-fluid mt-5">
    <div class="row mb-4">
      <div class="col-md-12">
        <h4>Add Attendance</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row my-3">
          <div class="col-md-5 text-md-right">
            <label for="" class="font-weight-600">Event</label>
          </div>
          <div class="col-md-6">
            <Dropdown
              v-model="selectedEVent"
              :options="['Sunday', 'Monday']"
              placeholder="Select event"
              :filter="true"
              filterPlaceholder="Find event"
              style="width: 100%"
            />
          </div>
        </div>

        <div class="row my-4">
          <div class="col-md-5 text-md-right">
            <label for="" class="font-weight-600">Group</label>
          </div>
          <div class="col-md-6">
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
                Select from events and activities
                <i class="pi pi-chevron-down manual-dd-icon float-right"></i>
              </button>
              <div
                class="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                <div class="row w-100 mx-auto">
                  <div class="col-md-12">
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <a class="dropdown-item font-weight-700 small-text" href="#"
                  >Action</a
                >
                <a class="dropdown-item font-weight-700 small-text" href="#"
                  >Another action</a
                >
                <a class="dropdown-item font-weight-700 small-text" href="#"
                  >Something else here</a
                >
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12 d-flex justify-content-center">
                <button class="default-btn primary-bg text-white">
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import { ref } from "vue";

export default {
  components: { Dropdown },

  setup() {
    const selectedEVent = ref("");
    return {
      selectedEVent,
    };
  },
};
</script>

<style scoped>
</style>