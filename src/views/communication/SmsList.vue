!<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>SMS</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <hr class="hr" />
        </div>
      </div>

      <!-- Content Box -->
      <main id="main">
        <div class="container-fluid">
          <div class="row">
            <!-- Side mennu -->
            <div class="col-md-3" id="side-menu">
              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-primary">Compose new SMS</button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 d-flex flex-column align-items-start">
                  <a class="btn btn-default">
                    <i class="fa fa-facebook mr-3"></i>
                    <span>Inbox</span>
                  </a>
                  <a class="btn btn-default">
                    <i class="fa fa-facebook mr-3"></i>
                    <span>Sent</span>
                  </a>
                  <a class="btn btn-default">
                    <i class="fa fa-facebook mr-3"></i>
                    <span>Draft</span>
                  </a>
                  <a class="btn btn-default">
                    <i class="fa fa-facebook mr-3"></i>
                    <span>Contact List</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Bigger row -->
            <div class="col-md-9">
              <div class="row d-md-flex align-items-center mt-2">
                <div class="col-md-8">
                  <div class="search-div">
                    <span><i class="fa fa-search mr-1"></i></span>
                    <input type="text" placeholder="Search here..." />
                    <span class="mx-2"> | </span>
                    <span class="mx-2">Sort By</span>
                    <span class="font-weight-bold"> Newest</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-5">
                      <h4>302</h4>
                      <p>SMS Units</p>
                    </div>
                    <div class="col-md-7">
                      <button class="btn btn-secondary">BUY UNITS</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-12 px-0">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-5">
                          <span>MESSAGE</span>
                        </div>
                        <div class="col-md-2">
                          <span>SENT BY</span>
                        </div>
                        <div class="col-md-2">
                          <span>UNITS</span>
                        </div>
                        <div class="col-md-2">
                          <span>DELIVERY REPORT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <hr class="hr" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-5 d-md-flex flex-column">
                          <span class="d-flex justify-content-between">
                            <span class="font-weight-bold">message</span>
                            <span>Today | 08:45 PM</span>
                          </span>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</span
                          >
                        </div>
                        <div class="col-md-2">
                          <span>message</span>
                        </div>
                        <div class="col-md-2">
                          <span>message</span>
                        </div>
                        <div class="col-md-2">
                          <span>message</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <hr class="hr" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-5 d-md-flex flex-column">
                          <span class="d-flex justify-content-between">
                            <span class="font-weight-bold">message</span>
                            <span>Today | 08:45 PM</span>
                          </span>
                          <span
                            >Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</span
                          >
                        </div>
                        <div class="col-md-2">
                          <span>message</span>
                        </div>
                        <div class="col-md-2">
                          <span>message</span>
                        </div>
                        <div class="col-md-2">
                          <span>message</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <hr class="hr" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main {
  border: 1px solid #02172e30;
  border-radius: 30px;
  height: 400px;
}

#side-menu {
  border-right: 1px solid #02172e30;
}

.search-div {
    width: fit-content;
    padding: 10px;
    background: #F5F8F9;
    border-radius: 200px;
}

.search-div input {
    background: none;
    border: none;
    outline: transparent;
}
</style>