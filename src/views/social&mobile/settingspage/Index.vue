<template>
  <div>
    <div class="container">
      <div class="row p-3 mb-3">
        <div class="col-md-12">
          <h3 class="my-3 heading-text">Settings</h3>
          <span class="link-text">Link your social media accounts</span>
        </div>
      </div>

      <!--facebook area  -->
      <!-- Modal -->
      <!-- Button trigger modal -->
      <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Church Facebook Page
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
                <div class="col-md-3">
                  <span class="">Page Id:</span>
                </div>
                <div class="col-md-9">
                  <input
                    type="text"
                    class="rounded form-control px-l-5"
                    placeholder="Input Your Church Id"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn default-btn btnfb">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--  End Modal -->

      <div class="row mx-2 mx-md-0">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="
                      pi
                      pifb
                      pi-facebook
                      d-flex
                      justify-content-center
                      ml-4 ml-md-0
                    "
                  ></i>
                </div>

                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-2 pl-md-0">
                    Connect your facebook account to Churchplus
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button class="btn default-btn btnfb" @click="showDisplay" >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--second Button-->
      <!--end facebook area  -->
      <Dialog
        header="Create a post"
        class="dialogFacebook heading-text text-center"
        v-model:visible="display1"
        style="width: 100%; max-width: 400px"
      >
        <!--facebook id-->
          <div class="row">
            <div class="col-md-4"></div>
            <div class="form-group form-check col-md-6 ml-3">
              <!-- <label class="form-check-label">
                <input class="form-check-input" type="checkbox" /> Remember me
              </label> -->
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-6">
              <!-- <router-link to="/tenant/social/post"
                class="btn default-btn btnfb text-center"
              
              >
                Create Post
              </router-link> -->
              <button class="btn default-btn btnfb text-center"> <router-link to="/tenant/social/post" class="linkFacebook">Post</router-link></button>
            </div>
            <div class="col-md-2"></div>
          </div>
        <!--facebook id-->
      </Dialog>
      <!--second Button-->
      <!--end facebook area  -->
      <Dialog
        header="Enter your facebook information"
        class="dialogFacebook heading-text"
        v-model:visible="display"
        style="width: 100%; max-width: 700px"
      >
        <!--facebook id-->
        
          <!-- <div class="row justify-content-center">
            <div class="col-md-1 text-right">
              <label for="email"></label>
            </div> -->
            <!-- <div class="form-group col-md-12">
              <h5 class="link-text">
                Account connected to facebook Successfully, Enter your Facebook
                Page Id and Page Access Token below to make your post
              </h5>
              <h6>Share Your Post to Facebook</h6>
            </div> -->
            <div class="row mb-3" >
            <div class="col-6 link-text">
              <p class="mt-3">Click the button below to watch how to get your page Id and Access Token</p>
              <p class="mt-4 text-center"><button class="btn default-btn btntwhatapp">Watch</button></p>

            </div>
            <div class="col-6 form-group">
              <p class="mt-3">Click the button below to Download video to get your page Id and Access Token</p>
              <p class="mt-4 text-center"><a href=""> <button class="btn default-btn btntmobileapp">Download</button> </a></p>
            </div>
          </div>
            <!-- <div class="col-md-0"></div>
          </div> -->
          <div class="row">
            <div class="col-4 link-text">Page Id:</div>
            <div class="col-8 form-group">
              <input
                type="text"
                placeholder="Page Id"
                class="form-control input"
                id="pageId"
                v-model="pageId1"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4 link-text">Page Access Token:</div>
            <div class="col-8 form-group">
              <input
                type="text"
                placeholder="Page Access Token"
                class="form-control input w-90"
                id="pageAccessToken"
                v-model="pageaccessToken"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="form-group form-check col-md-6 ml-3">
              <!-- <label class="form-check-label">
                <input class="form-check-input" type="checkbox" /> Remember me
              </label> -->
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-6">
              <!-- <router-link to="/tenant/social/post"
                class="btn default-btn btnfb text-center"
              
              >
                Create Post
              </router-link> -->
              <button class="btn default-btn btnfb text-center" @click="getPageAccessToken" >Submit</button>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-4">
              
            </div>
            <div class="col-md-5">
             <router-link to> <button @click="getSocialMediaContact" class="btnnon"> Need help contact customer care</button></router-link>
            </div>
          </div>
        <!--facebook id-->
      </Dialog>
      <!--twitter area  -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Church Twitter Page
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
                <div class="col-md-3">
                  <span class="">Share Your Church Post to FaceBook:</span>
                </div>
                <div class="col-md-9">
                  <input
                    type="text"
                    class="rounded form-control px-l-5"
                    placeholder="Input Your Church Id"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="button" class="btn default-btn btntwi">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--  End Modal -->
      <!-- <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="
                      pi
                      pitwi
                      pi-twitter
                      d-flex
                      justify-content-center
                      ml-4 ml-md-0
                    "
                  ></i>
                </div>
                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-2 pl-md-0">
                    Connect your twitter account to Churchplus
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button
                class="btn default-btn btntwi"
                data-target="#exampleModal1"
                data-toggle="modal"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div> -->
      <!--twitter area ended  -->

      <!--instagram area  -->
      <!-- <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="
                      fa
                      piinsta
                      fa-instagram
                      d-flex
                      justify-content-center
                      ml-4 ml-md-0
                    "
                  ></i>
                </div>
                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-2 pl-md-0">
                    Connect your instagram account to Churchplus
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button class="btn default-btn btninsta">Connect</button>
            </div>
          </div>
        </div>
      </div> -->
      <!--instergram area ended  -->

      <!--what'sApp area  -->
      <!-- <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="
                      pitwhatapp
                      fab
                      fa-whatsapp
                      d-flex
                      justify-content-center
                      ml-4 ml-md-0
                    "
                  ></i>
                </div>
                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-2 pl-md-0">
                    Connect your Whatsapp account to Churchplus
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button class="btn default-btn btntwhatapp">Connect</button>
            </div>
          </div>
        </div>
      </div> -->
      <!--what'sApp area ended  -->
      <Toast/>

      <!--mobile-App area  -->
      <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <img
                    src="../../../assets/mobileapp.svg"
                    style="width: 54px; height: 54px"
                    alt="Mobile app image"
                  />
                  <!-- <i class=" fab fa-whatsapp d-flex justify-content-center ml-4 ml-md-0"></i> -->
                </div>
                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-3 pl-md-0">
                    Download Churchplus Mobile App
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button class="btn default-btn btntmobileapp">Connect</button>
            </div>
          </div>
        </div>
      </div>
      <!--mobile-App area ended  -->
    </div>
  </div>
