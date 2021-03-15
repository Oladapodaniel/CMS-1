<template>
  <div>
    <!-- BT MODAL -->
    <div class="container-fluid">
      <div class="row">
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row" v-if="!savingAccount">
              <div class="col-md-12">
                <div class="row my-3">
                  <div class="col-md-4 text-md-right">
                    Account Type <span class="text-danger">*</span>
                  </div>
                  <div class="col-md-7">
                    <div class="dropdown">
                      <button
                        class="btn btn-white w-100 border text-left"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {{
                          !selectedAccountType || !selectedAccountType.account
                            ? "Select account type"
                            : selectedAccountType.account
                        }}
                      </button>
                      <div
                        class="dropdown-menu w-100"
                        style="max-height: 300px; overflow: auto"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="container">
                          <div
                            class="row"
                            v-for="(accounts, index) in transactionalAccounts"
                            :key="index"
                          >
                            <div class="col-md-12 px-2">
                              <h6
                                class="mb-0 text-capitalize font-weight-bold"
                                v-if="accounts.length > 0"
                              >
                                {{ accountTypes[index] }}
                              </h6>
                            </div>
                            <div class="col-md-12">
                              <a
                                class="dropdown-item px-1 px-14"
                                href="#"
                                v-for="(account, indx) in accounts"
                                :key="indx"
                                @click="selectAccountType(account)"
                                >{{ account.text }}</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <Dropdown :options="cities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                  <template #optiongroup="slotProps">
                      <div class="p-d-flex p-ai-center country-item">
                          <div>{{slotProps.option.label}}</div>
                      </div>
                  </template>
              </Dropdown> -->
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col-md-4 text-md-right">
                    Account Name <span class="text-danger">*</span>
                  </div>
                  <div class="col-md-7">
                    <input
                      type="text"
                      v-model="newAccount.name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col-md-4 text-md-right">Account Currency</div>
                  <div class="col-md-7" id="currencySelect">
                    <Dropdown
                      v-model="selectedCurrency"
                      :options="filteredCurrencies"
                      optionLabel="name"
                      placeholder="Select account currency"
                      style="width: 100%"
                      :filter="true"
                    />
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col-md-4 text-md-right">Account ID</div>
                  <div class="col-md-7">
                    <input
                      type="text"
                      v-model="newAccount.accountID"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="row my-3" v-if="showFundsField">
                  <div class="col-md-4 text-md-right">Fund</div>
                  <div class="col-md-7">
                    <Dropdown
                      v-model="selectedFund"
                      :options="funds"
                      optionLabel="name"
                      style="width: 100%"
                    />
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col-md-4 text-md-right">Description</div>
                  <div class="col-md-7">
                    <textarea
                      v-model="newAccount.description"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="row my-4" v-if="savingAccount">
              <div class="col-md-12 text-center">
                <i class="pi pi-spin pi-spinner" style="fontSize: 5rem"></i>
              </div>
            </div>

            <div class="row my-3">
              <div class="col-md-4 text-md-right"></div>
              <div class="col-md-7">
                <p class="text-danger" v-if="invalidAccountDetails">
                  Please select account type and provide account name
                </p>
              </div>
            </div>
            <div class="row" style="border-top: 1px solid #dee2e6">
              <div class="col-md-12 d-flex justify-content-end mt-3">
                <button class="default-btn mr-3" data-dismiss="modal">
                  Cancel
                </button>
                <button
                  @click="onSave"
                  class="default-btn primary-bg border-0 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END BT -->
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import { computed, ref } from "vue";
import transactionals from "../utilities/transactionals";
import chart_of_accounts from "../../../../services/financials/chart_of_accounts";
import { useToast } from "primevue/usetoast";

export default {
  props: [
    "transactionalAccounts",
    "accountTypes",
    "currencies",
    "showFundsField",
    "financialAccountType",
  ],
  components: { Dropdown },
  setup(props, { emit }) {
    const toast = useToast();

    const selectedAccountType = ref({});
    const selectedCurrency = ref({});
    const selectedFund = ref({});
    const newAccount = ref({});

    const selectAccountType = (account) => {
      console.log(account, "account");
      selectedAccountType.value = account;
    };
    console.log(props.currencies, "testing");

    const filteredCurrencies = computed(() => {
      if (!props.currencies) return [];
      return props.currencies.map((i) => {
        return { name: `${i.name} - ${i.country}`, id: i.id };
      });
    });

    const funds = ref([]);
    const getFunds = async () => {
      try {
        const response = await transactionals.getFunds();
        funds.value = response;
      } catch (error) {
        console.log(error);
      }
    };
    getFunds();

    const savingAccount = ref(false);
    const saveAccount = async (body) => {
      try {
        savingAccount.value = true;
        const response = await chart_of_accounts.saveAccount(body);
        savingAccount.value = false;
        if (!response.status) {
            emit("save-account", { success: false, type: props.financialAccountType });
            toast.add({severity:'error', summary:'Account Creation Failed', detail:`An error occurred, please try again`, life: 3000});
        } else {
          emit("save-account", { success: false, type: props.financialAccountType });
            toast.add({severity:'success', summary:'Account Created', detail:`The account ${newAccount.value.name} was created successfully`, life: 2500});
            newAccount.value = { };
        }
        console.log(response, "save account response");
      } catch (error) {
        savingAccount.value = false;
        console.log(error);
      }
    };

    const invalidAccountDetails = ref(false);
    const onSave = () => {
      invalidAccountDetails.value = false;

      if (
        !selectedAccountType.value ||
        !selectedAccountType.value.accountType ||
        !newAccount.value.name
      ) {
        invalidAccountDetails.value = true;
        return false;
      }
        
      newAccount.value.accountType = props.financialAccountType;
      if (selectedAccountType.value && selectedAccountType.value.id) {
        // newAccount.a
        newAccount.value.code = selectedAccountType.value.code;
        newAccount.value.category = selectedAccountType.value.accountType;
      }

      if (selectedFund.value && selectedFund.value.id) {
        newAccount.value.financialFundID = selectedFund.value.id;
      }
      saveAccount(newAccount.value);
      console.log(newAccount.value, "new account");
    };

    return {
      selectAccountType,
      selectedAccountType,
      filteredCurrencies,
      funds,
      newAccount,
      selectedCurrency,
      selectedFund,
      onSave,
      invalidAccountDetails,
      savingAccount,
    };
  },
};
</script>

<style scoped>
.p-dropdown-items {
  width: 100px !important;
}
</style>