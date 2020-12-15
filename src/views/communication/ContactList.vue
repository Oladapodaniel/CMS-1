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
--font-color: #02172E;
--hrule-color: #708EB15C;
--primary-color:  #000000;
        }

h1, h3, h4 {
  font-family: 'Nunito Sans';
  color: var(--font-color);
}

h1{
  font-size: 24px;
  font-weight: bold;
}

h3{
 font-size: 16px;
 font-weight: bold;
}

h4{
  font-size: 16px;
}

.hr{
  color: #708EB15C;
}

.addContent {
  border: 1px solid #02172e30;
  border-radius: 5px;
  height: 40px;
}

.btn{
  display:inline-block;
}

.btnIcons{
width:110px;
height: 35px;
color: var(--primary-color);
background-color: #DDE2E6;
border-radius: 40px;
border: none;
}

.btnBase1{
  color: var(--primary-color);
  background-color: transparent;
  /* border: 1px var(--primary-color) solid; */
  border: 1px solid #000000;
}

.btnBase{
  box-sizing: border-box;
  width: 108px;
  height: 44px;
  border-radius: 50px;
}

.icons{
  color: var(--primary-color);
  margin-right: 10px;
}


 @media only screen and (max-width: 500px) {
        .mainHeada {
        margin-top: 1rem;
      }

      .gName{
        margin: 0 0 1rem -1rem;
      }

      h3{
        font-size: 17px;
        font-weight: bold;
      }

      .amazing{
        margin: 0 0 2rem -2rem;
        display: flex;
        flex-direction: row;
      }

      .amazingG{
        width:50%;
        margin-top: 0.5rem; 
      }

      .amazingE{
          padding: 0;
          width:50%;
          display: flex;
          justify-content: flex-end;
      }

      .spanArea1{
        position: relative;
        margin-top: 1rem;
        display: flex;
      }

      .spanArea2{
        position:absolute;
        top:0;
        right: -13.5rem;
      }

      .spanArea{
        width:40%;
        position: absolute;
      }

      .addIconarea{
        padding: 0;
      }

      .basebtns{
        margin: 2.5rem auto;
        width: 40%;
      }

}
</style>