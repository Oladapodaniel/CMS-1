<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 py-3">
        <div class="row">
          <div class="col-md-12 pt-4 pb-3 d-md-flex justify-content-between">
            <h1 class="font-weight-bold main-title">Social and Mobile</h1>
            <span>
              <span class="date-range py-2 px-3 medium-border-radius"
                >6 Sep 20 - 13 Sep 20</span
              >
              <span class="date-range py-2 px-3 medium-border-radius ml-3"
                ><i class="pi pi-filter"></i
              ></span>
            </span>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8">
            <div class="row bordered my-4">
              <div class="col-md-12 py-3">
                <!-- User details -->
                <div class="row">
                  <div class="col-2 d-md-flex justify-content-center">
                    <div class="img-holder bg-secondary"></div>
                  </div>
                  <div class="col-10 pl-md-0">
                    <p
                      class="mb-0 font-weight-700 mb-n2 d-flex justify-content-between"
                    >
                      <span>Colossal Boss</span>
                      <span class="text-warning"
                        ><span class="mr-2">Pending Approval</span
                        ><i class="pi pi-info-circle c-pointer"></i
                      ></span>
                    </p>
                    <small class="mb-0">Just now, Lagos</small>
                  </div>
                </div>

                <!-- Post message -->
                <div class="row">
                  <div class="col-md-12 pt-3">
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Assumenda error et maiores ut delectus esse accusamus
                      quisquam. Cumque, corrupti obcaecati.
                    </p>
                  </div>
                </div>

                <!-- Post media -->
                <div class="row">
                  <div class="col-md-12">
                    <img
                      src="https://via.placeholder.com/150x70"
                      class="w-100"
                      alt=""
                    />
                  </div>
                </div>

                <!-- Post Actions -->
                <div class="row my-3">
                  <div class="col-md-12 d-flex">
                    <a
                      class="text-decoration-none c-pointer default-btn text-dark mr-3"
                    >
                      <span>Not Approved</span>
                      <span class="ml-3"><i class="pi pi-times"></i></span>
                    </a>
                    <a
                      class="text-decoration-none c-pointer default-btn text-dark mr-auto"
                    >
                      <span>Approved</span>
                      <span class="ml-3"><i class="pi pi-check"></i></span>
                    </a>
                    <a
                      class="text-decoration-none c-pointer post-action-link px-3 px-md-4 ml-auto date-range share-btn d-flex align-items-center medium-border-radius"
                    >
                      <span><i class="pi pi-share-alt mr-2"></i></span>
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 my-4" style="height: fit-content;">
              <div class="row">
                  <div class="col-md-11 mx-auto bordered">
                      <div class="row"> 
                        <div class="col-md-12">
                            <h5>Total pend posts</h5>
                            <h2>12345</h2>
                        </div>
                    </div>

                    <div class="row mt-4"> 
                        <div class="col-md-12">
                            Not Approved
                        </div>
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
export default {};
</script>

<style scoped>
.main-title {
  font-size: 2.2rem;
}

.img-holder {
  width: 48px;
  height: 48px;
  border: 1px solid;
  border-radius: 50%;
}

.textarea {
  outline: none;
  margin-top: 10px;
  background: transparent;
}

.post-add-ons {
  background: #f5f6f7;
  border-radius: 0 0 10px 10px;
}

/* .main-post {
        background: #fbfbfb;
    } */

.bordered {
  border: 0.20000000298023224px solid #e9eef0;
  border-radius: 15px;
  background: #fff;
}

.post-action-link {
  color: #4b5257cc;
}

.small-border-radius {
  border-radius: 10px;
}

.medium-border-radius {
  border-radius: 15px;
}

.comment-field {
  width: calc(100% - 60px);
}

.date-range {
  background: #f7f7f9;
}

.share-btn {
  background: #e6f1ff;
}
</style>