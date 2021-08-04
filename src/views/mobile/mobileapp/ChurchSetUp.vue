<template>
  <div class="container-wide">
    <!-- write up part -->
    <div class="row" style="height: 100vh">
      <Toast />
      <ConfirmDialog />
      <!-- <div class="col-md-6 mt-3"> -->
        <!-- <div class="row mt-5"> -->
          <div class="col-12 col-sm-6 offset-sm-3 setup mt-5">Set up your church profile</div>
          <div class="col-sm-3"></div>
          <div class="col-sm-3 align-self-center mt-4 text-right">Name</div>
          <div class="col-12 col-md-6 mt-4">
            <input type="text" class="form-control" v-model="churchName" />
          </div>
          <div class="col-sm-3"></div>

          <div class="col-sm-3 align-self-center mt-4 text-right">
            Phone Number
          </div>
          <div class="col-12 col-sm-6 mt-4">
            <input type="text" class="form-control" v-model="phoneNumber" />
          </div>
          <div class="col-sm-3"></div>

          <div class="col-sm-3 align-self-center mt-4 text-right">Address</div>
          <div class="col-12 col-md-6 mt-4">
            <input type="text" class="form-control" v-model="address" />
          </div>
          <div class="col-sm-3"></div>

          <div class="col-12 col-sm-6 mt-4 offset-sm-3">
            <div class="row d-flex justify-content-md-between">
              <div class="col-md-6 mt-3 px-md-0 col-9">Pastors and Ministers</div>
              <div
                class="col-2 mt-2 col-md-2 mr-2 btnIcons c-pointer"
                data-target="#add-pastor"
                data-toggle="modal"
                data-whatever="@fat"
              >
                Add
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 offset-sm-3">
            <div class="row" v-for="(item, index) in pastors" :key="index">
              <!-- <div class="col-sm-12 text-right align-self-center mt-2"></div> -->
              <div class="col-12 mt-4">
                <div class="row">
                  <div class="col-md-4 col-12 col-sm-5 person-image">
                    <img
                      style="width: 110px; height: 110px; border-radius: 50%;"
                      :src="item.url"
                      class="w-75 "
                    />
                  </div>
                  <div class="col-10 col-sm-5 align-self-center">
                    <div class="pastorname">{{ item.name }}</div>
                    <div>{{ item.bio }}</div>
                  </div>
                  <div class="col-1 align-self-center cursor-pointer mr-3" data-target="#add-pastor" data-toggle="modal" data-whatever="@fat" @click.prevent="editPastor(index)">
                    edit
                  </div>
                  <div class="col-1  align-self-center cursor-pointer" @click.prevent="showConfirmModal(item.pastorId, index)">
                    <i class="fa fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 offset-sm-3 mt-3">
            <div class="row d-flex justify-content-md-between">
              <div class="col-md-6 mt-3 px-md-0 col-9">Other Information</div>
              <div
                class="col-2 mt-2 col-md-2 mr-2 btnIcons c-pointer"
                data-target="#other-info"
                data-toggle="modal"
                data-whatever="@fat"
              >
                Add
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 offset-sm-3">
            <div class="row" v-for="(item, index) in infoArray"
                :key="index">
              <div
                class="col-10 px-0"
              >
                <div class="col-12 col-md-10 mt-4 p-md-0 font-weight-bold">
                  <span class="display:block">{{ item.title }}</span>
                </div>
                <div class="col-10 p-md-0">
                  <p>
                    <span v-if="!item.showFullMessage" class="display:block">{{
                      item.details &&
                      item.details.toString().length > 20
                        ? `${item.details.substring(0, 20)}...`
                        : item.details
                    }}</span>
                    <span v-else>{{ item.details }}</span>
                    <span
                      @click="
                        () => (item.showFullMessage = !item.showFullMessage)
                      "
                      v-if="
                        item.details &&
                        item.details.toString().length > 20
                      "
                      class="text-primary c-pointer pl-2"
                    >
                      {{ item.showFullMessage ? "see less" : "see more" }}
                    </span>
                  </p>
                </div>
              </div>
              <div class="col-2 align-self-center cursor-pointer" @click.prevent="showConfirmModalAbout(item.customAboutId)">
                <i class="fa fa-trash"></i>
              </div>
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
                    <div class="col-md-11 col-12">
                      <div class="form-cover w-100">
                        <form class="mr-lg-0">
                          <div class="form-group">
                            <label for="recipient-title" class="col-form-label"
                              >Title:</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="title"
                              v-model="otherInfo.title"
                            />
                          </div>
                          <div class="form-group">
                            <label for="message-text" class="col-form-label"
                              >Other Information:</label
                            >
                            <textarea
                              class="form-control h-200"
                              id="message-text"
                              v-model="otherInfo.details"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-11 col-12 ml-md-3 mb-4 text-center text-lg-right"
                >
                
                  <button
                    class="default-btn primary-bg border-0 text-white"
                    ref="closeTextArea"
                    @click="otherInfoDetails"
                  >
                    Save
                  </button>
                  <!-- <button type="button" ref="closeTextArea" class="btn btn-primary" @click="otherInfoDetails">Save</button> -->
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
                    <div class="col-md-7 mt-4 col-12">
                      <div class="form-cover w-100">
                        <form class="mr-5 mr-md-0 mr-lg-0">
                          <div class="form-group">
                            <!-- <label for="recipient-name" class="col-form-label"
                          ></label
                        > -->
                            <input
                              type="text"
                              class="form-control"
                              id="recipient-name"
                              placeholder="Name"
                              v-model="pastorDetails.name"
                            />
                          </div>
                          <!-- <div class="form-group"> -->
                            <!-- <label for="recipient-email" class="col-form-label"
                          ></label
                        > -->
                            <!-- <input
                              type="email"
                              class="form-control"
                              id="recipient-email"
                              placeholder="Email"
                              v-model="pastorDetails.pastorsEmail"
                            /> -->
                          <!-- </div> -->
                          <div class="form-group">
                            <!-- <label for="message-text" class="col-form-label"
                          ></label
                        > -->
                            <textarea
                              class="form-control h-100"
                              id="message-text"
                              v-model="pastorDetails.bio"
                              placeholder="About Pastor/Minister"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-5 mt-3 col-12">
                      <div class="container-img mx-auto mx-md-0 mx-lg-0 pt-2">
                        <div class="photo-box">
                          <img
                            v-if="!pastorDetails.photo"
                            src="../../../assets/people/phone-import.svg"
                            alt="Uploaded Image"
                            class="w-100 h-100 img-responsive"
                          />
                          <img
                            v-else
                            :src="pastorDetails.photo"
                            class="w-100 h-100 img-responsive"
                          />
                        </div>
                        <div class="custom-file submit-img">
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
                      <div class="row ml-2" v-for="(item, index) in pastorSocialMedia" :key="index">
                        <div class="col-md-2">
                          <div v-if="item.name === 'facebook'"
                            class="d-flex justify-content-center font-container"
                          >
                            <img
                              src="../../../assets/mobileonboarding/facebook-icon.png"
                              style="width: 78px"
                            />
                          </div>
                          <div v-if="item.name === 'instagram'"
                            class="d-flex justify-content-center font-container"
                          >
                            <img
                              src="../../../assets/mobileonboarding/instagram-icon.png"
                              style="width: 78px"
                            />
                          </div>
                          <div v-if="item.name === 'twitter'"
                            class="d-flex justify-content-center font-container"
                          >
                            <img
                              src="../../../assets/mobileonboarding/twitter-icon.png"
                              style="width: 78px"
                            />
                          </div>
                        </div>
                        <div class="col-md-9 mr-2 p-md-0">
                          <div class="">
                            <input
                              type="text"
                              class="social-input mb-2 form-control"
                              v-model="item.url"
                              :placeholder="item.name"
                            />
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
                  <button type="button" ref="closePastorModal" class="mr-3 btn default-btn" @click="closeModal">Close</button>
                  <button
                    class="default-btn primary-bg border-0 text-white"
                    data-dismiss="modal"
                    @click="detailsForPastor"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="btn primary-bg mt-5 text-white default-btn border-0 col-12 col-sm-6 offset-sm-3"
            @click="saveSetUp"
          >
            Save and continue
          </div>
          <div
            @click="skip"
            class="btn my-3 mb-5 text-primary text-right col-12 col-sm-6 offset-sm-3">
            Skip >>>
          </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "@/gateway/backendapi";
