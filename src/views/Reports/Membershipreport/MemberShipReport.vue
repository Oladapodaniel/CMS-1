<template>
    <div class="container container-top overflow-hidden border">
        <div>
            <h3 class="font-weight-bold">SUMMARY REPORT</h3>
        </div>
        <div class="row border">
            <div style="background: #ebeff4;" class="row mx-2 w-100 py-5" >
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">SELECT MEMBERSHIP</label></div>
                    <div>
                        <MultiSelect v-model="selectedMember" :options="membership" optionLabel="name" placeholder="Select Member" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Select Member
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
                    <div class=""><label for="" class=" ml-2 font-weight-bold">GENDER</label></div>
                    <div>
                        <MultiSelect v-model="selectedGender" :options="gender" optionLabel="name" placeholder="Select gender" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small" v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Select Gender
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
                    <div><label for="" class="font-weight-bold">MARITAL STATUS</label></div>
                    <div>
                        <MultiSelect v-model="selectedMaritalStatus" :options="maritalStatus" optionLabel="name" placeholder="Marital status" :filter="true" class="multiselect-custom w-100">
                            <template #value="slotProps">
                                <div class="country-item country-item-value bg-secondary font-weight-bold small " v-for="option of slotProps.value" :key="option.code">
                                    <div>{{option.name}}</div>
                                </div>
                                <template v-if="!slotProps.value || slotProps.value.length === 0">
                                    Marital status
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
                    <label for="" ></label>
                    <div class="mt-2">
                        <button class="btn default-btn primary-bg "><div class="text-white">Generate Report</div></button>
                    </div>
                </div>
             </div>    
            <div class="col-12">
                <div class="mt-4 text-center">
                    <h4>CONGREGATION MEMBERS REPORT </h4>
                </div>
            </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="col-12 border  text-center" style="height: 60vh;">
                        <div class="col-12 font-weight-bold">Membership By Gender</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12" style="height: 50vh;">
                            <MembershipPieChart
                            domId="chart"
                            distance="5"
                            :titleMargin="10"
                            :summary="pieChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6  col-md-6 col-lg-6">
                    <div class="col-12 border  text-center" style="height: 60vh;">
                        <div class="col-12  font-weight-bold">Membership By Marital Status</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                            <MembershipPieChart
                            domId="chart"
                            distance="5"
                            :titleMargin="10"
                            :summary="pieChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6  col-md-6 col-lg-6">
                    <div class="col-12 border text-center mt-3" style="height: 60vh; ">
                        <div class="col-12  font-weight-bold ">Membership By Distribution</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                            <MembershipPieChart
                            domId="chart"
                            distance="5"
                            :titleMargin="10"
                            :summary="pieChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6  col-md-6 col-lg-6">
                    <div class="col-12  border text-center mt-3 " style="height: 60vh;">
                        <div class="col-12 w-100  font-weight-bold">Membership By Age Group</div>
                        <div class="col-12">No Data Available</div>
                        <div class="col-12 " style="height: 50vh;">
                            <MembershipPieChart
                            domId="chart"
                            distance="5"
                            :titleMargin="10"
                            :summary="pieChart"
                            />
                        </div>
                    </div>
                </div>
                <section>
      <!-- table header -->
      <div class="container-top container  overflow-hidden table-striped table-main   remove-styles2 remove-border" style="padding-right: 30px;"  >
        <table class="table  remove-styles mt-0 table-responsive table-hover table-header-area">
          <thead class="table-header-area-main">
            <tr
              class="small-text text-capitalize text-nowrap"
              style="border-bottom: 0"
            >
              <th scope="col">Church Activity</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Home Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Marital Status</th>
              <th scope="col">Activity Date</th>
              <th scope="col">Current Status</th>
            </tr>
          </thead>
          <tbody class="font-weight-normal text-nowrap">
            <tr>
              <td>Childrens Day Program</td>
              <td>Ajose Oluwatosin</td>
              <td>07090875463</td>
              <td>nonitosinajose7@gmail.com</td>
              <td>41 imam dauda Str. Lagos</td>
              <td>Female</td>
              <td>Married</td>
              <td>24/10/2021</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Childrens Day Program</td>
              <td>Ajose Oluwatosin</td>
              <td>07090875463</td>
              <td>nonitosinajose7@gmail.com</td>
              <td>41 imam dauda Str. Lagos</td>
              <td>Female</td>
              <td>Married</td>
              <td>24/10/2021</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Childrens Day Program</td>
              <td>Ajose Oluwatosin</td>
              <td>07090875463</td>
              <td>nonitosinajose7@gmail.com</td>
              <td>41 imam dauda Str. Lagos</td>
              <td>Female</td>
              <td>Married</td>
              <td>24/10/2021</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Childrens Day Program</td>
              <td>Ajose Oluwatosin</td>
              <td>07090875463</td>
              <td>nonitosinajose7@gmail.com</td>
              <td>41 imam dauda Str. Lagos</td>
              <td>Female</td>
              <td>Married</td>
              <td>24/10/2021</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
        <div class="table-foot d-flex justify-content-end mt-n3">
          <PaginationButtons />
        </div>
      </div>
      <!--end table header -->
    </section>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import MembershipPieChart from '../../../components/charts/PieChart.vue';
import PaginationButtons from "../../../components/pagination/PaginationButtons";
import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
export default {
    components: {MembershipPieChart,Dropdown, MultiSelect,PaginationButtons},
    setup() {
        const membership = ref([
      { name: "FIRST-TIMER" },
      { name: "NEW-CONVERT" },
      { name: "FULL MEMBER" },
    ]);
        const gender = ref([
      { name: "MALE" },
      { name: "FEMALE" },
    ]);
        const maritalStatus = ref([
      { name: "SINGLE" },
      { name: "MARRIED" },
      { name: "ENGAGED" },
      { name: "SINGLE PARENT" },
      { name: "DIVORCED" },
      { name: "SEPERATED" },
      { name: "WIDOW" },
      { name: "WIDOWER" },
    ]);

    const selectedMember = ref();
    const selectedGender = ref();
    // const selectedMaritalStatus = ref({ name: "SINGLE" });
    const selectedMaritalStatus = ref();

    const pieChart = ref(
        [ 
             { name: "Tithe Offering", value: 9592 }, 
             { name: "casterion", value: 2770 }, 
             { name : "Building Project Offering", value : 130 }, 
             { name: "Worship Concert", value : 200 }, 
             { name: "Oh My Baba", value: 100 } 
        ]
    
    )
    //  onMounted(() => {
    //   return pieChart.value;
    // });


     return {
         pieChart,
         membership,
         gender,
         maritalStatus,
         selectedMember,
         selectedGender,
         selectedMaritalStatus
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
        img.flag {
            width: 17px;
        }


@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}
</style>