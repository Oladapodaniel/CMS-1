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
            <button class="btn default-btn">Start Now</button>
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
<div class="custom-shape-divider-bottom-1620296099">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
  </div>
</template>

<style scoped>
.wave{
  position: relative;
background:linear-gradient(222deg, #2E67CE 0%, #52309E 58%,
 #690C7F 100%) ;
 height: 80vh;
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


/* transparent linear-gradient(222deg, #2E67CE 0%, #52309E 58%,
 #690C7F 100%) 0% 0% no-repeat padding-box;
opacity: 1; */

</style>


