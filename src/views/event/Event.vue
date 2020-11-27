<template>
    <div class="event">
        <div class="bg col-md-10 offset-md-1 ">
        <div class="container first-pane">
            <div class="row">
                <div class="col-12 col-sm-4 col-lg-6 events">Events</div>
                <div class="col-5 col-sm-3 col-lg-2 btn btn-preview">Preview</div>
                <div class="col-6 col-sm-4 offset-1 col-lg-3 btn btn-save" @click="post">Save and Continue</div>
            </div>
        </div>
           <div class="form col-12 col-sm-12  offset-md-0 col-md-12">
            
                <div class="row form-header" @click="toggleForm2">
                    <div class="col-12 col-sm-6">
                        Events and Activities
                    </div>
                    <div class="col-sm-6 text-right"><i class="fa fa-angle-down" :class="{ 'roll2': showForm2 }" aria-hidden="true"></i></div>
                </div>
                <!-- <div class="container"> -->
                <div class="row form-body" :class="{ 'close-slide2': showForm2 }">
                    <div class="col-6 offset-3 offset-sm-0 col-sm-5 col-md-3">
                        <div class="drop-box">Browse or Drop your banner here.Maximum 5MB in size JPG, PNG, or GIF formats.</div>
                    </div>
                    <div class="col-12 col-sm-7 col-md-6 offset-md-3">
                        <div class="row nested-row">
                            <div class="col-12 col-sm-5">
                                    <label for="eventName">Event Name</label>
                                </div>
                                <div class="col-12 col-sm-7">
                                    <input type="text" v-model="eventName" class="form-control">
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
                    <!-- <div class="col-7 col-md-5 push-down event-reg">
                        <div>Event Registration Setting</div>
                    </div>
                    <div class="col-5 col-md-7 push-down event-reg-dark">
                        <div>Event Registration</div>
                    </div> -->
                    <ul class="nav nav-tabs w-100 push-down event-reg" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Event Registration Setting</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Event Registration</a>
                        </li>
                        <!-- <li class="nav-item" role="presentation">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li> -->
                        </ul>
                        <div class="tab-content w-100" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                    <div class="col-3">
                        <div class="form-radio form-radio-inline paid">
                            <input class="form-radio-input" @change="changeValue" name="event" type="radio" label="Yes" value="Yes">
                            <label class="form-radio-label" >Yes</label>
                        </div>
                    </div>
                    <div class="col-3 col-sm-5">
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
                        <input type="number" v-model="preEventAmount" class="form-control">
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
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="w-100 box-table">
                        <table class="table">
                            <thead>
                                <tr class="event-list">
                                    <th scope="col"> <input type="checkbox" name="checkbox" class=""> </th>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Reg.Code</th>
                                    <th scope="col">Attended</th>
                                    <th scope="col">Paid</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
            <tbody>
                <tr class="event-list">
                    <th scope="row"> <input type="checkbox" name="checkbox" class=""></th>
                    <td>
                        <div id="img">
                            <img src="../../assets/logo.png" class="img-fluid rounded-circle  mb-3" alt="">
                        </div>
                    </td>
                    <td>Ajose Tosin</td>
                    <td>08041941919</td>
                    <td>0123345</td>
                    <td> <input type="radio" name="radio" class=""></td>
                    <td> <input type="radio" name="radio" class=""></td>
                    <td>01/02/2021</td>
                </tr>
                <tr>
                    <th scope="row"> <input type="checkbox" name="checkbox" class="">
                    </th>
                    <td>
                        <div id="img">
                            <img src="../../assets/logo.png" class="img-fluid rounded-circle  mb-3" alt="">
                        </div>
                    </td>
                    <td>Ajose Tosin</td>
                    <td>08041941919</td>
                    <td>0123345</td>
                    <td> <input type="radio" name="radio" class=""></td>
                    <td> <input type="radio" name="radio" class=""></td>
                    <td>01/02/2021</td>
                </tr>
                <tr>
                    <th scope="row"> <input type="checkbox" name="checkbox" class="">
                    </th>
                    <td>
                        <div id="img">
                            <img src="../../assets/logo.png" class="img-fluid rounded-circle  mb-3" alt="">
                        </div>
                    </td>
                    <td>Ajose Tosin</td>
                    <td>08041941919</td>
                    <td>0123345</td>
                    <td> <input type="radio" name="radio" class=""></td>
                    <td> <input type="radio" name="radio" class=""></td>
                    <td>01/02/2021</td>
                </tr>
            
            </tbody>
           
        </table>
        <tr class="offset-sm-3">
            <td>
                <!-- WITH ARROWS -->
                <!--  -->
                <nav>
                    <ul class="pagination rounded-circ  le justify-content-end mx-3 my-3">
                        <li class="page-item">
                            <a class="page-link rounded-circle mr-2" href="#">
                                <span>&lt;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link rounded-circle mr-2" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle mr-2" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle mr-2" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle mr-2" href="#">4</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle mr-2" href="#">5</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle mr-2" href="#">
                                <span>&gt;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </td>
        </tr>
        
                    </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
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
                                    <input type="text" v-model="topic" class="form-control">
                                </div>
                                <div class="col-sm-6">
                                    <label for="preacher">Preacher</label>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="preacher" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-12 offset-sm-1 add"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Attendance</div>
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
                        <div class="col-sm-1" @click="delAttendance(index)"><i class="fa fa-trash" aria-hidden="true"></i></div>
                    </div>
                </div>

                    <div class="col-sm-12 text-center add-attendance" id="addAttendance" @click="addAttendance"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Attendance Item</div>
                    <div  class="display" id="showAttendance">
                        <input type="text" class="form-control shadow mb-3" v-model="attendanceText" placeholder="Search attendance item">
                        <div @click="attendance" v-for="(filteredAttendance, index) in filterAttendance" :key="index">{{ filteredAttendance }}</div>
                        <div @click="createAttendance" class="create">Create New Attendance Item</div>
                    </div>
                    <button hidden type="button" id="modalTogglerAttendance" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalAttendance">
                        Launch demo modal
                    </button>
                    <div class="col-sm-12 empty"></div>
                    <!-- <textarea class="col-sm-12 textarea form-control" rows="5">Note ...</textarea> -->

                <div class="col-sm-12 offset-sm-1 add"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Offering</div>
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
                            <div class="col-sm-1 offset-sm-1" @click="delOffering(index)"><i class="fa fa-trash" aria-hidden="true"></i></div>
                    </div>
                </div>
                    <div class="col-sm-12 text-center add-attendance" id="addOffering" @click="addOffering"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Offering Item</div>
                    <div  class="display" id="showList">
                        <input type="text" class="form-control shadow mb-3" v-model="offeringText" placeholder="Search Offering item">

                        <div v-for="(newOffering, index) in filterOffering" :key="index" @click="offering">{{ newOffering }}</div>
                        <div @click="createOffering" class="create">Create New Offering Item</div>
                    </div>
                    <button hidden type="button" id="modalTogglerOffering" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalOffering">
                        Launch demo modal
                    </button>
                    
                    <div class="col-sm-12 empty">
                        <div class="row">
                            <div class="col-sm-5 total-2">
                                TOTAL
                            </div>
                            <div class="col-sm-4">
                                <!-- <div>Total Attendance</div>
                                <div>Total Offering</div> -->
                                <SelectElem :options="['NGN - Naira', 'CAD - Canadian dollar', 'AFN - Afghanistan']" name='NGN - Naira' value='NGN - Naira'/>
                            </div>
                            <div class="col-sm-3 align-self-center">{{ addOfferingTotal }}</div>
                        </div>
                    </div>
                    <!-- <div class="col-sm-12 text-center add-attendance" @click="createFirstTimers">Add First Timers</div> -->
                    <button hidden type="button" id="modalTogglerFirstTimers" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalFirstTimers">
                        Launch demo modal
                    </button>
                    <!-- <div class="col-sm-12 empty"></div> -->
                    <textarea class="col-sm-12 textarea form-control" rows="5">Note ...</textarea>
                <!-- </div> -->
        </div>
        
            <div class="form">
                <div class="container">
                <div class="row row-form form-header" @click="toggleForm3">
                    <div class="col-sm-6">
                        <div>First Timers and New Convert</div>
                    </div>
                    <div class="col-sm-6 text-right">
                        <i class="fa fa-angle-up" :class="{ 'roll3': showForm3 }" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="row form-body close-slide3" :class="{ 'slide-down3': showForm3 }">
                    <div class="col-sm-3 add-first-timer" @click="createFirstTimers">Add First Timers</div>
                    <div class="col-sm-3 offset-sm-1 add-new-convert">Add New Converts</div>
                    <div class="col-sm-12 box-table">
                          <table class="table">
                            <thead>
                                <tr class="event-list">
                                    <th> <input type="checkbox" name="checkbox" class=""> </th>
                                    <th>PICTURE</th>
                                    <th>FIRSTNAME</th>
                                    <th>LASTNAME</th>
                                    <th>PHONE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="event-list" v-for="(item, index) in firstTimers" :key="index">
                                    <th scope="row"> <input type="checkbox" name="checkbox" class=""></th>
                                    <td>
                                        <div id="img">
                                            <img src="../../assets/logo.png" class="img-fluid rounded-circle  mb-3" alt="">
                                        </div>
                                    </td>
                                    <td>{{ item.firstName }}</td>
                                    <td>{{ item.lastName }}</td>
                                    <td>{{ item.phoneNumber }}</td>
                                </tr>
                            </tbody>
                          </table>
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
  <div class="modal-dialog"  role="document">
    <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" id="exampleModalLabel">Add First Timers</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
            <div class="">
                <form>
                    <div class="form-group row">
                        <label for="Firstname" class="col-sm-2 col-form-label">Firstname<sup class="text-danger">*</sup></label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control input-first" v-model="firstTimersObj.firstName" id="Firstname" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="LastName" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-9">
                            <input type="text" v-model="firstTimersObj.lastName" class="form-control input-first" id="surname" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="phone number" class="col-sm-2 col-form-label">Phone number</label>
                        <div class="col-sm-9">
                            <input type="tel" v-model="firstTimersObj.phoneNumber" class="form-control input-first" id="phone number">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control input-first" v-model="firstTimersObj.email" id="email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="address" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-9 mb-4">
                            <input type="text" v-model="firstTimersObj.address" class="form-control input-first" id="address">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="birthday" class="col-sm-2 col-form-label">Birthday</label>
                        <div class="col-sm-3 mb-4">
                            <SelectElem :options="['day', ...day]" name="day" class="input-first" value="day"/>
                        </div>
                        <div class="col-sm-3 mb-4">
                            <SelectElem :options="['month', ...months]" name="month" class="input-first" value="month"/>
                        </div>
                        <div class="col-sm-3 mb-4">
                            <SelectElem :options="['Year', ...birthYearsArr]" name="year" class="input-first" value="Year"/>
                        </div>
                        <div class="col-sm-5 mb-4 offset-sm-2">
                            <SelectElem :options="['Marital Status', 'Single', 'Engaged', 'Married', 'Divorced', 'Single Parent']" class="input-first" name="Marital Status" value="Marital Status"/>
                        </div>
                        <div class="col-sm-4 mb-4">
                            <SelectElem :options="['Gender', 'Male', 'Female']" name="Gender" class="input-first" value="Gender"/>
                        </div>
                    </div>


                    <!-- <div class="col-sm-12 mt-4">Insights</div>-->
                    <span class="d-flex justify-content-between align-items-center" @click="toggleForm1">
                        <span>Insights</span><span style="border: 0px solid red; width: 70%;"><hr /></span><span><i class="fa fa-angle-up" :class="{ 'roll1': showForm1 }" aria-hidden="true"></i>
