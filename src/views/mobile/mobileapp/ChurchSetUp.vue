<template>
    <div class="container-fluid">
        <!-- write up part -->
        <div class="row">
            <div class="col-md-6 offset-2 offset-md-1 mt-5">
                <div class="row">
                     <div class="col-md-6 col-12 text-center text-md-left my-5 setup">  Set up your church profile</div>
                </div>
                <div class="row">
                        <div class="col-md-2 col-2">
                             <div class="check-icon"><span class="ml-1"><i class="pi pi-check"></i></span></div>
                        </div>
                    <div class="col-md-4 col-5">Church Basic Info</div>
                    <div class="col-md-4 offset-md-2 col-5">
                        <button class="btn btn-outline-dark btn-button">Edit</button>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-2 col-2">
                        <div class="check-icon"><span class="ml-1"><i class="pi pi-check"></i></span></div>
                    </div>
                    <div class="col-md-4 col-5">Church Additional Info</div>
                    <div class="col-md-4 offset-md-2 col-5" data-toggle="modal" data-target="#addChurchDetails" data-whatever="@fat">
                        <button class="btn btn-outline-dark btn-button">Edit</button>
                    </div>
                </div>
                <div class="row" v-if="Object.keys(churchAddition).length > 0">
                    <div class="col-md-8 offset-md-2 border d-flex justify-content-between bg-mission">
                        <p class="mission pt-1">{{ churchAddition.name }}</p>
                        <p class="edit pt-1" data-toggle="modal" data-target="#addChurchDetails" data-whatever="@fat">Edit</p>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-2 col-2">
                        <div class="check-icon"><span class="ml-1"><i class="pi pi-check"></i></span></div>
                    </div>
                    <div class="col-md-4 col-5">Pastors and ministers</div>
                    <div class="col-md-4 offset-md-2 col-5" data-target="#add-pastor" data-toggle="modal" tabindex="-1" aria-labelledby="exampleModalLabel" >
                        <button class="btn btn-outline-dark btn-button">Edit</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-4">
                        <div v-if="!pastorImage"><img src='../../../assets/mobileonboarding/avatar-male.png' style="width: 100px; height: 100px;"></div>
                        <div v-else><img :src="pastorImage" style="width: 100px; height: 100px;"></div>
                        <div class="pastors-name">{{ pastorsName ? pastorsName : "Name" }}</div>
                        <div class="edit-pastor-details" data-target="#add-pastor" data-toggle="modal" tabindex="-1" aria-labelledby="exampleModalLabel">edit</div>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-2 col-2">
                        <div class="check-icon"><span class="ml-1"><i class="pi pi-check"></i></span></div>
                    </div>
                    <div class="col-md-4 col-5">Bank Details</div>
                    <div class="col-md-4 offset-md-2 col-5" data-target="#bank" data-toggle="modal">
                        <button class="btn btn-outline-dark text-center btn-button">Edit</button>
                    </div>
                </div>
                <div class="row" v-if="Object.keys(bankDetails).length > 0">
                    <div class="col-md-8 offset-md-2 border d-flex justify-content-between bg-mission">
                        <p class="edit text-dark pt-1" >{{ bankName }}</p>
                        <p class="edit text-dark pt-1" >{{ accountName }}</p>
                        <p class="edit text-dark pt-1" >{{ accountNumber }}</p>
                        <p class="edit pt-1" >Edit</p>
                    </div>
                </div>
            </div>
            <!-- image part -->
            <div class="col-md-5 col-12 bg-image d-none d-md-block d-lg-block">
                <div class="row mt-3">
                    <div class="col-md-12 text-center my-5 step">step 1 of 3</div>
                </div>
                <div class="image-dis"> 
                    <img src="../../../assets/mobileonboarding/church1.svg" style="height:40%; width:40%;">
                </div>
                <div class="row my-5">
                    <button class="col-md-2 offset-5 next-btn"><router-link :to="{ name: 'SocialMedia' }"><span class="next-text">Next</span></router-link></button>
                </div>
            </div>
        </div>
        <!-- Church Additional Details Modal -->

         <div
        class="modal fade"
        id="addChurchDetails"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addChurchDetails">
                Church Additional Details
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
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Name:</label
                  >
                  <input type="text" class="form-control" id="recipient-name" v-model="additionalDetailText.name" />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label"
                    >Description:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="description-text"
                    v-model="additionalDetailText.desc"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" ref="addDetail" class="btn btn-primary" @click="addChurchDetail">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Pastors Modal -->
       <div
        class="modal fade"
        id="add-pastor"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
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
                <div class="col-md-8 col-12">
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
                          v-model="pastorDetails.name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1"
                          >Designation</label
                        >
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Mr</option>
                          <option>Pastor</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label"
                          >About Pastor/Minister:</label
                        >
                        <textarea
                          class="form-control h-100"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-4 col-12">
                  <div class="container mx-auto mx-md-0 mx-lg-0 pt-2">
                    <div class="photo-box ml-1">
                      <img :src="pastorDetails.url" class="w-100">
                    </div>
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
                    <div class="text-center mb-3 mt-2">
                      <button class="btn btn-outline-dark upload-Btn">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mr-3 mr-md-0 mr-lg-0">
                <div class="col-md-8 col-12 text-md-left mt-4">
                  <div class="ml-4">
                    <p class="font-weight-bold">Social media Handles</p>
                  </div>
                  <div class="row ml-3">
                    <div class="col-md-1">
                      <div class="font-container">
                        <img src="../../../assets/mobileonboarding/facebook-icon.png" />
                      </div>
                    </div>
                    <div class="col-md-11">
                      <div class="">
                        <input type="text" class="social-input mb-2" />
                      </div>
                    </div>
                    <div class="col-md-1">
                      <img src="../../../assets/mobileonboarding/instagram-icon.png" /> 
                    </div>
                    <div class="col-md-11">
                      <div class="">
                        <input type="text" class="social-input mb-2" />
                      </div>
                    </div>
                    <div class="col-md-1">
                      <div class="font-container">
                         <img src="../../../assets/mobileonboarding/twitter-icon.png" /> 
                      </div>
                    </div>
                    <div class="col-md-11">
                      <div class="">
                        <input type="text" class="social-input mb-2" />
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
              <button type="button" class="btn btn-primary" ref="pasDetail" @click="addPastorDetail">Save</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Bank Details Modal -->
        <div
          class="modal fade"
          id="bank"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Bank Details</h5>
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
                <form mx-2 class="mr-2 mr-md-0 mr-lg-0">
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label"
                      >Bank name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="bankDetails.name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label"
                      >Account name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="bankDetails.accountName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label"
                      >Account number:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      v-model="bankDetails.accountNumber"
                    />
                  </div>
                </form>
              </div>
              <div
                class="col-md-12 col-12 col-lg-12 mb-4 text-center text-md-right text-lg-right"
              >
                <button
                  type="button"
                  class="btn btn-outline-dark mr-4"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" ref="closeBankModal" class="btn btn-primary" @click="churchBankDetails">Save</button>
              </div>
            </div>
          </div>
        </div>
    </div> 
