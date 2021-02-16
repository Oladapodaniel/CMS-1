<template>
    <div>
        <div class="container w-75">
            <div class="row mt-5 border-bottom">
                <div class="col-md-9 mb-4">
                    <h1 class="aten">Attendance & Checkin</h1>
                </div>
                 <div class="col-md-3 mb-4">
                    <Button label="Add New Attendance" class="p-button-rounded" />
                </div>

            </div>
            <div class="row mt-3 border rounded">
                <div class="col-md-12 mt-3 mb-3 border-bottom">
                    <h5>Group Category Attendance</h5>
                </div>
                <div class="row w-50">
                <div class="col-md-2 ml-5">
                    Event
                </div>
                <div class="col-md-8">
<Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Workers Meeting(12th Oct, 2020)" :showClear="true">
    <template #value="slotProps">
        <div class="country-item country-item-value" v-if="slotProps.value">
            <div>{{slotProps.value.name}}</div>
        </div>
        <span v-else>
            {{slotProps.placeholder}}
        </span>
    </template>
    <template #option="slotProps">
        <div class="country-item">
            <div>{{slotProps.option.name}}</div>
        </div>
    </template>
</Dropdown>
                </div>
                <div class="col-md-2 ml-5 mt-3">
                    Event
                </div>
                <div class="col-md-8 mt-3">
                    
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Workings Meeeting (12th Oct, 2020)" />
                </div>
                
                </div>
                

            </div>

        </div>

    </div>
</template>

<script>
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
    export default {
        components: {Button, Dropdown},
     data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
            // cities: [
            //     {name: 'New York', code: 'NY'},
            //     {name: 'Rome', code: 'RM'},
            //     {name: 'London', code: 'LDN'},
            //     {name: 'Istanbul', code: 'IST'},
            //     {name: 'Paris', code: 'PRS'}
            // ],
            countries: [
                {name: 'workers meeting(12th Oct, 2020)'},
                {name: 'Sunday service (12th Oct, 2020)'},
                {name: 'Create New Event'},
            ]
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

</style>