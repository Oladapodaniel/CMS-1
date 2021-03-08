<template>
  <!-- navigation section -->
    <div class="row trowc mx-0 py-2 sticky-top">
      <div class="container">
        <div class="row p-2">
          <div
            class="col-md-4 col-sm-4 col-xs-4 d-flex justify-content-center align-self-center"
          >
            <img class="img" src="/ChurchplusLogo2-highres.png" alt="" />
          </div>
          <div class="col-2"></div>
          <div
            class="col-2 text-white d-flex justify-content-center align-self-center"
          >
            About the Church
          </div>
          <div
            class="col-1 text-white d-flex justify-content-center align-self-center"
          >
            FAQs
          </div>
          <div class="col-2 justify-content-center align-self-center">
            <a href="#"
              ><span class="d-md-inline text-white d-none">Your Account</span
              ><i class="fas fa-user text-white ml-2"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <!--end navigation section -->
    <!-- hero section -->
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-12 w-100">
          <img class="hero-img w-100" src="/form2img.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <!--end of hero section -->
</template>

<script>
export default{

}
</script>

<style scoped>
.trowc {
  background: #20080e;
}

.fone {
  font-size: 10px;
  font-weight: 300;
  color: #80878d;
}

.hfont {
  font-size: 12px;
  font-weight: 400;
  color: #020f1e;
}

.img {
  max-width: 40%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
}

.hero-img {
  width: 100%;
  min-height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -o-object-fit: cover;
  object-fit: cover;
}


