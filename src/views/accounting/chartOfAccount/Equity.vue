<template>
  <div class="row">
    <div class="col-12 py-2 mt-4 account-head">
      Unrestricted Funds Balances<i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any discount yet.
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Owner Investment / Drawings</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Owner investment reprsssent the amount of money or assets you put intp
      ypur business.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#accountModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
        <span class="text-capitalize">Donor Restricted Funds Balances</span><i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any discount yet.
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Owner's Equity</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Owner investment reprsssent the amount of money or assets you put intp
      ypur business.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#accountModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div
      class="modal fade"
      id="accountModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="accountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
              Add an account
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <CreateAccountModal
              :transactionalAccounts="accounts"
              :accountTypes="accountTypes"
              :currencies="currencyList"
            />
          </div>

          <div class="modal-footer">
            <div class="container">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-end">
                  <button class="default-btn mr-3" data-dismiss="modal">
                    Cancel
                  </button>
                  <button class="default-btn primary-bg border-0 text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import transactionUtil from "./utilities/transactionals";
import CreateAccountModal from "./components/CreateAccountForm";

export default {
    components: { CreateAccountModal },
  setup() {
    const accounts = ref([]);
    const getAccounts = async () => {
      try {
        accounts.value = await transactionUtil.getTransactionalAccounts();
        console.log(accounts.value);
      } catch (error) {
        console.log(error);
      }
    };
    getAccounts();

    const currencyList = ref([]);
    const getCurrencies = async () => {
      try {
        currencyList.value = await transactionUtil.getCurrencies();
        console.log(currencyList.value);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrencies();

    const accountTypes = transactionUtil.accountTypes;

    return {
      accountTypes,
      currencyList,
      accounts,
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
</style>