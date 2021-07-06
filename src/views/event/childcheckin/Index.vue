<template>
    <div class="container container-wide">
        <div class="row my-5">
            <div class="col-md-8">
                <h3 class="font-weight-bold">Child Checkin / Checkout</h3>
            </div>
            <div class="col-md-4 d-md-flex justify-content-end">
                <button class="default-btn border-0 text-white font-weight-bold primary-bg"
                    data-toggle="modal" data-target="#exampleModal"
                >
                    Add Family
                </button>
            </div>
        </div>

        <div class="row">
            <div class="px-0" :class="{ 'col-md-8' : searched, 'col-md-10' : !searched }">
                <div class="row mx-auto form-box py-3 box-shadow-lg" style="min-height: 150px">
                    <div class="col-md-10 mx-auto d-flex align-items-center">
                        <div class="row w-100 mt-3 d-md-flex align-items-center">
                            <div class="col-md-3 text-md-right">
                                <label for="person" class="font-weight-700">Enter Code</label>
                            </div>
                            <div class="col-md-9 d-flex">
                                <input type="text" v-model="code" class="form-control">
                                <div class="default-btn border-0 primary-bg text-white ml-4 text-center c-pointer" @click="checkIn"><i class="pi pi-spin pi-spinner text-white" v-if="loading"></i>&nbsp;Search</div>
                                <!-- <SearchWithDropdown /> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5 mx-auto form-box box-shadow-lg" style="min-height: 200px" v-if="searched">
                    <div class="col-md-12 mx-auto">
                        <div class="row mb-3 mt-3">
                            <div class="col-md-12 mx-auto d-flex justify-content-end">
                                <button v-if="false" class="default-btn font-weight-bold border primary-text add-ward-btn"
                                    data-toggle="modal" data-target="#wardModal"
                                >Add ward</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 px-0">
                        <CheckinTable :registeredMembers="checkinDetails" :updatedGuardian="updatedGuardian" @checkin-event="setCheckinEvent" @checkout-event="setCheckoutEvent"/>
                    </div>
                </div>

                <div class="row mt-5 mb-3" v-if="searched">
                    <div class="col-md-12 d-flex justify-content-center" @click="save">
                        <button class="default-btn border-0 text-white font-weight-bold primary-bg">
                            Save and Continue
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-md-4 px-0" v-if="searched">
                <div class="row">
                    <div class="col-md-11 form-box offset-md-1" style="height: 100%">
                        <ParentCard :guardian="checkinDetails.checkInBy"/>
                        <div class="row tr-border-bottom my-3">

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <FamilyDescriptionCard @addtofamily="openAddToFamilyModal" :guardians="guardians" @update-guardian="updateGuardian" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add family Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header py-4">
                    <h4 class="modal-title font-weight-bold px-4" id="exampleModalLabel">Add New Family</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <AddFamily />
                </div>
                </div>
            </div>
        </div>

        <!-- Add Ward Modal -->
        <div class="modal fade" id="wardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header py-4">
                    <h4 class="modal-title font-weight-bold px-4" id="exampleModalLabel">Add New Ward</h4>
                    <button type="button" ref="close" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="pi pi-times"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <MemberForm />
                    <!-- :familyDetails="checkinDetails" @member-roles="getMemberRoles" @remove-modal="dismissModal" @push-to-view="pushToView" -->
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { ref } from "vue"
import axios from "@/gateway/backendapi"
import AddFamily from "./components/AddFamily";
import CheckinTable from "./components/CheckinTable";
import ParentCard from "./components/ParentCard";
import FamilyDescriptionCard from "./components/FamilyDescriptionCard";
// import AddWard from "./components/AddWard";
// import { useToast } from "primevue/usetoast";
import MemberForm from "../../ChildCheckinPortal/MemberForm"
import swal from "sweetalert";
// import SearchWithDropdown from "@/components/search/SearchWithDropdown";

export default {
    components: { AddFamily, CheckinTable, ParentCard, FamilyDescriptionCard, MemberForm },
    setup () {
        // const toast = useToast()
        const code = ref("")
        const checkinDetails = ref({})
        const guardians = ref()
        const searched = ref(false)
        const updatedGuardian = ref({})
        // const close = ref("")
        const registeredMember = ref([])
        const checkInOutEvent = ref("")
        const loading = ref(false)

        const checkIn = async() => {
            loading.value = true
            try {
                let res = await axios.get(`/api/CheckInAttendance/retrieveFamily?checkInCode=${code.value}`)
                searched.value = true
                loading.value = false
                console.log(res)
                checkinDetails.value = res.data.returnObject
                getGuardian(res.data.returnObject.family.id)

                res.data.returnObject.registeredMember.map((item) => {
                    const y = res.data.returnObject.groupsInvolved.findIndex((i) => i.id === item.checkInAttendanceID);
                    if (y >= 0) {
                        item['group'] = res.data.returnObject.groupsInvolved[y].fullGroupName;
                    }   else {
                        item['group'] = ''
                    }
                    return item
                })
               
                console.log(registeredMember.value)
            }
            catch (err) {
                console.log(err)
                loading.value = false
            }
        }

        const getGuardian = async(id) => {
            
            try {
                const res = await axios.get(`/api/Family/familyGuidians?familyId=${id}`)
                console.log(res)
                guardians.value = res.data.returnObject
                
            }
            catch (error) {
                console.log(error)
          
            }

            
        }
           
           const save = () => {
                if(checkInOutEvent.value == "checkin") {
                     swal(
                        "Checkin Successful!",
                        "You have checked in for this event successfully!",
                        "success"
                    );
                    code.value = ""
                    searched.value = false
                }   else if (checkInOutEvent.value == "checkout") {
                    swal(
                        "Checkout Successful!",
                        "You have checked out for this event successfully!",
                        "success"
                    );
                    code.value = ""
                    searched.value = false
                }else {
                     swal(
                        "Hey!",
                        "You have not checked in anyone for this event.",
                        "info"
                    );
                }
                
            }

            const updateGuardian = (payload) => {
                updatedGuardian.value = payload
                checkinDetails.value.checkInBy = payload
            }

            // const getMemberRoles = (payload) => {
            //     memberRoles.value = payload
            // }

            // const dismissModal = () => {
            //     close.value.click()
            // }

            // const pushToView = (payload) => {
            //     let data = {
            //         person: {
            //             firstName: payload.firstName,
            //             lastName: payload.lastName,
            //             pictureUrl: payload.pictureUrl
            //         },
            //         familyRoleID: payload.roleId
            //     }
            //     familyDetails.value.familyMembers.push(data)
            //     console.log(data)
            // }

            const setCheckinEvent = (payload) => {
                checkInOutEvent.value = payload
            }

            const setCheckoutEvent = (payload) => {
                checkInOutEvent.value = payload
            }
        return {
            checkIn,
            code,
            checkinDetails,
            guardians,
            searched,
            save,
            updatedGuardian,
            updateGuardian,
            // getMemberRoles,
            // dismissModal,
            // close,
            // pushToView
            registeredMember,
            setCheckinEvent,
            setCheckoutEvent,
            checkInOutEvent,
            loading
        }
    }
}
</script>

<style scoped>
    .add-ward-btn {
        border: 1px solid #2E67CE !important;
    }

    .form-box {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DDE2E6;
        border-radius: 30px;
    }
</style>