<template>
  <div>
    <div class="logo-con">
      <div class="m-auto">
        <img src="../../assets/assembly-of-god-logo-png-7.png" class="img-logo-pane"/>
      </div>
    </div>
    <div class="main-con">
      <div class="main-section">
        <div class="intro-div">
          <h1 class="intro-header">Welcome {{ data && data.churchName ? data.churchName : "" }}</h1>
          <p class="intro-subtext">Where do you want to start ?</p>
        </div>
        <div class="boxes-con">
          <router-link
            class="box"
            to="/tenant/people/add"
            style="text-decoration: none"
          >
            <div class="inner-box">
              <div class="img-box">
                <img
                  src="../../assets/add-member-big.svg"
                  alt="Add Member Icon"
                />
              </div>
              <div class="box-text can-dogi">
                <div class="box-header-text">
                  <h4>Add members</h4>
                </div>
                <div class="box-small-text">
                  <p>Stay compliant by keeping accurate records of your members.</p>
                </div>
              </div>
            </div>
          </router-link>

          <router-link
            class="box can-do"
            to="/tenant/sms/compose"
            style="text-decoration: none"
          >
            <div class="inner-box">
              <div class="img-box">
                <img
                  src="../../assets/sms-email-big.svg"
                  alt="Add Member Icon"
                />
              </div>
              <div class="box-text can-do">
                <div class="box-header-text">
                  <h4>Send SMS</h4>
                </div>
                <div class="box-small-text">
                  <p>Communicate with your members by sending sms with our seamless sms.</p>
                </div>
              </div>
            </div>
          </router-link>

          <router-link
            class="box"
            to="/tenant/people/addfirsttimer"
            style="text-decoration: none"
          >
            <div class="inner-box">
              <div class="img-box">
                <img
                  src="../../assets/add-first-timer.svg"
                  alt="Add Member Icon"
                />
              </div>
              <div class="box-text can-do">
                <div class="box-header-text">
                  <h4>Add first timers</h4>
                </div>
                <div class="box-small-text">
                  <p>Keep accurate record and follow up your first timers with our automation system.</p>
                </div>
                
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="rcontainer">
      <div class="row">
        <div class="col-md-10 offset-2 text-center my-4 text-lg-right" style="max-width: 900px; margin: auto"> 
          <router-link to="/tenant" class="font-weight-bold text-decoration-none">Skip To Dashboard  >>></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  { ref } from 'vue'
import store from '../../store/modules/auth'
import axios from "@/gateway/backendapi"
export default {
  setup() {
       const data =  ref({})
      const churchData = () => {
        if (store.state.currentUser == undefined) {
          axios.get("/api/Membership/GetCurrentSignedInUser")
              .then(res => {
                console.log(res.data);
                data.value = res.data
              })
              .catch(err => console.log(err))
        }  else {
            data.value = store.state.currentUser
            
        }
      }
      churchData()


    return {
      data,
      churchData
    };
  },

  methods: {
    // actionSelected(url) {
    //   this.$router.push(url);
    // }
  },

  mounted() {
    if (!localStorage.getItem("userSetup")) {
      localStorage.setItem("userSetup", true);
    }
  }
};
</script>

<style scoped>
.logo-con {
  display: flex;
  margin-top: 24px;
}

.can-do a:hover {
  text-decoration: none;
}

.logo-link {
  width: 100%;
  text-align: center;
}

.main-con {
  display: flex;
  margin-top: 3em;
}

.nav-con {
  width: 22%;
  height: 100vh;
  background: cyan;
}

.main-section {
  width: 100%;
}

.boxes-con {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
}

.boxes-con .box {
  width: 32%;
  min-width: 210px;
  max-width: 279px;
  max-height: 366px;
  border: 1px solid #55828794;
  border-radius: 10px;
  margin: 10px;
  padding: 30px 0;
  transition: all 0.4s ease-in-out;
}

.box:hover {
  cursor: pointer;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.img-box {
  width: 60%;
  margin: 37px auto;
}

.img-box img {
  width: 100%;
}

.box-text {
  text-align: center;
}

.box-small-text {
  color: #797e81;
}

.intro-div {
  text-align: center;
}

.intro-header {
  color: #1d262d;
}

.intro-subtext {
  color: #7894a6;
}

.box-header-text {
  color: #0f0220;
}

.img-logo-pane {
  width: 100px
}

@media screen and (max-width: 500px) {
  .main-section {
    width: 100%;
  }

  .intro-header {
    font-size: 20px;
  }

  .boxes-con {
    width: 100%;
    margin: auto;
    max-width: 100%;
  }

  .boxes-con .box {
    width: 70%;
  }
}

@media screen and (min-width: 870px) {
  .inner-box {
    width: 70%;
    margin: auto;
  }
}

@media screen and (min-width: 1300px) {
  .intro-header {
    font-size: 30px;
  }

  .intro-subtext {
    font-size: 22px;
  }
}
</style>