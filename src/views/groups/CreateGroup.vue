<template>
  <div class="container-slim">
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-12">
          <h2>Add Group</h2>
        </div>
        <div class="col-md-12 px-0">
          <hr class="hr" />
        </div>
      </div>

      <div class="row grey-rounded-border py-3">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-8 col-lg-7">
                  <div class="row">
                    <div class="col-md-4 text-right">
                      <label for="groupName">Group name</label>
                    </div>
                    <div class="col-md-8">
                      <input
                        type="text"
                        v-model="groupData.name"
                        class="form-control"
                        id="formGroup"
                        @input="validateGroupName"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-5 mt-4">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-8 col-lg-7">
                  <div class="row">
                    <div class="col-md-4 text-right">
                      <label for="description">Description</label>
                    </div>
                    <div class="col-md-8">
                      <textarea
                        v-model="groupData.description"
                        name="description"
                        id="description"
                        rows="4"
                        class="form-control w-100"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mid-header-row py-1">
            <div class="col-md-12 pl-0">
              <span class="mid-header-text py-1 px-1">Members in group</span>
            </div>
          </div>

          <div class="row py-5">
            <div class="col-md-12">
              <button
                class="secondary-btn outline-none primary-text font-weight-bold"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add member
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document" ref="modal">
                  <div class="modal-content py-4 px-5">
                    <div class="modal-header py-3">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Group membership
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
                          <div class="row my-3">
                            <div class="col-md-5 text-right">
                              <label>Select Members</label>
                            </div>
                            <div class="col-md-7">
                              <div class="row">
                                <div
                                  class="col-md-12 py-2 px-0 grey-rounded-border"
                                >
                                  <p class="d-flex flex-wrap">
                                    <span
                                      class="select-member m-1"
                                      v-for="(member, index) in selectedMembers"
                                      :key="index"
                                    >
                                      <span>{{ member.name }}</span>
                                      <span
                                        class="ml-2 remove-member"
                                        @click="removeMember(index)"
                                        >x</span
                                      >
                                    </span>
                                  </p>

                                  <div class="dropdown">
                                    <input
                                      placeholder="Select persons"
                                      class="border-none outline-none dropdown-toggle my-1 px-1"
                                      type="text"
                                      id="dropdownMenu"
                                      @input="searchForMembers"
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
                                        v-for="(
                                          member, index
                                        ) in memberSearchResults"
                                        :key="member.id"
                                        @click="selectMember(member, index)"
                                        >{{ member.name }}</a
                                      >
                                      <p
                                        class="bg-secondary p-1 mb-0 disable"
                                        v-if="invalidSearchText"
                                      >
                                        Enter 3 or more characters
                                      </p>
                                      <p
                                        class="btn btn-default p-1 mb-0 disable"
                                        v-if="
                                          searchText.length >= 3 &&
                                          loading == false &&
                                          memberSearchResults.length === 0
                                        "
                                      >
                                        No match found
                                      </p>
                                      <p
                                        class="btn btn-default p-1 mb-0 disable"
                                      >
                                        <i
                                          class="fas fa-circle-notch fa-spin"
                                          v-if="
                                            searchText.length >= 3 &&
                                            loading == true &&
                                            memberSearchResults.length === 0
                                          "
                                        ></i>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row mb-3">
                            <div class="col-md-5 text-right">
                              <label>Position in group</label>
                            </div>
                            <div class="col-md-7 px-0">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="e.g Member"
                                v-model="position"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="secondary-btn bg-white text-dark"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>

                      <button
                        class="primary-btn outline-none"
                        @click="addSelectedMembersToGroup"
                        :data-dismiss="modalStatus"
                      >
                        Add member
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row table-header-row py-2">
            <div class="col-md-1">
              <input type="checkbox" class="py-2" />
            </div>
            <div class="col-md-2">
              <span class="py-2 font-weight-bold">NAME</span>
            </div>
            <div class="col-md-2">
              <span class="py-2 font-weight-bold">POSITION</span>
            </div>
            <div class="col-md-2">
              <span class="py-2 font-weight-bold">ADDRESS</span>
            </div>
            <div class="col-md-2">
              <span class="py-2 font-weight-bold">EMAIL</span>
            </div>
            <div class="col-md-2">
              <span class="py-2 font-weight-bold">PHONE</span>
            </div>
            <div class="col-md-">
              <!-- <i class="fa fa-elipsis-v"></i> -->
            </div>
          </div>

          <div class="row" v-if="loadingMembers">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-12 d-flex align-items-center justify-content-center"
                >
                  <i
                    class="fas fa-circle-notch fa-spin py-2"
                  ></i>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 px-0">
                  <hr class="hr my-0" />
                </div>
              </div>
            </div>
          </div>

          <div class="row" v-if="loadingMembers == false && groupMembers.length === 0">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-12 d-flex align-items-center justify-content-center"
                >
                  <p class="text-center font-weight-bold py-2">No members yet</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 px-0">
                  <hr class="hr my-0" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="row py-2"
            v-for="(member, index) in groupMembers"
            :key="index"
          >
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-1 d-flex justify-content-between align-items-center"
                >
                  <input type="checkbox" class="py-2" />
                </div>
                <div
                  class="col-md-2 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">NAME</span>
                  <span class="py-2">{{ member.name }}</span>
                </div>
                <div
                  class="col-md-2 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">POSITION</span>
                  <span class="py-2 text-xs-left">{{ member.position }}</span>
                </div>
                <div
                  class="col-md-2 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">ADDRESS</span>
                  <span class="py-2">{{ member.addres }}</span>
                </div>
                <div
                  class="col-md-2 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">EMAIL</span>
                  <span class="py-2">{{ member.email }}</span>
                </div>
                <div
                  class="col-md-2 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">PHONE</span>
                  <span class="py-2">{{ member.phone }}</span>
                </div>
                <div
                  class="col-md-1 d-flex justify-content-between align-items-center"
                >
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
                      <a class="dropdown-item" v-if="member.phone">
                        <router-link
                          :to="`/tenant/sms-communications/compose-message?phone=${member.phone}`"
                          >Send SMS</router-link
                        >
                      </a>
                      <a class="dropdown-item" v-if="member.email">
                        <router-link
                          :to="`/tenant/email-communications/compose-message?phone=${member.email}`"
                          >Send Email</router-link
                        >
                      </a>
                      <a class="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 px-0">
                  <hr class="hr my-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-3 my-3">
        <div class="col-md-12">
          <p
            class="text-right text-danger font-weight-bold pr-2"
            v-if="groupNameIsInvalid"
          >
            Please enter group name
          </p>
        </div>
        <div class="col-md-12 d-flex justify-content-end action-btns">
          <router-link to="" class="secondary-btn bg-white text-dark"
            >Discard</router-link
          >
          <button class="primary-btn outline-none" @click="saveGroupData">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import composeService from "../../services/communication/composer";
