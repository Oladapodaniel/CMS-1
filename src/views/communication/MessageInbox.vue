!<template>
  <div>
    <div class="container">
      <!-- Content Box -->
      <main id="main" class="mt-3">
        <div class="container-fluid px-0">
          <div class="row px-0">
            <div class="col-md-12 px-0">
              <div
                class="row d-md-flex justify-content-between align-items-center mt-3 mb-4"
              >
                <div class="col-md-8 col-sm-12 pl-0">
                  <div class="search-div">
                    <span><i class="fa fa-search mr-1"></i></span>
                    <input type="text" placeholder="Search here..." />
                    <span class="float-right">
                      <span class="mx-2"> | </span>
                      <span class="mx-2">Sort By</span>
                      <span class="font-weight-bold"> Newest</span>
                    </span>
                  </div>
                </div>
                <div class="col-sm-5 col-md-3 ml-2 mt-sm-2 units-container">
                  <div class="row d-sm-flex align-items-center units-div">
                    <div class="col-sm-12">
                      <h4 class="font-weight-bold mb-0 center-flexed">302</h4>
                      <p class="font-weight-bold mb-0 center-flexed">
                        SMS Units
                      </p>
                    </div>
                    <div class="col-sm-12 d-sm-flex justify-content-center">
                      <button
                        class="btn buy-btn center-flexed mt-2"
                        @click="payWithPaystack"
                      >
                        <span class="btn-text"> BUY UNITS </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row table-box mb-4">
                <div class="col-md-12">
                  <div class="row header-row light-grey-bg py-2">
                    <div class="col-md-12 px-0">
                      <div class="row">
                        <div class="col-md-1 text-md-right text-lg-center px-0">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-5">
                          <span class="th">MESSAGE</span>
                        </div>
                        <div class="col-md-2">
                          <span class="th">SENT BY</span>
                        </div>
                        <div class="col-md-2">
                          <span class="th">UNITS</span>
                        </div>
                        <div class="col-md-2">
                          <span class="th">DELIVERY REPORT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 px-0">
                      <hr class="hr mt-0" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-5 d-md-flex flex-column">
                          <span
                            class="d-flex justify-content-between msg-n-time"
                          >
                            <span class="font-weight-bold">message</span>
                            <span class="timestamp">Today | 08:45 PM</span>
                          </span>
                          <span class="brief-message"
                            >Lorem ipsum dolor sit amet...</span
                          >
                        </div>
                        <div
                          class="col-md-2 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >SENT BY:
                          </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-2 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >UNITS:
                          </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-2 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >DELIVER REPORT:
                          </span>
                          <span class="view-btn">View</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 px-0">
                          <hr class="hr" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-5 d-md-flex flex-column">
                          <span
                            class="d-flex justify-content-between msg-n-time"
                          >
                            <span class="font-weight-bold">message</span>
                            <span class="timestamp">Today | 08:45 PM</span>
                          </span>
                          <span class="brief-message"
                            >Lorem ipsum dolor sit amet...</span
                          >
                        </div>
                        <div
                          class="col-md-2 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-2 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-2 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span class="view-btn">View</span>
                        </div>
                      </div>
                      <!-- <div class="row">
                        <div class="col-md-12">
                          <hr class="hr" />
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
// import { onMounted } from 'vue';

export default {
  // setup() {
  //   const getSentSMS = async () => {
  //     try {
  //       const res = await axios.get("/api/Messaging/getAllSentSms");
  //       console.log(res, "sent sms");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   onMounted(() => {
  //     console.log("Hello");
  //     getSentSMS()
  //   })
  // }

  methods: {
    payWithPaystack(e) {
      e.preventDefault();

      /*eslint no-undef: "warn"*/
      let handler = PaystackPop.setup({
        key: "pk_test_9a8895ede03716b9a0474fea6da11ec5bc1c7033",
        email: "stgodstar@gmail.com",
        // email: document.getElementById("email").value,
        amount: 100 * 100,
        firstname: "Godstar",
        lastname: "Gerrald",
        onClose: function () {
          swal("Transaction Canceled!", { icon: "error" });
        },
        callback: function (response) {
          //Route to where you confirm payment status
          console.log(response, "response");
          var returnres = {
            smsUnit: 66,
            transaction_Reference: response.reference,
            amount: 100 * 100,
          };
          //Route to where you confirm payment status

          axios.post('/api/Payment/buySms', returnres)
            .then(res => {
              console.log(res, "success data");
            })
            .catch(err => {
              console.log(err, "error confirming payment");
            })
          // window.location =
          //   "https://localhost:44364/api/Payment/buySms?=" + returnres;
        },
      });
      handler.openIframe();
    },
  },
};
</script>

<style scoped>
.search-div {
  width: fit-content;
  padding: 10px;
  background: #f5f8f9;
  border-radius: 200px;
}

.search-div input {
  background: none;
  border: none;
  outline: transparent;
}

.brief-message {
  color: #4762f0;
}

.compose-btn {
  background: #136acd;
  box-shadow: 0px 6px 12px #708eb170;
  border-radius: 22px;
  color: #fff;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon {
  font-size: 20px;
}

.units-div {
  border: 1px solid #dde2e6;
  border-radius: 20px;
  padding: 15px 0;
  background: #f9a9a933 !important;
}

.hidden-header {
  display: none;
}

.th {
  font-size: 12px;
  font-weight: 700;
}

.inbox-count {
  background: rgba(19, 106, 205, 0.3);
  padding: 4px 8px;
  border-radius: 22px;
}

.menu-item-con {
  color: #002044;
  opacity: 0.5;
}

.menu-item-con.active {
  background: rgba(19, 106, 205, 0.05);
  border-left: 2px solid #136acd;
  opacity: 1;
}

.buy-btn {
  background: rgb(112, 142, 177, 0.33);
  border-radius: 22px;
}

.btn-text {
  opacity: 1;
  font-size: 11px;
  font-weight: 700;
}

.timestamp {
  font-size: 14px;
  color: #333333;
  opacity: 0.5;
}

.view-btn {
  background: #ebeff4;
  border-radius: 21px;
  padding: 4px 18px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-flexed {
  display: flex;
  justify-content: center;
}

.table-box {
  border: 1px solid #4762f01f;
}

.hr {
  border: 1px solid #4762f01f;
}

@media screen and (max-width: 767px) {
  .hidden-header {
    display: inline-block;
    font-size: 12px;
  }

  .header-row {
    display: none;
  }

  #menu-items {
    flex-direction: row !important;
  }

  .search-div {
    width: 100%;
  }

  .units-div {
    width: 100%;
  }

  .units-container {
    margin-left: 0;
    margin: auto;
  }
}

@media screen and (max-width: 1000px) {
  .msg-n-time {
    flex-direction: column;
    margin-bottom: 8px;
  }
}

@media screen and (min-width: 1000px) {
  #menu-items {
    min-width: 100% !important;
  }
}
</style>