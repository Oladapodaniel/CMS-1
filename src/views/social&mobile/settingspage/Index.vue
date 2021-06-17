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
                    class="pi pifb pi-facebook d-flex justify-content-center ml-4 ml-md-0"
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
              <button class="btn default-btn btnfb" @click="facebookLogin2">
                Connect
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <!--end facebook area  -->
      <Dialog header="Input Your Facebook Page Id" v-model:visible="display" >
         <!--facebook id-->
          <form action="">
            <div class="row justify-content-center">
              <div class="col-md-4 text-right">
                <label for="email">Facebook Page Id :</label>
              </div>
              <div class="form-group col-md-6"> 
                <input type="text" class="form-control" placeholder="Facebook Page Id">
              </div>
              <div class="col-md-2">
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
              </div>
              <div class="form-group form-check col-md-6 ml-3">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"> Remember me
                </label>
              </div>
              <div class="col-md-2"> 
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">

              </div>
              <div class="col-md-6">
                <button class="btn default-btn btnfb text-center">
                  Connect
                </button>
              </div>
              <div class="col-md-2"></div>
            </div>
           
          </form>
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
              <button type="button" class="btn default-btn btntwi">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--  End Modal -->
      <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="pi pitwi pi-twitter d-flex justify-content-center ml-4 ml-md-0"
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
      </div>
      <!--twitter area ended  -->

      <!--instergram area  -->
      <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="fa piinsta fa-instagram d-flex justify-content-center ml-4 ml-md-0"
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
      </div>
      <!--instergram area ended  -->

      <!--what'sApp area  -->
      <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i
                    class="pitwhatapp fab fa-whatsapp d-flex justify-content-center ml-4 ml-md-0"
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
      </div>
      <!--what'sApp area ended  -->

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
              <button
                class="btn default-btn btntmobileapp"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--mobile-App area ended  -->
     

    </div>
  </div>
</template>

<script>
import firebase from "../../../services/firebase/firebase";
import {ref} from 'vue';
import Dialog from 'primevue/dialog'


export default {
  components:{Dialog},
  setup() {
    /*eslint no-undef: "warn"*/
    //     FB.login(function(response) {
    //     if (response.authResponse) {
    //      console.log('Welcome!  Fetching your information.... ');
    //      FB.api('/me', function(response) {
    //        console.log('Good to see you, ' + response.name + '.');
    //      });
    //     } else {
    //      console.log('User cancelled login or did not fully authorize.');
    //     }
    // });

    //   },
    // const facebookLogin = () => {
    //   /*eslint no-undef: "warn"*/
    //   FB.login(
    //     function (response) {
    //       console.log(response);
    //       let token = {
    //         accessToken: response.authResponse.accessToken,
    //       };
    //       console.log(response);
    //       console.log(token);
    //     },
    //     { scope: "user_birthday" }
    //   );
    // };
    const display =ref(false)
    const facebookLogin2 = () => {
      
      /*eslint no-undef: "warn"*/
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      alert(1)
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          alert(2)
          setTimeout(function(){ display.value = true;}, 1500);
         
          console.log(result);
          /** @type {firebase.auth.OAuthCredential} */
          //var credential = result.credential;

          // The signed-in user info.
          //var user = result.user;
          

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
         // var accessToken = credential.accessToken;

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          // The email of the user's account used.
          //var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          console.log(error);

          // ...
        });
    };
    return {
      facebookLogin2,
      display,
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
.btn-primary{
  background-color: #0f529f!important;
  color: #fff!important;
  border: none!important;
  outline: 0!important;
  border-radius: 20px;

}
.navTop{
  justify-content: center!important;
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