import axios from "@/gateway/backendapi";
import router from "@/router/index";
import { useRoute } from 'vue-router';

export default {
  setup() {
    const groupData = ref({});
    const searchText = ref("");
    const loading = ref(false);
    const loadingMembers = ref(true);
    const memberSearchResults = ref([]);
    const position = ref("");

    const searchForMembers = (e) => {
      if (e.target.value.length >= 3) {
        memberSearchResults.value = [];
        loading.value = true;
        composeService
          .searchMemberDB("/api/Membership/GetSearchedUSers", e.target.value)
          .then((res) => {
            loading.value = false;
            memberSearchResults.value = res;
          });
      } else {
        memberSearchResults.value = [];
      }
    };

    const selectedMembers = ref([]);
    const selectMember = (member, index) => {
      selectedMembers.value.push(member);
      memberSearchResults.value.splice(index, 1);
    };

    const removeMember = (index) => {
      selectedMembers.value.splice(index, 1);
    };

    const modalStatus = ref("");
    const groupMembers = ref([]);
    const addSelectedMembersToGroup = () => {
      selectedMembers.value.forEach((i) => {
        i.position = position.value;
        i.personId = i.id;
        i.id = "";
        groupMembers.value.push(i);
      });
      modalStatus.value = "modal";
      position.value = "";
      memberSearchResults.value = [];
      selectedMembers.value = [ ];
    };

    const invalidSearchText = computed(() => {
      const searchTextIsValid =
        searchText.value.length < 3 &&
        loading.value == false &&
        memberSearchResults.value.length === 0;
      return searchTextIsValid;
    });

    const groupNameIsInvalid = ref(false);
    const saveGroupData = () => {
      if (!groupData.value.name) {
        groupNameIsInvalid.value = true;
        return false;
      }

      groupData.value.peopleInGroups = groupMembers.value;
      axios
        .post("/api/CreateGroup", groupData.value)
        .then((res) => {
            console.log(res.data);
          router.push("/tenant/people-groups")
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    const validateGroupName = (e) => {
      if (e.target.value) {
        groupNameIsInvalid.value = false;
      }
    };

    const route = useRoute();
    const getGroupById = async () => {
        try {
            loadingMembers.value = true;
            const { data } = await axios.get(`/api/GetGroupsFromId/${route.params.groupId}`, groupData.value)
            console.log(data, "group info");
            loadingMembers.value = false;
            groupData.value.name = data.name;
            groupData.value.description = data.description;
            
            data.peopleInGroups.forEach(i => {
                const person = { 
                    personID: i.person.personID,
                    address: i.person.address,
                    email: i.person.email,
                    name: i.person.firstName + i.person.lastName,
                    phone: i.person.phoneNumber,
                    position: i.position
                }

                groupMembers.value.push(person);
            })
        } catch (error) {
            loadingMembers.value = false;
            console.log(error.response);
        }
    }

    const buttonText = computed(() => {
        if (route.params.groupId) return "Update group";
        return "Save group";
    })

    if (route.params.groupId) getGroupById();

    return {
      groupData,
      searchForMembers,
      searchText,
      loading,
      memberSearchResults,
      selectMember,
      removeMember,
      selectedMembers,
      groupMembers,
      addSelectedMembersToGroup,
      invalidSearchText,
      position,
      modalStatus,
      groupNameIsInvalid,
      saveGroupData,
      validateGroupName,
      buttonText,
      loadingMembers,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.mid-header-row {
  border-top: 1px solid #dde2e6;
  border-bottom: 1px solid #dde2e6;
}

.mid-header-text {
  background: #ebeff4;
  color: #136acd;
  font-weight: bold;
}

.table-header-row {
  background: #ebeff4;
  border-top: 1px solid #dde2e6;
  border-radius: 8px 8px 0 0;
}

.hidden-header {
  display: none;
}

.secondary-btn {
  border: 1px solid #dde2e6;
  padding: 10px 21px;
}

.action-btns a {
  text-decoration: none;
}

.modal-header {
  border-bottom: none !important;
}

.modal-footer {
  border-top: none !important;
}

.select-member {
  padding: 0.1rem 0.4rem;
  border: 1px solid #02172e30;
  border-radius: 30px;
}

.remove-member {
  color: #a9adb1;
  font-weight: bold;
}

.remove-member:hover {
  cursor: pointer;
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

@media screen and (max-width: 767px) {
  .hidden-header {
    display: inline-block;
    font-weight: bold;
  }

  .table-header-row {
    display: none;
  }
}
</style>