</template>

<script>
// import firebase from "../../../services/firebase/firebase";
import { ref } from "vue";
import Dialog from "primevue/dialog";
import axios from "@/gateway/backendapi";
import {useToast} from 'primevue/usetoast'

export default {
  components: { Dialog},
  setup() {
    const toast = useToast()
    const display = ref(false);
    const display1 = ref(false)
    const showDisplay =() =>{
      return display.value= true
    }
    const showDisplay1 =()=>{
      return display1.value = true

    }

    // const facebookLogin2 = () => {
    //   var provider = new firebase.auth.FacebookAuthProvider();
    //   provider.addScope("user_birthday");

    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       // Sign-out successful.
    //       console.log("logged out");
    //       firebase
    //         .auth()
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //           setTimeout(function () {
    //             // display.value = true;
    //           }, 1500);

    //           console.log(result, "sign in result");
    //           let accessToken = result.credential.accessToken;
    //           let profileId = result.additionalUserInfo.profile.id;
    //           getAccessToken(accessToken, profileId);

    //           /** @type {firebase.auth.OAuthCredential} */
    //         })
    //         .catch((error) => {
    //           console.log(error, "sign in error");
    //         });
    //     })
    //     .catch((error) => {
    //       // An error happened.
    //       console.log(error, "log out failed");
    //       firebase
    //         .auth()
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //           setTimeout(function () {
    //             display.value = true;
    //           }, 1500);

    //           console.log(result, "sign in result");
    //           let accessToken = result.credential.accessToken;
    //           let profileId = result.additionalUserInfo.profile.id;
    //           getAccessToken(accessToken, profileId);

    //           /** @type {firebase.auth.OAuthCredential} */
    //         })
    //         .catch((error) => {
    //           if (error.credential && error.credential.accessToken) {
    //             display.value = true;
    //             //Get Page access token
    //             axios
    //               .get(
    //                 `https://graph.facebook.com/v11.0/me/accounts?access_token=${error.credential.accessToken}`
    //               )
    //               .then((res) => {
    //                 console.log(res, "🎉🌹🌹");
    //               })
    //               .catch((err) => {
    //                 console.log(err, "err error");
    //               });
    //           }

    //           console.log(error, "sign in error");
    //         });
    //     });
    // };
    // const getAccessToken = async (accessToken, profileId) => {
    //   try {
    //     const data = await axios.get(
    //       `https://graph.facebook.com/${profileId}/accounts?fields=name,access_token&access_token=${accessToken}`
    //     );
    //     console.log(data, "get pages data");
    //   } catch (error) {
    //     console.log(error, "get pages error");
    //   }
    // };

    // const pageAccessToken = async (token) => {
    //   try {
    //     const data = await axios.get(
    //       `https://graph.facebook.com/103263464868380?fields=access_token&access_token=${token}`
    //     );
    //     console.log(data, "w data");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    //get page Access Token
    const pageaccessToken = ref("");
    const pageId1 = ref("");
    const name = ref("facebook");
    

    const getPageAccessToken = async () => {
      let pageUrl = `https://graph.facebook.com/v11.0/${pageId1.value}/feed`
      let facebookUser = {
        name: name.value,
        url: pageUrl,
        pageId: pageId1.value,
        accessToken: pageaccessToken.value
      }
      if (pageId1.value === "" && pageaccessToken.value === ""){
        return false
      }
      try {
        // const data = await axios.get(
        //   "https://graph.facebook.com/pageId?fields=access_token&access_token=pageaccessToken"
        // );
        const res = await axios.post(`/api/SocialMedia/connect`,facebookUser)
        
        console.log(res, "🎉🎉🎉🎉");
        toast.add({severity:'success', summary: '', detail:'Submit Successfully', life: 7000});
        
        if(res.status === 200){
          showDisplay1()
          }

      } catch (error) {
        console.log(error, "get pages error");
      }
    };
    const getSocialMediaContact = async()=>{
  try{
    const {data} = await axios.get("/api/SocialMedia/contactChurplus?handle=facebook");
    console.log(data);
  }catch(error){
    console.log(error);
  }
}    //getSocialDetails
   

    /*eslint no-undef: "warn"*/
    // FB.login(function(response) {
    //   // handle the response
    //   console.log(response, "SDK response");
    // }, {scope: 'public_profile,email'});

    // var provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('email');
    // provider.addScope('user_birthday');
    // provider.addScope('user_friends');
    // firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //       setTimeout(function () {
    //         display.value = true;
    //       }, 1500);

    //       console.log(result, "sign in result");
    //       let accessToken = result.credential.accessToken;
    //       let profileId = result.additionalUserInfo.profile.id;
    //       getAccessToken(accessToken, profileId);
    //       axios.get(`https://graph.facebook.com/v11.0/me/accounts?access_token=${accessToken}`)
    //         // axios.get(`https://graph.facebook.com/v11.0/114361443274202?fields=access_token&access_token=${error.credential.accessToken}`)
    //           .then(res => {
    //             console.log(res, "🎉🌹🌹 works");
    //           })
    //           .catch(err => {
    //             console.log(err, "err error");
    //           })

    //     })
    // .catch((error) => {
    //   console.log(error, "🤣🤣");
    //   if (!error.credential) return false;
    //   axios.get(`https://graph.facebook.com/v11.0/me?fields=id&access_token=${error.credential.accessToken}`)
    //     .then(res => {
    //       getAccessToken(error.credential.accessToken, res.data.id)

    //       //Get Page access token
    //       axios.get(`https://graph.facebook.com/108291174831555?fields=access_token&access_token=${error.credential.accessToken}`)
    //       // axios.get(`https://graph.facebook.com/v11.0/114361443274202?fields=access_token&access_token=${error.credential.accessToken}`)
    //         .then(res => {
    //           console.log(res, "🎉🌹🌹 NEW");
    //         })
    //         .catch(err => {
    //           console.log(err, "err error");
    //         })

    //       //Get Page access token
    //       axios.get(`https://graph.facebook.com/v11.0/${res.data.id}/accounts?fields=id,picture,name&access_token=${error.credential.accessToken}`)
    //       // axios.get(`https://graph.facebook.com/v11.0/114361443274202?fields=access_token&access_token=${error.credential.accessToken}`)
    //         .then(res => {
    //           console.log(res, "🎉🌹🌹");
    //         })
    //         .catch(err => {
    //           console.log(err, "err error");
    //         })

    //       //Get Page access token
    //       axios.get(`https://graph.facebook.com/v11.0/me/accounts?access_token=${error.credential.accessToken}`)
    //       // axios.get(`https://graph.facebook.com/v11.0/114361443274202?fields=access_token&access_token=${error.credential.accessToken}`)
    //         .then(res => {
    //           console.log(res, "🎉🌹🌹");
    //         })
    //         .catch(err => {
    //           console.log(err, "err error");
    //         })
    //     })
    //     .catch(err => {
    //       console.log(err, "err error");
    //     })

    // });

    return {
      pageaccessToken,
      pageId1,
      // facebookLogin2,
      display,
      display1,
      showDisplay,
      showDisplay1,
      // pageAccessToken,
      getPageAccessToken,
      getSocialMediaContact
    };
  },
};
</script>

