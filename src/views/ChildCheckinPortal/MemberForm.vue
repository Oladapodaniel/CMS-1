<template>
    <div class="container">
       <div class="row">
           <div class="col-md-12 px-0">
               <form @submit.prevent="addMember">
                    <div class="row">
                        <div class="col-md-8">

                              <div class="row my-3" v-if="!route.fullPath.includes('/checkin/checkinguardian')">
                                <div class="col-md-3 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Role</label>
                                </div>
                                <div class="col-md-9">
                                    <Dropdown :options="roles" v-model="role" optionLabel="name" placeholder="Select a role" style="width: 100%" />
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-md-3 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Firstname<span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-9">
                                    <input type="text" v-model="person.firstName" placeholder="First Name" class="form-control">
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-md-3 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Last Name</label>
                                </div>
                                <div class="col-md-9">
                                    <input type="text" v-model="person.lastName" placeholder="Last Name" class="form-control">
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-md-3 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Gender</label>
                                </div>
                                <div class="col-md-9">
                                    <Dropdown :options="gender.lookUps" optionLabel="value" placeholder="Select gender" v-model="selectedGender" style="width: 100%" />
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-md-3 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Date of birth</label>
                                </div>
                                <div class="col-md-9">
                                    <input type="date" v-model="dateOfBirth" class="form-control">
                                </div>
                            </div>

                              <!-- <div class="row my-3">
                                <div class="col-md-3 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Group</label>
                                </div>
                                <div class="col-md-9">
                                    <Dropdown :options="[ 'Todler', 'Primaries', 'Teenagers' ]" style="width: 100%" />
                                </div>
                            </div> -->
                        </div>

                        <div class="col-md-4">
                            <ImageForm @picture-url="setPictureUrl"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center my-5">
                            <div class="c-pointer text-decoration-none text-dark default-btn text-center border font-weight-bold mx-md-3 mx-2" @click="removeModal">Cancel</div>
                            <button class="default-btn text-white border-0 primary-bg font-weight-bold mx-md-3 mx-2">Save</button>
                        </div>
                    </div>
               </form>
           </div>
       </div>
    </div>
</template>

<script>
import { ref } from "vue"
import axios from "@/gateway/backendapi";
import Dropdown from "primevue/dropdown";
import ImageForm from "../event/childcheckin/components/ImageForm";
import { useRoute } from "vue-router"

export default {
    props: ['familyDetails'],
    components: { Dropdown, ImageForm },
    setup (props, { emit }) {
        const route = useRoute()
        const roles = ref([])
        const person = ref({})
        const gender = ref({})
        const dateOfBirth = ref("")
        const role = ref({})
        const selectedGender = ref({})
        const pictureUrl = ref("")


        const getFamilyRoles = async () => {
        try {
            let { data } = await axios.get('/getfamilyroles')
            console.log(data)
            roles.value = data.result
            emit('member-roles', data.result)
        }
        catch (err) {
            console.log(err)
        }
    }
    getFamilyRoles()
        
        const getGender = async () => {
            try {
                let { data } = await axios.get('/api/LookUp/GetAllLookUps')
                console.log(data)
                gender.value = data.find(i => i.type === "Gender")
    
            }
            catch (err) {
                console.log(err)
            } console.log(route.fullPath)
    }
    getGender()

    const setPictureUrl = (payload) => {
        pictureUrl.value = payload
    }

    const addMember = async() => {
        const memberDetails = {
            familyId: props.familyDetails.id,
            
            person: {
                firstName: person.value.firstName,
                lastName: person.value.lastName,
                pictureUrl: pictureUrl.value,
                dateOfBirth: dateOfBirth.value,
                genderId: selectedGender.value.id
            },
            tenantId: props.familyDetails.tenantID
        }
            if (!route.fullPath.includes('/checkin/checkinguardian')) {
                memberDetails.familyRoleId = role.value.id
            }   else {
                memberDetails.familyRoleId = 6
            }
        console.log(memberDetails)

        try {
            let { data } = await axios.post('/api/Family/addFamilyMember', memberDetails)
            console.log(data)
            const member = {
                firstName: person.value.firstName,
                lastName: person.value.lastName,
                pictureUrl: pictureUrl.value,
                roleId: role.value.id
            }
            emit("remove-modal")
            emit("push-to-view", member)
        }
        catch (err) {
            console.log(err)
        }
        
    }

    const removeModal = () => {
        emit("remove-modal")
    }

    return {
        roles,
        person,
        gender,
        dateOfBirth,
        addMember,
        role,
        selectedGender,
        setPictureUrl,
        pictureUrl,
        removeModal,
        route
    }
    }
}
</script>

<style scoped>

</style>