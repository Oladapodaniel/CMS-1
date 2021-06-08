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
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Church Facebook Page</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-3">
            <span class="">Page Id:</span>
          </div>
          <div class="col-md-9">
            <input type="text" class="rounded form-control px-l-5"  placeholder="Input Your Church Id">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn default-btn btnfb">Connect</button>
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
                  <i class="pi pifb pi-facebook d-flex justify-content-center ml-4 ml-md-0 "></i>
                </div>
                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-2 pl-md-0">
                    Connect your facebook account to Churchplus
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button class="btn default-btn btnfb" data-target="#exampleModal" data-toggle="modal">Connect</button>
            </div>
          </div>
        </div>
      </div>
<!--end facebook area  -->

      <!--twitter area  -->
      
<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Church Twitter Page</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-3">
            <span class="">Page Id:</span>
          </div>
          <div class="col-md-9">
            <input type="text" class="rounded form-control px-l-5"  placeholder="Input Your Church Id">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn default-btn btntwi">Connect</button>
      </div>
    </div>
  </div>
</div>

 <!--  End Modal -->
      <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow ">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i class="pi pitwi pi-twitter d-flex justify-content-center ml-4 ml-md-0 "></i>
                </div>
                <div class="col-10 d-flex align-items-center">
                  <p class="link-text mb-0 pl-2 pl-md-0">
                    Connect your twitter account to Churchplus
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2 mt-md-0 d-md-flex justify-content-end">
              <button class="btn default-btn btntwi" data-target="#exampleModal1" data-toggle="modal">Connect</button>
            </div>
          </div>
        </div>
      </div>
 <!--twitter area ended  -->

      <!--instergram area  -->
       <div class="row mx-2 mx-md-0 my-4">
        <div class="col-md-9 bordersocials py-3 box box-shadow ">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i class="fa piinsta fa-instagram d-flex justify-content-center ml-4 ml-md-0 "></i>
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
        <div class="col-md-9 bordersocials py-3 box box-shadow ">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                  <i class="pitwhatapp fab fa-whatsapp d-flex justify-content-center ml-4 ml-md-0"></i>
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
        <div class="col-md-9 bordersocials py-3 box box-shadow ">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-2">
                   <img src="../../../assets/mobileapp.svg" style="width:54px; height:54px" alt="Mobile app image">
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
export default {
  setup() {},
};
</script>

<style scoped>
/* general class */
.box {
  background: #fff;
  transition: all 0.4s ease-in-out;
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
  color: #0F529F;
}

.btnfb {
  background-color: #0F529F;
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
  background: rgb(233,2,99);
background: linear-gradient(90deg, rgba(233,2,99,1) 0%, rgba(253,6,4,1) 35%, rgba(255,93,0,1) 100%);
  color: #fff;
  border: none;
  outline: 0;
}

.piinsta {
color: rgb(233,2,99);
color: linear-gradient(90deg, rgba(233,2,99,1) 0%, rgba(253,6,4,1) 35%, rgba(255,93,0,1) 100%);
    font-size: 3rem;
}
/* end of instagram Area */

/* whatsapp Area */
.btntwhatapp {
  background-color: #2EB743;
  color: #fff;
  border: none;
  outline: 0;
}

.pitwhatapp {
  color: #2EB743;
    font-size: 3rem;
}
/* end of whatsapp Area */

/* mobile-app Area */
.btntmobileapp {
  background-color: #E87109;
  color: #fff;
  border: none;
  outline: 0;
}
/* end of mobile-app Area */
</style>