import store from "../../../store/store";
import { useToast } from "primevue/usetoast";
import stopProgressBar from "../../../services/progressbar/progress";
import { useConfirm } from "primevue/useConfirm";
// import { useStore } from "vuex"

export default {
  props: [],
  setup(props, context) {
    // let store = useStore()
    const toast = useToast();
    const confirm = useConfirm()
    const pastors = ref([]);
    const pastorDetails = ref({});
    const pastorsName = ref("");
    const pastorsEmail = ref("");
    const pastorSocialMedia = ref([
      {
        name: 'facebook',
        url: ''
        },{
          name: 'twitter',
          url: ''
        
      },{
        name: 'instagram',
        url: ''
      }
    ])
    // const pastorFacebook = ref("")
    // const pastorInstagram = ref("")
    // const pastorTwitter = ref("")
    const closePastorModal = ref("");
    const image = ref("");
    const pastorImage = ref("");
    const tenantId = ref("");
    const churchName = ref("");
    const phoneNumber = ref("");
    const address = ref("");
    const otherInfo = ref({ showFullMessage: false });
    const infoArray = ref([]);
    const closeTextArea = ref("");
    const pastorPayload = ref([])


    const saveSetUp = async () => {
      
      
        infoArray.value.map(i => {
          if(!i.customAboutId) delete i.showFullMessage
        })



      const formObj = {
        churchName: churchName.value,
        address: address.value,
        phoneNumber: phoneNumber.value,
        abouts: infoArray.value
      }
      // const formData = new FormData();
      // formData.append("churchName", churchName.value);
      // formData.append("address", address.value);
      // formData.append("phoneNumber", phoneNumber.value);
      // formData.append("abouts", infoArray.value);
      // formData.append("pastors", pastors.value);
      // console.log(churchName.value)
      // console.log(phoneNumber.value)
      // console.log(infoArray.value);
      // console.log(pastors.value);
      // formData.append("logo", payload.logo)

      try {
        const response = await axios.put(
          "/mobile/v1/Profile/UpdateChurchProfile",
          formObj
        );
        if (response) {
          toast.add({
            severity: "success",
            summary: "Profile Updated",
            detail: "Church Profile Updated Successfully",
            life: 3000,
          });
          let changeState = {
            tab: true,
            churchSetup: false,
            socialMedia: true,
            appBranding: false,
            donationForm: false
          }
          context.emit('saved-churchsetup', changeState)
        }
        console.log(response);
      } catch (error) {
        stopProgressBar();
        if(error.toString().toLowerCase().includes('network error')) {
          toast.add({
            severity: "warn",
            summary: "Network Error",
            detail: "Please ensure you have a strong internet connection",
            life: 4000,
          });
        } else if (error.toString().toLowerCase().includes('timeout'))  {
          toast.add({
            severity: "warn",
            summary: "Timeout",
            detail: "Request took too long to respond, please try again",
            life: 4000,
          });
        }
        console.log(error);
      }
    };

    const detailsForPastor = async() => {
      console.log(pastors.value)
      console.log(pastorDetails.value)
      console.log(pastorSocialMedia.value)

      
       pastorSocialMedia.value.forEach(i => {
        if (i.socialMediaId && i.url) {
            pastorPayload.value.push(`${i.socialMediaId},${i.name},${i.url},${i.owner}`)
        }
        if (!i.socialMediaId && i.url) {
            pastorPayload.value.push(`new,${i.name},${i.url},new`)
        }
      })

      let formData = new FormData()
        formData.append("name", pastorDetails.value.name)
        formData.append("bio", pastorDetails.value.bio)
        formData.append("photo", image.value)
        if (pastorDetails.value.pastorId) {
          formData.append("pastorId", pastorDetails.value.pastorId)
        } else {
          pastors.value.push({
         name:pastorDetails.value.name,
         bio: pastorDetails.value.bio,
         photo: pastorDetails.value.photo,
         socialMedia: pastorSocialMedia.value
       });
        }
        pastorPayload.value.forEach(i => {
          formData.append("socialMedia", i)
        })
        console.log(pastorPayload.value)

        try {
          let res = await axios.post('/mobile/v1/profile/createoreditpastor', formData)
            console.log(res)
        }
        catch (error) {
          console.log(error)
        }
      closePastorModal.value.setAttribute("data-dismiss", "modal");
        
      pastorPayload.value = []
      pastorDetails.value = {}
      pastorSocialMedia.value = [
        { name: 'facebook', url: ''},
        { name: 'twitter', url: '' },
        { name: 'instagram', url: '' }
      ]
    };

    const otherInfoDetails = () => {
      infoArray.value.push(otherInfo.value);
      closeTextArea.value.setAttribute("data-dismiss", "modal");
      otherInfo.value = {};
    };

    const editPastor = (index) => {
      pastorDetails.value = pastors.value[index]
      // pastorSocialMedia.value = pastors.value[index].socialMedia
      if (pastors.value[index] && pastors.value[index].socialMedia.length > 0) {
        if (pastors.value[index].socialMedia.find(i => i.name.trim().toLowerCase() === "facebook")) {
          pastorSocialMedia.value[0] = pastors.value[index].socialMedia.find(i => i.name.trim().toLowerCase() === "facebook")
        } else{
            pastorSocialMedia.value[0] = {
            name: 'facebook',
            url: ''
          }
        }
        if (pastors.value[index].socialMedia.find(i => i.name.trim().toLowerCase() === "twitter")) {
           pastorSocialMedia.value[1] = pastors.value[index].socialMedia.find(i => i.name.trim().toLowerCase() === "twitter")
        } else {
          pastorSocialMedia.value[1] = {
            name: 'twitter',
            url: ''
          }
        }
        if (pastors.value[index].socialMedia.find(i => i.name.trim().toLowerCase() === "instagram")) {
           pastorSocialMedia.value[2] = pastors.value[index].socialMedia.find(i => i.name.trim().toLowerCase() === "instagram")
        } else {
          pastorSocialMedia.value[2] = {
            name: 'instagram',
            url: ''
          }
        }
       
       
      }
      console.log(pastors.value[index])
      console.log(pastorSocialMedia.value)
    }

    const uploadFile = (e) => {
      image.value = e.target.files[0];
      pastorDetails.value.photo = URL.createObjectURL(image.value);
      console.log('uploaded', pastorDetails.value)
    };

    const getTenantId = async () => {
      if (Object.keys(store.getters.currentUser).length > 0) {
        console.log(store.getters.currentUser);
        tenantId.value = store.getters.currentUser.tenantId;
      } else {
        try {
          const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
          store.dispatch("setCurrentUser", res.data);
          console.log(res.data);
          tenantId.value = res.data.tenantId;
        } catch (err) {
          console.log(err.response);
        }
      }

      console.log(tenantId.value);
      axios
        .get("/mobile/v1/Profile/GetChurchProfile")
        .then((response) => {
          console.log(response);
          churchName.value = response.data.returnObject.churchName;
          phoneNumber.value = response.data.returnObject.phoneNumber;
          address.value = response.data.returnObject.address;
          pastors.value = response.data.returnObject.pastors.map(i => {
            return {
              name: i.name,
              photo: i.photoUrl,
              pastorId: i.pastorId,
              bio: i.bio,
              tenantId: i.tenantID,
              socialMedia: i.socialMedias
            }
          })
          infoArray.value = response.data.returnObject.customAbouts.map(i => {
            return {
              title: i.title,
              details:  i.details,
              customAboutId: i.customAboutId
            }
          })

        })
        .catch((error) => {
          console.log(error);
        });
    };
    getTenantId();

    const skip = () => {
      if (churchName.value && address.value &&  phoneNumber.value && pastors.value.length > 0 && infoArray.value.length > 0) {
        let changeState = {
            tab: true,
            churchSetup: false,
            socialMedia: true,
            appBranding: false,
            donationForm: false
          }
          context.emit('saved-churchsetup', changeState)
          console.log('sent true to parent')
      } else {
        let changeState = {
          // tab: true,
            churchSetup: false,
            socialMedia: true,
            appBranding: false,
            donationForm: false
          }
          context.emit('saved-churchsetup', changeState)
          console.log('didnt send true')
      }
    }

    const showConfirmModal = (id, index) => {
      confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptClass: "confirm-delete",
        rejectClass: "cancel-delete",
        accept: () => {
          deletePastor(id, index);
          // toast.add({severity:'info', summary:'Confirmed', detail:'Member Deleted', life: 3000});
        },
        reject: () => {
          toast.add({
            severity: "info",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };

    const deletePastor = (id, index) => {
      if (!id) {
        pastors.value.splice(index, 1);
      } else {
            axios
            .delete(`/mobile/v1/Profile/DeletePastor?pastorId=${id}`)
            .then((res) => {
              console.log(res);
              toast.add({
                severity: "success",
                summary: "Confirmed",
                detail: `${res.data.response}`,
                life: 4000,
              });
              pastors.value = pastors.value.filter(
                (item) => item.pastorId !== id
              );

            })
            .catch((err) => {
              console.log(err)
                toast.add({
                  severity: "error",
                  summary: "Unable to delete",
                  detail: "An error occurred, please try again",
                  life: 4000,
                });
            });
        }
     
      };

      const showConfirmModalAbout = (id) => {
      confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptClass: "confirm-delete",
        rejectClass: "cancel-delete",
        accept: () => {
          deleteAbout(id);
          // toast.add({severity:'info', summary:'Confirmed', detail:'Member Deleted', life: 3000});
        },
        reject: () => {
          toast.add({
            severity: "info",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };

    const deleteAbout = (id) => {
        axios
          .delete(`/mobile/v1/Profile/DeleteCustomAbout?customAboutId=${id}`)
          .then((res) => {
            console.log(res);
            toast.add({
              severity: "success",
              summary: "Confirmed",
              detail: `${res.data.response}`,
              life: 4000,
            });
            infoArray.value = infoArray.value.filter(
              (item) => item.customAboutId !== id
            );

          })
          .catch((err) => {
            console.log(err)
              toast.add({
                severity: "error",
                summary: "Unable to delete",
                detail: "An error occurred, please try again",
                life: 4000,
              });
          });
      };

      const closeModal = () => {
          pastorPayload.value = []
          pastorDetails.value = {}
          pastorSocialMedia.value = [
            { name: 'facebook', url: ''},
            { name: 'twitter', url: '' },
            { name: 'instagram', url: '' }
          ]
          closePastorModal.value.setAttribute("data-dismiss", "modal");
      }

    return {
      pastors,
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
      otherInfo,
      otherInfoDetails,
      infoArray,
      closeTextArea,
      address,
      skip,
      showConfirmModal,
      showConfirmModalAbout,
      pastorSocialMedia,
      editPastor,
      pastorPayload,
      closeModal
    };
  },
};
</script>
<style scoped>
.setup {
  color: #031c39;
  font: normal normal 800 30px/40px Nunito Sans;
}
.check-icon {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #136acd;
}
.pi {
  color: #fff;
  margin-top: 6px;
  margin-left: 2px;
}
.btn-button {
  border-radius: 25px !important;
  width: 40%;
  height: 25px;
  line-height: 10px;
}
.bg-image {
  background-image: url("../../../assets/mobileonboarding/groupMain.svg");
  /* height: 500px;  */
  /* background-position: center;  */
  background-repeat: no-repeat;
  background-size: cover;
  /* background: transparent linear-gradient(180deg, #2E67CE 0%, #690C7F 100%) 0% 0% no-repeat padding-box; */
  min-height: 100vh;
}
.image-dis {
  display: flex;
  justify-content: center;
  align-items: center;
}
.next-btn {
  background: #f1faff 0% 0% no-repeat padding-box;
  border: 0.20000000298023224px solid #7894a6;
  border-radius: 23px;
  opacity: 1;
}
.next-text {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  opacity: 1;
}
.step {
  font: normal normal bold 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #ffffff;
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

.container-img {
  width: 100%;
  padding-bottom: 24px;
  /* height: 35vh; */

  border-radius: 27px !important;
  background: rgb(248, 248, 249);
  margin-top: 0.3rem;
}

.photo-box {
  border-radius: 27px;
  width: 87%;
  margin-left: 11px;
  height: 93px;
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
  background: #dedede61 0% 0% no-repeat padding-box;
  border: 1px solid #d2cfcf5c;
  border-radius: 24px;
  opacity: 0.64;
  height: 30px;
  padding-right: 50px;
}
.mission {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
}
.edit {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  cursor: pointer;
}

.pastors-name {
  font: normal normal 600 16px/22px Nunito Sans;
}

.edit-pastor-details {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  cursor: pointer;
}

.btnIcons {
  color: #136acd;
  background-color: #dde2e6;
  border-radius: 40px;
  border: none;
  padding: 7px;
  text-align: center;
}
.pastorname {
  font: normal normal 700 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #020e1c;
}
.submit-img {
  width: 87%;
  margin-left: 12px;
}

.skip-text {
  background: rgba(0, 0, 0, 0.707);
  position: fixed;
  top: 34em;
  width: 20%
}
.person-image {
  width: 50%;
  margin: auto;
}
</style>
