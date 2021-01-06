<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-3 mt-3 offset-3 offset-md-0">
          <h4 class="font-weight-bold">Compose New SMS</h4>
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
      <div class="col-md-12" v-if="groupSelectionTab">
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
            <!-- <input
              type="text"
              class="border-0 inp pl-2"
              placeholder="add group"
              @click="toggleGroupsVissibility"
            /> -->

            <div class="dropdown">
              <input
                class="border-none dropdown-toggle"
                type="text"
                id="dropdownMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />

              <div class="dropdown-menu w-100" aria-labelledby="dropdownMenu">
                <a class="dropdown-item" @click="selectGroup('a', 'b', 'c')"
                  >Example</a
                >
                <div class="col-md-12 groups">
                  <a class="dropdown-item">Hello</a>
                  <div
                    class="row"
                    v-for="(category, index) in categories"
                    :key="index"
                  >
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-12">
                          <h4>{{ category }}</h4>
                          <a
                            class="dropdown-item"
                            v-for="(group, indx) in allGroups[index]"
                            @click="
                              selectGroup(group.category, group.id, group.name)
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

      <!-- Select Person from DB -->
      <div class="col-md-12 my-1" v-if="membershipSelectionTab">
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
                class="border-none dropdown-toggle my-1"
                type="text"
                id="dropdownMenu"
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
                  class="dropdown-item"
                  v-for="(member, index) in filteredMembers"
                  :key="index"
                  @click="selectMember(member)"
                  >{{ member.name }}</a
                >
                <p
                  class="bg-secondary p-1 mb-0"
                  v-if="filteredMembers.length === 0"
                >
                  Enter 3 or more characters
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
      <div class="col-md-12 my-1" v-if="phoneNumberSelectionTab">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10 py-2 px-0">
            <textarea class="form-control w-100"></textarea>
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
          <input type="text" class="input px-1" v-model="subject" />
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
          <button class="btn send-btn px-4">Send</button>
          <button class="btn discard-btn ml-3 px-3">Discard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { computed, onMounted, ref } from "vue";
import composeService from "../../services/communication/composer";

export default {
  setup() {
    const editor = ClassicEditor;
    const editorData = ref("<p>Content of the editor.</p>");
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
    const selectGroup = (category, id, name) => {
      selectedGroups.value.push({ data: `${category}_${id}`, name });
      groupsAreVissible.value = false;
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
    const selectMember = (selectedMember) => {
      selectedMembers.value.push(selectedMember);
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

    const charactersCount = computed(() => editorData.value.length);
    const pageCount = computed(() => Math.ceil(editorData.value.length / 160));

    const subject = ref("");
    // const isPersonalized = ref(false);
    const sendSMS = () => {
      const data = {
        subject: subject.value,
        message: editorData.value,
        isPersonalized: isPersonalized.value,
        contacts: [],
        groupedContacts: selectedGroups.value,
        toContacts: "",
        toOthers: "",
        isoCode: "",
        category: "",
        emailAddress: "",
        emailDisplayName: "",
        gateWayToUse: "",
      };

      composeService.sendMessage("/api/Messaging/sendSms", data)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err))
    };

    const allGroups = [];
    const categories = [];
    onMounted(() => {
      composeService
        .getCommunicationGroups()
        .then((res) => {
          for (let prop in res) {
            categories.push(prop);
            allGroups.push(res[prop]);
          }
          console.log(allGroups);
        })
        .catch((err) => console.log(err));
    });

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
  border: none;
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

.hide {
  display: none;
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
</style>

<style>
.ck-editor__editable {
  min-height: 300px;
}
</style>