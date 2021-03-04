<template>
    <div>
        <div class="container">
            <div class="row mt-4 border mx-sm-0 rounded sub-con">
                <div class="col-md-12 col-sm-12 col-lg-12 my-3 border-bottom">
                    <h5 class="page-header">Payment Options</h5>
                </div>
                <div class="col-4 offset-md-2 header-contri">Contribution Type</div>
                <div class="col-5 header-contri">Amount</div>
                <div class="col-12 mb-3">
                    <div class="row" v-for="(item, index) in contributionItems" :key="index">
                    <div class="col-md-4 offset-md-2 pt-2">
                        <div>{{ item.offType }}</div>
                    </div>
                    <div class="col-md-5">{{ item.amount }}</div>
                    </div>
                </div>
            </div>
                
                
                <div>
                <div class="col-md-12 mt-5 mb-2 border-bottom">
                
                </div>
                 <div class="col-md-6 offset-md-2 mb-1">
                      <h5 class="header-contri my-4">Available options for payment</h5>
                </div>
                <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded" @click="toggleLink">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../assets/group.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <a class="c-pointer text-decoration-none"><h4 class="header4">Direct Payment Link</h4></a>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 d-flex align-items-center justify-content-center" :class="{ 'show' : displayLink, 'hide' : !displayLink }">
                            <div>https://mylordmylove.com</div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
             

               
                <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded" @click="toggleQr">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../assets/group2.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4"> QR </h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 d-flex align-items-center justify-content-center" :class="{ 'show-qr' : displayQr, 'hide' : !displayQr }">
                            <div><img src="../../assets/qrcode.png"></div>
                        </div>
                    
                </div>
                 <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../assets/group2.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4">Wordpress Plugin</h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded" @click="toggleIFrame">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../assets/group.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4">iFrame</h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 d-flex align-items-center justify-content-center" :class="{ 'show-iFrame' : displayIFrame, 'hide' : !displayIFrame }">
                            <div>https://mylordmylove.com</div>
                        </div>
                    
                </div>
                
                <div class="col-md-12 mb-3">
                </div>
            </div>

        </div>

    </div>
</template>

<script>
// import Button from 'primevue/button';
// import Dropdown from 'primevue/dropdown';
// import MultiSelect from 'primevue/multiselect';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';


    export default {
        // components: { Dropdown, MultiSelect},

        setup() {
            const route = useRoute();
            const contributionItems = ref([])
 
            const displayLink = ref(false)
            const displayQr = ref(false)
            const displayIFrame = ref(false)

            const toggleLink = () => {
                displayLink.value = !displayLink.value
                displayQr.value = false
                displayIFrame.value = false
            }

            const toggleQr = () => {
                displayQr.value = !displayQr.value
                displayLink.value = false
                displayIFrame.value = false
            }

            const toggleIFrame = () => {
                displayIFrame.value = !displayIFrame.value
                displayLink.value = false
                displayQr.value = false
            }

            // if (route.query.activityID) {
            //     events.value.push({ name: route.query.activityName, id: route.query.activityID })
            //     selectedEvent.value = { name: route.query.activityName, id: route.query.activityID }
            // }

            // if (route.query.groupId) {
            //     groups.value.push({ name: route.query.groupName, id: route.query.groupId })
            //     selectedGroups.value.push({ name: route.query.groupName, id: route.query.groupId })
            // }

            onMounted(() => {
                let store = useStore()
                console.log(store.getters['contributions/contributionItems'])
                contributionItems.value = store.getters['contributions/contributionItems']
            })
            return {
                displayLink, route, toggleLink, displayQr, toggleQr, toggleIFrame, displayIFrame, contributionItems
            }
        }

    //  data() {



    //     return {
    //         selectedCity1: null,
    //         selectedCity2: null,
    //         selectedCountry: null,
    //         countries: [
    //             // {name: 'workers meeting(12th Oct, 2020)'},
    //             // {name: 'Sunday service (12th Oct, 2020)'},
    //             // {name: 'Create New Event'},
    //             {name: 'choir', code: 'NY', id: 1},
    //             {name: 'Prayer', code: 'RM', id: 2},
    //         ],
    //         selectedGroup: [
    //             {name: 'choir', code: 'NY', id: 1},
    //             {name: 'Prayer', code: 'RM', id: 2},
    //         ],
    //         selectedCountries: null,
    //         groups: [
    //             {name: 'choir', code: 'NY', id: 1},
    //             {name: 'Prayer', code: 'RM', id: 2},
    //             {name: 'Thankgiving', code: 'LDN', id: 3},
    //             {name: 'song', code: 'IST', id: 4},
    //             {name: 'Giving', code: 'PRS', id: 5}
    //         ],
           
    //     }
    // },
        
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

.container{
    margin-bottom: 40px;
}

.contri-type {
    font-size: 1.7em;
}

.page-header {
  font: normal normal 800 29px Nunito sans;
}

.hide {
    height: 0;
    overflow: hidden;
    border: 0px solid #dee2e6;
    transition: all 0.5s ease-in-out;
}

.show {
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    padding: 10px;
    transition: all 0.5s ease-in-out;
    height: 100px;
    overflow: hidden;
}

.show-qr {
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    padding: 10px;
    transition: all 0.5s ease-in-out;
    height: 300px;
    overflow: hidden;

}

.show-iFrame {
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    padding: 10px;
    transition: all 0.5s ease-in-out;
    height: 200px;
    overflow: hidden;

}

.header-contri {
     font-size: 20px; 
     font-weight: 700;
}

</style>