<style scoped>
/* general class */
.box {
  background: #fff;
  transition: all 0.4s ease-in-out;
}
.btn-primary {
  background-color: #0f529f !important;
  color: #fff !important;
  border: none !important;
  outline: 0 !important;
  border-radius: 20px;
}
 a{
  color: white!important;
  text-decoration: none !important;
  background-color: transparent !important;
}
.navTop {
  justify-content: center !important;
}

.box-shadow:hover {
  background: #fff;
  box-shadow: 0 0 11px rgba(27, 27, 27, 0.2);
  cursor: pointer;
  /* transform: scale(1.05, 1.05); */
}
/*end of general class */

.pifb {
  font-size: 3rem;
  color: #0f529f;
}
.dialogFacebook {
  width: 100%;
  max-width: 600px;
}

.btnfb {
  background-color: #0f529f;
  color: #fff;
  border: none;
  outline: 0;
}

.heading-text {
  color: #02172e;
  font: normal normal bold 34px/46px Nunito Sans;
}

.link-text {
  color: #02172e;
  font: normal normal 600 16px/24px Nunito Sans;
}

.bordersocials {
  border: 1px solid #708eb152;
  border-radius: 10px;
}

/* twitter Area */
.btntwi {
  background-color: #1a91da;
  color: #fff;
  border: none;
  outline: 0;
}

