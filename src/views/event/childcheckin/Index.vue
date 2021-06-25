<template>
    <div class="container container-wide">
        <div class="row my-5">
            <div class="col-md-8">
                <h3 class="font-weight-bold">Child Checkin</h3>
            </div>
            <!-- <div class="col-md-4 d-md-flex justify-content-end">
                <button class="default-btn border-0 text-white font-weight-bold primary-bg"
                    data-toggle="modal" data-target="#exampleModal"
                >
                    Add Family
                </button>
            </div> -->
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
                                <div class="default-btn border-0 primary-bg text-white ml-4 text-center c-pointer" @click="checkIn">Search</div>
                                <!-- <SearchWithDropdown /> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5 mx-auto form-box box-shadow-lg" style="min-height: 200px" v-if="searched">
                    <div class="col-md-12 mx-auto">
                        <div class="row mb-3 mt-3">
                            <div class="col-md-12 mx-auto d-flex justify-content-end">
                                <button class="default-btn font-weight-bold border primary-text add-ward-btn"
                                    data-toggle="modal" data-target="#wardModal"
                                >Add ward</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 px-0">
                        <CheckinTable :registeredMembers="checkinDetails" :updatedGuardian="updatedGuardian"/>
                    </div>
                </div>

                <div class="row mt-5 mb-3" v-if="searched">
                    <div class="col-md-12 d-flex justify-content-center" @click="save">
                        <button class="default-btn border-0 text-white font-weight-bold primary-bg">
                            Save and Contnue
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
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <AddWard />
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
import AddWard from "./components/AddWard";
import { useToast } from "primevue/usetoast";
// import SearchWithDropdown from "@/components/search/SearchWithDropdown";

export default {
    components: { AddFamily, CheckinTable, ParentCard, FamilyDescriptionCard, AddWard },
    setup () {
        const toast = useToast()
        const code = ref("")
        const checkinDetails = ref({})
        const guardians = ref()
        const searched = ref(false)
        const updatedGuardian = ref({})

        const checkIn = async() => {
            try {
                let res = await axios.get(`/api/CheckInAttendance/retrieveFamily?checkInCode=${code.value}`)
                searched.value = true
                console.log(res)
                checkinDetails.value = res.data.returnObject
                getGuardian(res.data.returnObject.family.id)
            }
            catch (err) {
                console.log(err)
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
                 toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: ``,
                    life: 4000,
                });
                code.value = false
                searched.value = ""
            }

            const updateGuardian = (payload) => {
                updatedGuardian.value = payload
                checkinDetails.value.checkInBy = payload
            }
        return {
            checkIn,
            code,
            checkinDetails,
            guardians,
            searched,
            save,
            updatedGuardian,
            updateGuardian
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

    .modal-lg {
        max-width: 660px !important;
    }
</style>