</span>
                    </span>


                    <div class="form-group row close-slide1" :class="{ 'slide-down1': showForm1 }">
                        
                        <div class=" col-sm-9 offset-sm-2 mb-4">
                            <div>How did you hear about us</div>
                            <SelectElem :options="['Friend', 'Social media', 'Church Flyer', 'Tv', 'Radio']"/>
                        </div>
                        <div class=" col-sm-9 offset-sm-2 mb-4">
                            <div>Preferred means of communication</div>
                            <SelectElem :options="['Call', 'Email', 'Visit', 'SMS']"/>
                        </div>
                        <div class=" col-sm-9 offset-sm-2 mb-4">
                            <div>Interested in joining us</div>
                            <SelectElem :options="['Yes', 'No']"/>
                        </div>
                        <div class=" col-sm-9 offset-sm-2 mb-4">
                            <div>Want to be visited?</div>
                            <SelectElem :options="['Yes', 'No', 'Maybe', 'On Transit']"/>
                        </div>
                    </div>


                    <!-- <div class="col-sm-12 mt-4">Follow up and Retention</div> -->
                    <span class="d-flex justify-content-between align-items-center" @click="toggleForm">
                        <span>Follow up and retention</span><span style="border: 0px solid red; width: 40%;"><hr /></span><span><i class="fa fa-angle-up" :class="{ 'roll': showForm }" aria-hidden="true"></i>
                    </span>
                    </span>


                    <div class="form-group row close-slide" :class="{ 'slide-down': showForm }">
                        
                        <div class="col-sm-4 offset-sm-2 mt-4 mb-4">Send Welcome SMS</div>
                        <div class=" mt-4 mb-4"><input type="radio" name="sms"></div>

                        <div class="col-sm-4 mt-4 mb-4">Send Welcome SMS</div>
                        <div class=" mt-4 mb-4"><input type="radio" name="sms"></div>
                        <div class="col-sm-9 offset-sm-2">
                            <div>Assigned automated follow-up</div>
                            <SelectElem :options="['List 1','List 2', 'List 3', 'List 4']"/>
                        </div>
                    </div>

                    
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
import SelectElem from '@/components/select/SelectElement.vue'
import axios from 'axios'
export default {
    components: {
        SelectElem
    },
    data () {
        return{
            type: null,
            currency: null,
            amount: null,
            offeringItem: [],
            category: null,
            count: null,
            attendanceItem: [],
            firstTimersObj: {
                firstName: null,
                lastName: null,
                address: null,
                phoneNumber: null,
                email: null,
            },
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
            offeringText: '',
            day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            showForm1: false,
            showForm: false,
            showForm2: false,
            showForm3: false,
            topic: '',
            preacher: '',
            preEventAmount: '',
            eventName: ''
            
        }
    },

    methods: {
        addAttendance () {
            const showAttendance = document.querySelector('#showAttendance')
            showAttendance.classList.toggle('offering-drop')
        },
        addOffering () {
            const showList = document.querySelector('#showList');
            showList.classList.toggle('offering-drop') 
            // console.log(this.offeringItem)     
        },
        offering (e) {
            this.offeringItem.push({
                type: e.target.innerHTML
            })
            console.log(this.offeringItem)

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
            if (this.firstTimersObj.firstName && this.firstTimersObj.lastName && this.firstTimersObj.address && this.firstTimersObj.phoneNumber && this.firstTimersObj.email) {
                this.firstTimers.push({
                firstName: this.firstTimersObj.firstName,
                lastName: this.firstTimersObj.lastName,
                phoneNumber: this.firstTimersObj.phoneNumber
            })
            // this.name = '';
            // this.address = '';
            // this.phoneNumber = '';
            console.log(this.firstTimers)
            document.querySelector('#closeFirstTimers').setAttribute('data-dismiss',  'modal')
            }
            console.log(this.firstTimersObj.firstName, this.firstTimersObj.lastName, this.firstTimersObj.phoneNumber, this.firstTimersObj.email, this.firstTimersObj.address)
        },
        changeValue (e) {
           this.selectedValue = e.target.value
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
        },
        delOffering (index) {
            this.offeringItem.splice(index, 1)
        },
        toggleForm1 () {
            this.showForm1 = !this.showForm1
        },
        toggleForm () {
            this.showForm = !this.showForm
        },
        toggleForm2 () {
            this.showForm2 = !this.showForm2
        },
        toggleForm3 () {
            this.showForm3 = !this.showForm3
        },
        post () {
            let event = {
                topic: this.topic,
                preacher: this.preacher,
                preEvent: {
                    name: this.eventName,
                    isPaidFor: this.selectedValue === "Yes" ? true : false,
                    amount: this.preEventAmount,

                },
                attendance: this.attendanceItem,
                offering: this.offeringItem,
    
                
            }

            axios.post('/api/Events/CreateActivity', event)
                .then ((res) => {
                    console.log(res)
                })
                .catch ((err) => console.log(err.response))
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
        
            birthYearsArr () {
                const arrOfYears = []
                let currentYear = new Date().getFullYear();
                while (arrOfYears.length <= 100) {
                    arrOfYears.push(currentYear)
                    currentYear = currentYear - 1;
                }
                return arrOfYears;
            },

        filterOffering() {
            if (this.offeringText !== '' && this.newOfferings.length > 0) {
                return this.newOfferings.filter((i) => {
                    return i.toLowerCase().includes(this.offeringText.toLowerCase())
                })
            } else {
                return this.newOfferings;
            }
        },

        addOfferingTotal () {
            // var sum = 0;
                // return for (let i = 0; i < this.offeringItem.length; i++)  {
                    //     return sum =+ parseInt(this.offeringItem[i].amount)
                //     // cosum, parseInt(this.offeringItem[i].amount))
                // }
                // console.log(sum)

               if (this.offeringItem.length <= 0) return 0
               if (this.offeringItem.length === 1) return this.offeringItem[0].amount
                const amounts = this.offeringItem.map(i => +i.amount)
                return amounts.reduce((a, b) => {
                    return (a || 0) + (b || 0)
                });
            //    return this.offeringItem.reduce((a, b) => {
            //        const first = Number(a.amount) ? Number(a.amount) : 0
            //        const second =  Number(b.amount) ? Number(b.amount) : 0;
            //        return first + second
            //    })

            // return this.offeringItem.forEach(i => {
            //     return sum =+ Number(i.amount)
            // })
        }
    }  
}
</script>

<style scoped>
    .event {
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
    /* margin-top: 5px; */
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
    font-size:0.9em;
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
    font: normal normal 600 14px/16px Nunito Sans;
    color: #136ACD;
}

.push-down {
    margin-top: 5em;
}

.event-reg {
    font: normal normal bold 16px/22px Nunito Sans;
    /* color: #136ACD; */
}

.event-reg-dark {
    font: normal normal bold 16px/22px Nunito Sans;
    /* color: #02172E; */
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

/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} */

.table {
    padding: 20px 10px 0 10px;
}

.table {
    width: 100%;
    /* box-shadow: 0px 1px 4px #02172E45; */
    box-shadow: none;
    /* border: 1px solid #DDE2E6; */
    border: none;
    /* border-radius: 30px; */
    border-radius: 0;
    /* margin: 0 */
    margin: 24px 0 0 0;
}

.box-table {
    box-shadow: 0px 1px 4px #02172E45;
    border-radius: 30px;
    margin-top: 30px;
    width: 100%

}

/* @media (min-width: 500px) and (max-width: 600px) {
    .box-table {
        width: 58%
    }
} */

.t-header{
    background-color:#F1F3F9;

}

#img{
max-width: 30px;
}

