<template>
    <div class="container-wide container-top">
        <div class="row">
            <div class="col-12 event-header">Event</div>
            <div class="col-12 mt-5 checkin-text">Checkin</div>
        </div>
        <div class="row">
            <div class="card col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 p-3">
                <div class="row">
                    <div class="col-3 offset-4 offset-sm-0">
                        <img :src="eventDetails.eventBanner" class="member-image" v-if="eventDetails.eventBanner" />
                        <img src="../../assets/checkin-assets/worship-service.jpeg" class="member-image" v-else />
                    </div>
                    <div class="col-sm-6 mt-3 mt-sm-0">
                        <div class="event-service">{{ eventDetails.name }}</div>
                        <div class="event-time mt-2">{{ formatDate(eventDetails.date) }}</div>
                    </div>
                    <div class="col-10 offset-1 offset-sm-0 mt-2 mt-sm-0 col-sm-3 align-self-center">
                        <router-link :to="{ name: 'UpcomingEvents' }">
                        <div class="change text-center p-2">
                            Change
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-12 my-3">
                <hr />
            </div>
        </div> -->

         <!-- :class="{ 'fix-card' : addScrollClass, 'default-position' : !addScrollClass }" -->
         <!-- :class="{ 'col-10 col-md-6' : !addScrollClass}" -->
        <div class="row mt-4">
            <div class="offset-1 offset-md-3 card col-10 col-sm-6 p-3" >
                <div class="row">
                    <div class="col-6 checkin-text">
                        Groups
                    </div>
                    <div class="col-6 checkin-text">
                        Slot
                    </div>
                </div>
                <div class="row" v-for="(item, index) in groupSlots" :key="index">
                    <div class="col-6 mt-3 event-time">
                        {{ item.group }}
                    </div>
                    <div class="col-6 mt-3 font-weight-700"> 
                        {{ item.slot !== null ? item !== 0 ? item.slot : "" : 'Unlimited' }}
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 my-3">
                <hr />
            </div>
        </div>

        <div class="row d-flex flex-column flex-sm-row justify-content-between p-3">
            <div class="family-name align-self-sm-center">{{ familyDetails.familyName ? `${familyDetails.familyName}'s Household` : "" }}</div>
            <div class="mt-3 mt-sm-0">
                <div class="add-ward text-center c-pointer p-2" data-toggle="modal" data-target="#familyModal">
                            Add ward
                        </div>
            </div>
        </div>
   
        <div class="row mt-4" v-for="(item, index) in familyDetails.familyMembers" :key="item.id">
            <div class="col-12 card">
                <div class="row p-3 align-items-center">
                    <div class="col-1 col-md-1">
                        <Checkbox :binary="true" v-model="item.check" @change="checkChild(index)" />
                    </div>
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <img :src="item.person.pictureUrl" class="member-image" v-if="item.person.pictureUrl" />
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-4">
                        <div class="child-name">{{ item.person.firstName }}  {{ item.person.lastName }}</div>
                        <!-- <div class="checkin-time mt-2">08:00am</div> -->
                    </div>
                    <div class="col-12 col-md-5 mt-3">   
                        <div class="row">
                            <div class="col-4 mt-2"> Group: </div>
                            <div class="col-8">
                                <Dropdown class="p-0 w-100" :options="attendanceCheckin" v-model="item.selectedAttendanceCheckin" optionLabel="fullGroupName" :filter="false" placeholder="Select" @change="setSlot(index, item)" :showClear="false">
                                </Dropdown>
                            <!-- <div class="slot mt-2 text-danger">{{ item.error ? "You cannot select this group, it's filled up already" : "" }} </div> -->
                            </div>
                        </div>
                        
                    </div>
                    <!-- <div class="col-2 edit"><i class="pi pi-pencil"></i></div> -->

                </div>
            </div>
        </div>
        <!-- {{ slotAvailable }} -->


        <div class="row d-flex d-flex flex-column flex-sm-row justify-content-between my-5">
            <div class="col-12 mb-3 p-0 font-weight-700">Check In By</div>
            <div class="col-10 offset-1 offset-md-0 col-md-4 p-0">
                <Dropdown class="p-0 w-100 guardian" :options="guardians" optionLabel="person.firstName" v-model="checkInBy" :filter="false" placeholder="Select guardian" :showClear="false">
                </Dropdown> 
            </div>
            <div @click="register" class="col-10 offset-1 offset-md-0 col-md-4 number-checkin-child px-4 py-2 text-white text-center mt-3 mt-md-0 c-pointer font-weight-700" >
                Register
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                 <div
            class="modal fade"
            id="familyModal"
            tabindex="-1"
            aria-labelledby="familyModalLabel"
            aria-hidden="true"
            >
            <div class="modal-dialog modal-large family">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title header1" id="familyModalLabel">Add New Member</h5>
                    <div
                    type="button"
                    class="btn-close"
                    data-dismiss="modal"
                    aria-label="close"
                    ref="close"
                    ><i class="pi pi-times"></i></div>
                </div>
                <div class="modal-body">
                    <Memberform :familyDetails="familyDetails" @member-roles="getMemberRoles" @remove-modal="dismissModal" @push-to-view="pushToView"/>
                </div>{{ familyDetails }}

                </div>
            </div>
            </div>
            </div>
        </div>

        <Dialog v-model:visible="displayModal" :style="{width: '80vw'}" :modal="true">
            <div class="row">
                <div class="col-2 offset-5"><img src="../../assets/smile.jpg" class="w-100"></div>
                <div class="col-12 mt-3 text-center">
                    <div>You have successfully registered your family members for this event!</div>
                    <div class="nb">NB: Keep this code, it is what will be used to check you in.</div>
               </div>
                <div class="col-12 stylish-text text-white text-center text-center p-5 mt-4 primary-bg text-white success-card">
                     {{ checkinCode }}
                </div>
                </div>
            <template #footer>
                <Button label="Done" icon="pi pi-check" @click="() => displayModal = false" autofocus />
            </template>
        </Dialog>
        <Toast />

        
    </div>
