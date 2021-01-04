!<template>
  <div>
    <div class="container">
      <div class="row mainHeada ">
        <div class="col-md-6 col-sm-10 mt-lg-5">
          <h1>Contact List</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <hr class="hr mb-md-5"/>
        </div>
      </div>
      
      <!-- Content of the Box -->
      <main class="">
        <div id="main" class="container-fluid col-lg-6 col-md-6 col-sm-12 mt-lg-5">
          <div class="row">
            <!-- Group Name row -->
            <div class="col-md-12">
              <div class="row d-md-flex align-items-center mt-2">
                <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12 gName">
                                <h3 class="ml-md-n3"> Group Name</h3>
                            </div>
                        </div>  

                        <!-- Context Area -->
                        <div class="row amazing d-flex flex-row justify-content-between mt-lg-3">
                            <div class="col-lg-7 col-sm-4 amazingG">
                                <h4 class="ml-md-n3 mt-lg-1">
                                    Amazing Group
                                </h4>
                            </div>
                            <div class="col-lg-5 col-sm-4 mr-lg-n5 amazingE">
                                <button class="btn btnIcons btn-secondary align-self-end">
                                    <i class="fas fa-pencil-alt icons"></i>
                                    Edit
                                </button>
                            </div>
                        </div>

                        <div class="row mt-lg-5 mb-lg-4"> 
                                <h3> Phone Numbers </h3>
                        </div>
                            <div class="row d-flex flex-row justify-content-between mdiv"> 
                                        <div class="col-md-7 form-group px-0">
                                          <input type="text" class="form-control">
                                        </div>
                                        <div class="col-md-5 mr-lg-n5 addIconarea">
                                          <button class="btn btnIcons align-self-end   btn-secondary">
                                            <i class="fa fa-plus-circle icons" aria-hidden="true"></i>
                                            Add
                                        </button>
                                    </div>

                            </div>

                            <div class="row">
                                <div class="col-md-7 col-sm-4 addContent spanArea1">
                                    <div class="row d-md-flex align-items-center">
                                      <div class="col-md-7  spanArea col-sm-4">
                                        <span>0123456789</span>
                                      </div>
                                      <div class="col-md-5 d-md-flex justify-content-end spanArea2">
                                        <button class="btn btn-default text-danger">Remove</button>
                                      </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Button Area -->
                            <div class="row mt-md-5">
                              <div class="col-md-7">
                                <div class="row d-md-flex align-items-center">
                                  <div class="col-md-6 basebtns">
                                      <button class="btn btnBase1 btnBase btn-primary">
                                      cancel
                                      </button>
                                  </div>
                                  <div class="col-md-6 basebtns">
                                    <button class="btn btnBase btn-primary">
                                    save
                                    </button>
                                  </div>
                          </div>
                        </div>
                    </div>

      <!-- Content Box -->
      <main id="main" class="mt-3">
        <div class="container-fluid px-0">
          <div class="row px-0">
            <div class="col-md-12 px-0">
              <div class="row d-md-flex align-items-center mt-2 mb-4">
                <div class="col-md-12">
                    <button class="create-btn font-weigth-bold border-0"><span class="mr-2" style="font-size: 22px">+</span> Create new group</button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="row header-row">
                    <div class="col-md-12">
                      <div class="row light-grey-bg py-2">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-2">
                          <span class="th">NAME</span>
                        </div>
                        <div class="col-md-5">
                          <span class="th">TOTAL PHONE NUMBER</span>
                        </div>
                        <div class="col-md-3">
                          <span class="th">DATE & TIME CREATED</span>
                        </div>
                        <div class="col-md-1">
                          <span class="th"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <hr class="hr mt-0" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">

                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>

                        <div class="col-md-2 d-md-flex justify-content-between">
                           <span class="hidden-header">SENDER: </span>
                          <span>message</span>
                        </div>

                        <div
                          class="col-md-5 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >MESSAGE:
                          </span>
                          <span>message</span>
                        </div>

                        <div
                          class="col-md-3 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >DATE CREATED
                          </span>
                          <span>message</span>
                        </div>

                        <div
                          class="col-md-1 col-ms-12"
                        >
                          <span><i class="fa fa-trash delete-icon"></i></span>
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
                        <div class="col-md-2 d-md-flex justify-content-between">
                           <span class="hidden-header">SENDER: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-5 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-3 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-1 col-ms-12"
                        >
                          <span><i class="fa fa-trash delete-icon"></i></span>
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
:root {
  --font-color: #02172e;
  --hrule-color: #708eb15c;
  --primary-color: #000000;
}

