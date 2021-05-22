<template>
    <div class="container-wide">
        <!-- write up part -->
        <div class="row">
          <div class="col-md-6 mt-5">
            <div class="row mt-5">
              <div class="col-12 setup">  Set up your church profile</div>
              <!-- <div class="col-md-6"></div> -->
              <div class="col-sm-12 align-self-center mt-4 px-md-0">Name</div>
              <div class="col-12 col-md-10 px-md-0">
                <input type="text" class="form-control" v-model="churchName">
              </div>
              <!-- <div class="col-sm-2"></div> -->

              <div class="col-sm-12 align-self-center mt-3 px-md-0">Phone Number</div>
              <div class="col-12 col-md-10 px-md-0">
                <input type="text" class="form-control" v-model="phoneNumber">
              </div>
              <!-- <div class="col-sm-2"></div> -->

              <div class="col-sm-12 align-self-center mt-3 px-md-0">Address</div>
              <div class="col-12 col-md-10 px-md-0">
                <input type="text" class="form-control" v-model="address">
              </div>
              <div  class="col-12 col-md-10 ">
                <div class=" row d-flex justify-content-md-between">
                  <div class="col-md-6 mt-3 px-md-0">Pastors and Ministers</div>
                  <div class="col-2 mt-2 col-md-2 mr-2 btnIcons pointer-cursor" data-target="#add-pastor"  data-toggle="modal"   data-whatever="@fat">Add</div>
                </div>
              </div>
              <div class="col-12 px-md-0">
                <div class="row" v-for="(item, index) in pastors" :key="index">
                  <!-- <div class="col-sm-12 text-right align-self-center mt-2"></div> -->
                  <div class="col-9 col-md-7 mt-2">
                    <div><img :src="item.url" class="w-50" style="border: 1px solid #707070;border-radius: 13px;"></div>
                    <div class="pastorname">{{ item.pastorsName }}</div>
                    <div class="pastorname">{{ item.pastorsEmail }}</div>
                  </div>
                  <div class="row d-flex justify-content-between mt-5">
                    <div class="col-1  mt-2" @click="deleteItem(index)"><i class="fa fa-trash"></i></div>
                    <div class="col-2 pt-2 edit-button pointer-cursor" style="color: #136ACD;">Edit</div>
                  </div>
                </div>
              </div>
             <div  class="col-12 col-md-10 ">
                <div class=" row d-flex justify-content-md-between">
                  <div class="col-md-6 mt-3 px-md-0">Other Information</div>
                  <div>{{ information }}</div>
                  <div class="col-2 mt-2 col-md-2 mr-2 btnIcons pointer-cursor" data-target="#other-info"  data-toggle="modal"   data-whatever="@fat">Add</div>
                </div>
              </div>
              <!-- modal for other info -->
              <div
                class="modal fade"
                id="other-info"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">

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
                <div class="col-md-8 col-12">
                  <div class="form-cover w-100">
                    <form class="mt-1 mr-5 mr-md-0 mr-lg-0">
                      <div class="form-group">
                        <label for="message-text" class="col-form-label"
                          >Other Information:</label
                        >
                        <textarea
                          class="form-control h-100"
                          id="message-text"
                          v-model="information"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-12 col-12 col-lg-12 mb-4 text-center text-md-right text-lg-right"
            >
              <button
                type="button"
                class="btn btn-secondary mr-4"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" ref="closeTextArea" class="btn btn-primary" @click="otherInfoDetails">Save</button>
            </div>
          </div>
        </div>
      </div>

              <!-- modal -->
               <div
                class="modal fade"
                id="add-pastor"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Pastor/Minister
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
                <div class="col-md-7 col-12">
                  <div class="form-cover w-100">
                    <form class="mt-1 mr-5 mr-md-0 mr-lg-0">
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label"
                          >Name:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          v-model="pastorDetails.pastorsName"
                        />
                      </div>
                      <div class="form-group">
                        <label for="recipient-email" class="col-form-label"
                          >Email:</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="recipient-email"
                          v-model="pastorDetails.pastorsEmail"
                        />
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label"
                          >About Pastor/Minister:</label
                        >
                        <textarea
                          class="form-control h-100"
                          id="message-text"
                          v-model="pastorDetails.text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 col-12">
                  <div class="container mx-auto mx-md-0 mx-lg-0 pt-2">
                    <div class="photo-box border ml-1"><img :src="pastorDetails.url" class="w-100 h-100 img-responsive"></div>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                        @change="uploadFile"
                      />
                      <label
                        class="custom-file-label px-4"
                        for="customFile"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mr-3 mr-md-0 mr-lg-0">
                <div class="col-md-8 col-12 text-md-left mt-2">
                  <div class="ml-4">
                    <p class="font-weight-bold">Social media Handles</p>
                  </div>
                  <div class="row ml-3">
                    <div class="col-md-1">
                      <div class="font-container">
                        <!-- <img src="../assets/facebook-icon.png" /> -->
                      </div>
                    </div>
                    <div class="col-md-11">
                      <div class="">
                        <input type="text" class="social-input mb-2" v-model="pastorDetails.facebook" />
                      </div>
                    </div>
                    <div class="col-md-1">
                      <!-- <img src="../assets/instagram-icon.png" /> -->
                    </div>
                    <div class="col-md-11">
                      <div class="">
                        <input type="text" class="social-input mb-2" v-model=" pastorDetails.instagram" />
                      </div>
                    </div>
                    <div class="col-md-1">
                      <div class="font-container">
                        <!-- <img src="../assets/twitter-icon.png " /> -->
                      </div>
                    </div>
                    <div class="col-md-11">
                      <div class="">
                        <input type="text" class="social-input mb-2" v-model="pastorDetails.twitter" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4"></div>
              </div>
            </div>
            <div
              class="col-md-12 col-12 col-lg-12 mb-4 text-center text-md-right text-lg-right"
            >
              <button
                type="button"
                class="btn btn-secondary mr-4"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" ref="closePastorModal" class="btn btn-primary" @click="detailsForPastor">Save</button>
            </div>
          </div>
        </div>
      </div>

              <div class="col-10 offset-1 offset-md-0 btn primary-bg mt-5 text-white default-btn border-0" @click="saveSetUp">
              Save and continue
              </div>

            </div>
          </div>

            <!-- image part -->
            <div class="col-md-6 col-12 bg-image d-none d-md-block">
                <div class="row mt-3">
                    <div class="col-md-12 text-center my-5 step">STEP 1 of 1</div>
                </div>
                <div class="image-dis">
                    <img src="../../../assets/mobileonboarding/church1.svg" style="height:40%; width:40%;">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"
