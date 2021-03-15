<template>
  <div class="row">
    <div class="col-12 py-2 mt-4 account-head">
      Cash in Hand <small class="font-weight-normal">current assets</small><i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div
    class="row row-border align-items-center py-2"
    v-for="(asset, index) in assets"
    :key="index"
  >
    <div class="col-6 col-md-2">{{ asset.code }}</div>
    <div class="col-6 col-md-3">
      <div class="desc-head">{{ asset.name }}</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">Test Account</div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row row-border align-items-center">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div>Cash on Hand</div>
      <div>Last Trasaction on Jan 21st, 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Cash you haven't deposited in the bank. Add your bank and credit card
      accounts to accurately categorixe transactions that aren't cash
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 mt-4 account-head">
      Cash in Bank <small class="font-weight-normal">current assets</small><i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div
    class="row row-border align-items-center py-2"
    v-for="(asset, index) in assets"
    :key="index"
  >
    <div class="col-6 col-md-2">{{ asset.code }}</div>
    <div class="col-6 col-md-3">
      <div class="desc-head">{{ asset.name }}</div>
    </div>
    <div class="col-6 col-md-5">Test Account</div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">You haven't added any bank</div>
    </div>
    <div class="col-6 col-md-5"></div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Account Receivable <small class="font-weight-normal">current assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Account Receivable</div>
      <div class="desc">Last Trasaction on Jan 21st, 2021</div>
    </div>
    <div class="col-6 col-md-5"></div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="primary-text text-decoration-none c-pointer" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Inventory <small class="font-weight-normal">current assets</small><i class="fa fa-question-circle-o help" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You have not added any inventory yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Account Receivable</div>
      <div class="desc">Last Trasaction on Jan 21st, 2021</div>
    </div>
    <div class="col-6 col-md-5"></div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  

  

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Prepaid Expenses <small class="font-weight-normal">current assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any Vendor Prepayments and Vendor Credits accounts yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2">12345</div>
    <div class="col-6 col-sm-3">
      <div class="desc-head">Depreciation</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">Asset Description</div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>
  

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Short Term Investment <small class="font-weight-normal">current assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any Vendor Prepayments and Vendor Credits accounts yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2">12345</div>
    <div class="col-6 col-sm-3">
      <div class="desc-head">Depreciation</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">Asset Description</div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
         Accumulated Depreciation <small class="font-weight-normal">current assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2">12345</div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Depreciation</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">Asset Description</div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2">12345</div>
    <div class="col-6 col-sm-3">
      <div class="desc-head">Depreciation</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">Asset Description</div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Other Current Assets <small class="font-weight-normal">current assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any Vendor Payments and Vendor Credits accounts yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Taxes Recoverable/Refundable</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">
      A tax is recoverable if ypu can deduct the tax you've paidfrom the tax
      you've collected. Many sales taxes are considered recoverable
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Land and Buildings <small class="font-weight-normal">fixed assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You have not added any inventory yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2 pl-0"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Account Receivable</div>
      <div class="desc">Last Trasaction on Jan 21st, 2021</div>
    </div>
    <div class="col-6 col-md-5"></div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Furniture and Equipment <small class="font-weight-normal">fixed assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You have not added any inventory yet.
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Vehicles <small class="font-weight-normal">fixed assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You have not added any inventory yet.
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      <div>
        Other Fixed Assets <small class="font-weight-normal">fixed assets</small><i
          class="fa fa-question-circle-o help"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any Vendor Payments and Vendor Credits accounts yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Taxes Recoverable/Refundable</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">
      A tax is recoverable if ypu can deduct the tax you've paidfrom the tax
      you've collected. Many sales taxes are considered recoverable
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-2">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#assetsModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <!-- BT MODAL -->
  <div class="modal fade" id="assetsModal" tabindex="-1" role="dialog" aria-labelledby="assetsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-weight-bold" id="exampleModalLabel">Add an account</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <CreateAccountModal :transactionalAccounts="transactionalAccounts" :accountTypes="accountTypes" :currencies="currencyList" :financialAccountType="0" />
        </div>
      </div>
    </div>
  </div>
  <!-- END BT -->

  <!-- Primevue modal to add new account-->
  <!-- <h5>Modal</h5>
    <Button label="Show" icon="pi pi-external-link" /> -->
</template>

<script>
import { ref, computed, nextTick } from "vue";
import axios from "@/gateway/backendapi";
import transaction_service from '../../../services/financials/transaction_service';
import CreateAccountModal from "./components/CreateAccountForm";