h1,
h3,
h4 {
  font-family: "Nunito Sans";
  color: var(--font-color);
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

h3 {
  font-size: 16px;
  font-weight: bold;
}

h4 {
  font-size: 16px;
}

.hr {
  color: #708eb15c;
}

.addContent {
  border: 1px solid #02172e30;
  border-radius: 5px;
  height: 40px;
}

.btn {
  display: inline-block;
}

.btnIcons {
  width: 110px;
  height: 35px;
  color: var(--primary-color);
  background-color: #dde2e6;
  border-radius: 40px;
  border: none;
}

.btnBase1 {
  color: var(--primary-color);
  background-color: transparent;
  /* border: 1px var(--primary-color) solid; */
  border: 1px solid #000000;
}

.btnBase {
  box-sizing: border-box;
  width: 108px;
  height: 44px;
  border-radius: 50px;
}

.icons {
  color: var(--primary-color);
  margin-right: 10px;
}

@media only screen and (max-width: 500px) {
  .mainHeada {
    margin-top: 1rem;
  }

  .gName {
    margin: 0 0 1rem -1rem;
  }

  h3 {
    font-size: 17px;
    font-weight: bold;
  }

  .amazing {
    margin: 0 0 2rem -2rem;
    display: flex;
    flex-direction: row;
  }

  .amazingG {
    width: 50%;
    margin-top: 0.5rem;
  }

  .amazingE {
    padding: 0;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }

  .spanArea1 {
    position: relative;
    margin-top: 1rem;
    display: flex;
  }

  .spanArea2 {
    position: absolute;
    top: 0;
    right: -13.5rem;
  }

  .spanArea {
    width: 40%;
    position: absolute;
  }

  .addIconarea {
    padding: 0;
  }

  .basebtns {
    margin: 2.5rem auto;
    width: 40%;
  }

  .search-div {
    width: fit-content;
    padding: 10px;
    background: #f5f8f9;
    border-radius: 200px;
  }

  .search-div input {
    background: none;
    border: none;
    outline: transparent;
  }

  .brief-message {
    color: #4762f0;
  }

  .compose-btn {
    background: #136acd;
    box-shadow: 0px 6px 12px #708eb170;
    border-radius: 22px;
    color: #fff;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-icon {
    font-size: 20px;
  }

  .units-div {
    border: 1px solid #dde2e6;
    border-radius: 20px;
    padding: 15px 0;
  }

  .hidden-header {
    display: none;
  }

  .th {
    font-size: 12px;
    font-weight: 700;
  }

  .inbox-count {
    background: rgba(19, 106, 205, 0.3);
    padding: 4px 8px;
    border-radius: 22px;
  }

  .menu-item-con {
    color: #002044;
    opacity: 0.5;
  }

  .menu-item-con.active {
    background: rgba(19, 106, 205, 0.05);
    border-left: 2px solid #136acd;
    opacity: 1;
  }

  .buy-btn {
    background: rgb(112, 142, 177, 0.33);
    border-radius: 22px;
  }

  .btn-text {
    opacity: 1;
    font-size: 11px;
    font-weight: 700;
  }

  .timestamp {
    font-size: 14px;
    color: #333333;
    opacity: 0.5;
  }

  .create-btn {
    background: #ebeff4;
    border-radius: 21px;
    padding: 4px 18px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    .hidden-header {
      display: inline-block;
      font-size: 12px;
    }

    .header-row {
      display: none;
    }

    #menu-items {
      flex-direction: row !important;
    }

    .search-div {
      width: 100%;
    }

    .units-div {
      width: 100%;
    }

    .units-container {
      margin-left: 0;
      margin: auto;
    }
  }

  @media screen and (max-width: 1000px) {
    .msg-n-time {
      flex-direction: column;
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1000px) {
    #menu-items {
      min-width: 100% !important;
    }
  }
}
</style>