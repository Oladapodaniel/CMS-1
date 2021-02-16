<template>
     <div class="event mt-4" @click="hideModals">
     <div class="bg col-md-10 offset-md-1">
     <div class="container">
        <div class="row">
          <div class="col-md-5 events">Contribution</div>
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-12 d-lg-flex justify-content-end">
                <button class="default-btn">Preview</button>
                <button
                  class="default-btn primary-bg border-0 ml-3"
                  @click="post"
                >
                  <i
                    class="fas fa-circle-notch fa-spin mr-2 text-white"
                    v-if="loading"
                  ></i>
                  <span class="text-white">Save and Continue</span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="form">
        <!-- <div class="container"> -->
        <div class="row second-form first-row">
          <div class="col-12 col-md-6 dropdown-container">
              <!-- <button>Select Category</button> -->
              <div class="row nested-row d-flex align-items-end">
              <div class=" col-2 col-md-3">
                <label for="date">Event</label>
              </div>
              <div class=" col-10 col-md-9">
                <button
                  @click.prevent="selectEventAttended"
                  class="form-control dd"
                >
                  {{ selectedEventAttended.name }}
                  <!-- {{ newEvent.activity.date }}
                   -->
                </button>
                <i class="pi pi-chevron-down manual-dd-icon align-self-center"></i>
                <div class="input-field manual-dd-con" v-if="showEventList">
                <div class="manual-dd dd">
                  <div
                    class="container-fluid dd dd-search-con"
                    v-if="eventsAttended.length > 5"
                  >
                    <div class="row dd">
                      <div class="col-md-12 dd px-0 py-1">
                        <input
                          type="text"
                          class="form-control dd dd-search-field"
                          v-model="eventsSearchString"
                          placeholder="search for event"
                        />
                      </div>
                    </div>
                  </div>

                 

                  <div class="container-fluid dd-list-con">
                    <div class="row">
                      <div class="col-md-12">
                        <p
                          class="px-1 manual-dd-item mb-0 py-2 dd"
                          v-for="(event, index) in filteredEvents"
                          :key="index"
                          @click="eventAttendedSelected(event)"
                        >
                          {{ event.name }}
                        </p>
                        <p
                          class="text-center mb-1 mt-1"
                          v-if="
                            eventsSearchString &&
                            eventsAttended.length > 0 &&
                            filteredEvents.length === 0
                          "
                        >
                          No match found
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="col-md-12 py-2 px-0"
                        v-if="eventsAttended.length > 0"
                      >
                        <hr class="hr" />
                      </div>
                      <div class="col-md-12 create-event py-2 text-center">
                        <a
                          class="craete-event-btn font-weight-bold"
                          data-toggle="modal"
                          data-target="#eventModal"
                          >Create new event</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="row nested-row align-items-end">
              <div class=" col-2 col-md-3">
                <label for="date">Date</label>
              </div>
              <div class=" col-10 col-md-9">
                <input
                  placeholder=""
                  v-model="eventDate"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <!-- <div class=" col-2 col-md-5">
                <label for="topic">Topic</label>
              </div>
              <div class=" col-10 col-md-7">
                <input type="text" v-model="topic" class="form-control" />
              </div>
              
              <div class=" col-2 col-md-5">
                <label for="preacher">Preacher</label>
              </div>
              <div class="col-10 col-md-7">
                <input type="text" v-model="preacher" class="form-control" />
              </div> -->
            </div>
          </div>
        </div>

        <div
                class="modal fade"
                id="eventModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="eventModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content py-2 px-2">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-weight-bold"
                        id="exampleModalLabel"
                      >
                        Create New Event
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body new-event-modal">
                      <div class="row my-4">
                        <div class="col-md-4 text-md-right align-self-center">
                          <label for="" class="label font-weight-bold"
                            >Event name</label
                          >
                        </div>
                        <div class="col-md-7">
                          <!-- <Dropdown
                            v-model="selectedVisitOption"
                            :options="eventName"
                             placeholder="Select Event" 
                             :filter="true" 
                             filterPlaceholder="Search..."
                            style="width: 100%"
                          /> -->
                          <!-- <select class="form-control select-dropdown">
                            <option>Select Event</option>
                            <option v-for="event in newEvents" :key="event.id" class="create-option">{{ event.name }}</option>
                            <option class="create-new-event text-center">Create new event</option>
                          </select> -->
                          <!-- <input
                                        type="text"
                                        class="form-control"
                                        v-model="newEvent.activity.newEventCategoryName"
                                      /> -->
                          <div
                            class="select-elem-con pointer d-flex justify-content-space-between"
                            @click="showCategory = !showCategory"
                          >
                            <span class="ofering">{{ selectEvent }}</span
                            ><span>
                              <i
                                class="pi pi-angle-down"
                                :class="{ roll3: showForm3 }"
                                aria-hidden="true"
                              ></i
                            ></span>
                          </div>
                          <div
                            class="ofering"
                            :class="{ 'style-category': showCategory }"
                            v-if="showCategory"
                          >
                            <input
                              type="text"
                              placeholder="Search..."
                              class="form-control ofering mb-3"
                              v-model="eventText"
                            />
                            <div
                              v-for="(
                                eventCategory, index
                              ) in filterEventCategory"
                              :key="index"
                              class="ofering"
                            >
                              <div
                                class="ofering py-1"
                                @click="individualEvent(eventCategory)"
                              >
                                {{ eventCategory.name }}
                              </div>
                            </div>
                            <div
                              v-if="filterEventCategory.length >= 1"
                              @click="openModal"
                              class="create cat ofering"
                            >
                              Add New Event
                            </div>
                            <div
                              v-else
                              class="create mt-3"
                              @click="createNewCat(1)"
                            >
                              Create "{{ eventText }}" event
                            </div>
                          </div>

                          <!-- <Button label="Show" icon="pi pi-external-link" @click="openModal" /> -->
                          <Dialog
                            header="Add New Event"
                            v-model:visible="displayModal"
                            :style="{ width: '50vw' }"
                            :modal="true"
                          >
                            <div class="row mt-2">
                              <div class="col-sm-3 align-self-center">
                                Event Name
                              </div>
                              <div class="col-sm-9">
                                <input
                                  type="text"
                                  class="form-control"
                                  v-model="newEventCategoryName"
                                />
                              </div>
                            </div>
                            <template #footer>
                              <!-- <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                                        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus /> -->
                              <div
                                class="col-md-12 d-md-flex justify-content-end p-0"
                              >
                                <button
                                  type="button"
                                  class="btn secondary-btn px-4"
                                  @click="closeModal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  class="btn primary-btn px-4 mr-0 text-white"
                                  @click="createNewCat(2)"
                                >
                                  Save
                                </button>
                              </div>
                            </template>
                          </Dialog>
                        </div>
                      </div>
                      <div class="row mt-4 mb-4">
                        <div class="col-md-4 text-md-right align-self-center">
                          <label for="" class="label font-weight-bold"
                            >Event date</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            type="date"
                            class="form-control"
                            v-model="newEvent.activity.date"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-4"></div>
                          <div class="col-md-7">
                            <div class="row">
                              <div class="col-md-12 text-md-right">
                                <p
                                  class="mb-1 text-danger"
                                  v-if="invalidEventDetails"
                                >
                                  Enter event name and date
                                </p>
                              </div>
                              <div
                                class="col-md-12 d-md-flex justify-content-end"
                              >
                                <button
                                  type="button"
                                  class="btn secondary-btn px-4"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  class="btn primary-btn px-4 text-white"
                                  data-dismiss="modal"
                                  @click="createNewEvent"
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
              </div>


       
        <div class="col-12 offset-sm-1 add">Contribution</div>
        <div class="attendance-header d-none d-lg-block">
          <div class="row">
            <div class="col-sm-3">Contribution Item</div>
            <div class="col-sm-2" >Channel</div>
            <div class="col-sm-3" >Amount</div>
            <div class="col-sm-2 offset-sm-1" style="margin-left: 74px">Total</div>
          </div>
        </div>

        <!-- Selected offerings -->
        <div
          class="attendance-body stretch"
          id="offeringBody"
          v-for="(item, index) in offeringItem"
          :key="index"
        >
          <div class="row">
            <div class="col-12 col-sm-8 col-lg-3">
              <select class="form-control" v-if="item.offeringTypeId && !routeParams">
                <option
                  v-for="(newOffering, index) in newOfferings"
                  :key="index"
                  :value="newOffering.id"
                  :selected="newOffering.id === item.offeringTypeId"
                >
                  {{ newOffering.name }}
                </option>
              </select>
            
              <select class="form-control" v-else-if="item.offeringTypeId && routeParams" v-model="item.offeringTypeId" @change="updateOfferingId">
                <option
                  v-for="(newOffering, index) in newOfferings"
                  :key="index"
                  :value="newOffering.id"
                >
                  <p>{{ newOffering.name }}</p>
                </option>
              </select>
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                v-else-if="!item.offeringTypeId"
                v-model="item.name"
                placeholder="Enter Offering Item"
                ref="offeringInput"
              />
            </div>
            <div class="col-3 col-sm-4 col-lg-2">
              <select class="w-100 form-control" v-model="item.channel">
                <!-- <option :value="select">Select</option> -->
                <option value="Cheque">Cheque</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="POS">POS</option>
                <option value="Online">Online</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="USSD">USSD</option>
                <!-- <option value="Text">Text</option> -->
              </select>
            </div>
            
            <div class="col-3 col-sm-2 col-lg-1">
              <!-- <select class="currency" v-model="item.currency">
                <option v-for="currency in currencyList" :key="currency.id">{{ currency.name }}</option>
              </select> -->
              <!-- <div class="codeModal">
                <div class="currency country-code form-control codeModal" @click="toggleCode"><div class="d-flex justify-content-between align-items-center"><span class="codeModal">{{ item.currency }}</span><i class="pi pi-angle-down"></i></div></div>
            </div>

                <div :class=" { 'flagCode' : showCode, 'hide-code' : !showCode } " class="codeModal ">
                    <input class="codeInput input form-control codeModal" v-model="currencyText">
                <div v-for="currency in filterCurrency" :key="currency.id" class="codeModal" >
                    <div class="col-sm-3"><span style="display: inline-block;" @click="getCurrency">{{ currency.name }}</span>&nbsp;&nbsp;<span style="font-size: 0.8em">{{ currency.country }}</span></div>
                </div>
                <div v-if="filterCurrency.length == 0">No match found</div>
                </div> -->
                <Dropdown v-model="item.currency" :options="currencyList" :filter="true" class="currency p-0" placeholder="NGN" :showClear="false">
                    
                </Dropdown>
            </div>
            <div class="col-6 col-lg-2">
              <input
                type="number"
                class="form-control"
                v-model.number="item.amount"
                placeholder="Enter Amount"
              />
            </div>
            <div
              class="col-1 offset-lg-1 d-none d-lg-block"
            >
              {{ item.amount }}
            </div>
            <div
              class="col-2"
              @click="delOffering(index)"
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </div>

          

            <div v-if="item.giver == '' " @click="triggerGiverModal(index)" class="col-8 col-sm-3 offset-sm-5 donor-text pt-0 align-self-center">Add Giver</div>
            <div v-else class="col-8 col-sm-5 offset-sm-5 donor-text-name pt-0 align-self-center mt-1"  @click="triggerGiverModal(index)">{{ item.giver }}     <span class="donor-text">edit</span></div>
            <!-- <div v-else>{{ item.addGiver }}</div> -->
               </div>
        </div>

        <div
          class="col-sm-12 text-center add-attendance ofering"
          id="addOffering"
          @click="addOffering"
        >
          <i class="fa fa-plus-circle ofering" aria-hidden="true"></i
          >&nbsp;&nbsp;Add Contribution Item
        </div>
        <div class="display ofering" id="showList" ref="offeringDrop">
          <input
            type="text"
            class="form-control mb-3 ofering"
            v-model="offeringText"
            placeholder="Search Offering item"
          />

          <div
            class="ofering pointer"
            v-for="(newOffering, index) in filterOffering"
            :key="index"
            @click="offering(newOffering)"
          >
            {{ newOffering.name }}
          </div>
          <div
            v-if="filterOffering.length >= 1"
            @click="offering(null)"
            class="create ofering pointer"
          >
            Create New Contribution Item
          </div>
          <div
            v-else
            @click="offering({ name: offeringText })"
            class="create pointer"
          >
            Create "{{ offeringText }}" offering item
          </div>
        </div>
        <button
          hidden
          type="button"
          id="modalTogglerOffering"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalOffering"
        >
          Launch demo modal
        </button>

        <div class="col-sm-12 empty">
          <div class="row">
            <div class="col-sm-5 total-2 offset-sm-1">TOTAL</div>
            <div class="col-sm-3">
              <!-- <div>Total Attendance</div>
                                <div>Total Offering</div> -->
              <Dropdown :options="['NGN - Naira', 'CAD - Canadian dollar', 'AFN - Afghanistan']" :filter="true" placeholder="NGN - Naira" :showClear="false">
                    
                </Dropdown>
            </div>
            <div class="col-sm-2 align-self-center offset-sm-1">
              {{ addOfferingTotal }}
            </div>
          </div>
        </div>
        <!-- <div class="col-sm-12 text-center add-attendance" @click="createFirstTimers">Add First Timers</div> -->
        <button
          hidden
          type="button"
          id="modalTogglerFirstTimers"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalFirstTimers"
        >
          Launch demo modal
        </button>
        <!-- <div class="col-sm-12 empty"></div> -->
        <textarea
          class="col-sm-12 textarea form-control"
          placeholder="Notes..."
          rows="5"
        >
        </textarea>
        <!-- </div> -->
        <Toast />
      </div>
     </div>
     </div>
    </div>
