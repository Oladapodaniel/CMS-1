<template>
    <div class="event">
        <div class="bg col-md-10 col-lg-8 offset-md-1 offset-lg-2">
        <div class="container first-pane">
            <div class="row">
                <div class="col-12 col-sm-4 col-lg-6 events">Events</div>
                <div class="col-5 col-sm-3 col-lg-2 btn btn-preview">Preview</div>
                <div class="col-6 col-sm-4 offset-1 col-lg-3 btn btn-save">Save and Continue</div>
            </div>
        </div>
           <div class="form col-12 col-sm-12  offset-md-0 col-md-12">
            
                <div class="row form-header" @click="events">
                    <div class="col-12 col-sm-6">
                        Events and Activities
                    </div>
                </div>
                <!-- <div class="container"> -->
                <div class="row form-body" ref="formBody">
                    <div class="col-6 offset-3 offset-sm-0 col-sm-5 col-md-3">
                        <div class="drop-box">Browse or Drop your banner here.Maximum 5MB in size JPG, PNG, or GIF formats.</div>
                    </div>
                    <div class="col-12 col-sm-7 col-md-6 offset-md-3">
                        <div class="row nested-row">
                            <div class="col-12 col-sm-5">
                                    <label for="eventName">Event Name</label>
                                </div>
                                <div class="col-12 col-sm-7">
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-sm-5">
                                    <label for="venue">Venue</label>
                                </div>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-sm-5">
                                    <label for="details">Details</label>
                                </div>
                                <div class="col-sm-7">
                                    <textarea class="form-control textarea-adjust" rows="3"></textarea>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-12 push-public">
                        <div class="row">
                            <div class="col-1">
                                <input type="checkbox" class="form-check">
                            </div>
                            <div class="col-10">
                                <div class="make-public">Make Public</div>
                                <div class="public">Make Event publicly visible on app</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 col-md-5 push-down event-reg">
                        <div>Event Registration Setting</div>
                    </div>
                    <div class="col-5 col-md-7 push-down event-reg-dark">
                        <div>Event Registration</div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row enable-reg">
                            <div class="col-1">
                                <input type="checkbox" v-model="check" class="form-check">
                            </div>
                            <div class="col-10">
                                <div>Enable Registration</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="check" class="col-sm-12">
                        <div class="row">
                            <div class="col-6 col-sm-4 paid">is this event paid for?</div>
                    <div class="col-2">
                        <div class="form-radio form-radio-inline paid">
                            <input class="form-radio-input" @change="changeValue" name="event" type="radio" label="Yes" value="Yes">
                            <label class="form-radio-label" >Yes</label>
                        </div>
                    </div>
                    <div class="col-4 col-sm-6">
                        <div class="form-radio form-radio-inline paid">
                        <input class="form-radio-input"  @change="changeValue" name="event" type="radio" label="No" value="No">
                        <label class="form-radio-label" >No</label>
                    </div>
                    </div>
                    <div v-if="selectedValue == null" class="row form-body col-sm-12"></div>
                    <div v-else-if="selectedValue == 'Yes'" class="row form-body reg col-sm-12">
                        <div class="row">
                            <div class="col-sm-4 col-lg-2">
                        Amount
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <input type="number" class="form-control">
                    </div>
                    <div class="col-12 col-sm-4 col-lg-2">
                        Email to be sent upon after registration
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <textarea class="form-control" rows="2"></textarea>
                    </div>
                    <div class="col-12 col-sm-4 col-lg-2">
                        Event rules and guidelines
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                    <div class="col-12 col-sm-4 col-lg-2">
                        SMS to be sent upon after registration
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                        </div>
                    
                </div>
                <div v-else class="row form-body reg col-sm-12">
                    <div class="row">
                        <div class="col-12 col-sm-4 col-lg-2">
                        Email to be sent upon after registration
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                       <div class="col-12 col-sm-4 col-lg-2">
                        SMS to be sent upon after registration
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                    <div class="col-12 col-sm-4 col-lg-2">
                        Event rules and guidelines
                    </div>
                    <div class="col-12 col-sm-8 col-lg-4">
                        <textarea class="form-control" rows="4"></textarea>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        <!-- </div> -->
        </div>
        <div class="form">
            <!-- <div class="container"> -->
                    <div class="row second-form first-row">
                        <div class="col-sm-5 dropdown-container" >
                            <!-- <div class="event-category">Add event Categories</div> -->
                            <select class="event-category form-control" @change="addEvent" id="selectEvent">
                                <option value="">Add Event Categories</option>
                                <option>Sunday Service(First Service)</option>
                                <option>Sunday Service(Second Service)</option>
                                <option>Tuesday (Mid Week Service)</option>
                                <option>Sunday Service (Third Service)</option>
                                <option v-for="(newEvent, index) in newEvents" :key="index" :value="newEvents">{{ newEvent }}</option>
                                <option>
                                   Add New Event
                                </option>
                            </select>
                            <button hidden type="button" id="modalTogglerEvent" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalEvent">
                                Launch demo modal
                              </button>
                        </div>
                        
                        <div class="offset-sm-1 col-sm-6">
                            <div class="row nested-row">
                                <div class="col-sm-6">
                                    <label for="date">Date</label>
                                </div>
                                <div class="col-sm-6">
                                    <input type="date" class="form-control">
                                </div>
                                <div class="col-sm-6">
                                    <label for="topic">Topic</label>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-sm-6">
                                    <label for="preacher">Preacher</label>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-12 offset-sm-1 add">Add Attendance</div>
                <div class="attendance-header">
                    <div class="row">
                        <div class="col-sm-3">Attendance Type</div>
                        <div class="col-sm-3 offset-sm-2">Count</div>
                        <div class="col-sm-2 offset-sm-1">Total</div>
                    </div>
                </div>
                <div class="attendance-body" id="attendanceBody" v-for="(item, index) in attendanceItem" :key="index">
                    <div class="row">
                        <div class="col-sm-3">
                            <select class="form-control" v-model="item.category">
                                <option :value="select">Select type</option>
                                <option value="Adult">Adult</option>
                                <option value="Children">Children</option>
                                <option v-for="(newAttendance, index) in newAttendances" :key="index" :value="newAttendance">{{ newAttendance }}</option>
                            </select>
                        </div>
                        <div class="col-sm-3 offset-sm-2">
                            <input type="number" v-model="item.count" class="form-control">
                        </div>
                        <div class="col-sm-2 offset-sm-1">{{ item.count }}</div>
                        <div class="col-sm-1" @click="delAttendance(index)">del</div>
                    </div>
                </div>
                    <div class="col-sm-12 text-center add-attendance" id="addAttendance" @click="addAttendance">Add Attendance Item</div>
                    <div  class="display" id="showAttendance">
                        <input type="text" class="form-control shadow mb-3" v-model="attendanceText" placeholder="Search attendance item">
                        <div @click="attendance" v-for="(filteredAttendance, index) in filterAttendance" :key="index">{{ filteredAttendance }}</div>
                        <div @click="createAttendance" class="create">Create New Attendance Item</div>
                    </div>
                    <button hidden type="button" id="modalTogglerAttendance" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalAttendance">
                        Launch demo modal
                    </button>
                    <div class="col-sm-12 empty"></div>
                    <textarea class="col-sm-12 textarea form-control" rows="5">Note ...</textarea>

                <div class="col-sm-12 offset-sm-1 add">Add Offering</div>
                <div class="attendance-header">
                    <div class="row">
                        <div class="col-sm-4">Offering Item</div>
                        <div class="col-sm-5">Amount</div>
                        <div class="col-sm-2">Total</div>
                    </div>
                </div>
                <div class="attendance-body" id="offeringBody" v-for="(item, index) in offeringItem" :key="index">
                    <div class="row">
                        <div class="col-sm-3">
                            <select class="form-control" v-model="item.type">
                                <option value="Building">Building</option>
                                <option value="Child dedication">Child Dedication</option>
                                <option value="Tithe">Tithe</option>
                                <option v-for="(newOffering, index) in newOfferings" :key="index" :value="newOffering">{{ newOffering }}</option>
                            </select>
                        </div>
                        <div class="offset-sm-1 col-sm-1">
                                <select class="currency" v-model="item.currency">
                                    <option :value="NGN">NGN</option>
                                    <option value="GHA">GHA</option>
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" v-model="item.amount">
                            </div>
                            <div class="col-sm-1 offset-sm-1">{{ item.amount }}</div>
                            <div class="col-sm-1 offset-sm-1">del</div>
                    </div>
                </div>
                    <div class="col-sm-12 text-center add-attendance" id="addOffering" @click="addOffering">Add Offering Item</div>
                    <div  class="display" id="showList">
                        <input type="text" class="form-control shadow mb-3" v-model="offeringText" placeholder="Search Offering item">
                        <!-- <div @click="offering">Building</div>
                        <div @click="offering">Children Dedication</div>
                        <div @click="offering">Tithe</div> -->
                        <div v-for="(newOffering, index) in filterOffering" :key="index" @click="offering">{{ newOffering }}</div>
                        <div @click="createOffering" class="create">Create New Offering Item</div>
                    </div>
                    <button hidden type="button" id="modalTogglerOffering" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalOffering">
                        Launch demo modal
                    </button>
                    
                    <div class="col-sm-12 empty"></div>
                    <textarea class="col-sm-12 textarea form-control" rows="5">Note ...</textarea>
                    <div class="col-sm-12 offset-sm-1 add">Add First Timers</div>
                <div class="attendance-header">
                    <div class="row">
                        <div class="col-sm-4">Name</div>
                        <div class="col-sm-4">Address</div>
                        <div class="col-sm-4">Phone Number</div>
                    </div>
                </div>
                <div class="attendance-body" v-for="(item, index) in firstTimers" :key="index">
                    <div class="row">
                        <div class="col-sm-3">
                            <select class="form-control" v-model="item.name">
                                <option :value="item.name">{{ item.name }}</option>
                                
                            </select>
                        </div>
                        <div class="col-sm-3 offset-sm-1">
                            <input type="text" v-model="item.address" class="form-control">
                        </div>
                        <div class="col-sm-2 offset-sm-1">{{ item.phoneNumber }}</div>
                    </div>
                </div>
                    <div class="col-sm-12 text-center add-attendance" @click="createFirstTimers">Add First Timers</div>
                    <button hidden type="button" id="modalTogglerFirstTimers" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalFirstTimers">
                        Launch demo modal
                    </button>
                    <div class="col-sm-12 empty"></div>
                    <textarea class="col-sm-12 textarea form-control" rows="5">Note ...</textarea>
                <!-- </div> -->
        </div>
        
            <div class="form">
                <div class="container">
                <div class="row row-form">
                    <div class="total">
        <h1 class="header1">TOTAL</h1>
        <hr>
        <div class="attendance1">
            <div class="attendance2">
                <h5 class="head5">ATTENDANCE</h5>
                <h3 class="header3">2666</h3>

            </div>
             <div class="attendance3">
                <h5 class="head5">OFFERING</h5>
                <h3 class="header3">$ 2666</h3>

            </div>
        </div>
        <hr>

        <h1 class="header2">NOTES</h1>
        <h5 class="header5">Total Attendance Count : 234</h5>
    <!-- </div> -->
    </div>
                </div>
            </div>
        </div>
        
    </div>

    <!-- Event Modal -->
