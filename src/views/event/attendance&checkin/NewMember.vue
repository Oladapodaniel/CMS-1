<template>
    <div>
        <div class="container main">
         <div class="row w-50 m-auto">
             <div class="col">
                <div class="row">
                        <div class="col md-4 text-md-right px-0">
                            <h4>Surname</h4>
                        </div>
                        <div class="col-md-8">
                            <InputText type="text" class="w-100 rounded" v-model="value" required />
                        </div>
                </div> 
                <div class="mt-4">
                </div> 
             <div class="row">
                <div class="col md-4 text-md-right px-0">
                    <h4>Firstname</h4>
                 </div>
                 <div class="col-md-8">
                     <InputText type="text" class="w-100 rounded" v-model="value" required />
                 </div>
            </div> 
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col md-4 text-md-right px-0">
                    <h4>Phone number</h4>
                 </div>
                 <div class="col-md-8">
                     <InputText type="number" class="w-100 rounded" v-model="value" required />
                 </div>
            </div> 
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col md-4 text-md-right px-0">
                    <h4>Email</h4>
                 </div>
                 <div class="col-md-8">
                     <InputText type="email" class="w-100 rounded" v-model="value" required />
                 </div>
            </div>
            <div class="mt-5">
            </div> 
             <div class="row">
                <div class="col md-3 text-md-right px-0">
                 </div>
                 <div class="col-md-4">
                     <Button label="Cancel" class="p-button-outlined p-button-secondary p-button-rounded" />
                     
                 </div>
                  <div class="col-md-4">
                      <Button label="Save" class="p-button-primary p-button-rounded max" />
                      
                 </div>
            </div> 
             </div>
             </div> 
        </div>

    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
    export default {
        components:{ InputText, Button}
        
    }
</script>

<style scoped>
.main{
    margin-top: 300px;
    margin-bottom: 300px;
}
.p-button-outlined{
    background-color:rgb(255, 249, 249)!Important;
    color: black!important;
   
}
.max{
     font-size: 20px!important;

}

</style>