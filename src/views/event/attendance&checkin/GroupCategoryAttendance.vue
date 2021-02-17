<template>
    <div>
        <div class="container" style="width:80%">
            <div class="row mt-3 border-bottom">
                <div class="col-md-7 col-lg-8 col-sm-12 mb-4">
                    <h1 class="aten">Attendance & Checkin</h1>
                </div>
                 <div class="col-md-5 col-lg-4 col-sm-12 mb-4">
                    <Button label="Add New Attendance" class="p-button-rounded" />
                </div>

            </div>
            <div class="row mt-3 border rounded sub-con">
                <div class="col-md-12 col-sm-12 col-lg-12 mt-3 mb-5 border-bottom">
                    <h5 class="header5">Group Category Attendance</h5>
                </div>
                <div class="row m-auto" style="width:70%">
                <div class="col-md-2 col-sm-12">
                   <h5 class="event mt-3"> Event</h5>
                </div>
                <div class="col-md-10 col-sm-12">
                    <Dropdown v-model="selectedCountry" :options="countries"  style="width:70%" optionLabel="name" :filter="true" placeholder="Workers Meeting(12th Oct, 2020)" :showClear="true">
                    </Dropdown>
                </div>
                <div class="col-md-2 col-sm-12">
                    <h5 class="event mt-4"> Group</h5>
                </div>
                <div class="col-md-10 mt-3 col-sm-12">
                    <MultiSelect v-model="selectedGroup" :options="groups" style="width:70%" optionLabel="name" placeholder="Choir" display="chip"/>
                        
                </div>
                
                </div>
                <div class="col-md-12 mt-5 mb-2 border-bottom">
                
                </div>
                 <div class="col-md-12 mb-1">
                      <h5 class="check">Check in options</h5>
                </div>
                <div class="row m-auto border rounded" style="width:70%">
                    <div class="col-md-2 col-sm-2 image mt-3">
                        <img src="../../../assets/facebook.png" alt="marked Attendance image">

                    </div>
                    <div class="col-md-10 col-sm-10 mt-3">
                         <h4 class="header4"> Marked Attendance</h4>
                        <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                 <div class="row m-auto border rounded" style="width:70%">
                    <div class="col-md-2 col-sm-2 image mt-3">
                        <img src="../../../assets/facebook.png" alt="marked Attendance image">

                    </div>
                    <div class="col-md-10 col-sm-10 mt-3">
                         <h4 class="header4"> Child Checking</h4>
                        <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
                 <div class="col-md-12 mb-3">
                </div>
                 <div class="row m-auto border rounded" style="width:70%">
                    <div class="col-md-2 col-sm-2 image mt-3">
                        <img src="../../../assets/facebook.png" alt="marked Attendance image">

                    </div>
                    <div class="col-md-10 col-sm-10 mt-3">
                         <h4 class="header4"> Ussd</h4>
                        <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                 <div class="row m-auto border rounded" style="width:70%">
                    <div class="col-md-2 col-sm-2 image mt-3">
                        <img src="../../../assets/facebook.png" alt="marked Attendance image">

                    </div>
                    <div class="col-md-10 col-sm-10 mt-3">
                         <h4 class="header4"> QR</h4>
                        <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                 <div class="row mx-auto mb-3 border rounded" style="width:70%">
                    <div class="col-md-2 col-sm-2 image mt-3">
                        <img src="../../../assets/facebook.png" alt="marked Attendance image">

                    </div>
                    <div class="col-md-10 col-sm-10 mt-2">
                         <h5 class="header4"> Sms</h5>
                        <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
                
                

            </div>

        </div>

    </div>
</template>

<script>
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
    export default {
        components: {Button, Dropdown, MultiSelect},
     data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
            countries: [
                {name: 'workers meeting(12th Oct, 2020)'},
                {name: 'Sunday service (12th Oct, 2020)'},
                {name: 'Create New Event'},
            ],
            selectedGroup: null,
            selectedCountries: null,
            groups: [
                {name: 'choir', code: 'NY'},
                {name: 'Prayer', code: 'RM'},
                {name: 'Thankgiving', code: 'LDN'},
                {name: 'song', code: 'IST'},
                {name: 'Giving', code: 'PRS'}
            ],
           
        }
    },
        
    }
    
</script>

<style scoped>
.aten{
text-align: left;
font: normal 800 30px Nunito Sans !important;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
    
}
.image image{
    width: 50%;
    height: 30px;

}
.header5{
 font: var(--unnamed-font-style-normal) normal 600 24px/32px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal 600 24px/32px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.event{
 font: var(--unnamed-font-style-normal) normal normal 16px/22px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 16px/22px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.check{
font: var(--unnamed-font-style-normal) normal 600 16px/22px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal 600 16px/22px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.header4{
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/24px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal bold 18px/24px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 0.8;
}
.para{
font: var(--unnamed-font-style-normal) normal normal 14px/19px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 14px/19px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 0.8;
}
.sub-con{
    margin-bottom: 40px;
}

</style>