<template>
    <div>
        <div class="profile">
            <div class="row justify-content-between">
                <div class=" col-12 col-md-1">

                </div>
                <div class=" col-12 col-md-2 mt-md-5 mt-0 ml-md-0 ml-5">
                    <h1 class="header1">Profile</h1>

                </div>
                <div class="col-12 col-md-5 mt-md-5 mt-0">
                    <div class="row mt-5">
                        <div class="col-12 col-md-3 ml-md-0 ml-5 text-md-right">
                        <label class="small-text lb font-weight-600">Role</label>
                        </div>
                        <div class="col-12 col-md-8 ml-md-0 ml-5 form-group">
                        <Dropdown 
                        v-model="selectedRole" 
                        :options="cities" 
                        optionLabel="name"
                        style="width: 100%" 
                        placeholder="Select a Role" />
                        </div>
                   </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-md-right ml-md-0 ml-5 pr-0">
                        <label class="small-text lb font-weight-600" for="">Surname</label>
                        </div>
                        <div class="col-12 col-md-8 form-group ml-md-0 ml-5">
                        <input type="text" 
                        placeholder="Surname"
                        v-model="m"
                        class="form-control ml-0" />
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-12 col-md-3 text-md-right pr-0 ml-md-0 ml-5">
                        <label class="small-text lb font-weight-600" for="">Firstname</label>
                        </div>
                        <div class="col-12 col-md-8 form-group ml-md-0 ml-5">
                        <input type="text" 
                        placeholder="Surname"
                        v-model="m"
                        class="form-control ml-0" />
                        </div>
                    </div>
                    <div class="row">
                            <div class="col-12 col-md-3 text-md-right pr-0 ml-md-0 ml-5">
                            <label class="small-text lb font-weight-600" for="">Phone number</label>
                            </div>
                            <div class="col-12 col-md-8 form-group ml-md-0 ml-5">
                            <input type="text"
                            placeholder="Phone Number"
                            v-model="v"
                                class="form-control ml-0" />
                            </div>
                    </div>
                     <div class="row">
                            <div class="col-12 col-md-3 text-md-right pr-0 ml-md-0 ml-5">
                            <label class="small-text lb font-weight-600" for="">Email</label>
                            </div>
                            <div class="col-12 col-md-8 form-group ml-md-0 ml-5">
                            <input type="text"
                            placeholder="Email"
                                class="form-control ml-0"
                                v-model="n" 
                                />
                            </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-3 text-md-right pr-0 ml-md-0 ml-5">
                        <label class="small-text lb font-weight-600" for="">Address</label>
                        </div>
                        <div class="col-12 col-md-8 form-group ml-md-0 ml-5">
                        <input type="text" 
                        placeholder="Address"
                        v-model="m"
                        class="form-control ml-0" />
                        </div>
                    </div>

                </div>
                <div class=" col-12 col-md-4 mt-5 imagefolder">
                      <div class="grey-bg light-grey-bg mt-5 py-2 image1">
                        <div class="person-img mt-3">
                          <!-- <img v-if="url" :src="url" alt="Uploaded Image" />
                          <img
                            src="../../assets/people/phone-import.svg"
                            alt="Uploaded Image"
                          /> -->
                          <img alt="" />
                        </div>
                        <div>
                          <div class="cs-input">
                            <label for="imgUpload" class="choose-file">
                              Choose file
                              <input
                                type="file"
                                class="input file-input"
                                placeholder=""
                                id="imgUpload"
                              />
                            </label>
                          </div>
                        </div>
                        <div>
                          <button class="upload-btn cursor-pointer outline-none" @click.prevent="uploadImage">
                            Upload
                          </button>
                        </div>
                      </div>

                </div>
            </div>
            <div class="row mt-5 mb-4">
                <div class="col-12 col-md-5">

                </div>
                <div class="col-12 col-md-2 text-center text-md-right mt-5">
                    <button class="primary-btn text-white px-5">Save</button>
                </div>
                <div class="col-12 col-md-5">

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
    export default {
        components: {Dropdown},
        data(){
          return{
          selectedRole: null,
		cities: [
			{name: 'Brother', code: 'NY'},
			{name: 'Sister', code: 'RM'},
			{name: 'Inlaw', code: 'LDN'},
			{name: 'Cousin', code: 'IST'},
			{name: 'Friends', code: 'PRS'}
		]
    }

        }
        
    }
</script>

<style scoped>
.header1{
font: normal normal 800 34px/46px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.image1{
border-radius: 22px;
width: 267px;
height: 336px;
}
.person-img{
width: 170px;
height: 174px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 20px;
opacity: 1;
}

</style>