<template>
  <div class="container-wide">
    <!-- write up part -->
    <div class="row" style="height: 100vh">
      <div class="col-md-6 mt-5">
        <div class="row">
          <div class="col-12 setup">Social Media Handles</div>
          <div class="col-12 mt-4">Add your social media handles that you want to make social post with.</div>
        </div>

        <div
          class="row mt-3"
          v-for="(socialMedia, index) in handles"
          :key="index"
        >
          <div class="col-12 col-sm-2 mt-2">
            <img
              v-if="socialMedia.name === 'facebook handle'"
              src="../../../assets/social/facebook.svg"
              alt="facebook"
            />
            <img
              v-if="socialMedia.name === 'twitter handle'"
              src="../../../assets/social/twitter.svg"
              alt="twitter"
            />
            <img
              v-if="socialMedia.name === 'instagram handle'"
              src="../../../assets/social/instagram.svg"
              alt="instagram"
            />
            <img
              v-if="socialMedia.name === 'youtube handle'"
              src="../../../assets/mobileonboarding/youtube.svg"
              alt="youtube"
            />
            <img
              v-if="socialMedia.name === 'youtube channel ID'"
              src="../../../assets/mobileonboarding/youtube.svg"
              alt="youtube channel id"
            />
          </div>
          <div class="col-md-8 col-12 mt-3" id="logoBox">
            <input
              type="text"
              :placeholder="socialMedia.name"
              v-model="socialMedia.url"
              class="w-100 py-1 border-0 outline-none px-2"
            />
          </div>
        </div>
        <div
          class="col-10 offset-1 offset-md-0 btn primary-bg ml-2 mt-5 text-white default-btn border-0 w-100"
          @click="saveSocialMedia"
        >
          Save and continue
        </div>
      </div>

      <!-- image part -->
      <div class="col-md-6 col-12 bg-image d-none d-md-block">
        <div class="row mt-3">
          <div class="col-md-12 text-center my-5 step">STEP 2 of 4</div>
          <div class="col-12 text-right text-white skip-text py-3 pr-5" @click="skip">Skip  >>></div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
 <Toast />
  <div></div>
</template>

<script>
import axios from "@/gateway/backendapi";
import router from "../../../router";
// import store from '../../../store/store'
import { useToast } from "primevue/usetoast";
import stopProgressBar from "../../../services/progressbar/progress";
import { ref } from "vue";

export default {
  setup() {
    const handles = ref([
      { name: "facebook handle", image: "../../../assets/social/facebook.svg" },
      { name: "twitter handle", image: "../../../assets/social/twitter.svg" },
      { name: "instagram handle", image: "../../../assets/social/instagram.svg" },
      { name: "youtube handle", image: "../../../assets/mobileonboarding/youtube.svg" },
      { name: "youtube channel ID", image: "../../../assets/mobileonboarding/youtube.svg" },
    ]);
    let toast = useToast();

    const saveSocialMedia = () => {
      const body = {
        socialMediaList: handles.value.map((i) => {
          return {
            name: i.name,
            url: i.url,
            // socialMediaId: i.socialMediaId ? i.socialMediaId : ""
          };
        }),
      };
      axios
        .put(`/mobile/v1/Profile/UpdateSocialMedia`, body)
        .then((res) => {
          // if(res){
           toast.add({
              severity: "success",
              summary: "Update is Successful",
              detail: "Social Media Handles successfully Updated",
              life: 3000,
            });
            router.push({ name: "AppBranding" });

          // }

          console.log(res.data, "🎄🎄🎄");
        })
        .catch((err) => {
           stopProgressBar();
            //  toast.add({
            //   severity: "error",
            //   summary: "Social Media Handles",
            //   detail: "Already Exist",
            //   life: 3000,
            // });
          console.log(err);
        });


    };

    const getSocialMediaDetails = () => {
      axios
        .get(`/mobile/v1/Profile/GetChurchProfile`)
        .then((res) => {
          console.log(res, "🎆🎆");
            for( let i of res.data.returnObject.churchSocialMedia) {
              const index = handles.value.findIndex(j => j.name === i.name);
              if (index >= 0) {
                handles.value[index] = i;
              }
            }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getSocialMediaDetails()

    const skip = () => {
      router.push({ name: 'AppBranding' })
    }

    return {
      saveSocialMedia,
      handles,
      skip
    };
  },
};
</script>

<style scoped>
.setup {
  color: #031c39;
  font: normal normal 800 30px/40px Nunito Sans;
}
.backgroundImage {
  background-image: url("../../../assets/mobileonboarding/socialimage.svg");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-color: #cccccc;
  height: 100vh;
  width: 100%;
}
.appHeading1 {
  font: normal normal 800 20px/60px Nunito Sans;
  letter-spacing: 0px;
  color: #031c39;
  opacity: 1;
}
#primaryColour {
  width: 76px;
  height: 34px;
  background: #136acd;
  border-radius: 5px;
  opacity: 1;
}
#secondaryColour {
  width: 76px;
  height: 34px;
  background: #ff5d00 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
}
#TestColour {
  width: 76px;
  height: 34px;
  background: #fd0604 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
}
hr {
  width: 523px;
  height: 0px;
  margin: auto;
}
#logoBox {
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dde2e6;
  border-radius: 5px;
  opacity: 1;
  width: 437px;
  height: 40px;
}
.colourText {
  text-align: left;
  font: normal normal bold 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #020e1c;
  opacity: 1;
}
.appBranding {
  text-align: left;
  font: normal normal 800 44px/60px Nunito Sans;
  letter-spacing: 0px;
  color: #031c39;
  opacity: 1;
}
.primaryColour {
  text-align: left;
  font: normal normal bold 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #020e1c;
  opacity: 1;
}
.logo {
  text-align: left;
  font: normal normal bold 24px/32px Nunito Sans;
  letter-spacing: 0px;
  color: #020e1c;
  opacity: 1;
}
.button1 {
  background: #f1faff 0% 0% no-repeat padding-box;
  border: 0.20000000298023224px solid #7894a6;
  border-radius: 23px;
  opacity: 1;
  width: 180px;
  height: 46px;
  color: #136acd;
}
.button2 {
  text-align: center;
  height: 0;
  position: absolute;
  top: 80%;
  right: 40%;
}
.dash {
  width: 41px;
  height: 4px;
  background: #136acd 0% 0% no-repeat padding-box;
  border-radius: 11px;
  opacity: 1;
}
.dash1 {
  width: 41px;
  height: 4px;
  background: #f7f8fa 0% 0% no-repeat padding-box;
  border-radius: 11px;
  opacity: 1;
}
.smallButton {
  background: #f1faff 0% 0% no-repeat padding-box;
  border: 0.20000000298023224px solid #7894a6;
  border-radius: 23px;
  opacity: 1;
  width: 180px;
  height: 46px;
}

.image-dis {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-image {
  background-image: url(../../../assets/mobileonboarding/socialimage.svg);
  background-size: cover;
}

.step {
  font: normal normal bold 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.skip-text {
  border-top: 1px solid rgb(173, 173, 173);
  border-bottom: 1px solid rgb(173, 173, 173);
  position: relative;
  top: 25em;
}

.skip-text:hover {
  background: rgb(62, 68, 160);
  border-top: 1px solid rgb(62, 68, 160);;
  border-bottom: 1px solid rgb(62, 68, 160);;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
}
</style>