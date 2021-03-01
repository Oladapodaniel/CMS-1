<template>
  <div class="container-fluid mt-5">
    <div class="row mb-4">
      <div class="col-md-12">
        <h4>Add Attendance</h4>
      </div>
      <Dialog
        header="Create Event Category"
        v-model:visible="display"
        :style="{ width: '70vw', maxWidth: '600px' }"
        :modal="true"
        position="top"
      >
        <div class="row">
          <div class="col-md-12">
            <CreateEventModal @new-created="newCategoryCreated" @closeeventmodal="closeModal" />
          </div>
        </div>
      </Dialog>
    </div>

    <div class="row">
      <div class="col-md">
        <div class="modal" tabindex="-1" role="dialog" id="newActModal" :data-toggle="showBtModal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Create Event</h5>
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
                    <label for="" class="font-weight-600">Event category</label>
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
                        {{ selectedCategoryName }}
                        <i
                          class="pi pi-chevron-down manual-dd-icon float-right pr-1"
                        ></i>
                      </button>
                      <div
                        class="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuButton"
                        style="max-height: 350px;overflow-y:auto"
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
                          class="dropdown-item font-weight-700 small-text py-2 c-pointer"
                          v-for="(category, index) in eventCategories"
                          :key="index"
                          @click="selectCategory(category)"
                          >{{ category.name }}</a
                        >
                        <!-- Hidden -->
                        <a
                          class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
                          style="border-top: 1px solid #002044; color: #136acd"
                          data-dismiss="modal"
                          @click="() => (display = true)"
                        >
                          <i
                            class="pi pi-plus-circle mr-2 d-flex align-items-center c-pointer"
                            style="color: #136acd"
                          ></i>
                          Create new event
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4 text-md-right">
                    <label for="">Event date</label>
                  </div>
                  <div class="col-md-7">
                    <input type="date" class="form-control" v-model="newAcctivityDate" />
                  </div>
                </div>

                <div class="row py-2 mt-4">
                  <div class="col-md-4 text-md-right">
                    <label for=""></label>
                  </div>
                  <div class="col-md-7 d-flex justify-content-center">
                    <button
                      class="default-btn mr-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      class="default-btn primary-bg border-0 ml-2 text-white"
                      @click="createNewActivity"
                      data-dismiss="modal"
                      :data-toggle="showBtModal"
                      ref="popModal"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9 col-md-11">
        <div class="row my-4">
          <div class="col-md-5 text-md-right">
            <label for="" class="font-weight-600">Event</label>
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
                {{
                  !selectedEvent.name
                    ? "Select from events and activities"
                    : selectedEvent.name.length > 30
                    ? `${selectedEvent.name.slice(0, 30)}...`
                    : selectedEvent.name
                }}
                <i
                  class="pi pi-chevron-down manual-dd-icon float-right pr-1"
                ></i>
              </button>
              <div
                class="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                <div class="row w-100 mx-auto" v-if="events.length > 5">
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Find event"
                    />
                  </div>
                </div>

                <a
                  class="dropdown-item font-weight-700 small-text py-2 c-pointer"
                  v-for="(event, index) in events"
                  :key="index"
                  @click="selectEvent(event)"
                  >{{ event.name }}</a
                >
                <!-- Hidden -->
                <a
                  class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text"
                  style="border-top: 1px solid #002044; color: #136acd"
                  href="#"
                  data-toggle="modal" data-target="#newActModal"
                >
                  <i
                    class="pi pi-plus-circle mr-2 d-flex align-items-center"
                    style="color: #136acd"
                  ></i>
                  Create new event
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row my-3">
          <div class="col-md-5 text-md-right">
            <label for="" class="font-weight-600">Group</label>
          </div>
          <div class="col-md-6">
            <Dropdown
              v-model="selectedGroup"
              :options="groups"
              optionLabel="name"
              placeholder="Select group"
              :filter="true"
              filterPlaceholder="Search grouped contacts"
              style="width: 100%"
            />
            <div class="row mt-5">
              <div class="col-md-12 d-flex justify-content-center">
                <button
                  class="default-btn primary-bg text-white border-0 contn-btn"
                  @click="onContinue"
                  :disabled="!selectedEvent.id || !selectedGroup.id"
                >
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row"></div>
      </div>

      <div class="col-lg-3 col-md-1"></div>
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import { computed, ref } from "vue";
import router from "@/router/index";
import groupService from "../../../services/groups/groupsservice";
import eventsService from "../../../services/events/eventsservice";
import CreateEventModal from "../../../components/attendance/AttendanceEventModal";
import attendanceservice from "../../../services/attendance/attendanceservice";
import { useStore } from "vuex";


