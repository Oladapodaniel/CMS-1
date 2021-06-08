<template>
  <form @submit.prevent="churchProfile">
    <div class="container my-content">
      <div class="row page-header">
        <div class="col-12">
          <h3 class="header-text font-weight-bold">Church Profile</h3>
        </div>
      </div>

      <div class="row form-container">
        <div class="col-10 offset-1 offset-sm-0 col-sm-12">
          <span class="sub-header">Church Details </span>
          <div class="row first-row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="firstname" class="small-text lb lb font-weight-600">Name</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text" placeholder="name()"
                class="form-control ml-0 input" 
                id="firstname"
                v-model="churchData.churchName"
                required
              />
            </div>
            <div class="col-md-4">
              <div class="grey-bg light-grey-bg mt-0 py-2">
                <div class="person-img">
                  <img v-if="url" :src="url" alt="Uploaded Image" />
                  <img
                    v-else-if="!churchData.logoUrl"
                    src="../../assets/people/phone-import.svg"
                    alt="Uploaded Image"
                  />
                  <img v-else :src="churchData.logoUrl" alt="Uploaded Image" />
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
                        @change="imageSelected"
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

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600" for="">Aka/Parish</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text" 
              placeholder="Aka/Parish"
              v-model="churchData.aka"
               class="form-control ml-0 input" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600">Address</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text" placeholder="Address" v-model="churchData.address" class="form-control ml-0 input" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600" for="">Phone number</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text"
               placeholder="Phone Number"
               v-model="churchData.phoneNumber"
                class="form-control ml-0 input" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600" for="">Email</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text"
               placeholder="Email"
                class="form-control ml-0 input"
                :disabled ="validate ? disabled : ''"
                v-model="currentUser.userEmail" 
                />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600">Country</label>
            </div>
            <!-- <div>
              <Dropdown v-model="selectCountry"
               :options="countries" 
               optionLabel="name" 
               :filter="true"
               :filterMatchMode="'startsWith'" 
               placeholder="Select a Country" 
               />
            </div> -->
            <div class="col-12 col-md-5 form-group">
              <Drop v-model="selectCountry" 
              :options="countries"
               filterMatchMode="startsWith" 
                optionLabel="name" 
                :filter="true" 
                placeholder="Select a Country" 
                style="width:100%"
                :showClear="true"/>

            </div>
        
            <!-- <div class="col-12 col-md-5 form-group">
              <Dropdown
                :options="countries"
                optionLabel="name"
                placeholder="Select Country"
                style="width: 100%"
                v-model="selectCountry"
              />
            </div> -->
            <div class="col-md-4"></div>
          </div>
          <div class="row select-elem " v-if="false">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600">Time zone</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                :fd="['kkj']"
                :options="[1, 2, 3, 4, 5]"
                placeholder="Select time zone"
                style="width: 100%"
                 v-model="selectTime"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600" for="">Website URL</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text" placeholder="Website URL"
                class="form-control ml-0 input"
                v-model="churchData.websiteUrl"
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
              <div class="col-md-12 px-">
                  <hr class="hr">
              </div>
          </div>

          <!-- Event attended -->
          <div class="row">
            <div class="col-sm-12 mt-2">
              <span class="sub-header">Pastor's Detail</span>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600" for="">Name</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                 placeholder="Name"
                 v-model="churchData.headPastorName"
                class="form-control ml-0 input"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600" for="">Email</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text" placeholder="Email"
                class="form-control ml-0 input"
                v-model="churchData.headPastorEmail"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for=""></label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <button class="primary-btn text-white px-4">Save</button>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <Toast />
</template>

