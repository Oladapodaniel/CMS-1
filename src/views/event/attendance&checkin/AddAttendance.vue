<template>
  <div class="container-fluid mt-5">
    <div class="row mb-4">
      <div class="col-md-12">
        <h4>Add Attendance</h4>
      </div>
      <Dialog
        header="Create Event"
        v-model:visible="display"
        :style="{ width: '70vw', maxWidth: '600px' }"
        :modal="true"
        position="top"
      >
        <div class="row">
          <div class="col-md-12">
            <CreateEventModal @closeeventmodal="closeModal" />
          </div>
        </div>
      </Dialog>
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
                {{ !selectedEvent.name ? "Select from events and activities" : selectedEvent.name.length > 30 ? `${selectedEvent.name.slice(0, 30)}...` : selectedEvent.name }}
                <i class="pi pi-chevron-down manual-dd-icon float-right pr-1"></i>
              </button>
              <div
                class="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                <div class="row w-100 mx-auto" v-if="events.length > 5">
                  <div class="col-md-12">
                    <input type="text" class="form-control" placeholder="Find event" />
                  </div>
                </div>

                <a class="dropdown-item font-weight-700 small-text py-2 c-pointer"
                  v-for="(event, index) in events" :key="index"
                  @click="selectEvent(event)"
                  >{{ event.name }}</a
                >
                <a class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text" style="border-top: 1px solid #002044;color: #136ACD;" href="#"
                  @click="() => display = true"
                >
                    <i class="pi pi-plus-circle mr-2 d-flex align-items-center" style="color: #136ACD;"></i>
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
                <button class="default-btn primary-bg text-white border-0" @click="onContinue">
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-1"></div>
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
import router from "@/router/index";
import groupService from "../../../services/groups/groupsservice";
import eventsService from "../../../services/events/eventsservice";
import CreateEventModal from "../../../components/attendance/AttendanceEventModal";

export default {
  components: { Dropdown, CreateEventModal  },

  setup() {
    const groups = ref([ ]);
    const display = ref(false);

    const selectedGroup = ref({ });
    const getGroups = async () => {
      try {
        const response = await groupService.getGroups();
        if (response && response.length > 0) {
          groups.value = response.map(i => {
            return { id: i.id, name: i.name }
          })
        }
      } catch (error) {
        console.log(error);
      }
    }

    const events = ref([ ]);
    const getEvents = async () => {
      try {
        const response = await eventsService.getEvents();
        console.log(response, "RESPONSE");
        if (response && response.length > 0) {
          events.value = response.map(i => {
            return { id: i.activityID, name: i.name }
          })
        }
      } catch (error) {
        console.log(error);
      }
    }

    const selectedEvent = ref({ });
    const selectEvent = (selected) => {
      selectedEvent.value = selected;
    }

    const closeModal = () => {
      display.value = false;
    }

    getEvents();
    getGroups();

    const onContinue = () => {
      router.push({name: "CheckinType", query: { activityID: selectedEvent.value.id, activityName: selectedEvent.value.name, groupId: selectedGroup.value.id, groupName: selectedGroup.value.name, x: 2 } });
    }

    return {
      selectedEvent,
      onContinue,
      groups,
      events,
      selectEvent,
      display,
      selectedGroup,
      closeModal,
    };
  },
};
</script>

<style scoped>
* {
    color: #02172e;
    /* font-family: Nunito Sans !important; */
}
</style>