<template>
  <div class="row">
    <div class="col-12 py-2 mt-4 account-head">
      Utility Expenses<i
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
      <div class="desc-head">Accounting Fees</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Accountin or bookkeeping services for your business.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Vehicle Expenses<i
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
      <div class="desc-head">Equipment Rental</div>
      <div class="desc">No trasaction for this account</div>
    </div>
    <div class="col-6 col-md-5">
      Rental costs of machinery or equipment your business needs to operate or
      produce goods or services.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Program Expenses<i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any Payment Processing Fee yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Accounting Fees</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Accountin or bookkeeping services for your business.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Salary/Wages Expenses<i
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
      <div class="desc-head">Insurance - Worker's Compensation</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Rental cost of machinery or equipment your business to operate or produce
      goods and services.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Management<i class="fa fa-question-circle-o help" aria-hidden="true"></i>
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
      <div class="desc-head">Uncategorized Expense</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      A business cost you haven't categorized yet. Categorize it now to keep
      your records accurate.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Administration Expenses<i
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
      <div class="desc-head">Loss on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange losses happen whwen the exchange rate between your
      business home's currency and foreign currency trasaction changes results
      in a loss.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Building & Equipment<i
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
      <div class="desc-head">Loss on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange losses happen whwen the exchange rate between your
      business home's currency and foreign currency trasaction changes results
      in a loss.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Depreciation Expenses<i
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
      <div class="desc-head">Loss on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange losses happen whwen the exchange rate between your
      business home's currency and foreign currency trasaction changes results
      in a loss.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Ministry Expenses<i
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
      <div class="desc-head">Loss on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange losses happen whwen the exchange rate between your
      business home's currency and foreign currency trasaction changes results
      in a loss.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#expModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <!-- BT MODAL -->
      <div
        class="modal fade"
        id="expModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="expModalLabel"
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
                :currencies="currencies"
                :showFundsField="true"
                :financialAccountType="3"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- END BT -->
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import CreateAccountModal from "./components/CreateAccountForm";
import transactionals from "./utilities/transactionals";
export default {
  components: { CreateAccountModal },
  setup() {
    const view = ref(true);

    const accounts = ref([]);
    const getAccounts = async () => {
      try {
        accounts.value = await transactionals.getTransactionalAccounts();
        console.log(accounts.value);
      } catch (error) {
        console.log(error);
      }
    };
    getAccounts();

    const currencyList = ref([]);
    const getCurrencies = async () => {
      try {
        const response = await transactionals.getCurrencies();
        currencyList.value = response;
      } catch (error) {
        console.log(error);
      }
    };
    getCurrencies();

    const currencies = computed(() => {
      console.log(currencyList.value, "c list");
      if (!currencyList.value || currencyList.value.length === 0) return [];
      return currencyList.value;
    });
    const accountTypes = transactionals.accountTypes;

    return {
      view,
      accountTypes,
      currencyList,
      accounts,
      currencies,
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

.modal-lg {
    max-width: 670px;
}
</style>