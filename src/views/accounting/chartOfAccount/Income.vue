<template>
  <div class="row">
    <div class="col-12 py-2 mt-4 account-head">
      Offerings and Tithe Income<i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any credit card yet.
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Job Income</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">
      Income received for jobs or projects you perfomed.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Pledge Income
      <i class="fa fa-question-circle-o help" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any discount yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Job Income</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">
      Income received for jobs or projects you perfomed.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Investment Income<i
        class="fa fa-question-circle-o help"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <div class="row row-border align-items-center py-2">
    <div class="col-10 offset-md-2 text-center text-md-left">
      You haven't added any other income yet.
    </div>
  </div>
  <div v-if="false" class="row row-border align-items-center py-2">
    <div class="col-6 col-md-2"></div>
    <div class="col-6 col-md-3">
      <div class="desc-head">Job Income</div>
      <div class="desc">No transaction for this account</div>
    </div>
    <div class="col-6 col-md-5">
      Income received for jobs or projects you perfomed.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>

  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Fundraising Income
      <i class="fa fa-question-circle-o help" aria-hidden="true"></i>
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
      <div class="desc-head">Uncategorized Income</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Income you haven't categorized yet. Categorized it now to keepyour records
      accurate.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Income from Specific Operating Areas<i
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
      <div class="desc-head">Gain on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange gains happen when the excdhange ratebetween your
      business's home currency and a foreign currency transaction changes and
      results in a gain.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <!-- <div class="row">
    <div class="col-12 py-2 account-head">
      Other Operating Income<i
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
      <div class="desc-head">Gain on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange gains happen when the excdhange ratebetween your
      business's home currency and a foreign currency transaction changes and
      results in a gain.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div> -->

  <div class="row">
    <div class="col-12 py-2 account-head">
      Sales Income<i
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
      <div class="desc-head">Gain on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange gains happen when the excdhange ratebetween your
      business's home currency and a foreign currency transaction changes and
      results in a gain.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Net Assets Release from Restrictions<i
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
      <div class="desc-head">Gain on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange gains happen when the excdhange ratebetween your
      business's home currency and a foreign currency transaction changes and
      results in a gain.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 py-2 account-head">
      Other Income<i
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
      <div class="desc-head">Gain on Foreign Exchange</div>
      <div class="desc">Last Transaction on January, 10 2021</div>
    </div>
    <div class="col-6 col-md-5">
      Foreign exchange gains happen when the excdhange ratebetween your
      business's home currency and a foreign currency transaction changes and
      results in a gain.
    </div>
    <div class="col-6 col-md-2 text-right">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row">
    <div class="col-10 offset-md-2 text-center text-md-left">
      <div class="add-account py-3">
        <a class="c-pointer text-decoration-none primary-text" data-toggle="modal" data-target="#incModal"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <!-- BT MODAL -->
      <div
        class="modal fade"
        id="incModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="incModalLabel"
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
                :financialAccountType="2"
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
    const showFundsField = ref(true);

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
      showFundsField,
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