</template>
<script>
import { ref } from "vue"
export default {
    setup () {
        const churchAddition = ref({})
        const additionalDetailText = ref({})
        const addDetail = ref("")
        const pastorDetails = ref({}) 
        const  pastorsName = ref("")
        const pasDetail = ref("")
        const image = ref("")
        const pastorImage = ref("")
        const bankName = ref("")
        const accountName = ref("")
        const accountNumber = ref("")
        const bankDetails = ref({})
        const closeBankModal = ref({})


        const addChurchDetail = () => {
            churchAddition.value = additionalDetailText.value
            addDetail.value.setAttribute("data-dismiss", "modal")
        }

        const addPastorDetail = () => {
          pastorsName.value = pastorDetails.value.name
          pastorImage.value = pastorDetails.value.url
          console.log(pasDetail.value)
          pasDetail.value.setAttribute("data-dismiss", "modal")

        }

        const uploadFile = (e) => {
          image.value = e.target.files[0]
          pastorDetails.value.url = URL.createObjectURL(image.value);
        }
        
        const churchBankDetails = () => {
          bankName.value = bankDetails.value.name
          accountName.value = bankDetails.value.accountName
          accountNumber.value = bankDetails.value.accountNumber
          closeBankModal.value.setAttribute("data-dismiss", "modal")
        }

        return {
            churchAddition,
            addChurchDetail,
            additionalDetailText,
            addDetail,
            pastorDetails,
            addPastorDetail,
            pastorsName,
            pasDetail,
            uploadFile,
            image,
            pastorImage,
            bankName,
            accountName,
            accountNumber,
            bankDetails,
            churchBankDetails,
            closeBankModal
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

</style>
