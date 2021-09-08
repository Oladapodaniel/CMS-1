<template>
<div class="container container-wide mt-5 overflow-hidden border mb-4">
     <div>
            <h3 class="font-weight-bold mt-5">Accounting Activity and Balance Report </h3>
        </div>
        <div class="row">
  <div style="background: #ebeff4;" class="row mx-2 w-100 py-5" >
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">SELECT ACCOUNT</label></div>
                    <div>
                        <MultiSelect v-model="selectedSummary" :options="accountBalance" optionLabel="name" placeholder="Select Summary" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Select account
                                </template>
                            </template>
                            <template #option="slotProps">
                                <div class="country-item">
                                    <div>{{slotProps.option.name}}</div>
                                </div>
                            </template>
                        </MultiSelect>
                    </div>

                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class=""><label for="" class=" ml-2 font-weight-bold">START DATE</label></div>
                    <div>
                        <div>
                            <Calendar id="icon" v-model="startDate" class="calendar1" :showIcon="true" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">END DATE</label></div>
                     <div>
                            <Calendar id="icon" v-model="endDate" :showIcon="true" />
                        </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="" ></label>
                    <div class="mt-2">
                        <button class="btn default-btn primary-bg "><div class="text-white">Generate Report</div></button>
                    </div>
                </div>
             </div> 
             </div>
             <section>
      <!-- table header -->
       <div>
            <h3 class="font-weight-bold mt-5">ACCOUNT ACTIVITY REPORT</h3>
        </div>
      <div class="container-fluid table-main px-0 remove-styles2 remove-border mb-5 mt-2" >
        <table class="table remove-styles mt-0 table-hover table-responsive-lg table-header-area">
          <thead class="table-header-area-main">
            <tr
              class="small-text text-capitalize text-nowrap"
              style=""
            >
              <th scope="col">Date</th>
              <th scope="col">Account Name</th>
              <th scope="col">Ref Number</th>
              <th scope="col">Description</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
              <th scope="col">Balance</th>
              <th scope="col">Credit</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody class="font-weight-normal text-nowrap">
            <tr>
              <td>Aug 9, 2021</td>
              <td>petty Cash</td>
              <td>0806738372</td>
              <td>Opening Balance</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4267,677.00</td>
              <td>0.00</td>
              <td>4267,677.00</td>
            </tr>
            <tr>
              <td>1 oct, 2019</td>
              <td>Liquid Cash</td>
              <td>8067383789</td>
              <td>Benovenlence</td>
              <td>32.00</td>
              <td>0.00</td>
              <td>439,729.00</td>
              <td>0.00</td>
              <td>439,729.00</td>
            </tr>
            <tr>
              <td>5 Dem, 2021</td>
              <td>widom giving</td>
              <td>067383789</td>
              <td>widom Giving</td>
              <td>32.00</td>
              <td>0.00</td>
              <td>438.729.00</td>
              <td>0.00</td>
              <td>438.729.00</td>
            </tr>
            <tr class="bg-secondary">
              <td></td>
              <td></td>
              <td></td>
              <td>Account Balance</td>
              <td colspan="2" class="">NGN
                  <span class="ml-3"> 438,729.00</span>
              </td>
              <!-- <td colspan="2" class="">438,729.00</td> -->
              <td>Couple</td>
              <td>0.00</td>
              <td>438.729.00</td>
            </tr>
          </tbody>
        </table>
        <div class="table-foot d-flex justify-content-end">
          <PaginationButtons />
        </div>
      </div>
      <!--end table header -->
    </section>
             </div>

</template>


<script>
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import {ref} from 'vue';
import MultiSelect from 'primevue/multiselect';
    export default {
        components:{
            Dropdown, MultiSelect,Calendar

        }, 

        setup() {

      const accountBalance = ref([
      { name: "Pretty account" },
      { name: "Benevelnece acccount" },
      { name: "Charity account" },
    ]);
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const selectedSummary = ref();
        return{
            accountBalance,
            startDate,
            endDate,
            selectedSummary
            
        }
        
    }
        
    }
    
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.p-multiselect {
    width: 18rem;
}

.multiselect-custom {
    
        padding-top: .1rem;
        padding-bottom: .1rem;
    
}

    .country-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        /* background-color:  */
        /* background-color: var(--primary-color); */
        /* color: var(--primary-color-text); */
    }
    .border{
    border-color:  #b0b2b5!important;
    border-radius: 15px!important;

    }
    .borderInner{
        width: 100%;
        height: 200px;
    }
    .table {
  width: 100% !important;
  box-shadow: 0 0.063rem 0.25rem #02172e45;
  border: 0.063rem solid #dde2e6;
  border-radius: 30px;
  text-align: left;
  margin-bottom: auto !important;
  padding-bottom: 0.5rem;
}

.table-header-area {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.table-header-area-main {
  background-color: #ebeff4;
}

.table-main {
    width: 100% !important;
    box-shadow: 0 0.063rem 0.25rem #02172e45 !important;
    border: 0.063rem solid #dde2e6 !important;
    border-radius: 30px !important;
    text-align: left !important;
    margin-bottom: auto !important;
    padding-bottom: 0.5rem !important;
}

.remove-styles{
  border: none !important;
box-shadow: none !important;
    border-bottom: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.remove-styles2{
padding-right: 0;
padding-left: 0;
border-top-left-radius: 0 !important;
border-top-right-radius: 0 !important;
}

.remove-border{
    box-shadow: none !important;
}
        img.flag {
            width: 17px;
        }
        .primary-bg{
            background-color: rgb(19, 106, 205)!important;
            border-style: none!important;
        };
        .p-button.p-button-icon-only{
            background-color: red!important;

        }


@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}

</style>