<div class="modal fade" id="exampleModalEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" id="exampleModalLabel">Add Event</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="offset-sm-1 col-sm-3">New Event</div>
                <div class="col-sm-7">
                    <input type="text" v-model="eventCreate" class="form-control">
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-second" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="closeEvent" @click="createNewEvent">Save</button>
        </div>
      </div>
  </div>
</div>


    <!-- Attendance Modal -->
<div class="modal fade" id="exampleModalAttendance" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" id="exampleModalLabel">Add Attendance Item</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="offset-sm-1 col-sm-3">Attendance Item</div>
                <div class="col-sm-7">
                    <input type="text" v-model="attendanceCreate" class="form-control">
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-second" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="closeAttendance" @click="createNewAttendance">Save</button>
        </div>
      </div>
  </div>
</div>


    <!-- Offering Modal -->
<div class="modal fade" id="exampleModalOffering" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" id="exampleModalLabel">Add Offering</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="offset-sm-1 col-sm-3">Add Item</div>
                <div class="col-sm-7">
                    <input type="text" v-model="offeringCreate" class="form-control">
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-second" data-dismiss="modal">Cancel</button>
          <button type="button" @click="createNewOffering" id="closeOffering" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>

    <!-- First Timers Modal -->
  <div class="modal fade" id="exampleModalFirstTimers" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" id="exampleModalLabel">Add First Timers</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <!-- <div class="offset-sm-1 col-sm-3">Add First Timers</div> -->
                <!-- <div class="col-sm-7">
                    <input type="text" v-model="name" class="form-control">
                </div>
                <div class="col-sm-7">
                    <input type="text" v-model="address" class="form-control">
                </div>
                <div class="col-sm-7">
                    <input type="text" v-model="phoneNumber" class="form-control">
                </div> -->
            </div>
            <!-- <div class="input-group mt-lg-3">
                                    <input type="text" class="form-control w-lg-100 w-sm-75" 
                                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <input type="file" id="myfiles" style="display: none;" directory webkit-directory>
                                        <span class="input-group-text" id="basic-addon2"> Choose File</span>
                                        <input type="button" id="filebtn" onclick="document.getElementById('myfiles').click()">
                                    </div>
                                </div> -->
            <div class="">
                <form>
                    <div class="form-group row">
                        <label for="Surname" class="col-sm-2 col-form-label">Surname</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="name" class="form-control" id="surname" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="Firstname" class="col-sm-2 col-form-label">Firstname</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="Firstname" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="phone number" class="col-sm-2 col-form-label">Phone number</label>
                        <div class="col-sm-10">
                            <input type="tel" v-model="phoneNumber" class="form-control" id="phone number">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="address" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10 mb-4">
                            <input type="text" v-model="address" class="form-control" id="address">
                        </div>
                    </div>


                    <div class="form-row ml-lg-5 m-auto">
                        <div class="col">
                            <select class="custom-select custom-select-sm">
                                <option selected>Marital Status</option>
                                <option value="1">Married</option>
                                <option value="2">Single</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="custom-select custom-select-sm">
                                <option selected>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                    </div>
                    <!-- <div class="container my-3 m-auto  row">
                        <button type="button"
                            class="col btn but mr-3 btn-outline-secondary btn-sm but2 ml-sm-5">Cancel</button>
                        <button type="button" class="col btn but but1 btn-primary btn-sm">Save</button>
                    </div> -->
                </form>


            </div>
            
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-second" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="closeFirstTimers" @click="save">Save</button>
        </div>
      </div>
  </div>