export default {
  components: { Dropdown, CreateEventModal },

  setup() {
    const store = useStore();
    const groups = ref([]);
    const display = ref(false);
    const newActModal = ref(false);
    const showBtModal = ref("");
    const popModal = ref(null);

    const selectedGroup = ref({});
    const getGroups = async () => {
      try {
        const response = await groupService.getGroups();
        if (response && response.length > 0) {
          groups.value = response.map((i) => {
            return { id: i.id, name: i.name };
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    const events = ref([]);
    const getEvents = async () => {
      try {
        const response = await eventsService.getEvents();
        if (response && response.length > 0) {
          events.value = response.map((i) => {
            return { id: i.activityID, name: i.name };
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    const selectedEvent = ref({});
    const selectEvent = (selected) => {
      selectedEvent.value = selected;
    };

    const closeModal = () => {
      display.value = false;
    };

    const eventCategories = ref([]);
    const getEventCategories = async () => {
      try {
        const response = await eventsService.getEventCategories();
        console.log(response, "categories");
        eventCategories.value = response;
      } catch (error) {
        console.log(error);
      }
    };
    getEventCategories();

    const selectedCategory = ref({});
    const selectCategory = (category) => {
      selectedCategory.value = category;
      newActModal.value = false;
    };

    const newAcctivityDate = ref("");
    const createNewActivity = async () => {
      if (!newAcctivityDate.value && !selectedCategory.value) return false;
      try {
        const response = await eventsService.createNewActivity({ activity: { date: newAcctivityDate.value, eventCategoryId: selectedCategory.value.id } });
        const newActivity = { id: response.currentEvent.id, name: response.currentEvent.name };
        selectedEvent.value = newActivity;
        events.value.push(newActivity);
        console.log(response, "Created");
      } catch (error) {
        console.log(error);
      }
    }

    const selectedCategoryName = computed(() => {
      if (!selectedCategory.value || !selectedCategory.value.name) return "";
      return selectedCategory.value.name.length > 17 ? `${selectedCategory.value.name.slice(0, 16)}...` : selectedCategory.value.name;
    })

    const newCategoryCreated = (categories) => {
      eventCategories.value = categories;
      display.value = false;
    }

    getEvents();
    getGroups();

    const onContinue = async () => {
      try {
        const response = await attendanceservice.saveCheckAttendanceItem({
          activityID: selectedEvent.value.id,
          groupID: selectedGroup.value.id,
        });
        console.log(response, "RESPONSE P");
        store.dispatch("attendance/setItemData", response);
        router.push({
          name: "CheckinType",
          query: {
            activityID: selectedEvent.value.id,
            activityName: selectedEvent.value.name,
            groupId: selectedGroup.value.id,
            groupName: selectedGroup.value.name,
            id: response.id,
            code: response.attendanceCode,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      selectedEvent,
      onContinue,
      groups,
      events,
      selectEvent,
      display,
      selectedGroup,
      closeModal,
      newActModal,
      eventCategories,
      selectCategory,
      selectedCategory,
      createNewActivity,
      selectedCategoryName,
      newAcctivityDate,
      newCategoryCreated,
      showBtModal,
      popModal,
    };
  },
};
</script>

<style scoped>
* {
  color: #02172e;
  /* font-family: Nunito Sans !important; */
}

.contn-btn:disabled {
  opacity: 0.3;
}
</style>