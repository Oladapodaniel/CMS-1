<template>
    <div class="row">
        <div class="col-12 py-2 mt-4 account-head">Cash and Bank<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center py-2" v-for="(asset, index) in assets" :key="index">
        <div class="col-6 col-md-2">{{ asset.code }}</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">{{ asset.name }}</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">Test Account</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div>Cash on Hand</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5">Cash you haven't deposited in the bank. Add your bank and credit card accounts to accurately categorixe transactions that aren't cash</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left" @click="openModal">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>
    

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Money in Transit<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">Jewwewe</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Test3</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5">wewe</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Expected Payments from Customers<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Account Receivable</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5"></div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Inventory<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left"> You have not added any inventory yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Account Receivable</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5"></div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i> &nbsp; &nbsp;Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Property, Plant, Equipment<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left"> You have not added any inventory yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2 pl-0"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Account Receivable</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5"></div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Depreciation and Amortization<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">12345</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Depreciation</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">Asset Description</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">2002</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Test4</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">21212</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Vendor Payments and Vendor Credits<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
     <div class="row row-border align-items-center py-2">
         <div class="col-10 offset-md-2 text-center text-md-left">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
     </div> 
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">12345</div>
        <div class="col-6 col-sm-3">
            <div class="desc-head">Depreciation</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">Asset Description</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>One Short-Term Asset<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Taxes Recoverable/Refundable</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">A tax is recoverable if ypu can deduct the tax you've paidfrom the tax you've collected. Many sales taxes are considered recoverable</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>


    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Other Long-Term Asset<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Taxes Recoverable/Refundable</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">A tax is recoverable if ypu can deduct the tax you've paidfrom the tax you've collected. Many sales taxes are considered recoverable</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <!-- Primevue modal to add new account-->
    <!-- <h5>Modal</h5>
    <Button label="Show" icon="pi pi-external-link" /> -->
    <Dialog header="Add an Account" v-model:visible="displayModal" class="col-12 col-sm-10 col-md-6 p-0" :modal="true">
        <div class="row mt-2">
            <div class="col-12 col-md-4 align-self-center text-md-right">Account Type</div>
            <div class="col-12 col-md-6">
                <!-- <Dropdown v-model="selectedGroupedCity" :options="groupedCities" 
                        optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                </Dropdown>
                {{ selectedGroupedCity }} -->
                
                <!-- <Dropdown v-model="selectedGroupedCity" :options="groupedCities" 
                        optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                </Dropdown> -->

            <!-- <div class="codeModal">
                <div class="country-code form-control codeModal" @click="toggleCode"><div class="d-flex justify-content-between align-items-center"><span class="codeModal">Select Account Type</span><i class="pi pi-angle-down"></i></div></div>
            </div>

                <div :class=" { 'flagCode' : showCode, 'hide-code' : !showCode } " class="codeModal ">
                    <input class="codeInput input codeModal" v-model="searchText">
                <div v-for="country in countries" :key="country.id" class="codeModal" >
                    <div class="col-sm-3"><span style="display: inline-block">{{ country.name }}</span></div>
                </div>
                </div> -->
                <div
                    class="select-elem-con pointer form-control d-flex justify-content-between align-items-center close-modal"
                    @click="toggleAccountType"
                    >
                    <span class="ofering close-modal">Select</span
                    ><span>
                        <i
                        class="pi pi-angle-down close-modal"
                        aria-hidden="true"
                        ></i
                    ></span>
                    </div>
            <div
                class="ofering close-modal"
                :class="{ 'style-account': showAccount }"
                v-if="showAccount"
                ref="selectAccount"
                >
                <i class="pi pi-search" style="position: absolute; top: 22px; left: 25px;"></i>
                <div class=" p-2 close-modal">
                    <input
                    type="text"
                    placeholder="Search"
                    class="form-control ofering mb-1 close-modal pl-5"
                    v-model="accountText"
                    ref="inpFocus2"
                />
                </div>
                <div class="desc-head py-1 px-2 close-modal">Assets</div>
                      <div class="header-border close-modal">
                        <div v-if="filterAccount.length > 0">
                            <div @click="accountFlow" class="manual-dd-item close-modal" v-for="(item, index) in filterAccount" :key="index">
                            <div class="d-flex justify-content-between py-2 px-3 close-modal">
                                <div class="close-modal offset-sm-1">{{ item }}</div>      
                            </div>                      
                        </div>
                        </div>
                        <div v-else>
                            <div class="text-center px-3 py-2 text-danger">No Match Found</div>
                        </div>
                      </div>
                      <div class="desc-head px-3 pt-2 close-modal">Liabilities and Credit Cards</div>
                      <div class="header-border close-modal">
                        <div v-if="filterLiabilities.length > 0">
                            <div @click="accountFlow" class="manual-dd-item close-modal" v-for="(item, index) in filterLiabilities" :key="index">
                            <div class="d-flex justify-content-between py-2 px-3 close-modal">
                                <div class="close-modal offset-sm-1">{{ item }}</div> 
              
                            </div>                     
                        </div>
                        </div>
                        <div v-else>
                            <div class="px-3 py-2 text-center text-danger">No Match Found</div>
                        </div>
                      </div>
                </div>



            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-4 align-self-center text-md-right">Account Name</div>
            <div class="col-12 col-md-6">
            <input type="text" class="form-control" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-4 align-self-center text-md-right">Account Currency</div>
            <div class="col-12 col-md-6">
                <div
                class="currency pointer form-control d-flex justify-content-between align-items-center close-modal"
                @click="toggleCurrency"
                >
                <span class="ofering close-modal">Select</span
                ><span style="margin-top: 4px">
                    <i
                    class="pi pi-angle-down close-modal"
                    aria-hidden="true"
                    ></i
                ></span>
                </div>
                <div
                  class="ofering close-modal"
                  :class="{ 'style-account': showCurrency }"
                  v-if="showCurrency"
                  >
                  <i class="pi pi-search" style="position: absolute; top: 22px; left: 25px;"></i>
                  <div class="p-2">
                      
                      <input
                      type="text"
                      placeholder="Search"
                      class="form-control close-modal ofering mb-1 pl-5"
                      v-model="currencyText"
                      ref="inpFocus"
                      
                  />
                  </div>
                        <div class="header-border close-modal" v-if="filterCurrency.length > 0">
                          <div class="manual-dd-item close-modal" v-for="item in filterCurrency" :key="item.id">
                              <div class="d-flex justify-content-between p-1 close-modal">
                                  <div class="close-modal offset-sm-1" @click="addCurrency($event, index)">{{ item.name }} - {{ item.country }}</div>      
                              </div>                      
                          </div>
                        </div>
                        <div class="header-border close-modal" v-else>
                          <div class="p-3 text-center text-danger">No Match Found</div>
                        </div>
                  
                  
                  </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-4 align-self-center text-md-right">Account ID</div>
            <div class="col-12 col-md-6">
            <input type="text" class="form-control" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-4 align-self-center text-md-right">Description</div>
            <div class="col-12 col-md-6">
            <input type="text" class="form-control" />
            </div>
        </div>
         <template #footer>
           <!-- <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
            <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus /> -->
            <div class="col-md-12 d-md-flex justify-content-end p-0">
                <button type="button" class="btn secondary-btn px-4" @click="closeModal">
                    Close
                </button>
                <button type="button" class="btn primary-btn px-4 mr-0 text-white">
                    Save
                </button>
            </div>
        </template>
    </Dialog>

    
