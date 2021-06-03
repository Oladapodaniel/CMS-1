<template>
  <div class="wave">
    <div class="container">
      <div class="row d-flex align-items-center containerheight">
        <div class="col-lg-6 col-sm-12">
          <div class="col">
            <!-- track 1 -->
            <div class="row">
              <div class="col-lg-12 text-sm-center text-md-left fss align-text-main">
                <h2 class="font-weight-bold mainheader">Welldone! Your app is ready</h2>
              </div>
            </div>
            <!-- end track 1 -->

            <!-- track 2 -->
            <div class="row mt-3 align-text">
              <div class="col-lg-12">
                <h5 class="text-wrap h6 ">
                  Congrats, you have successfully set up your Churchplus App.
                  Curious what you can do? share the link below with your members.
                </h5>
              </div>
            </div>
            <!-- end track 2 -->

            <!-- track 3 -->
            <div class="row  align-text d-flex">
              <div class="col-12 subheader">
                But Hey! There's still one more thing to do
              </div>
              <div class="col-12 mt-3">
                Click on this link to make a post to your social media page.
              </div>
              <div class="col-3  mt-3 text-white bg-primary default-btn border-0" @click="post">
                 Click Here
              </div>
            </div>
            <!-- end track 3 -->

            <!-- end track 4 -->
            <!-- <div class="row d-sm-block d-lg-none text-center show-on-small-screen at-screen">
                <div class="col-12 cta px-0">
                <button class="btn default-btn c-pointer">Copy</button>
              </div> -->
            </div>
            <!-- end track 4 -->



            <!-- track 5 -->
            <!-- <div class="row mt-3 align-text d-none d-lg-block">
              <div class="col-lg-12 d-flex pl-0">
                <div class="col-4 col-sm-3">
                  <img
                    class="w-100 mt-5"
                    src="../../../assets/mobileonboarding/Google-play-logo.png"
                    alt="phone image"
                  />
                </div>
                <div class="col-4 col-sm-3">
                  <img
                    src="../../../assets/mobileonboarding/app-store-logo.png"
                    alt="phone image"
                  />
                </div>
              </div>
            </div> -->
             <!-- end track 5 -->

 <!--  track 6 -->
            
            <!-- end track 6 -->
          </div>
        

        <div class="col-lg-6 col-sm-12">
          <div class="row">
            <div class="col-12 text-center">
            <div class="image mt-3">
              <img
                class="w-100 mt-5"
                src="../../../assets/mobileonboarding/phone1.png"
                alt="phone image"
              />
            </div>
          </div>
          <div class="col-12 bring-front">
            <div class="row">
              <div class="col-lg-9 mt-1">
                <h5 class="text-wrap h6">Start Sharing with members of your church</h5>
              </div>
              <div class="col-lg-12 mt-1">
                <textarea type="text" ref="link" value="https://play.google.com/store/apps/details?id=com.churchplus.app.genericapp" class="border-0 w-100 ctatext link-area" rows="3" style="background: transparent" :disabled="true"></textarea>
              </div>
              <div class="col-12 cta px-0 align-self-center" @click="copyLink">
                <button class="btn default-btn c-pointer ml-md-3">Copy Link</button>
              </div>
            </div>

          </div>
          
              <div class="col-lg-12 d-flex pl-0">
                <div class="col-4 col-sm-3">
                  <img
                    class="w-100 mt-5"
                    src="../../../assets/mobileonboarding/Google-play-logo.png"
                    alt="phone image"
                  />
                </div>
                <div class="col-4 col-sm-3">
                  <img
                    class="w-100 mt-5"
                    src="../../../assets/mobileonboarding/app-store-logo.png"
                    alt="phone image"
                  />
                </div>
              </div>
            
          </div>
          

          
        </div>
      </div>

      <!-- wave area -->
      <div class="row">
        <div class="custom-shape-divider-bottom-1620296099">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <!-- end wave area -->
    </div>
  </div>
  

  <!-- footer Area -->
  <div class="container mt-5 footer-area">
    <div class="row">
      <div class="col-12 text-center mt-5 mb-4">
        <!-- <h5 class="copyright mb-5">Powered By Churchplus</h5> -->
      </div>
    </div>
  </div>
  <!-- end footer Area -->
  <Toast />