</template>

<script>
import { ref, onMounted, computed, nextTick } from 'vue'
import axios from "@/gateway/backendapi";
// import SelectElem from "@/components/select/SelectElement.vue";
import { useToast } from "primevue/usetoast";
import Dialog from "primevue/dialog";
import Dropdown from 'primevue/dropdown';
export default {
    components: {
        Dialog, Dropdown
    },
    setup () {
        const toast = useToast();
        const offeringDrop = ref(null)
        const showEventList = ref(false)
        const eventsAttended = ref([]);
        const eventsSearchString = ref("");
        const newEvents = ref([]);
        const selectedEventAttended = ref({});
        const selectEvent = ref("Select Event");
        const showCategory = ref(false);
        const eventText = ref("")
        const newEventCategoryName = ref("");
        const displayModal = ref(false);
        const invalidEventDetails = ref(false);
        const savingNewEvent = ref(false);
        const newOfferings = ref([]);
        const offeringText = ref("");
        const offeringItem = ref([]);
        const offeringInput = ref("")

        const addOffering = () => {
            offeringDrop.value.classList.toggle("offering-drop");
            }

        const hideModals = (e) => {
            if (!e.target.classList.contains("ofering")) {
                offeringDrop.value.classList.remove("offering-drop");
            }
            }

        const selectEventAttended = () => {
            showEventList.value = !showEventList.value;
            };

        const filteredEvents = computed(() => {
            if (!eventsSearchString.value) return eventsAttended.value;
            return eventsAttended.value.filter((i) =>
                i.name.toLowerCase().includes(eventsSearchString.value.toLowerCase())
            );
            });

        onMounted(() => {
            axios.get("/api/Events/EventActivity").then((res) => {
                eventsAttended.value = res.data;
            });

            axios.get("/api/EventCategory").then((res) => {
                newEvents.value = res.data.map((i) => {
                return { id: i.id, name: i.name };
                });
            });

            // axios
            //     .get("/api/LookUp/GetAllLookUps")
            //     .then((res) => {
            //     // console.log(res.data, 'all lkups')
            //     res.data.find((i) => {
            //         if (i.type.toLowerCase() === "gender") {
            //         genderArr.value = i.lookUps;
            //         console.log(genderArr.value);
            //         }
            //         if (i.type.toLowerCase() === "maritalstatus") {
            //         maritalStatusArr.value = i.lookUps;
            //         }
            //     });
            //     })
            //     .catch((err) => {
            //     if (err.response && err.response.status === 401) {
            //         localStorage.setItem("token", "");
            //         router.push("/");
            //     }
            //     });

            // axios.get("/api/membership/howyouheardaboutus").then((res) => {
            //     howDidYouAboutUs.value = res.data.map((i) => {
            //     return { name: i.name, id: i.id };
            //     });
            //     // console.log(res.data)
            // });

            // console.log(route.params.firstTimerId);
            // if (route.params.firstTimerId) {
            //     axios
            //     .get(`/api/People/firstTimer/${route.params.firstTimerId}`)
            //     .then((res) => {
            //         console.log(res.data, "DFGHG");
            //         firstTimersObj.value = res.data;
            //     });
            // }
            });

        const closeManualModalIfOpen = (e) => {
            if (!e.target.classList.contains("dd")) {
                showEventList.value = false;
                eventsSearchString.value = "";
            }
            };

        const eventAttendedSelected = (eventObj) => {
            console.log(eventObj);
            selectedEventAttended.value = eventObj;
            showEventList.value = false;
            eventsSearchString.value = "";
            };

        const newEvent = ref({
            activity: {},
            });

        const individualEvent = (obj) => {
            selectEvent.value = obj.name;
            newEvent.value.activity.eventCategoryId = obj.id;
            showCategory.value = false;
            console.log(obj);
            };

        const filterEventCategory = computed(() => {
                    let arr = [];
                    if (newEvents.value.length > 0) {
                        console.log(newEvents.value, "new events");
                        arr = newEvents.value.filter((i) => {
                        return i.name.toLowerCase().includes(eventText.value.toLowerCase());
                        });
                    } else {
                        return newEvents.value;
                    }
                    return arr;
                    });

        const openModal = () => {
                displayModal.value = true;
                };

        const closeModal = () => {
                displayModal.value = false;
                };
            
        const createNewCat = async (eventParams) => {
            try {
                let data;
                const theText =
                eventParams === 1 ? eventText.value : newEventCategoryName.value;
                data = await axios.post(`/api/EventCategory?name=${theText}`);
                console.log(data.data);
                newEvents.value = data.data;

                toast.add({
                severity: "success",
                summary: "Event created",
                detail: "Your new event was created successfully",
                life: 2500,
                });
            } catch (error) {
                toast.add({
                severity: "error",
                summary: "Opps! Sorry Try again",
                detail: error.response.data,
                life: 2500,
                });
            }
            displayModal.value = false;
            console.log(newEventCategoryName.value);
            newEventCategoryName.value = "";
            };

        const createNewEvent = async () => {
            // console.log(eventsAttended.value);
            invalidEventDetails.value = false;
            if (newEvent.value.activity.date) {
                try {
                savingNewEvent.value = true;
                console.log(newEvent.value);
                const { data } = await axios.post(
                    "/api/Events/CreateActivity",
                    newEvent.value
                );
                console.log(data);
                selectedEventAttended.value.activityID = data.currentEvent.id;
                selectedEventAttended.value.name = `${data.currentEvent.name} (${data.currentEvent.id})`
                    ? data.currentEvent.name
                    : "New event selected";
                // console.log(selectedEventAttended, "SAE");

                toast.add({
                    severity: "success",
                    summary: "Event created",
                    detail: "Your new event was created successfully",
                    life: 2500,
                });
                // newEvent.value.date = "";
                // newEvent.value.preEvent.name = "";

                console.log(data, "data");
                } catch (error) {
                // if (error.response.data == "An Event with this name already exist") {
                //     toast.add({
                //     severity: "error",
                //     summary: "Event exist already",
                //     detail: error.response.data,
                //     life: 2500,
                //     });
                // }
                console.log(error)
                /*eslint no-undef: "warn"*/
                NProgress.done();
                savingNewEvent.value = false;
                console.log(error.response);
                }
            } else {
                invalidEventDetails.value = true;
            }

            displayModal.value = false;
            };

        const getOffering = () => {
              axios.get("/api/offering").then((res) => {
              newOfferings.value = res.data.map((i) => {
                return { id: i.id, name: i.name };
              });
              console.log(res.data, "offerings on load");
            });
            }
            getOffering()

        const filterOffering = computed(() => {
            if (offeringText.value !== "" && newOfferings.value.length > 0) {
              return newOfferings.value.filter((i) => {
                return i.name.toLowerCase().includes(offeringText.value.toLowerCase());
              });
            } else {
              return newOfferings.value;
            }
          })

        const offering = (offObj) => {
      if (offObj) {
            offeringItem.value.push({
              name: offObj.name,
              offeringTypeId: offObj.id,
              channel: offObj.channel == undefined || offObj.channel == "" || offObj.channel == null ? "Cash" : offObj.channel,
              currency: offObj.currency == undefined || offObj.currency == "" || offObj.currency == null ? "NGN" : offObj.currency,
              giver: ""
            });
          } else {
            offeringItem.value.push({
              currency: "NGN",
              channel: "Cash"
            });
            nextTick(() => {
              offeringInput.value.focus();
            });
          }
          offeringDrop.value.classList.toggle("offering-drop")
        }
        return {
            addOffering, offeringDrop, hideModals, selectEventAttended, showEventList, eventsAttended, filteredEvents, closeManualModalIfOpen, eventAttendedSelected,
            newEvents, selectedEventAttended, eventsSearchString, selectEvent, individualEvent, newEvent, showCategory, filterEventCategory, eventText, createNewCat,
            newEventCategoryName, displayModal, openModal, closeModal, toast, createNewEvent, invalidEventDetails, savingNewEvent, newOfferings, filterOffering, offeringText,
            offering, offeringItem, offeringInput
    }
  }
}
</script>