</template>

<script>
import { ref, computed, nextTick } from 'vue'
import Dialog from 'primevue/dialog';
import axios from "@/gateway/backendapi";
// import Dropdown from 'primevue/dropdown';
export default {
    components: { Dialog },
    props: ['assets'],
    setup () {
        const view = ref('view')
        const displayModal = ref(false)
        const showCode = ref(false)
        const accountText = ref("")
        const accountType = ref(['Cash and Bank', 'Money in Transit'])
        const liabilities = ref(['Credit Card', 'Loan and Line of Credit'])
        const showCurrency = ref(false)
        const currencyText = ref("")
        const currencyList = ref([])
        const inpFocus = ref("")
        const inpFocus2 = ref("")

        const toggleCode = () => {
            showCode.value = !showCode.value
        }
        const showAccount = ref(false)

    
       const openModal = () => {
            displayModal.value = true
        }
        const closeModal = () => {
            displayModal.value = false
        }

         const filterAccount = computed(() => {
            if (accountText.value !== "" && accountType.value.length > 0) {
                return accountType.value.filter((i) => {
                if (i)  return i.toLowerCase().includes(accountText.value.toLowerCase())
                })
                // console.log(currencyText)
                
            } else {
                return accountType.value
            }
            })

        const getCurrenciesFromCountries = () => {
            let url = "/api/getallcountries"
            axios.get(url)
                .then(res => {
                currencyList.value = res.data.map(i => {
                    // return `${i.currency} ${i.name}`
                    return {
                    name: i.currency,
                    id: i.id,
                    country: i.name
                    }
                    
                })
                })
                .catch(err => console.log(err))
            }
            getCurrenciesFromCountries()

        const filterLiabilities = computed(() => {
            if (accountText.value !== "" && liabilities.value.length > 0) {
                return liabilities.value.filter((i) => {
                if (i)  return i.toLowerCase().includes(accountText.value.toLowerCase())
                })
            } else {
                return liabilities.value
            }
            })

        const filterCurrency = computed(() => {
            if (currencyText.value !== "" && currencyList.value.length > 0) {
                return currencyList.value.filter((i) => {
                if (i.name) return i.name.toLowerCase().includes(currencyText.value.toLowerCase()) || i.country.toLowerCase().includes(currencyText.value.toLowerCase())
                })
            } else {
                return currencyList.value
            }
        })

        const toggleCurrency = () => {
            showCurrency.value = !showCurrency.value
            // if (showCurrency.value){
            //     console.log(inpFocus.value)
            // }
            nextTick(() => {
                if (showCurrency.value) {
                    inpFocus.value.focus()
                }
            })
        }

        const toggleAccountType = () => {
            showAccount.value = !showAccount.value
            nextTick(() => {
                if (showAccount.value) {
                    inpFocus2.value.focus()
                }
            })
        }

        return {
            view, displayModal, openModal, closeModal, showCode, toggleCode, showAccount, accountText, filterLiabilities, filterAccount, accountType, liabilities, showCurrency, currencyText, filterCurrency, currencyList, toggleCurrency, inpFocus, inpFocus2, toggleAccountType
        }
    }
}
</script>