</div>


    </div>
</template>

<script>
// import { onMounted, ref } from "vue";
export default {
    data () {
        return{
            type: null,
            currency: null,
            amount: null,
            offeringItem: [],
            category: null,
            count: null,
            attendanceItem: [],
            name: null,
            address: null,
            phoneNumber: null,
            firstTimers:[],
            selectedValue: null,
            check: false,
            offeringCreate: null,
            newOfferings: ['Building', 'Children Dedication', 'Tithe'],
            attendanceCreate: null,
            newAttendances: ['Adult', 'Children'],
            eventCreate: null,
            newEvents: [],
            attendanceText: '',
            offeringText: ''
            
        }
    },

    methods: {
        addAttendance () {
            const showAttendance = document.querySelector('#showAttendance')
            showAttendance.classList.toggle('offering-drop')
        },
        addOffering () {
            const showList = document.querySelector('#showList')
            showList.classList.toggle('offering-drop')               
        },
        offering (e) {
            this.offeringItem.push({
                type: e.target.innerHTML
            })
             const showList = document.querySelector('#showList')
            showList.classList.toggle('offering-drop')
            
        },
        attendance (e) {
            this.attendanceItem.push({
                category: e.target.innerHTML
            })
            const showAttendance = document.querySelector('#showAttendance')
            showAttendance.classList.remove('offering-drop')
        },
        addEvent (e) {
            if (e.target.value == 'Add New Event') {
        document.querySelector('#modalTogglerEvent').click();
    }
        },
        createOffering () {
            document.querySelector('#modalTogglerOffering').click();
        },
        createAttendance () {
            document.querySelector('#modalTogglerAttendance').click();
        },
        createFirstTimers () {
            document.querySelector('#modalTogglerFirstTimers').click();
        },
        save () {
            if (this.name && this.address && this.phoneNumber) {
                this.firstTimers.push({
                name: this.name,
                address:this.address,
                phoneNumber: this.phoneNumber
            })
            this.name = '';
            this.address = '';
            this.phoneNumber = '';
            document.querySelector('#closeFirstTimers').setAttribute('data-dismiss',  'modal')
            }
        },
        changeValue (e) {
           this.selectedValue = e.target.value
        },
        events () {
            // console.log(this.$refs)
            // this.$refs.formBody.classList.toggle('show-body')
        },
        createNewOffering () {
            this.newOfferings.push(this.offeringCreate)
            this.offeringCreate = '';
            document.querySelector('#closeOffering').setAttribute('data-dismiss',  'modal')
        },
        createNewAttendance () {
            this.newAttendances.push(this.attendanceCreate)
            this.attendanceCreate = '';
            console.log(this.newAttendances,"att");
            document.querySelector('#closeAttendance').setAttribute('data-dismiss',  'modal')
        },
        createNewEvent () {
            this.newEvents.push(this.eventCreate)
            this.eventCreate = '';
            document.querySelector('#closeEvent').setAttribute('data-dismiss',  'modal')
        },
        delAttendance (index) {
            this.attendanceItem.splice(index, 1)
        }
    },
    computed: {
        filterAttendance() {
            if (this.attendanceText !== '' && this.newAttendances.length > 0) {
                return this.newAttendances.filter((i) => {
                    return i.toLowerCase().includes(this.attendanceText.toLowerCase())
                })
            } else {
                return this.newAttendances;
            }
        },

        filterOffering() {
            if (this.offeringText !== '' && this.newOfferings.length > 0) {
                return this.newOfferings.filter((i) => {
                    return i.toLowerCase().includes(this.offeringText.toLowerCase())
                })
            } else {
                return this.newOfferings;
            }
        }
    },

    created () {
            console.log(this.selectedValue)
    }   
}
</script>

