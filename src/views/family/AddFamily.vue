<template>
    <div class="container-wide container-top">
        <div class="row my-3">
            <div class="col-12 page-header">
                Add Family
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <hr class="hr" />
            </div>
      </div>

        <div class="row my-4 pt-4">
            <div class="col-md-6 offset-md-2">
                <div class="row">
                    <div class="col-md-4 text-right align-self-center">
                        <label for="" class="">Family Name</label>
                    </div>
            
                    <div class="col-md-8">
                        <input type="text" v-model="familyName" class="form-control" />
                    </div>
                </div>
            </div>

            <div class="col-md-6 offset-md-2 mt-4">
                <div class="row">
                    <div class="col-md-4 text-right align-self-center">
                        <label for="" class="">Father</label>
                    </div>
                    <!-- Father Dropdown -->
                    <div class="col-md-8">
                        <div class="dropdown">
                        
                        <input
                            type="text"
                            class="form-control"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            v-model="userSearchString"
                            @input="searchForUsers"
                        />
                        <div
                            class="dropdown-menu w-100"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <div class="row w-100 mx-auto" v-if="false">
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
                            v-for="(member, index) in searchedMembers"
                            :key="index"
                            @click="addExistingMember(member)"
                            >{{ member.name }}</a
                            >
                            <a
                            class="dropdown-item font-weight-700 small-text"
                            href="#"
                            v-if="
                                searchingForMembers && searchedMembers.length === 0
                            "
                            ><i class="pi pi-spin pi-spinner"></i
                            ></a>
                            <p
                            class="modal-promt pl-1 bg-secondary m-0"
                            v-if="
                                userSearchString.length < 3 &&
                                searchedMembers.length === 0
                            "
                            >
                            Enter 3 or more characters
                            </p>
                            <a
                            class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
                            style="border-top: 1px solid #002044; color: #136acd"
                            @click="showAddMemberForm"
                            data-dismiss="modal"
                            >
                            <i
                                class="pi pi-plus-circle mr-2 primary-text d-flex align-items-center"
                                style="color: #136acd"
                            ></i>
                                Add new member
                            </a>
                        </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-6 offset-md-2">
                <div class="row">
                    <div class="col-md-4 text-right align-self-center">
                        <label for="" class="">Mother</label>
                    </div>
                    <div class="col-md-8">
                        <div class="dropdown">
                            
                            <input
                                type="text"
                                class="form-control"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                v-model="motherSearchString"
                                @input="motherSearchForUsers"
                            />
                            <div
                                class="dropdown-menu w-100"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <div class="row w-100 mx-auto" v-if="false">
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
                                v-for="(member, index) in motherSearchedMembers"
                                :key="index"
                                @click="addExistingMemberForMother(member)"
                                >{{ member.name }}</a
                                >
                                <a
                                class="dropdown-item font-weight-700 small-text"
                                href="#"
                                v-if="
                                    motherSearchingForMembers && motherSearchedMembers.length === 0
                                "
                                ><i class="pi pi-spin pi-spinner"></i
                                ></a>
                                <p
                                class="modal-promt pl-1 bg-secondary m-0"
                                v-if="
                                    motherSearchString.length < 3 &&
                                    motherSearchedMembers.length === 0
                                "
                                >
                                Enter 3 or more characters
                                </p>
                                <a
                                class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
                                style="border-top: 1px solid #002044; color: #136acd"
                                @click="showAddMemberFormForMother"
                                data-dismiss="modal"
                                >
                                <i
                                    class="pi pi-plus-circle mr-2 primary-text d-flex align-items-center"
                                    style="color: #136acd"
                                ></i>
                                    Add new member
                                </a>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 offset-md-2 mt-4">
                <div class="row">
                    <div class="col-md-4 text-right align-self-center">
                        <label for="" class="">Email</label>
                    </div>
        
                    <div class="col-md-8">
                        <input type="text" v-model="email" class="form-control" />
                    </div>
                </div>
            </div>

            <div class="col-md-6 offset-md-2 my-4">
                <div class="row">
                    <div class="col-md-4 text-right align-self-center">
                        <label for="">Phone Number</label>
                    </div>
        
                    <div class="col-md-8">
                        <input type="text" v-model="homePhone" class="form-control" />
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <hr class="hr" />
            </div>
        </div>

        

        <div class="row mt-5">
            <div class="col-md-10 mx-auto">
                <FamilyWards :familyMembers="familyMembers" :memberRoles="memberRoles"/>
            </div>
        </div>

        <div class="row my-5">
            <div class="col-md-10 mx-auto d-flex justify-content-center my-5">
                <button class="default-btn text-dark font-weight-bold border mx-4">Cancel</button>
                <button  @click="createFamily" class="default-btn font-weight-bold border text-white primary-bg mx-4">Save</button>
            </div>
        </div>

        <!-- Add Ward Modal -->
        <div class="modal fade" id="addWard" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered " role="document">
                <div class="modal-content">
                <div class="modal-header py-4">
                    <h4 class="modal-title font-weight-bold px-4" id="exampleModalLabel">Add New Ward</h4>
                    <button type="button" ref="close" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="pi pi-times"></i>
                    </span>
                    </button>
                </div>
                <!-- :familyDetails="familyDetails" -->
                <!-- :memberDetails="memberDetails"  -->
                <!-- @editted-value="edittedValue" -->
                <div class="modal-body">
                    <!-- <MemberForm  @member-roles="getMemberRoles" @remove-modal="dismissModal" @push-to-view="pushToView" /> -->
                    <div class="col-sm-10 offset-sm-1 font-weight-700">Search for ward in church</div>
                    <div class="dropdown col-sm-10 offset-sm-1">
                            
                            <input
                                type="text"
                                placeholder="Enter ward name"
                                class="form-control mt-2"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                v-model="wardSearchString"
                                @input="wardSearchForUsers"
                            />
                            <div
                                class="dropdown-menu w-100"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <div class="row w-100 mx-auto" v-if="false">
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
                                v-for="(member, index) in wardSearchedMembers"
                                :key="index"
                                @click="addExistingMemberForWard(member)"
                                >{{ member.name }}</a
                                >
                                <a
                                class="dropdown-item font-weight-700 small-text"
                                href="#"
                                v-if="
                                    wardSearchingForMembers && wardSearchedMembers.length === 0
                                "
                                ><i class="pi pi-spin pi-spinner"></i
                                ></a>
                                <p
                                class="modal-promt pl-1 bg-secondary m-0"
                                v-if="
                                    wardSearchString.length < 3 &&
                                    wardSearchedMembers.length === 0
                                "
                                >
                                Enter 3 or more characters
                                </p>
                                <a
                                class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
                                style="border-top: 1px solid #002044; color: #136acd"
                                @click="showAddMemberFormForWard"
                                data-dismiss="modal"
                                >
                                <i
                                    class="pi pi-plus-circle mr-2 primary-text d-flex align-items-center"
                                    style="color: #136acd"
                                ></i>
                                    Add new member
                                </a>
                            </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-6 d-md-flex justify-content-end">
                                    <button class="default-btn" data-dismiss="modal">Cancel</button>
                                </div>
                                <div class="col-md-6">
                                    <button
                                    class="default-btn primary-bg border-0 text-white"
                                    data-dismiss="modal"
                                    @click="addWard"
                                    >
                                    Save
                                    </button>
                                </div>
                            </div>
                </div>
                </div>
            </div>
        </div>

        <Dialog
        header="Create New Member"
        v-model:visible="display"
        :style="{ width: '70vw', maxWidth: '600px' }"
        :modal="true"
        position="top"
        >
        <div class="row">
            <div class="col-md-12">
            <NewPerson @cancel="() => display = false" @person-id="getFatherId($event)"/>
            </div>
      </div>
    </Dialog>
        
        <Dialog
        header="Create New Member"
        v-model:visible="motherDisplay"
        :style="{ width: '70vw', maxWidth: '600px' }"
        :modal="true"
        position="top"
        >
        <div class="row">
            <div class="col-md-12">
            <NewPerson @cancel="() => motherDisplay = false" @person-id="getMotherId($event)"/>
            </div>
      </div>
    </Dialog>
        
        <Dialog
        header="Create New Member"
        v-model:visible="wardDisplay"
        :style="{ width: '70vw', maxWidth: '600px' }"
        :modal="true"
        position="top"
        >
        <div class="row">
            <div class="col-md-12">
            <NewPerson @cancel="() => wardDisplay = false" @person-id="getWardId($event)"/>
            </div>
      </div>
    </Dialog>

        
    </div>