<style scoped>
    .row-border {
        border-bottom: 1px solid rgb(225, 225, 225);
    }

    .account-head {
        background: #E0E7EB;
        font-weight: 800
    }

    .help {
        color: rgb(100, 100, 100);
        margin: 5px;
    }

    .desc {
        color: #190138;
        opacity: 0.6;
    }

    .desc-head {
        font-weight: 600;
    }

    .add-account {
        color: #136ACD;
        font-weight: 800
    }

    .flagCode {
        width: 140px;
        max-height: 15em;
        overflow-y: scroll;
        overflow-x: hidden;
        box-shadow: -3px 3px 15px #797e8159;
        position: absolute;
        /* top: 49.5%; */
        background: white;
        z-index: 10;

    }
    .flagCode div{
        width: 35em;      
    }
    .flagCode div:hover {
        background: rgb(238, 238, 238)
    }

    .hide-code {
  /* display: none */
  height: 0;
  overflow: hidden;
  /* transition: all 0.4s ease-in-out */
}

input.codeInput {
  width: 80%;
  margin-left: 12px;
  margin-top: 5px;
}

.style-account {
    box-shadow: 0px 3px 15px #797e8159;
    position: absolute;
    background: white;
    z-index: 1;
    width: 93%;
    max-height: 14em;
    overflow-y: auto;
    }
    .style-account div div div:hover {
    background-color: #ecf0f3;
    cursor: pointer;
    }
</style>