<style scoped>
    .events {
        font: normal normal 800 29px Nunito sans;
        }

    .form {
        margin-top: 50px;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 15px #797e8159;
        border: 1px solid #dde2e6;
        border-radius: 7px;
        }
        .form .second-form.row.first-row {
        padding: 50px;
        }
        .form-body {
        padding: 30px;
        }

        .add {
        font: normal normal bold 16px Nunito Sans;
        letter-spacing: 0px;
        color: #136acd;
        display: inline;
        padding: 10px 15px;
        background: #ecf0f3;
        border-radius: 10px 10px 0px 0px;
        position: relative;
        top: -8px;
        }

        .attendance-header {
        background-color: #ecf0f3;
        padding: 0 50px;
        border: none;
        border-bottom: 1px solid rgb(204, 204, 204);
        }

        .attendance-header div,
        .attendance-body div {
        padding: 5px;
        }
        .attendance-header div {
        color: #002044;
        font-weight: 700;
        }

        .add-attendance {
        color: #136acd;
        font-weight: 600;
        border: none;
        border-top: 1px solid rgb(231, 231, 231);
        padding: 20px;
        cursor: pointer;
        }

        .display {
        display: none;
        }

        .offering-drop {
        box-shadow: 0px 3px 15px #797e8159;
        z-index: 1;
        position: absolute;
        left: 5%;
        margin-top: -50px;
        padding: 10px 10px;
        width: 90%;
        background: white;
        display: block;
        }
        .offering-drop div {
        padding: 3px;
        }
        .offering-drop div:hover {
        padding: 3px;
        background: #ecf0f3;
        }

        .empty {
        border: none;
        border-top: 1px solid rgb(231, 231, 231);
        width: 100%;
        padding: 20px;
        font: normal normal 600 18px/24px Nunito Sans;
        }

        .total-2 {
        font: normal normal 600 20px/27px Nunito Sans;
        letter-spacing: 0px;
        color: #02172eb9;
        text-align: right;
        align-self: center;
        }

        .manual-dd-icon {
        position: absolute;
        top: 28%;
        right: 10%
        }

        .manual-dd-con {
        position: relative;
        }

        .manual-dd {
        width: 280px;
        border: 1px solid #b9c5cf;
        position: absolute;
        background: white;
        z-index: 2;
        top: 0px;
        /* margin-right: 0.5rem; */
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
            0 1px 10px 0 rgba(0, 0, 0, 0.12);
        max-height: 400px;
        overflow: auto;
        }

        .manual-dd::-webkit-scrollbar {
        display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .manual-dd {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        }

        .manual-dd-item {
        color: #495057;
        }

        .manual-dd-item:hover {
        background: #e9ecef;
        cursor: pointer;
        }

        .dd-search-field {
        border-radius: 20px;
        }

        .form-control.input.dd {
        text-align: left;
        }

        .dd-list-con {
        max-height: 360px;
        overflow: auto;
        }

        .create {
        text-align: center;
        font: normal normal bold 16px/22px Nunito Sans;
        letter-spacing: 0px;
        color: #136acd;
        }

        .create-event a {
        color: #136acd !important;
        text-decoration: none;
        }

        .create-new-event {
        text-align: center;
        font: normal normal bold 16px/22px Nunito Sans;
        letter-spacing: 0px;
        color: #136acd;
        }

        .create-event a:hover {
        cursor: pointer;
        padding: 8px;
        }

        .modal-body.new-event-modal {
        padding: 0;
        }

        .select-elem-con {
        padding: 5px 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        justify-content: space-between;
        }

        .pointer {
        cursor: pointer;
        }

        .style-category {
        padding: 10px;
        box-shadow: 0px 3px 15px #797e8159;
        position: absolute;
        background: white;
        z-index: 1;
        width: 80%;
        max-height: 20em;
        overflow-y: scroll;
        }
        .style-category div:hover {
        background-color: #ecf0f3;
        cursor: pointer;
        }

        .attendance-body {
          padding: 0 50px;
          background-color: #ecf0f3;
        }

        .attendance-body.stretch{
          height: 85px;
        }

        @media (max-width: 991px) {
          .row.form-body.reg .row div {
            margin-top: 2em;
          }
          .attendance-body.stretch {
            height: 135px;
          }
        }

        .currency {
          width: 163%;
          height: 94%;
          font-size: 0.8em;
          background: rgba(207, 207, 207, 0.651);
          border: none;
          outline: none;
          /* margin-top: -4px; */
        }
</style>