<script>
import axios from "@/gateway/backendapi";
import store from "@/store/store";
import Dropdown from "primevue/dropdown";
import Drop from "primevue/dropdown";
import { ref} from 'vue';
import { useToast } from "primevue/usetoast";
export default {
  components: { Dropdown, Drop },
  setup() {
    const toast = useToast()
    const churchData =ref({});
    let filterFields= ref([]);
    let url = ref("");
    let a= ref("");
    let b= ref("b")
    let selectCountry= ref("");
    let selectTime= ref("");
    let image;
    const imageSelected = (e) => {
      image = e.target.files[0];
      url.value = URL.createObjectURL(image);
    };

    const uploadImage = () => { };
    let countries = ref([]);
    const currentUser = ref({});
    //Get AllCountry
     const getCountries= async()=> {
      try {
        const { data } = await axios.get("/api/GetAllCountries");
        data.sort((a,b)=> a.data - b.data);
        console.log(data);
        countries.value = data;
        getChurchProfile()
        
      } catch (error) {
        console.log(error);
      }
    }
    getCountries()
    //Get AllChurchProfile
    const getChurchProfile= async()=>{
      try{
        const {data} = await axios.get("/mobile/v1/Profile/GetChurchProfile");
        churchData.value = data.returnObject;
        if (countries.value.length > 0) {
            selectCountry.value = countries.value.find(i => {
            return i.id === churchData.value.countryID
          })
          console.log(countries.value);
        }
        console.log(selectCountry.value)
        console.log(churchData);
        

      }catch(error){
        console.log(error)
      }
    }
     
    const uploadData= ref({ });
    const display= ref(false)
    //formData
    // let formData = new formData =()=>{
    //   formData.append("ChurchName", formData.ChurchName.value);
    //   formData.append("AKA", formData.AKA.value);
    // }
    const churchProfile = ()=>{
      let formData = new FormData()
      formData.append("ChurchName", churchData.value.churchName );
      formData.append("AKA", churchData.value.aka );      
      formData.append("Address", churchData.value.address );      
      formData.append("PhoneNumber", churchData.value.phoneNumber );      
      formData.append("CountryID", selectCountry.value.id );      
      formData.append("TimeZone", selectTime.value );      
      formData.append("WebsiteUrl", churchData.value.websiteUrl );      
      formData.append("HeadPastorName", churchData.value.headPastorName );      
      formData.append("HeadPastorEmail", churchData.value.headPastorEmail );      
      formData.append("HeadPastorPhone", churchData.value.headPastorPhone );      
      formData.append("ChurchLogo", image ); 
      axios.put('/api/Settings/ChurchProfileSettings',formData)
      .then(res =>{
        console.log(res);
        toast.add({
              severity: "success",
              summary: "Successful",
              detail: `${res.data.response}`,
              life: 4000,
            });

      }).catch(error =>{
        console.log(error);

      })     
      console.log('log')

    }

    const getCurrentUser = () => {
      if(!store.getters.currentUser){
            axios
            .get(`/api/Membership/GetCurrentSignedInUser`)
            .then((response) =>{
                currentUser.value = response.data;
            console.log(response.data)
        
        })
            .catch((error)=> console.log(error))
            
        } else {
                currentUser.value = store.getters.currentUser
        }
    }
    getCurrentUser()

    return {
      churchData,
      url,
      imageSelected,
      uploadImage,
      currentUser,
      countries,
      getCountries,
      getChurchProfile,
      selectCountry,
      selectTime,
      // uploadChurchDetail,
      uploadData,
      display,
      churchProfile,
      a,
      b,
      filterFields
    }
  },
  
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #02172e;
}

.page-header {
  margin-bottom: 21px;
  margin-top: 15px;
}

.page-header h2 {
  color: #02172e;
  font-weight: 800;
  font-size: 30px;
}

.sub-header {
  color: #002044;
  font-size: 20px;
  font-weight: 700;
}

.form-container {
  margin-bottom: 44px;
}

.input {
  width: 100%;
  height: 40px;
  border: 1px solid #b9c5cf;
}

.first-row {
  margin-top: 10px;
}

.day-inp {
  border-radius: 8px 0 0 8px;
}

.month-inp {
  border-radius: 0;
}

.year-inp {
  border-radius: 0 8px 8px 0;
}

#welcomeSms,
#welcomeEmail {
  margin-top: 6px;
  margin-left: 10px;
}

.check-box {
  width: 1.2em;
  height: 1em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #b9c5cf;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.action-btn {
  background: #fff;
  border: 1px solid #002044;
  border-radius: 111px;
  width: 121px;
  height: 49px;
  outline: transparent;
}

.save-btn {
  color: #fff;
  background: #136acd;
  border-radius: 111px;
  width: 121px;
  height: 49px;
  outline: transparent;
  /* margin-left: 40px; */
}

.required {
  color: #ef0535;
}

.light-grey-bg {
  border-radius: 10px;
}


@media screen and (max-width: 767px) {
  .select-elem {
    height: auto !important;
  }

  .select-div {
    padding: 0.8rem !important;
  }

  .lb {
    display: none !important;
  }

  .first-row {
    flex-flow: column-reverse;
  }

}

.check-box:checked {
  background-color: #0f529f;
}

@media screen and (min-width: 768px) {
  .light-grey-bg {
    position: absolute;
    width: 100%;
    z-index: 900;
  }

  .input::placeholder {
    color: white !important;
  }
}

.check-box:checked {
  background-color: #0f529f;
}

@media screen and (max-width: 770px) {
  .follow-up-header {
    flex-direction: column;
    justify-content: flex-start;
  }

  .followup-hr-span,
  .hr-span {
    width: 100% !important;
  }

  .sub-header {
    width: 100%;
  }
}

@media screen and (min-width: 770px) and (max-width: 1190px) {
  .followup-hr-span {
    width: 60% !important;
  }
}
</style>