<style scoped>
    .event {
    font-size: 0.9em;
    font-family: 'Nunito sans';
}

.events {
    font: normal normal 800 28px Nunito sans;
}

.btn-preview {
    border: 1px solid #797E81;
    border-radius: 22px;

}

.btn-save {
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 22px;
    color: white;
    /* border: 2px solid red; */
    
}

.nested-row {
    font-size: 0.9em
}

.nested-row label {
    color: #02172E;
    margin-top: 10px;
    width: 100%;
    text-align: right;
}

.nested-row input {
    margin: 5px;
    padding: 5px;
    width: 100%;
    border: 1px solid #B2C2CD;
    border-radius: 5px;
}

.container.first-pane {
    margin-top: 20px;
}

.event-category {
    display: inline-block;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DDE2E6;
    border-radius: 5px;
    font: normal normal bold 16px Nunito Sans;
    letter-spacing: 0px;
    /* color: #136ACD; */
    width: 100%;
    height: 100%;
    text-align: center;
    text-align-last: center;
}

.dropdown-container select { 
    /* for Firefox */ 
    -moz-appearance: none; 
    /* for Safari, Chrome, Opera */ 
    -webkit-appearance: none; 
  } 

  /* for IE10 */ 
  .dropdown-container select::-ms-expand { 
    display: none; 
  } 