.pitwi {
  color: #1a91da;
  font-size: 3rem;
}
/* end of twitter Area */

/* instagram Area */
.btninsta {
  background: rgb(233, 2, 99);
  background: linear-gradient(
    90deg,
    rgba(233, 2, 99, 1) 0%,
    rgba(253, 6, 4, 1) 35%,
    rgba(255, 93, 0, 1) 100%
  );
  color: #fff;
  border: none;
  outline: 0;
}

.piinsta {
  color: rgb(233, 2, 99);
  color: linear-gradient(
    90deg,
    rgba(233, 2, 99, 1) 0%,
    rgba(253, 6, 4, 1) 35%,
    rgba(255, 93, 0, 1) 100%
  );
  font-size: 3rem;
}
/* end of instagram Area */

/* whatsapp Area */
.btnnon{
   background-color: white;
  color: none;
  border: none;
  outline: 0;

}
.btntwhatapp {
  background-color: #2eb743;
  color: #fff;
  border: none;
  outline: 0;
}

.pitwhatapp {
  color: #2eb743;
  font-size: 3rem;
}
/* end of whatsapp Area */

/* mobile-app Area */
.btntmobileapp {
  background-color: #e87109;
  color: #fff;
  border: none;
  outline: 0;
}
/* end of mobile-app Area */
</style>