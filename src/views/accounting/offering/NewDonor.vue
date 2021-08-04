<template>
    <div class="container main">
        <!-- <div class="container main">
         <div class="row">
             <div class="col">
        
                <div class="mt-4">
               
             <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right">First Name <span class="text-danger">*</span></h4>
                 </div>
                 <div class="col-md-7 px-0">
                     <input type="text" class="form-control" v-model="donor.firstName" required>
                 </div>
            </div> 
            </div> 
            <div class="mt-4">
             <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right">Last Name</h4>
                 </div>
                 <div class="col-md-7 px-0">
                     <input type="text" class="form-control" v-model="donor.lastName">
                     
                 </div>
            </div> 
            </div>
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right">Phone number</h4>
                 </div>
                 <div class="col-md-7 px-0">
                     <input type="text" class="form-control" v-model="donor.mobilePhone">
                 </div>
            </div> 
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right">Email</h4>
                 </div>
                 <div class="col-md-7 px-0">
                     <input type="text" class="form-control"  v-model="donor.email">
                 </div>
            </div>
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right"></h4>
                 </div>
                 <div class="col-md-7 px-0 d-flex justify-content-center">
                     <Button label="Cancel" class="p-button-outlined p-button-secondary mr-3 px-5 p-button-rounded" @click="onCancel" />
                     <Button label="Save"  class="p-button-primary p-button-rounded px-5 mr-3 max" @click="saveDonor" />
                 </div>
            </div>
             </div>
             </div> 
        </div> -->
        <!-- import word -->
        <div class="row">
           <div class="col-md-12 px-0">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row my-3">
                                <div class="col-md-4 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Firstname<span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" v-model="donor.firstName" placeholder="First Name" class="form-control">
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-4 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Last Name</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" v-model="donor.lastName" placeholder="Last Name" class="form-control">
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-4 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Phone Number</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" v-model="donor.mobilePhone" placeholder="Phone Number" class="form-control">
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-4 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Email</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" v-model="donor.email" placeholder="Email" class="form-control">
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-4 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Gender</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" v-model="donor.gender" placeholder="Gender" class="form-control">
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-md-4 text-md-right pr-md-0">
                                    <label for="" class="font-weight-700">Date of birth</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="date" v-model="donor.dateOfBirth" class="form-control">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <ImageForm :editPicture="pictureUrl" @image="setImage" :resetImage="resetImage" :memberDetails="memberDetails"/>
                        </div>
                    </div>
                <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right"></h4>
                 </div>
                 <div class="col-md-7 px-0 d-flex justify-content-center">
                     <Button label="Cancel" class="p-button-outlined p-button-secondary mr-3 px-5 p-button-rounded" @click="onCancel" />
                     <Button label="Save"  class="p-button-primary p-button-rounded px-5 mr-3 max" @click="saveDonor" />
                 </div>
            </div>
           </div>
       </div>
        <!-- import word -->

    </div>
    
</template>

<script>
// import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import { reactive, ref } from 'vue'
import { useRoute } from "vue-router";
import axios from "@/gateway/backendapi";
import ImageForm from '../../event/childcheckin/components/ImageForm'
    export default {
        components:{ Button, ImageForm },

        setup(props, { emit }) {
            const route = useRoute();
            const donor = reactive({ });
            const image = ref('');
    // let image = ref("");
    // const imageSelected = (e) => {
    //   image.value = e.target.files[0];
    //   url.value = URL.createObjectURL(image.value);
    //   memberToEdit.value.pictureUrl = URL.createObjectURL(image.value);
    // };



            const setImage = (payload) =>{
                     image.value = payload
                     console.log(image.value, "weldone");
                 }

            const saveDonor = async () => {
                emit("cancel");
                console.log(route.fullPath)
                if (route.fullPath.includes("/tenant/addfamily")) {
                    emit("show-ward-modal", true)
                    console.log('did it emit')

                }
                 

                const formData = new FormData()
                formData.append("firstName", donor.firstName)
                formData.append("lastName", donor.lastName)
                formData.append("mobilePhone", donor.mobilePhone)
                formData.append("email", donor.email)
                formData.append("gender", donor.gender)
                formData.append("dateOfBirth", donor.dateOfBirth)
                formData.append("picture", image.value )
                try {
                     return new Promise((resolve, reject) => {
                        axios.post("/api/People/createPerson", formData)
                            .then(res => {
                                console.log(res)
                                emit('person-id', {personId: res.data.personId, personFirstName: donor.firstName})
                                resolve(res.data);
                                
                            })
                            .catch(error => {
                                console.log(error)
                                /*eslint no-undef: "warn"*/
                                NProgress.done();
                                if (error.response) {
                                    reject(error.response);
                                } else {
                                    reject(error);
                                }
                            })
                    })
    
                } catch (error) {
                    console.log(error);
                }
            }

            const onCancel = () => emit("cancel")

            return {
                donor,
                saveDonor,
                onCancel,
                setImage,
                image,
            }
        }
    }
</script>

<style scoped>
/* .main{
    margin-top: 300px;
    margin-bottom: 300px;
} */
.p-button-outlined{
    background-color:#fff9f9!Important;
    color: black!important;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-15)/20px var(--unnamed-font-family-nunito-sans)!important;
    letter-spacing: var(--unnamed-character-spacing-0)!important;
    font: normal normal bold 15px/20px Nunito Sans!important;
    letter-spacing: 0px!important;
   
}
.max{
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-15)/20px var(--unnamed-font-family-nunito-sans)!important;
letter-spacing: var(--unnamed-character-spacing-0)!important;
font: normal normal bold 15px/20px Nunito Sans!important;
letter-spacing: 0px!important;
color: #FFFFFF!important;

}
.header4{
font: var(--unnamed-font-style-normal) normal normal 16px/22px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 16px/22px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;

}

</style>