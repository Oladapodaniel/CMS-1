<template>
<div>
       <div class="container-wide container-top">
      <div class="row my-3">
      <div class="col-md-4 first-timers-text">
        <h2 class="page-header">Online Donation</h2>
      </div>

      <div class="col-md-8 d-flex head-button">
        <router-link to="/tenant/contributionCategory">
          <!-- <button class="default-btn mr-3">View Donation Items</button> -->
        </router-link>
        <!-- <router-link to="/tenant/addoffering" class="add-btn">
          Add Donation
        </router-link> -->
      </div>
    </div>
    </div>

    <div class="container-wide">
      <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
    </div>

    <div v-if="loading">
        <Loader />
    </div>
    

    <div class="no-person"  v-if="donationTransactions.length === 0 && !loading">
        <div class="empty-img">
            <p><img src="../../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any online donation yet</p>
        </div>
    </div>
    <div v-if="donationTransactions.length > 0 && !loading">
        <OnlineDonation :donationTransactions="donationTransactions" @get-pages="getOfferingPages" @contri-transac="updateTransac" :totalItem="totalItem"/>
    </div>
</div>
</div>
 
</template>

<script>
import { ref } from 'vue'
// import { store } from "../../../store/store"
import axios from "@/gateway/backendapi"
// import OfferingList from './OfferingList'
import OnlineDonation from './components/OnlineDonation'
import Loader from '../../accounting/offering/SkeletonLoader'
export default {
    components: {
        OnlineDonation, Loader
    },
    setup () {
        const donationTransactions = ref([])
        const totalItem = ref(0)
        const loading = ref(false)


        const getDonationTransaction = () => {
          
           
                loading.value = true
                axios
                    .get("/api/Financials/Donation/Transactions")
                    .then((res) => {
                        loading.value = false
                   donationTransactions.value = res.data.returnObject.contribution;
                    totalItem.value = res.data.returnObject.totalItem
                    console.log(res.data);
                    })
                    .catch((err) => {
                        loading.value = false
                        console.log(err)
                    });
            
    
    // get from  to store
    
    // savev to sstore
    // store.dispatch('contributions/contributionList')
    };
    getDonationTransaction();

    const getOfferingPages = (payload) => {
     donationTransactions.value = payload.returnObject.contribution
    }

    const updateTransac = (payload) => {
     donationTransactions.value.splice(payload, 1)
    }
        return {
           donationTransactions, loading, getOfferingPages, updateTransac, totalItem
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

  .more {
    margin-right: 0;
  }

  .add-btn {
    margin-top: 10px
  } 
}

@media (max-width: 575px) {
  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }

  /* .add-btn,
  .more {
    margin-top: 10px;
  } */

  
}

.add-btn {
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

 @media (max-width: 767px) {
     

   .first-timers-text {
    text-align: center;
  }
  .head-button {
    display: flex;
    justify-content: center
  }
 }

</style>