<template>
    <div>
        <div class="container main">
         <div class="row  m-auto">
             <div class="col">
                <div class="row">
                        <div class="col md-4 text-md-right">
                            <h4 class="header4 text-md-right">Surname</h4>
                        </div>
                        <div class="col-md-8 px-0">
                            <InputText type="text" class="w-100 rounded" v-model="value" required />
                        </div>
                </div> 
                <div class="mt-4">
                </div> 
             <div class="row">
                <div class="col md-4 text-md-right">
                    <h4 class="header4 text-md-right">Firstname</h4>
                 </div>
                 <div class="col-md-8 px-0">
                     <InputText type="text" class="w-100 rounded" v-model="value" required />
                 </div>
            </div> 
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col md-4 text-md-right">
                    <h4 class="header4 text-md-right">Phone number</h4>
                 </div>
                 <div class="col-md-8 px-0">
                     <InputText type="number" class="w-100 rounded" v-model="value" required />
                 </div>
            </div> 
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col md-4 text-md-right">
                    <h4 class="header4 text-md-right">Email</h4>
                 </div>
                 <div class="col-md-8 px-0">
                     <InputText type="email" class="w-100 rounded" v-model="value" required />
                 </div>
            </div>
            <div class="mt-4">
            </div> 
             <div class="row">
                <div class="col md-4 text-md-right">
                    <h4 class="header4 text-md-right"></h4>
                 </div>
                 <div class="col-md-8 px-0 d-flex justify-content-center">
                     <Button label="Cancel" class="p-button-outlined p-button-secondary mr-3 px-5 p-button-rounded" />
                     <Button label="Save"  class="p-button-primary p-button-rounded px-5 mr-3 max" />
                     
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