<template>
  <div>
    <div class="container" @click="closeDropdownIfOpen">
      <!-- <div class="container" @click="closeDropdownIfOpen"> -->
      <div class="row">
        <div class="col-md-12 mb-3 mt-3 offset-3 offset-md-0">
          <h4 class="font-weight-bold">Compose New SMS</h4>
          <Toast />
          <!-- <Dialog
            header="Header"
            v-model:visible="display"
            style="width: 500px"
          >
            <div class="row">
              <div class="col-md-12">
                <input
                  type="datetime-local"
                  id="birthdaytime"
                  class="form-control"
                  name="birthdaytime"
                />
              </div>
            </div>
          </Dialog> -->
          <Dialog
            header="Select Date nad Time"
            v-model:visible="display"
            :style="{ width: '50vw' }"
            :modal="true"
          >
            <div class="row">
              <div class="col-md-12">
                <input
                  type="datetime-local"
                  id="birthdaytime"
                  class="form-control"
                  name="birthdaytime"
                />
              </div>
            </div>
            <template #footer>
              <Button
                label="Cancel"
                icon="pi pi-times"
                @click="() => (display = false)"
                class="p-button-text"
                style="color: #136acd"
              />
              <Button
                label="Schedule"
                class="p-button-rounded"
                style="background: #136acd"
                @click="scheduleMessage"
              />
            </template>
          </Dialog>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <div class="row">
        <div class="col-3 col-lg-2 align-self-center">
          <span>Send to : </span>
        </div>
        <div class="col-9 col-lg-10 form-group mb-0">
          <div class="dropdown">
            <button
              class="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select the destination of the mail
            </button>
            <div
              class="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton"
            >
              <a
                class="dropdown-item"
                v-for="(destination, index) in possibleSMSDestinations"
                :key="index"
                @click="showSection(index)"
                >{{ destination }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-1">
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <!-- Select Group -->
      <div class="col-md-12 px-0" v-if="groupSelectionTab">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10 py-2 px-0 grey-rounded-border">
            <span
              class="email-destination m-1"
              v-for="(group, index) in selectedGroups"
              :key="index"
            >
              <span>{{ group.name }}</span>
              <span class="ml-2 remove-email" @click="removeGroup(index)"
                >x</span
              >
            </span>

            <div class="dropdown">
              <input
                placeholder="Grouped contacts in the database"
                class="border-none dropdown-toggle px-1"
                type="text"
                id="dropdownMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />

              <div class="dropdown-menu w-100" aria-labelledby="dropdownMenu">
                <div class="col-md-12 groups">
                  <div
                    class="row"
                    v-for="(category, index) in categories"
                    :key="index"
                  >
                    <div class="col-md-12" v-if="allGroups[index].length > 0">
                      <div class="row">
                        <div class="col-md-12">
                          <h6 class="text-uppercase font-weight-bold">
                            {{ category }}
                          </h6>
                          <a
                            class="dropdown-item px-1 c-pointer"
                            v-for="(group, indx) in allGroups[index]"
                            @click="
                              selectGroup(
                                group.category,
                                group.id,
                                group.name,
                                index,
                                indx
                              )
                            "
                            :key="indx"
                          >
                            {{ group.name }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-12 grey-rounded-border groups"
            :class="{ hide: !groupsAreVissible }"
          >
            <div
              class="row"
              v-for="(category, index) in categories"
              :key="index"
            >
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-12">
                    <h4>{{ category }}</h4>
                    <p
                      v-for="(group, indx) in allGroups[index]"
                      @click="
                        selectGroup(
                          group.category,
                          group.id,
                          group.name,
                          index,
                          indx
                        )
                      "
                      :key="indx"
                    >
                      {{ group.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Select Person from DB -->
      <div class="col-md-12 my-1 px-0" v-if="membershipSelectionTab">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10 py-2 px-0 grey-rounded-border">
            <span
              class="email-destination m-1"
              v-for="(member, indx) in selectedMembers"
              :key="indx"
            >
              <span>{{ member.name }}</span>
              <span class="ml-2 remove-email" @click="removeMember(indx)"
                >x</span
              >
            </span>

            <div class="dropdown">
              <input
                placeholder="Select persons"
                class="border-none dropdown-toggle my-1 px-1"
                type="text"
                id="dropdownMenu"
                @input="searchForPerson"
                v-model="searchText"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />

              <div
                class="dropdown-menu pt-0 w-100"
                aria-labelledby="dropdownMenu"
              >
                <a
                  class="dropdown-item px-1 c-pointer"
                  v-for="(member, index) in memberSearchResults"
                  :key="index"
                  @click="selectMember(member, index)"
                  >{{ member.name }}</a
                >
                <p
                  class="bg-secondary p-1 mb-0 disable"
                  v-if="
                    searchText.length < 3 &&
                    loading == false &&
                    memberSearchResults.length === 0
                  "
                >
                  Enter 3 or more characters
                </p>
                <p
                  aria-disabled="true"
                  class="btn btn-default p-1 mb-0 disable"
                  v-if="
                    memberSearchResults.length === 0 &&
                    searchText.length >= 3 &&
                    !loading
                  "
                >
                  No match found
                </p>
                <p
                  class="btn btn-default p-1 mb-0 disable"
                  v-if="loading && searchText.length >= 3"
                >
                  <i class="fas fa-circle-notch fa-spin"></i>
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-12 grey-rounded-border groups"
            :class="{ hide: !groupsAreVissible }"
          >
            <div
              class="row"
              v-for="(category, index) in categories"
              :key="index"
            >
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-12">
                    <h4>{{ category }}</h4>
                    <p
                      v-for="(group, indx) in allGroups[index]"
                      @click="selectGroup(group.category, group.id, group.name)"
                      :key="indx"
                    >
                      {{ group.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enter phone numbers -->
      <div class="col-md-12 my-1 px-0" v-if="phoneNumberSelectionTab">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10 py-2 px-0">
            <textarea
              class="form-control w-100 px-1"
              placeholder="Enter phone number(s)"
              v-model="phoneNumber"
            ></textarea>
          </div>
          <div
            class="col-md-12 grey-rounded-border groups"
            :class="{ hide: !groupsAreVissible }"
          >
            <div
              class="row"
              v-for="(category, index) in categories"
              :key="index"
            >
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-12">
                    <h4>{{ category }}</h4>
                    <p
                      v-for="(group, indx) in allGroups[index]"
                      @click="selectGroup(group.category, group.id, group.name)"
                      :key="indx"
                    >
                      {{ group.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row mt-1"
        v-if="
          phoneNumberSelectionTab || membershipSelectionTab || groupSelectionTab
        "
      >
        <div class="col-md-12">
          <hr class="hr my-1" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <span>Subject: </span>
        </div>
        <div class="col-md-10 px-0">
          <input
            type="text"
            class="input px-1 grey-rounded-border"
            style="border-radius: 4px"
            v-model="subject"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <span>Message: </span>
        </div>
        <div class="col-md-10 px-0">
          <textarea
            rows="10"
            class="text-area my-2"
            v-model="editorData"
          ></textarea>
          <div class="col-md-12 px-0">
            <p class="bg-success mb-0 p-1" v-if="editorData.length > 0">
              <span>Characters count {{ charactersCount }}</span>
              <span class="float-right">Page {{ pageCount }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-4 mb-5">
        <div class="col-md-12 d-flex justify-content-end">
          <span>
            <button
              class="btn send-btn px-4"
              data-toggle="modal"
              data-target="#sendsmsbtn"
            >
              Send
            </button>
            <a
              class="send-btn-options dd-item"
              @click="toggleSendOptionsDisplay"
              ><i class="pi pi-caret-down dd-item text-white"></i
            ></a>
            <div
              class="send-dropdown d-flex py-1 flex-column dd-item"
              :class="{ 'hide-dd': !sendOptionsIsShown }"
            >
              <a class="font-weight-600 px-1 py-1 dd-item">Save as draft</a>
              <a
                class="font-weight-600 px-1 py-1 dd-item"
                data-toggle="modal"
                data-target="#schedulemodal"
                @click="showDateTimeSelectionModal"
                >Schedule send</a
              >
              <!-- Datetime modal -->

              <!-- <div
                class="modal fade"
                id="schedulemodal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
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
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-12">
                          <input type="datetime-local" id="birthdaytime" class="form-control" name="birthdaytime">
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </span>
          <button class="btn discard-btn ml-3 px-3">Discard</button>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div
              class="modal fade"
              id="sendsmsbtn"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header grey-bg">
                    <h5 class="modal-title" id="exampleModalLabel">
                      <i class="pi pi-user mr-2"></i>
                      Send SMS Alternative
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
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-12 px-1">
                        <p>
                          We are providing more options to reach and communicate
                          with your members
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 px-1">
                        <hr class="hr" />
                      </div>
                    </div>

                    <div class="row d-flex justify-content-between">
                      <div class="col-md-6 px-1">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-12">
                              <label for="" class="small-text font-weight-600"
                                >NEW** BULK SMS - 100% SMS DELIVERY</label
                              >
                            </div>
                            <div
                              class="col-md-12 send-now-div py-2 d-flex justify-content-center"
                            >
                              <button
                                class="primary-btn px-4 my-2 font-weight-600 outline-none"
                                data-dismiss="modal"
                                @click="sendSMS('hostedsms')"
                              >
                                Send SMS Now
                              </button>
                            </div>
                            <div class="col-md-12 px-0">
                              <hr class="hr" />
                            </div>
                            <div class="col-md-12 px-0 d-flex flex-column">
                              <span>Please note:</span>
                              <span
                                >100% delivery to all valid phone numbers.</span
                              >
                              <span>Not Affected by DND.</span>
                              <span
                                >Dedicated phone number: No sender
                                customization.</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 px-1">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-12">
                              <label for="" class="small-text font-weight-600"
                                >REGULAR BULK SMS- PROVIDER</label
                              >
                            </div>
                            <div
                              class="col-md-12 send-now-div py-2 d-flex justify-content-center"
                            >
                              <!-- hostedsms_instant -->
                              <button
                                class="primary-btn px-4 my-2 grey-bg text-grey outline-none"
                                @click="sendSMS('')"
                              >
                                Send SMS Now
                              </button>
                            </div>
                            <div class="col-md-12 px-0">
                              <hr class="hr" />
                            </div>
                            <div class="col-md-12 px-0 d-flex flex-column">
                              <span>Please note:</span>
                              <span>Uses the regular bulk sms engine</span>
                              <span
                                >Delivery rate varies and is affected by DND
                                number.</span
                              >
                              <span>Sender Name can be customized.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="modal-footer">
                    
                  </div> -->
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { computed, onMounted, ref } from "vue";
import composeService from "../../services/communication/composer";
import composerObj from "../../services/communication/composer";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import store from "../../store/store";
import axios from "@/gateway/backendapi";

export default {
  setup() {
    const toast = useToast();
    const editor = ClassicEditor;
    const editorData = ref("");
    const editorConfig = {
      // The configuration of the editor.
      height: "800",
    };

    const possibleSMSDestinations = composeService.possibleSMSDestinations;
    const groupsAreVissible = ref(false);
    const groupSelectionTab = ref(false);
    const membershipSelectionTab = ref(false);
    const phoneNumberSelectionTab = ref(false);
    const selectedGroups = ref([]);

    const toggleGroupsVissibility = () => {
      groupsAreVissible.value = !groupsAreVissible.value;
    };

    const showSection = (index) => {
      if (index === 0) groupSelectionTab.value = true;
      if (index === 1) membershipSelectionTab.value = true;
      if (index === 2) phoneNumberSelectionTab.value = true;
    };

    const sendOptionsIsShown = ref(false);
    const toggleSendOptionsDisplay = () =>
      (sendOptionsIsShown.value = !sendOptionsIsShown.value);

    const closeDropdownIfOpen = (e) => {
      if (!e.target.classList.contains("dd-item")) {
        sendOptionsIsShown.value = false;
      }
    };

    const selectGroup = (
      category,
      id,
      name,
      indexInCategories,
      indexInGroup
    ) => {
      console.log(allGroups.value, "Cats");
      selectedGroups.value.push({ data: `${category}_${id}`, name });
      groupsAreVissible.value = false;
      allGroups.value[indexInCategories].splice(indexInGroup, 1);
      console.log(selectedGroups);
    };

    const removeGroup = (index) => {
      selectedGroups.value.splice(index, 1);
    };

    const members = [
      { name: "Me", id: 1 },
      { name: "You", id: 2 },
    ];
    const selectedMembers = ref([]);
    const selectMember = (selectedMember, index) => {
      selectedMembers.value.push(selectedMember);
      memberSearchResults.value.splice(index, 1);
      console.log(selectedMembers, "selected members");
    };
    const removeMember = (index) => {
      selectedMembers.value.splice(index, 1);
    };
    const searchText = ref("");
    const filteredMembers = computed(() => {
      if (!searchText.value) return [];
      const filtered = members.filter((i) => i.name.includes(searchText.value));
      return filtered;
    });
    const memberSearchResults = ref([]);
    const searchForPerson = (e) => {
      if (e.target.value.length >= 3) {
        memberSearchResults.value = [];
        loading.value = true;
        composerObj
          .searchMemberDB("/api/Membership/GetSearchedUSers", e.target.value)
          .then((res) => {
            loading.value = false;
            memberSearchResults.value = res;
          });
        console.log(memberSearchResults.value);
      } else {
        memberSearchResults.value = [];
      }
    };

    const charactersCount = computed(() => editorData.value.length);
    const pageCount = computed(() => Math.ceil(editorData.value.length / 160));

    const subject = ref("");
    const phoneNumber = ref("");
    const loading = ref(false);
    // const isPersonalized = ref(false);

    const isoCode = ref("");
    const sendSMS = (gateway) => {
      toast.add({
        severity: "info",
        summary: "Sending SMS",
        detail: "SMS is being sent....",
        life: 2500,
      });

      console.log(selectedMembers.value, "sm");
      const data = {
        subject: subject.value,
        message: editorData.value,
        contacts: [],
        // contacts: selectedMembers.value,
        isPersonalized: false,
        groupedContacts: selectedGroups.value.map((i) => i.data),
        toContacts: "",
        // toOthers: phoneNumber.value,
        isoCode: isoCode.value,
        // isoCode: "NG",
        category: "",
        emailAddress: "",
        emailDisplayName: "",
        gateWayToUse: gateway,
      };

      data.toOthers = phoneNumber.value;
      if (selectedMembers.value.length > 0) {
        data.toOthers += data.toOthers.length > 0 ? "," : "";
        data.toOthers += selectedMembers.value
          .map((i) => {
            if (i.phone) return i.phone;
            return false;
          })
          .join();
      }

      // if (selectedMembers.value.length > 0) data.contacts = selectedMembers.value;

      composeService
        .sendMessage("/api/Messaging/sendSms", data)
        .then((res) => {
          if (!res.status) {
            toast.add({
              severity: "error",
              summary: "Failed operation",
              detail: typeof res === "object" ? "SMS sending failed" : res,
              life: 2500,
            });
          } else {
            toast.add({
              severity: "success",
              summary: "Successful operation",
              detail: "SMS was sent successfully",
              life: 2500,
            });
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          toast.add({
            severity: "error",
            summary: "Failed operation",
            detail: "SMS sending failed",
            life: 2500,
          });
        });
    };

    const route = useRoute();
    if (route.query.phone) {
      phoneNumber.value = route.query.phone;
      phoneNumberSelectionTab.value = true;
    }

    if (store.getters.currentUser) {
      isoCode.value = store.getters.currentUser.isoCode;
    } else {
      axios
        .get("/api/Membership/GetCurrentSignedInUser")
        .then((res) => {
          isoCode.value = res.data.isoCode;
        })
        .catch((err) => console.log(err));
    }

    const allGroups = ref([]);
    const categories = ref([]);
    onMounted(() => {
      composeService
        .getCommunicationGroups()
        .then((res) => {
          for (let prop in res) {
            categories.value.push(prop);
            allGroups.value.push(res[prop]);
          }
          console.log(allGroups.value);
        })
        .catch((err) => console.log(err));
    });

    const display = ref(false);
    const showDateTimeSelectionModal = () => {
      display.value = !display.value;
    };
    const scheduleMessage = () => {
      display.value = false;
      toast.add({
        severity: "info",
        summary: "Missing implementation",
        detail: "Can't schedule message now",
        life: 2500,
      });
    };

    return {
      editor,
      editorData,
      editorConfig,
      possibleSMSDestinations,
      groupsAreVissible,
      toggleGroupsVissibility,
      selectedGroups,
      selectGroup,
      removeGroup,
      showSection,
      groupSelectionTab,
      membershipSelectionTab,
      phoneNumberSelectionTab,
      categories,
      allGroups,
      selectedMembers,
      removeMember,
      selectMember,
      searchText,
      filteredMembers,
      charactersCount,
      pageCount,
      sendSMS,
      phoneNumber,
      searchForPerson,
      loading,
      memberSearchResults,
      subject,
      sendOptionsIsShown,
      toggleSendOptionsDisplay,
      closeDropdownIfOpen,
      display,
      showDateTimeSelectionModal,
      scheduleMessage,
    };
  },
};
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  /* border: none; */
  /* transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; */
}

input:focus {
  outline: none;
}

.send-btn,
.discard-btn {
  background: #136acd;
  border-radius: 111px;
  color: #fff;
  outline: transparent;
  max-height: 38px;
}

.send-btn {
  border-radius: 111px 0 0 111px;
}

.send-btn-options {
  border-radius: 0 111px 111px 0;
  height: 30px;
  background: #136acd;
  padding: 0px 10px 7px;
  font-size: 22px;
  border-left: 1px solid #80808069;
}

.discard-btn {
  background: #fff;
  border: 1px solid #002044;
  border-radius: 111px;
  color: #000;
}

.dropdown-toggle {
  width: 100%;
  text-align: left;
  outline: transparent !important;
}

.dropdown-menu {
  width: 98%;
}

.dropdown-toggle::after {
  margin-left: auto;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  text-align: right !important;
  right: 10px;
  top: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.dropdown-toggle:focus {
  outline: none !important;
  border: none;
}

.inp:focus {
  outline: none;
  border: none;
}

.email-destination {
  padding: 0.1rem 0.4rem;
  border: 1px solid #02172e30;
  border-radius: 30px;
}

.remove-email {
  color: #a9adb1;
  font-weight: bold;
}

.remove-email:hover {
  cursor: pointer;
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

.groups {
  max-height: 165px;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.hide-dd {
  display: none !important;
}

.subject-text {
  width: 60px;
}

.subject-field {
  width: calc(100% - 70px);
  border: none;
  padding: 0.5rem;
  outline: transparent;
}

.text-area {
  width: 100%;
  border: 1px solid #02172e30;
  outline: none;
  padding: 0.5rem;
  margin-bottom: -5px !important;
}

.disable {
  pointer-events: none;
}

.c-pointer {
  cursor: pointer;
}

.dropdown-menu {
  max-height: 300px !important;
  overflow-y: auto;
}

.send-now-div {
  border: 1px solid #ddd;
}

.modal-lg {
  max-width: 680px;
}

.modal-body {
  padding: 2rem !important;
}

.grey-bg {
  background: #ebeff4;
}

.text-grey {
  color: grey;
}

.send-dropdown {
  border: 1px solid #ddd;
  width: 124px;
  position: absolute;
  background: #fff;
}

.send-dropdown a {
  color: #190138;
  font-size: 14px;
  text-decoration: none;
}

.hide {
  display: none;
}

.dd-item:hover {
  cursor: pointer;
}

@media screen and (max-width: 630px) {
  .send-btn-options {
    padding: 1px 10px 7px;
  }
}
</style>

<style>
.ck-editor__editable {
  min-height: 300px;
}
</style>