<template>
    <div>
        <div class="container main">
         <div class="row">
             <div class="col">
        
                <div class="mt-4">
               
             <div class="row">
                <div class="col-md-4 text-md-right">
                    <h4 class="header4 text-md-right">First Name <span class="text-danger">*</span></h4>
                 </div>
                 <div class="col-md-7 px-0">
                     <input type="text" class="form-control" v-model="donor.firstName" required>
                     <!-- <InputText type="text" class="w-100 rounded" v-model="value" required /> -->
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
                     <!-- <InputText type="text" class="w-100 rounded" v-model="value" required /> -->
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
                     <!-- <InputText type="number" class="w-100 rounded" v-model="value" required /> -->
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
                     <!-- <InputText type="email" class="w-100 rounded" v-model="value" required /> -->
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
        </div>

    </div>
</template>

<script>
// import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import { reactive } from 'vue'
import { useRoute } from "vue-router";
import axios from "@/gateway/backendapi";
    export default {
        components:{ Button },

        setup(props, { emit }) {
            const route = useRoute();
            const donor = reactive({ });

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