tr.event-list th{
    color: #8898AA;
    /* font-size: 11px; */
    font-family: 'Nunito Sans' Arial, sans-serif;
    letter-spacing: 1px;
    padding: 10px;
}

tr.event-list td{
    color: #02172E;
    /* padding: 5px; */
    vertical-align: middle;
}

.page-link{
    color: #136ACD;
}
.page-link:hover{
    background-color: #136ACD;
    color: #fff;
}
.page-link.active:hover{
    background-color: #136ACD;
    color: #fff;
}

.add-first-timer {
    background: #EBEFF4;
    padding: 10px;
    border-radius: 35px;
    font: normal normal bold 14px/19px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    text-align: center
}

.add-new-convert {
    background: #EBEFF4;
    padding: 10px;
    border-radius: 35px;
    font: normal normal bold 14px/19px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    text-align: center
}

.input-first {
    /* width: 320px; */
    height: 39px;
    border: 1px solid #B9C5CF;
}

.close-slide1 {
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out
}

.slide-down1 {
    height: 365px;
    /* overflow: visible; */
    transition: all 0.5s ease-in-out
}

.roll1 {
    transition: all 0.5s ease-in-out;
    transform: rotate(180deg);
}

.close-slide {
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out
}

.slide-down {
    height: 162px;
    transition: all 0.5s ease-in-out
}

.roll {
    transition: all 0.5s ease-in-out;
    transform: rotate(180deg);
}

.close-slide2 {
    padding: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    
}

.slide-down2 {
    height: 412px;
    transition: all 0.5s ease-in-out;
    /* padding: 30px */
}

.roll2 {
    transition: all 0.5s ease-in-out;
    transform: rotate(180deg);
}

.close-slide3 {
    padding: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out
}

.slide-down3 {
    height: auto;
    padding: 30px;
    transition: all 0.5s ease-in-out
}

.roll3 {
    transition: all 0.5s ease-in-out;
    transform: rotate(180deg);
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