</template>

<script>
import { ref } from 'vue'
import { useToast } from "primevue/usetoast";
import router from '../../../router';
export default {
  setup() {

      const link = ref("")
      const toast = useToast()

      const copyLink = () => {
                link.value.select();
                link.value.setSelectionRange(0, link.value.value.length); /* For mobile devices */

                /* Copy the text inside the text field */
                document.execCommand("copy");
                toast.add({
                    severity: "success",
                    summary: "Link Copied",
                    detail: "Link copied to your clipboard",
                    life: 3000,
                });
            }
      const  post = () => {
        router.push({ name: 'SocialPost' })
      }
    return {
      copyLink,
      link,
      post
    }
  },
}
</script>



<style scoped>
.copyright {
  color: #020e1c9f;
  font: normal normal 800 18px/36px Nunito Sans;
}

.containerheight {
  height: 80vh;
}
.wave {
  position: relative;
  background: #f1faff;
  height: 80vh;
}
.mainheader {
  font: normal normal 800 55px/64px Nunito Sans;
  font-family: Nunito Sans;
   color: #020e1c9f;
}

.subheader {
  font: normal normal bold 25px Nunito Sans;
  font-family: Nunito Sans;
  color: #020e1c9f;
  margin-top: 80px;
}

.ctatext {
  font: normal normal bold 18px/27px Nunito Sans;
  font-family: Nunito Sans;
 color: #020e1ca1;
 overflow: hidden;
}

.cta {
  color: #2e67ce;
  /* background-color: #f1faff; */
  border: none;
  outline: none;
}

.image {
  position: relative;
  z-index: 1;
}

.custom-shape-divider-bottom-1620296099 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1620296099 svg {
  position: relative;
  display: block;
  width: calc(161% + 1.3px);
  height: 160px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1620296099 .shape-fill {
  fill: #fff;
}

@media only screen and (max-width: 360px) {
  .fss {
    margin-top: 1.5rem;
  }

  .mainheader {
    font: normal normal 500 30px/30px Nunito Sans;
    font-family: Nunito Sans;
     color: #020e1c9f;
  }

  .align-text {
    text-align: center;
  }

  .align-text-main {
    text-align: center;
    font-weight: normal;
  }

  .footer-area {
    height: 100vh;
  }

  .show-on-small-screen{
  position: relative;
  z-index: 1;
  }
}

.custom-shape-divider-bottom-1620296099 .shape-fill {
  fill: #fff;
}

@media only screen and (max-width: 576px) {
  .fss {
    margin-top: 3rem;
  }

  .mainheader {
    font: normal normal 500 30px/30px Nunito Sans;
    font-family: Nunito Sans;
    color: #020e1c9f;
  }

  .align-text-main {
    /* text-align: center; */
    font-weight: normal;
  }

  .footer-area {
    height: 100vh;
  }
}

@media only screen and (max-width: 992px) {
  .fss {
    margin-top: 3rem;
  }

  .mainheader {
    font: normal normal 500 30px/30px Nunito Sans;
    font-family: Nunito Sans;
    color: #020e1c9f;
  }

  .align-text {
    text-align: center;
        z-index: 1;
    position: relative;
  }

  .align-text-main {
    text-align: center;
    font-weight: normal;
  }

  .footer-area {
    height: 100vh;
    position: fixed;
  }
}

.link-area:focus {
  border: none;
  outline: none
}

.bring-front {
  z-index: 1;
  margin-top: 56px;
}

.bring-front h5 {
  font-size: 19px;
  font-weight: 700
}
</style>


