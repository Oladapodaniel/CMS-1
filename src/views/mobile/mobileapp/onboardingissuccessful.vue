<template>
  <div class="container-fluid wave containerheight">
    <div
      class="row d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <!-- column 1 -->
      <!-- <div class="col-12 d-flex justify-content-center align-items-center"> -->
      <div class="col-6 mt-n5">
        <div class="row">
          <div class="col-md-8 col-sm-12 mx-auto mt-n5">
            <h2 class="font-weight-bold">Welldone! Your app is ready</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 col-sm-12 mx-auto my-4">
            <h5 class="text-wrap">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus iste ad similique, aut libero consequuntur quisquam
              laboriosam quasi. Quos, sapiente.
            </h5>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2 ml-3"></div>
          <div class="col-md-5 offset-col-3 px-0 pt-3">
            <h4 class="ctatext">Start Sharing with members of your church</h4>
          </div>
          <div class="col-3">
            <button class="btn default-btn cta c-pointer">Start Now</button>
          </div>
        </div>
      </div>
      <!-- End of column 1 -->

      <!-- column 2 -->
      <div class="col-6 image">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="image">
            <img
              class="w-100"
              src="../../../assets/mobileonboarding/phone.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <!-- End of column 2 -->
      <!-- </div> -->
    </div>

    <!-- Gradient Area -->
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
    <!--End Gradient Area -->
  </div>

  <!-- copyright -->
  <div class="row mx-0 mt-5">
    <h5 class="col-md-4 offset-5  copyright">Powered By Churchplus</h5>
  </div>
  <!--end copyright -->
</template>

<style scoped>
.copyright {
  color: #020e1c9f;
  font: normal normal 800 18px/36px Nunito Sans;
}

.containerheight {
  height: 100vh;
}
.wave {
  position: relative;
  background: #f1faff;
  /* background: linear-gradient(222deg, #2e67ce 0%, #52309e 58%, #690c7f 100%); */
  height: 80vh;
}

.mainheader {
  font: normal normal 800 64px/64px Nunito Sans;
  font-family: Nunito Sans;
  color: #020e1c9f;
}

.subheader {
  font: normal normal normal 20px/36px Nunito Sans;
  font-family: Nunito Sans;
  font-size: 18px;
  color: #020e1c9f;
}

.ctatext {
  font: normal normal bold 14px/14px Nunito Sans;
  font-family: Nunito Sans;
  color: #020e1c9f;
}

.cta {
  color: #f1faff;
  background-color: #2e67ce;
  border: none;
  outline: none;
}

.image {
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
</style>


