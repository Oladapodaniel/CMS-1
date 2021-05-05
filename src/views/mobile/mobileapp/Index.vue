<template>
  <div class="container-fluid wave">
    <div class="row d-flex align-items-center hero-section">
      <div class="col-6">
        <div class="row mainheader">
          <h2>
            All in one app to <br />
            effectively manage <br />
            your church
          </h2>
        </div>
        <div class="row subheader">
          <p>
            Lorem ipsum dolor sit amet consectetur <br>
             adipisicing elit. Inventore inventore, <br>
            quo Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div class="row ctatext">
          <h4>Get started for FREE!</h4>
        </div>
        <div class="row">
          <div>
            <button>Start Now</button>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="row">
          <div class="col-8">
            <div>
              <img src="" alt="" />
            </div>

            <div class="image-column">
              <img class="phone1" src="../../../assets/phone1.png" alt="" />
              <img class="phone2 " src="../../../assets/phone2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wave{
  position: relative;
background:linear-gradient(222deg, #2E67CE 0%, #52309E 58%,
 #690C7F 100%) ;
}

.phone1{
  width: 322px;
  height: 658px;
  z-index: 1;
  position: relative;
}

.phone2{
  width:322px;
  height:659px;
  z-index: 1;
  /* z-index: -1; */
  position: absolute;
}

.mainheader{
  font: normal normal 800 64px/64px Nunito Sans;
  font-family:Nunito Sans;
  color: #fff;
}

.subheader{
  font: normal normal normal 20px/36px Nunito Sans;
  font-family:Nunito Sans;
  font-size: 18px;
  color: #fff;
}

.ctatext{
  font: normal normal bold 34px/27px Nunito Sans;
  font-family:Nunito Sans;
  color: #fff;
}
/* transparent linear-gradient(222deg, #2E67CE 0%, #52309E 58%,
 #690C7F 100%) 0% 0% no-repeat padding-box;
opacity: 1; */

</style>


