<template>
    <div class="container-fluid  container-top  ">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8  ">
                    <div class="heading-text"> Add branch</div>
                    <div class="row my-2 pt-4">
                        <div class="col-md-10 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Branch name</label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="churchName" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <!-- <div class="row my-2 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Email </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="Email" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-2 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Phone number </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="phoneNumber" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>  -->
                    <div class="row my-1 pt-4">
                        <div class="col-md-10  offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Address </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="Address" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-10  offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Level </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <Dropdown  v-model="selectedLevel" :options="level" optionLabel="name" placeholder="Select level" class="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="heading-text"> Pastor</div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-10  offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Pastor name </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="pastorName" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-10  offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Pastor email </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="pastorEmail" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-10  offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Pastor phone </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="pastorPhone" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>
                <div class="col-md-4">
                        <div class="image-div other">
                            <div class="grey-bg">
                        <div>
                        <div class="person-img">
                            <img
                            v-if="!url"
                            src="../../assets/people/phone-import.svg"
                            alt="Uploaded Image"
                            />
                            <img
                            v-else
                            :src="url"
                            alt="Uploaded Image"
                            style="width: 110px; height: 110px; border-radius: 50%; object-fit: cover"
                            />
                        </div>
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
                        <!-- <div>
                        <button
                            class="upload-btn outline-none"
                            @click.prevent="uploadImage"
                        >
                            Upload
                        </button>
                        </div> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="row my-1 pt-4"> -->
                        <div class="col-md-8  d-flex justify-content-center offset-md-2">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-sm-6  mt-4">
                                    <button class="default-btn" data-dismiss="modal">Cancel</button>
                                </div>
                                <div class="col-md-6 col-sm-6  mt-4">
                                    <button class="default-btn primary-bg border-0 text-white" data-dismiss="modal" @click="addBranch">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    <!-- </div>  -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
export default {
    components: {
        Dropdown
    },
    setup() {
        const churchName = ref('');
        const Address = ref('');
        const selectedLevel = ref('');
        const pastorName = ref('');
        const pastorEmail = ref('');
        const pastorPhone = ref('');

         const level = ref([]);

        const url = ref("");
        const image = ref("");
        const memberToEdit = ref("");
        const imageSelected = (e) => {
            image.value = e.target.files[0];
            url.value = URL.createObjectURL(image.value);
        };
        const getAllBranchList = async () => {
                    try {
                        axios
                        .get("/api/Branching")
                        .then((res) => {
                            // tenantCurrency.value = res.data;
                            // level.value = res.data.returnObject;
                            console.log(res.data,'Fejiro');
                        })
                        .catch((err) => console.log(err));
                        // donationSummary.value = data;
                    } catch (err) {
                        console.log(err);
                    }
                    };
                getAllBranchList();

        const addBranch = async () => {
            const formData = new FormData();
            const HierarchyID = selectedLevel.value.id
            const selectedLevelID = selectedLevel.value.tenantID
            console.log(selectedLevelID,'allid')
             formData.append( "ChurchName", churchName.value ? churchName.value : "");  
             formData.append( "Address", Address.value ? Address.value : "");
             formData.append( "ParentID", selectedLevelID ? selectedLevelID : "");
             formData.append( "HierarchyID", HierarchyID ? HierarchyID : "");
             formData.append( "PastorName", pastorName.value ? pastorName.value : "");
             formData.append( "PastorEmail", pastorEmail.value ? pastorEmail.value : ""); 
             formData.append( "PastorPhone", pastorPhone.value ? pastorPhone.value : "");
             formData.append( "Image", image.value ? image.value : "");
            try {
        //   loading.value = true;
          let response = await axios.post('/api/Branching', formData );
          console.log(response)
        //   disableClick.value = false;


        //   if (response.status === 200 || response.status === 201) {
        //     loading.value = false;
        //       swal(
        //     "Registration Successful!",
        //     "Your memberships detail has been added successfully!",
        //     "success"
        //   );
        //   } 
        } catch (err) {
            console.log(err)
            }
        }

        return {
          level,
          addBranch,
          churchName,
          Address,
          selectedLevel, 
          pastorName,
          pastorEmail,
          pastorPhone,
          imageSelected,
          url,
          image,
          memberToEdit
        }
    },
}
</script>

<style scoped>
       .heading-text {
        font: normal normal 800 1.5rem Nunito sans;
}
</style>