</template>

<script>
import { ref } from "vue"
import FamilyWards from "./FamilyWards";
// import MemberForm from "../ChildCheckinPortal/MemberForm.vue"
import membershipService from "../../services/membership/membershipservice";
import Dialog from "primevue/dialog";
import NewPerson from '../accounting/offering/NewDonor.vue';
import axios from "@/gateway/backendapi";
import router from "@/router/index";

export default {
    components: { 
        FamilyWards,
        // MemberForm,
        Dialog,
        NewPerson
     },
    setup () {
        const familyMembers = ref([])
        const memberRoles = ref([])
        const close = ref("")
        const father = ref("")
        const mother = ref("")
        const userSearchString = ref("");
        const searchingForMembers = ref(false)
        const searchedMembers = ref([]);
        const display = ref(false)
        const motherSearchString = ref("");
        const motherSearchingForMembers = ref(false)
        const motherSearchedMembers = ref([]);
        const motherDisplay = ref(false)
        const wardSearchString = ref("");
        const wardSearchingForMembers = ref(false)
        const wardSearchedMembers = ref([]);
        const wardDisplay = ref(false)
        const selectedMember = ref({})
        const homePhone = ref("")
        const email = ref("")
        const familyName = ref("")

        

        const getFamilyRoles = async () => {
        try {
            let { data } = await axios.get('/getfamilyroles')
            console.log(data)
            memberRoles.value = data.result
        }
        catch (err) {
            console.log(err)
        }
    }
    getFamilyRoles()

        const dismissModal = () => {
            close.value.click()
        }

        // const pushToView = (payload) => {
        //     let data = {
        //         person: {
        //             firstName: payload.firstName,
        //             lastName: payload.lastName,
        //             pictureUrl: payload.pictureUrl,
        //             genderID: payload.genderID
        //         },
        //         familyRoleID: payload.roleId
        //     }
        //     familyMembers.value.push(data)
        //     console.log(data)
        // }

        

        // Search member for father
        const searchForUsers = () => {
          if (userSearchString.value.length >= 3) {
            startSearch(userSearchString.value);
          }
        };

        const startSearch = async (str) => {
          try {
            searchingForMembers.value = true;
            const response = await membershipService.searchMembers(str);
            searchingForMembers.value = false;
            searchedMembers.value = response;
          } catch (error) {
            searchingForMembers.value = false;
            console.log(error);
          }
        };

        const showAddMemberForm = () => {
          display.value = true;
        };

        const addExistingMember = (member) => {
          userSearchString.value = member.name;
          father.value = {
              firstName: member.name.split(" ")[0],
              lastName: member.name.split(" ")[1],
              id: member.id,
              email: member.email,
              phone: member.phone
          }
          console.log(userSearchString.value, member)
          console.log(father.value)
        }

        const getFatherId = (payload) => {
          console.log(payload)
          userSearchString.value = payload.personFirstName

          father.value = {
              firstName: payload.personFirstName,
              id: payload.personId
          }
          console.log(father.value)
        }
        
        
        
        // SearchMember for mother
        const motherSearchForUsers = () => {
          if (motherSearchString.value.length >= 3) {
            motherStartSearch(motherSearchString.value);
          }
        };

        const motherStartSearch = async (str) => {
          try {
            motherSearchingForMembers.value = true;
            const response = await membershipService.searchMembers(str);
            motherSearchingForMembers.value = false;
            motherSearchedMembers.value = response;
          } catch (error) {
            motherSearchingForMembers.value = false;
            console.log(error);
          }
        };

        const showAddMemberFormForMother = () => {
          motherDisplay.value = true;
        };

        const addExistingMemberForMother = (member) => {
          motherSearchString.value = member.name;
          mother.value = {
              firstName: member.name.split(" ")[0],
              lastName: member.name.split(" ")[1],
              id: member.id,
              email: member.email,
              phone: member.phone
          }
          console.log(motherSearchString.value, member)
          console.log(mother.value)
        }

        const getMotherId = (payload) => {
          console.log(payload)
          motherSearchString.value = payload.personFirstName

          mother.value = {
              firstName: payload.personFirstName,
              id: payload.personId
          }
          console.log(mother.value)
        }
       
       
       // SearchMember for ward
        const wardSearchForUsers = () => {
          if (wardSearchString.value.length >= 3) {
            wardStartSearch(wardSearchString.value);
          }
        };

        const wardStartSearch = async (str) => {
          try {
            wardSearchingForMembers.value = true;
            const response = await membershipService.searchMembers(str);
            wardSearchingForMembers.value = false;
            wardSearchedMembers.value = response;
          } catch (error) {
            wardSearchingForMembers.value = false;
            console.log(error);
          }
        };

        const showAddMemberFormForWard = () => {
          wardDisplay.value = true;
        };

        const addExistingMemberForWard = (member) => {
          wardSearchString.value = member.name;
        //   wardIndex.value = index
          selectedMember.value = member
        //   mother.value = {
        //       firstName: member.name.split(" ")[0],
        //       lastName: member.name.split(" ")[1],
        //       id: member.id,
        //       email: member.email,
        //       phone: member.phone
        //   }
          console.log(wardSearchString.value, member)
        //   console.log(mother.value)
        }

        const getWardId = (payload) => {
          console.log(payload)
          wardSearchString.value = payload.personFirstName

          const constructSelectedMember = new Object()
          constructSelectedMember.name = payload.personFirstName
          constructSelectedMember.personId = payload.personId
          familyMembers.value.push(constructSelectedMember)
          console.log(constructSelectedMember)
        }

        const addWard = () => {
            const constructSelectedMember = new Object()
                constructSelectedMember.name = selectedMember.value.name
                constructSelectedMember.personId = selectedMember.value.id
                familyMembers.value.push(constructSelectedMember)
                console.log(constructSelectedMember)
                console.log(familyMembers.value)
                wardSearchString.value = ""
           }

        const createFamily = async() => {
            const family = {
                familyName: familyName.value,
                fatherId: father.value.id,
                motherId: mother.value.id,
                homePhone: homePhone.value,
                email: email.value,
                familyMembers: familyMembers.value.map(i => {
                    return {
                        personId: i.personId,
                        familyRoleId: i.roleId.id
                    }
                })
                // familyMembers.value.map(i => {
                //     return {
                //         person: {
                //             firstName: i.person.firstName,
                //             lastName: i.person.lastName,
                //             pictureUrl: i.person.pictureUrl,
                //             genderID: i.person.genderID
                //         },
                //         familyRoleID: i.familyRoleID,
                //     }
                // })
            }
            console.log(family)

            try {
                let res = await axios.post("/api/family/createFamily", family)
                console.log(res)
                router.push('/tenant/family')
            }
            catch (err) {
                console.log(err)
            }
        }

        return {
            memberRoles,
            dismissModal,
            close,
            // pushToView,
            familyMembers,
            createFamily,
            mother,
            father,
            userSearchString,
            searchForUsers,
            startSearch,
            searchingForMembers,
            searchedMembers,
            showAddMemberForm,
            getFatherId,
            addExistingMember,
            display,
            motherSearchForUsers,
            showAddMemberFormForMother,
            addExistingMemberForMother,
            motherDisplay,
            getMotherId,
            motherSearchedMembers,
            motherSearchString,
            motherSearchingForMembers,
            wardSearchForUsers,
            showAddMemberFormForWard,
            addExistingMemberForWard,
            wardDisplay,
            getWardId,
            wardSearchedMembers,
            wardSearchString,
            wardSearchingForMembers,
            addWard,
            // wardIndex,
            selectedMember,
            homePhone,
            email,
            familyName
        }
    }
}
</script>

<style scoped>
.page-header {
    font: normal normal 800 29px Nunito sans;
}
</style>