import router from '../../../router'
import axios from "@/gateway/backendapi";
import store from '../../../store/store';
// import { useStore } from "vuex"

export default {
    setup () {
      // let store = useStore()
        const pastors = ref([])

        const deleteItem = (index) => {
          pastors.value.splice(index, 1)
        }
        const saveSetUp = () => {
          router.push({ name: 'SocialMedia' })
          let churchDetails = {
            name: churchName.value,
            address: address.value,
            phoneNumber: phoneNumber.value
          }
          store.dispatch("setChurchProfileData", churchDetails)
        }
        const pastorDetails = ref({})
        const pastorsName = ref("")
        const pastorsEmail = ref("")
        const closePastorModal = ref("")
        const image = ref("")
        const pastorImage = ref("")
        const tenantId = ref("")
        const churchName = ref("")
        const phoneNumber = ref("")
        const address = ref("")
        const information = ref("")
        const closeTextArea = ref("")

        const detailsForPastor = () => {
          pastors.value.push(pastorDetails.value)
          // pastorsName.value = pastorDetails.value.pastorsName
          // pastorsEmail.value = pastorDetails.value.pastorsEmail
          // pastorImage.value = pastorDetails.value.url
          closePastorModal.value.setAttribute("data-dismiss", "modal")
        }

        const otherInfoDetails = () => {
          closeTextArea.value.setAttribute("data-dismiss", "modal")
        }

        const uploadFile = (e) => {
          image.value = e.target.files[0]
          pastorDetails.value.url = URL.createObjectURL(image.value);
        }

        const getTenantId = async() => {
          if(Object.keys(store.getters.currentUser).length > 0) {
              console.log(store.getters.currentUser)
              tenantId.value = store.getters.currentUser.tenantId

            } else {
                try {
                    const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
                    store.dispatch("setCurrentUser", res.data);
                    console.log(res.data);
                    tenantId.value = res.data.tenantId
                  } catch (err) {
                    console.log(err.response);
                  }
          }

          console.log(tenantId.value)
          axios.get(`/mobile/v1/MobileOnboarding/GetChurchProfile?TenantID=${tenantId.value}`).then(response => {
           console.log(response);
           churchName.value = response.data.churchName
           phoneNumber.value = response.data.phoneNumber
           address.value = response.data.address
          }).catch(error => {
            console.log(error);
          })
        }
        getTenantId()


        return {
            pastors,
            deleteItem,
            saveSetUp,
            pastorDetails,
            pastorsName,
            pastorsEmail,
            detailsForPastor,
            closePastorModal,
            uploadFile,
            image,
            pastorImage,
            tenantId,
            churchName,
            phoneNumber,
            information,
            otherInfoDetails,
            closeTextArea
        }
    }
}
</script>
<style scoped>
.setup {
     color: #031C39;
     font: normal normal 800 30px/40px Nunito Sans;
}
    .check-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color:#136ACD;
}
.pi {
    color: #fff;
    margin-top: 6px;
    margin-left: 2px;
}
.btn-button{
 border-radius: 25px!important;
 width: 40%;
 height: 25px;
 line-height: 10px;
}
.bg-image{
    background: transparent linear-gradient(180deg, #2E67CE 0%, #690C7F 100%) 0% 0% no-repeat padding-box;
    height: 100vh;
}
.image-dis {
    display: flex;
    justify-content: center;
    align-items: center;
}
.next-btn {
    background: #F1FAFF 0% 0% no-repeat padding-box;
    border: 0.20000000298023224px solid #7894A6;
    border-radius: 23px;
    opacity: 1;
}
.next-text {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    opacity: 1;
}
.step {
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
/* Add pastor style */
.modal-title {
  margin-left: 2rem;
}
.form-cover {
  margin-left: 1.5rem !important;
  width: 100%;
}
.form-group {
  margin-top: 0rem !important;
}
.form-group label {
  padding-top: 0;
  font-weight: bold;
}

.form-control {
  width: 98%;
}

.select option {
  width: 150px;
}

.upload-Btn {
  border-radius: 25px;
  height: 30px;
  width: 90px;
  line-height: 15px;
}

.container {
  width: 100%;
  height: 35vh;

  border-radius: 27px !important;
  background: rgb(248, 248, 249);
  margin-top: 0.3rem;
}

.photo-box {
  border-radius: 27px;
  width: 95%;
  height: 55%;
  background-color: rgb(100%, 100%, 100%);
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
}

.social-input {
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
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  /* end add pastor detail */
}
.bg-mission {
    background: #DEDEDE61 0% 0% no-repeat padding-box;
    border: 1px solid #D2CFCF5C;
    border-radius: 24px;
    opacity: 0.64;
    height: 30px;
    padding-right: 50px
}
.mission {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #002044;
}
.edit {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    cursor: pointer;
}

.pastors-name {
  font: normal normal 600 16px/22px Nunito Sans;
}

.edit-pastor-details {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136ACD;
  cursor: pointer;
}

.btnIcons {
    color: #136acd;
    background-color: #dde2e6;
    border-radius: 40px;
    border: none;
    padding: 7px;
    text-align: center
}
.pastorname{
  font: normal normal 300 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #020E1C;
}
</style>
