<template>
<div class="container-wide container-top">
      <div class="row my-3">
      <div class="col-md-4 first-timers-text">
        <h2 class="page-header">Payment Forms</h2>
      </div>

      <div class="col-md-8 d-flex head-button">
        <router-link to="/tenant/offeringcategory">
          <button class="more-btn h-100 button align-items-center default-btn border-0">
              More
              <span><i class="fa fa-angle-down btn-icon"></i></span>
            </button>
        </router-link>
        <router-link to="/tenant/payments" class="add-person-btn no-underline button default-btn border-0 ml-3">
          Make Payments
        </router-link>
      </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <hr class="hr" />
        </div>
      </div>

      <div v-if="loading">
        <Loader />
    </div>

    <div class="no-person" v-if="paymentList.length === 0 && !loading">
        <div class="empty-img">
            <p><img src="../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any payment forms yet</p>
        </div>
    </div>
    <div v-if="paymentList.length > 0 && !loading">
        <PaymentList :paymentList="paymentList" @delete-payment="deletePayment"/>
    </div>
</div>

</template>

<script>
import { ref } from 'vue'
// import { useStore } from 'vuex'
// import { store } from "../../../store/store"
import axios from "@/gateway/backendapi"
import PaymentList from './PaymentList'
import Loader from '../accounting/offering/SkeletonLoader'
export default {
    components: {
         Loader, PaymentList
    },
    setup () {
        const paymentList = ref([])
        const loading = ref(false)


        const getPaymentList = () => {
            // let store = useStore()
            // console.log(store.getters['contributions/paymentList'])
            // if (store.getters['contributions/paymentList'].length > 0) {
            //     paymentList.value = store.getters['contributions/paymentList']
            // } else {
                loading.value = true
                axios
                    .get("/api/PaymentForm/GetAll")
                    .then((res) => {
                        loading.value = false
                    paymentList.value = res.data;
                    console.log(res.data);
                    })
                    .catch((err) => {
                        loading.value = false
                        console.log(err)
                    });
            // }
    
    // get from  to store
    
    // savev to sstore
    // store.dispatch('contributions/contributionList')
    };
    getPaymentList();

    const deletePayment = (payload) => {
      paymentList.value = paymentList.value.filter(
                  (item) => item.id !== payload
                );
    }
        return  {
            paymentList, loading, deletePayment
        }
    }
}
</script>

<style scoped>
.page-header {
    font: normal normal 800 29px Nunito sans;
}

.head-button {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 577px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .add-btn {
    margin-top: 10px
  } 
}

@media (max-width: 575px) {
  .head-button {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 767px) {
   .first-timers-text {
    text-align: center;
  }
  .head-button {
    display: flex;
    justify-content: center
  }
 }

 /* .add-btn {
  width: 180px;
  background: #136acd;
  border-radius: 22px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
} */

.add-person-btn {
  background: #136acd;
  color: #fff;
}


 .more-btn {
  background: #dde2e6;
  width: 160px
}

.no-person {
  height: 80vh;
  display: flex;
  text-align: center;
}

.empty-img {
  width: 30%;
  min-width: 397px;
  margin: auto;
}

.empty-img img {
  width: 100%;
  max-width: 200px;
}
.btn-icon {
  padding: 0 8px;
}

.no-underline {
  text-decoration: none
}
</style>