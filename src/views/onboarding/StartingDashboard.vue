<template>
  <div>
      <div class="logo-con">
        <a href="" class="logo-link"><img src="../../assets/churchplus-logo.png" alt="Churchplus Logo"></a>
      </div>
    <div class="main-con">
      <!-- <div class="nav-con">
        <div>
          <ul class="navn-items">
            <li class="navn-item">Dashboard</li>
            <li class="navn-item">Communication</li>
            <li class="navn-item">Members</li>
            <li class="navn-item">First Timers</li>
            <li class="navn-item">Events</li>
            <li class="navn-item">Finances</li>
            <li class="navn-item">Reports</li>
          </ul>
        </div>
      </div> -->
      <div class="main-section">
        <div class="intro-div">
          <h1 class="intro-header">Welcome Grace and Power Ministry</h1>
          <p class="intro-subtext">Where do you want to start ?</p>
        </div>
        <div class="boxes-con">
          <div class="box">
            <div class="inner-box">
              <div class="img-box">
                <img
                  src="../../assets/add-member-big.svg"
                  alt="Add Member Icon"
                />
              </div>
              <div class="box-text">
                <div class="box-header-text">
                  <h4>Add members</h4>
                </div>
                <div class="box-small-text">
                  <p>Stay compliant by keeping accurate records</p>
                </div>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="inner-box">
              <div class="img-box">
                <img
                  src="../../assets/sms-email-big.svg"
                  alt="Add Member Icon"
                />
              </div>
              <div class="box-text">
                <div class="box-header-text">
                  <h4>Send SMS</h4>
                </div>
                <div class="box-small-text">
                  <p>Stay compliant by keeping accurate records</p>
                </div>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="inner-box">
                <div class="img-box">
                <img
                  src="../../assets/sms-email-big.svg"
                  alt="Add Member Icon"
                />
              </div>
              <div class="box-text">
                <div class="box-header-text">
                  <h4>Add first timers</h4>
                </div>
                <div class="box-small-text">
                  <p>Stay compliant by keeping accurate records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.getters.userData, "data");
  },
};
</script>

<style scoped>
.logo-con {
  display: flex;
  margin-top: 24px;
}

.logo-link {
  width: 100%;
  text-align: center;
}

.main-con {
  display: flex;
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
}

.box:hover {
  cursor: pointer;
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