<template>
  <div class="row" v-for="(item, index) in data.accountHeadsDTO" :key="index">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 py-2 mt-4 account-head">
          {{ item.name }} <small class="font-weight-normal">{{ item.groupSubHead }}</small
          ><i class="fa fa-question-circle-o help" aria-hidden="true"></i>
        </div>
      </div>
      <div
        class="row row-border align-items-center py-2"
        v-for="(itm, indx) in item.accounts"
        :key="indx"
      >
        <div class="col-6 col-md-2">{{ itm.code }}</div>
        <div class="col-6 col-md-3">
          <div class="desc-head">{{ itm.name }}</div>
        </div>
        <div class="col-6 col-md-5">{{ itm.description }}</div>
        <div class="col-6 col-md-2 text-right">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </div>
      </div>
      <div class="row row-border align-items-center py-3" v-if="item.accounts.length === 0">
        <div class="col-10 offset-md-2 text-center text-md-left">
          You have not added any inventory yet.
        </div>
      </div>
      <!-- <div class="row row-border align-items-center">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
          <div>Cash on Hand</div>
          <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5">
          {{ item.description }}
        </div>
        <div class="col-6 col-md-2 text-right">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </div>
      </div> -->
      <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
          <div class="add-account py-2">
            <a
              @click="setGroupId(item.name)"
              class="c-pointer text-decoration-none primary-text"
              data-toggle="modal"
              data-target="#incModal"
              ><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new
              Account</a
            >
          </div>
        </div>
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
                ref="closeAccountModalBtn"
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
                :index="3"
                @save-account="closeAccountModal"
                :accountGroupId="accountGroupId"
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
    props: [ "data" ],
  components: { CreateAccountModal },
  setup(props, { emit }) {
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


    const accountGroupId = ref("");
    const setGroupId = (groupId) => {
      accountGroupId.value = groupId;
    }

    const closeAccountModalBtn = ref(null)
    const closeAccountModal = (data) => {
        closeAccountModalBtn.value.click();
        if (data.success) {
            emit("reload");
        }
    }

    return {
      view,
      accountTypes,
      currencyList,
      accounts,
      currencies,
      showFundsField,
      setGroupId,
      accountGroupId,
      closeAccountModal,
      closeAccountModalBtn,
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