.new-category {
    text-align: center;
    padding: 30px;
    color: #136ACD;
    font: normal normal bold 16px Nunito Sans;
}

.form {
    margin-top: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #797E8159;
    border: 1px solid #DDE2E6;
    border-radius: 7px;

}

.form .second-form.row.first-row {
    padding: 50px;
}

.form-body {
    padding: 30px;
}


.attendance-header  {
    background-color: #ECF0F3;
    padding: 0 50px;
    border: none;
    border-bottom: 1px solid  rgb(204, 204, 204);
}

.attendance-body {
    padding: 0 50px;
    background-color: #ECF0F3;
}

.attendance-type, .count {
    background-color: rgb(255, 255, 255);
    width: 80%;
    border-radius: 5px;
    padding: 5px;
    
}

.attendance-header  div, .attendance-body div {
    padding: 5px;
}

.attendance-header  div {
    color: #002044;
    font-weight: 700;
}

.empty {
    border: none;
    border-top: 1px solid rgb(231, 231, 231);
    width: 100%;
    height: 70px;
}

.edit {
    font: normal normal bold 13px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
}

.add-attendance {
    color: #136ACD;
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
    box-shadow: 0px 3px 15px #797E8159;
    z-index: 1;
    position: absolute;
    left: 25%;
    padding: 10px 10px;
    width: 50%;
    background: white;
    display: block;
}