</template>

<script>
import { ref, computed, onUpdated } from "vue"
import Dropdown from 'primevue/dropdown';
import axios from "@/gateway/backendapi";
import Memberform from "./MemberForm";
import Dialog from 'primevue/dialog';
import { useRoute } from "vue-router"
import dateFormatter from '../../services/dates/dateformatter';
import { useToast } from "primevue/usetoast";
import finish from '../../services/progressbar/progress';
export default {
    components: {
        Dropdown,
        Memberform,
        Dialog
    },
    setup () {
        const route = useRoute()
        const toast = useToast()
        const check = ref(true)
        const check2 = ref(false)
        const check3 = ref(false)
        const eventDetails = ref({})
        const familyDetails = ref({})
        const memberRoles = ref([])
        const selectedMember = ref([])
        const close = ref("")
        const selectedGuardian = ref({})
        const guardians = ref([])
        const displayModal = ref(false)
        const checkinCode = ref("")
        const attendanceCheckin = ref([])
        const selectedSlot = ref("")
        const checkinIndex = ref(0)
        const checkInBy = ref({})
        const selectedGroup = ref({})
        const number = ref(200)
        const addScrollClass = ref(false)
        


        const getEventDetails = () => {
            let retrievedObj = localStorage.getItem('event_register')
             eventDetails.value = JSON.parse(retrievedObj)
             console.log(eventDetails.value)
        }
        getEventDetails()

        // const autoCheckRegisteredMembers = () => {
        //     familyDetails.value.familyMembers.forEach((item) => {
        //             personInAttendance.value.forEach((i) => {
        //                 const y = i.findIndex(i => i.id === item.person.id)
        //             if (y >= 0) {
        //                 console.log('found a match')
        //                 item.check = true
        //             }   else {
        //                 console.log('didnt find a match')
        //                 item.check = false
        //             }
        //             });
        //             return item
        //         })
        //         console.log('raegjnkjernvkjernbvjkernvaekjnjk')
        // }


        const getAttendanceCheckin = async() => {
            
            try {
                const res = await axios.get(`/api/CheckInAttendance/checkinevents?activityId=${route.params.eventId}`)
                console.log(res)
                attendanceCheckin.value = res.data
                // personInAttendance.value = res.data.map(i => {
                //     return i.personsinAttendance
                // })
                // console.log(personInAttendance)
                
            }
            catch (error) {
                console.log(error)
            }
        }
        getAttendanceCheckin()

        

        const groupSlots = computed(() => {
            if (attendanceCheckin.value.length === 0) return []
            return attendanceCheckin.value.map(i => {
                return {
                    group: i.fullGroupName,
                    slot: i.registrationSlot
                }
            })
        })

        const getFamilyMembers = async() => {
            let getBaseAuth = localStorage.getItem('baseAuth')
            let baseAuth = JSON.parse(getBaseAuth)
            try {
                const res = await axios.get(`/api/Family/family?personId=${baseAuth.checkinPerson}`)
                console.log(res)
                familyDetails.value = res.data
                familyDetails.value.familyMembers = res.data.familyMembers.map(i => {
                    i.addToGroup = false
                    i.initialGroup = null
                    return i
                })
                getGuardian(res.data.id)
            }
            catch (error) {
                console.log(error)
            }
        }
        getFamilyMembers()

        const getGuardian = async(id) => {
            
            try {
                const res = await axios.get(`/api/Family/familyGuidians?familyId=${id}`)
                console.log(res)
                guardians.value = res.data.returnObject
                finish()
            
            }
            catch (error) {
                console.log(error)
                finish()
            }
            
        }



        const checkChild = () => {
            
            // if(familyDetails.value.familyMembers[index].check) {
            //     selectedSlot.value = selectedSlot.value - 1
            // }   else {
            //     selectedMember.value.splice(index, 1)

            //     selectedSlot.value = selectedSlot.value + 1
            // }
        }

        const getMemberRoles = (payload) => {
            memberRoles.value = payload
        }

        const dismissModal = () => {
            close.value.click()
        }

        const pushToView = (payload) => {
            let data = {
                person: {
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    pictureUrl: payload.pictureUrl,
                    id: payload.personId
                },
                familyRoleID: payload.roleId
            }
            familyDetails.value.familyMembers.push(data)
            console.log(data)
        }

        const register = async() => {

        // public Guid PersonId { get; set; }
        // public Guid ActivityId { get; set; }
        // public Guid CheckInAttendanceId { get; set; }
        // public Guid GroupId { get; set; }
        // public Guid CheckInBy { get; set; }
        let checkedMembers = []
        familyDetails.value.familyMembers.forEach(i => {
            if (i.check) {
                checkedMembers.push(i)
            }
        })
        console.log(checkedMembers)
        let mappedMembers = checkedMembers.map(i => {
                 if (i && i.selectedAttendanceCheckin && i.selectedAttendanceCheckin.groupID) return {
                        personId: i.person.id,
                        activityId: eventDetails.value.activityID,
                        checkInAttendanceId: i.selectedAttendanceCheckin.id,
                        groupId: i.selectedAttendanceCheckin.groupID,
                        checkInBy: checkInBy.value ? checkInBy.value.person ? checkInBy.value.person.id : familyDetails.value.fatherID ? familyDetails.value.fatherID : familyDetails.value.motherID : ""
                    }
                    return true
            })
           const checking = mappedMembers.find(i =>  {
               return i === true
            })
     
        if (checking) {
            toast.add({
                severity: "warn",
                summary: "An error occurred",
                detail: "Please select a class or group for each member(s) you want to register.",
                life: 10000
            });
        }   else {
  
            try {
                const res = await axios.post(`/api/CheckInAttendance/RegisterChildren`, mappedMembers)
                console.log(res)
                if (res.data.response.toLowerCase().includes("successfull")) {
                    checkinCode.value = res.data.returnObject.childCheckInCode
                    displayModal.value = true
                    finish()
                }   else {
                    toast.add({
                        severity: "warn",
                        summary: "Oops",
                        detail: "Something went wrong while trying to register, please reload and try again try again.",
                    });
                }
          
            }
            catch (error) {
                console.log(error)
                finish()
            }
        }
 

            console.log(familyDetails.value.familyMembers)

            
        }

        const slotAvailable = computed(() => {
            //  if (number.value ) {
            //      let newNumber = number.value - 1
            //      return newNumber
            //  }else {
            //      return '200m'
            //  }
            //  return number.value - 1
            //  selectedGroup.value.selectedAttendanceCheckin.registrationSlot - 1
            //  return "200m"
            // let multiValue = 1;
      // if (daysToEndOfSubscription.value > 0) multiValue += existingPlan.value.amount * daysToEndOfSubscription.value;
            if (number.value) {
                let newNumber = number.value - +selectedMember.value.length
                 return newNumber;
            } else {
                return "200g"
            }

        })

        const checkForGroup = (item) => {
            if (!item.initialGroup) {
                const index = attendanceCheckin.value.findIndex(i => i.fullGroupName === item.selectedAttendanceCheckin.fullGroupName);
                if (index >= 0) attendanceCheckin.value[index].registrationSlot -= 1;
            } else {
                const index = attendanceCheckin.value.findIndex(i => i.fullGroupName === item.initialGroup);
                const indx = attendanceCheckin.value.findIndex(i => i.fullGroupName === item.selectedAttendanceCheckin.fullGroupName);
                if (index >= 0) attendanceCheckin.value[index].registrationSlot += 1;
                if (indx >= 0) attendanceCheckin.value[indx].registrationSlot -= 1;
            }
        }

        const setSlot = (index, item) => {
            checkinIndex.value = index
            selectedGroup.value = item
            familyDetails.value.familyMembers[index].slot = slotAvailable.value
            console.log(item)
            if (selectedMember.value.length === 0) {
            selectedMember.value.push(item)
            }  

            selectedMember.value.forEach(i => {
                if (selectedMember.value.length > 0 && i.selectedAttendanceCheckin.groupID !== item.selectedAttendanceCheckin.groupID) {
                    selectedMember.value.push(item)
                }   else {
                    console.log('Dont push')
                }
            })
            console.log(selectedMember.value)

            // const groupObj = attendanceCheckin.value.find(i => {
            //     return i.fullGroupName === item.selectedAttendanceCheckin.fullGroupName
            // })

            // const personInGroup = groupObj.personsinAttendance.find(i => {
            //     if (i.id === familyDetails.value.familyMembers[index].person.id) return i.id === familyDetails.value.familyMembers[index].person.id
            // })
            // console.log(personInGroup)
            // if (personInGroup) {
            //     familyDetails.value.familyMembers[index].check = true
            // }   else {
            //     familyDetails.value.familyMembers[index].check = false
            // }

            let checkSlot = groupSlots.value.find(i => {
                return i.group === item.selectedAttendanceCheckin.fullGroupName
            })
            console.log(checkSlot)
            
            if (checkSlot.slot !== null) {
                if (checkSlot.slot > 0) {
                    checkSlot.slot = checkSlot.slot - 1
                    console.log(checkSlot)
                }   else {
                    if(checkSlot.slot === 0) {
                        toast.add({
                            severity: "warn",
                            summary: "No slot available",
                            detail: "The group to which you want to register this child is full.",
                            life: 10000
                        });
                        // This is meant to 
                        /*eslint no-undef: "warn"*/
                        break_code
                }
                }
            }


            checkForGroup(item)
            item.initialGroup = item.selectedAttendanceCheckin.fullGroupName;




        }

        const formatDate = (date) => {
            return dateFormatter.monthDayYear(date)
        }

        onUpdated(() => {
            window.addEventListener('scroll', function() {
            // console.log(window.pageYOffset + 'px')
            if (window.pageYOffset >= 285) {
                addScrollClass.value = true
            }   else {
                addScrollClass.value = false
            }
            });
        })


        return {
            check,
            check2,
            check3,
            selectedSlot,
            familyDetails,
            memberRoles,
            checkChild,
            selectedMember,
            eventDetails,
            getMemberRoles,
            dismissModal, 
            close,
            pushToView,
            register,
            selectedGuardian,
            guardians,
            displayModal,
            checkinCode,
            attendanceCheckin,
            setSlot,
            checkinIndex,
            checkInBy,
            formatDate,
            slotAvailable,
            selectedGroup,
            number,
            addScrollClass,
            groupSlots
        }
    }
}
</script>