export default {
  components: {CreateAccountModal },
  props: ["assets"],
  setup() {
    const view = ref("view");
    const displayModal = ref(false);
    const showCode = ref(false);
    const accountText = ref("");
    const accountType = ref(["Cash and Bank", "Money in Transit"]);
    const liabilities = ref(["Credit Card", "Loan and Line of Credit"]);
    const showCurrency = ref(false);
    const currencyText = ref("");
    const currencyList = ref([]);
    const inpFocus = ref("");
    const inpFocus2 = ref("");

    const toggleCode = () => {
      showCode.value = !showCode.value;
    };
    const showAccount = ref(false);

    const openModal = () => {
      displayModal.value = true;
    };
    const closeModal = () => {
      displayModal.value = false;
    };

    const filterAccount = computed(() => {
      if (accountText.value !== "" && accountType.value.length > 0) {
        return accountType.value.filter((i) => {
          if (i)
            return i.toLowerCase().includes(accountText.value.toLowerCase());
        });
        // console.log(currencyText)
      } else {
        return accountType.value;
      }
    });

    const getCurrenciesFromCountries = () => {
      let url = "/api/getallcountries";
      axios
        .get(url)
        .then((res) => {
          currencyList.value = res.data.map((i) => {
            // return `${i.currency} ${i.name}`
            return {
              name: i.currency,
              id: i.id,
              country: i.name,
            };
          });
        })
        .catch((err) => console.log(err));
    };
    getCurrenciesFromCountries();

    const filterLiabilities = computed(() => {
      if (accountText.value !== "" && liabilities.value.length > 0) {
        return liabilities.value.filter((i) => {
          if (i)
            return i.toLowerCase().includes(accountText.value.toLowerCase());
        });
      } else {
        return liabilities.value;
      }
    });

    const filterCurrency = computed(() => {
      if (currencyText.value !== "" && currencyList.value.length > 0) {
        return currencyList.value.filter((i) => {
          if (i.name)
            return (
              i.name.toLowerCase().includes(currencyText.value.toLowerCase()) ||
              i.country.toLowerCase().includes(currencyText.value.toLowerCase())
            );
        });
      } else {
        return currencyList.value;
      }
    });

    const toggleCurrency = () => {
      showCurrency.value = !showCurrency.value;
      // if (showCurrency.value){
      //     console.log(inpFocus.value)
      // }
      nextTick(() => {
        if (showCurrency.value) {
          inpFocus.value.focus();
        }
      });
    };

    const toggleAccountType = () => {
      showAccount.value = !showAccount.value;
      nextTick(() => {
        if (showAccount.value) {
          inpFocus2.value.focus();
        }
      });
    };

    const transactionalAccounts = ref([]);
    const accountTypes = ["assets", "liability", "income", "expense", "equity"];
    const getTransactionalAccounts = async () => {
      try {
        const response = await transaction_service.getTransactionalAccounts();
        for (let group of accountTypes) {
          const groupItems = response.filter(
            (i) => i.accountType.toLowerCase() === group
          );
          transactionalAccounts.value.push(groupItems);
        }
        console.log(response, "account");
      } catch (error) {
        console.log(error);
      }
    }
    getTransactionalAccounts();

    // const selectedAccountType = ref({ });
    // const selectAccountType = (account) => {
    //   selectedAccountType.value = account;
    // }

    const cities = ref([{
                label: 'Germany', code: 'DE', 
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US', 
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP', 
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }])

    return {
      view,
      displayModal,
      openModal,
      closeModal,
      showCode,
      toggleCode,
      showAccount,
      accountText,
      filterLiabilities,
      filterAccount,
      accountType,
      liabilities,
      showCurrency,
      currencyText,
      filterCurrency,
      currencyList,
      toggleCurrency,
      inpFocus,
      inpFocus2,
      toggleAccountType,

      cities,
      transactionalAccounts,
      accountTypes,
      // selectAccountType,
      // selectedAccountType
    };
  },
};
</script>

<style scoped>
.row-border {
  border-bottom: 1px solid rgb(225, 225, 225);
}

.account-head {
  background: #e0e7eb;
  font-weight: 800;
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
  color: #136acd;
  font-weight: 800;
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
.flagCode div {
  width: 35em;
}
.flagCode div:hover {
  background: rgb(238, 238, 238);
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

.modal-lg {
  max-width: 670px;
}
</style>