.offering-drop div {
    padding: 3px;
    
}

.offering-drop div:hover {
    padding: 3px;
    background: #ECF0F3;
}

.add {
    font: normal normal bold 16px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    display: inline;
    padding: 10px 15px;
    background: #ECF0F3;
    border-radius: 10px 10px 0px 0px;
}

.textarea {
    border: none;
    border-top: 1px solid rgb(231, 231, 231);
}

.modal-title {
    font: normal normal 800 23px/31px Nunito Sans;
    letter-spacing: 0px;
    color: #002044;
}

.modal-fade {
    background: #002044;
}

.modal-body {
    margin:10px;
}

.modal-content {
    border: none;
    border-radius: 7px;
}

.btn-second {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #002044;
    border-radius: 111px;
}

.btn-primary {
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 111px;
}

.currency {
    width:120%;
    height: 100%;
    font-size: 0.8em;
    background: rgb(207, 207, 207);
    border: none;
    outline: none;

}

.drop-box {
    border: 2px dotted rgb(211, 211, 211);
    display: inline-block;
    padding: 15%;
    font-size:0.8em;
}

.textarea-adjust {
    margin:7px 10px 0px 7px;
}

.form-header {
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
    padding: 15px 30px;
    background: #EBEFF4;
    border: 1px solid #00204430;
}

.make-public {
    font: normal normal bold 16px/22px Nunito Sans;
    color: #02172E;
}

.public{
    font: normal normal 600 12px/16px Nunito Sans;
    color: #136ACD;
}

.push-down {
    margin-top: 5em;
}

.event-reg {
    font: normal normal bold 16px/22px Nunito Sans;
    color: #136ACD;
}

.event-reg-dark {
    font: normal normal bold 16px/22px Nunito Sans;
    color: #02172E;
}

.enable-reg {
    font: normal normal 600 16px/22px Nunito Sans;
    color: #02172E;
    margin-top: 3em;
}

.paid {
    margin-top: 3em;
    font: normal normal normal 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.create {
    text-align: center;
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
}


.total {
    padding: 15px;
    width: 100%;
}

.header1 {
    margin-bottom: 20px;
    color: #136ACD;
    font-size: 24px;
}

.attendance1 {
    width: 80%;
    margin: auto;
    padding: 20px;
    justify-content: space-between;
}

.attendance2 {
    display: inline-block;
    font-size: 15px;
}

.attendance3 {
    /* display: inline-block; */
    float: right;
    font-size: 15px;
}

.header2 {
    color: #02172E;
    font-size: 24px;
}

.header5 {
    margin-top: 0;
    color: rgb(77, 73, 73);
    font-size: 15px;
}

.header3 {
    color: #02172E;
    font-size: 42px;
}

.head5 {
    color: rgb(77, 73, 73);
}

hr {
    border-color: 0.01px rgba(158, 157, 157, 0.842);
}

div .maintext{
    font-size: 18px;
}


@media(max-width: 575px) {
    .btn-preview, .btn-save {
        margin-top: 2em;
    }

    .nested-row label {
        text-align: left;
    }

    .nested-row {
        margin-top: 2em;
    }

    .push-public {
        margin-top: 2em;
    }
}

@media (max-width: 991px) {
    .row.form-body.reg .row div {
    margin-top: 2em;
}
}
</style>