<style scoped>
.event-header {
    font: normal normal 800 29px/46px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.checkin-text {
    font: normal normal 700 21px/32px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.event-service {
    font: normal normal bold 18px/27px Nunito Sans;
    color: #02172E;
}

/* .spacen-up {
    padding: 30px
} */

.event-time {
    font: normal normal 600 16px/22px Nunito Sans;
    color: #02172E;
    opacity: 0.66;
}

.change {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #2E67CE;
    border-radius: 111px;
    font: normal normal 600 16px/22px Nunito Sans;
    color: #2E67CE;
}

.add-ward {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #2E67CE;
    border-radius: 111px;
    font: normal normal bold 15px/20px Nunito Sans;
    color: #2E67CE;
    width: 132px
}

.event-picture {
    border: 1px solid black;
    width: 61px;
    height: 61px;
    border-radius: 50%
}

.family-name {
    font: normal normal 600 24px/13px Nunito Sans;
    color: #002044;
}

.child-pic {
    border: 1px solid black;
    width: 55px;
    height: 55px;
    border-radius: 50%
}

.child-name {
    font: normal normal 600 20px/13px Nunito Sans;
    color: #002044;
}

.checkin-time {
    font: normal normal 600 13px/13px Nunito Sans;
    color: #002044;
}

.slot {
    font: normal normal 600 13px/16px Nunito Sans;
    color: #2E67CE;
}

.edit {
    color: #2E67CE;
    font: normal normal 700 17px/13px Nunito Sans;
}

.edit i.pi {
    font-size: 20px
}

.guardian {
    background: #F1FAFF 0% 0% no-repeat padding-box;
    border: 1px solid #7070702E;
    border-radius: 5px;
}
.number-checkin-child {
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 22px;
}

.stylish-text {
    font-size: 3em;
    font-weight: 700;
}

.member-image {
    height: 60px;
    width: 60px;
    border-radius: 50%;
}

.header1{
font: normal normal 800 34px/46px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}

.modal-large.family{
  width:100%;
  max-width: 680px;
}

.add-bg-list div:nth-child(odd) {
    background:#2E67CE

}

/* @media (min-width: 768px) {
    .fix-card {
        position: fixed;
        top: 10px;
        width: 70%;
        z-index: 1;
        transition: all 0.5s ease-in-out;
    }

    div.fix-card .card {
        box-shadow: 0px 3px 6px #2c28281c;
    }

    .default-position {
        position: relative;
        transition: all 0.5s ease-in-out;
    }
} */

.nb {
    font-size: 0.9em;
    font-weight: 700
}

</style>