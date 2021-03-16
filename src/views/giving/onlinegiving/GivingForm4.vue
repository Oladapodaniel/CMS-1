
<template>
  <div>
    <!-- nav section area -->
    <div class="container-fluid nav-color sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg nav-color2">
          <a class="navbar-brand" href="#"
            ><img
              class="img-fluid logo"
              src="../../../assets/ChurchplusLogo2-highres.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="text-white" href="#"
                  >Fountain of Grace<span class="sr-only">(current)</span></a
                >
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
              <li class="nav-item lstyle mr-3">
                <a class="text-white" href="#">English</a>
              </li>
              <li class="nav-item lstyle">
                <a class="text-white" href="#"
                  >Your Account &nbsp; <i class="fas fa-user text-white"></i
                ></a>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!--end of nav section area -->

    <!-- body area -->
    <div class="container-fluid px-0">
      <div class="row mx-0">
        <div class="col-12 px-0">
          <div class="img">
            <p class="text-center text-white pt-5 main-font">Giving</p>
            <p class="text-center mt-n3 sub-main-font">
              Give and you will recieve. Luke - 6:38
            </p>

            <!-- form area -->
            <div class="container">
              <div class="row px-4">
                <div class="col-md-3 d-sm-none"></div>

                <div
                  class="col-md-6 mx-auto form-area shadow p-3 mb-5 bg-white rounded MIDDLE"
                >
                  <div class="row">
                    <div class="col-md-12 mx-auto my-3 px-0 px-3">
                      <label class="hfont">Purpose</label>
               
                      <Dropdown
                        v-model="selectedContributionType"
                        :options="formResponse.contributionItems"
                        optionLabel="financialContribution.name"
                        placeholder="Select"
                        class="w-100 px-0"
                      />
                    </div>
                  </div>

                  <div class="row d-flex">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-12">
                          <label class="hfont">Amount</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-5 pr-2">
                          <Dropdown
                            v-model="dfaultCurrency"
                            :options="currencyInput"
                            optionLabel="shortCode"
                            :placeholder="selectedContributionType.shortCode"
                            class="w-100 px-0"
                          />
                        </div>
                        <div class="col-md-7 pl-0">
                          <input
                            class="form-control col-md-12 text-left imp1 border"
                            type="text"
                            v-model="amount"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <!-- start of dynamic Area 1-->
                  <div class="row">
                    <div class="col-md-12">
                      <section>
                        <p class="col-md-4 hfont px-0 mb-1">
                          How often do you give:
                        </p>

                        <div class="col-12 mt-1 imp1">
                          <div class="row border rounded">
                            <div
                              class="col-md-6 fone p-3 text-center borderl default-color1"
                              :class="{ 'default-color': !hideTabOne }"
                              @click="toggleTabOne"
                            >
                              <span><i class="fas fa-donate"></i></span>&nbsp;
                              Give One Time
                            </div>
                            <div
                              class="col-md-6 p-3 fone text-center btn-default default-color1"
                              :class="{ 'default-color': hideTabOne }"
                              @click="toggleTabTwo"
                            >
                              <span
                                ><i class="fas fa-redo-alt"></i> &nbsp; Set up
                                recurring</span
                              >
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <!-- end of dynamic Area 1-->

                  <!-- start of dynamic Area 2-->
                  <div class="row">
                    <div class="col-md-12">
                      <section class="col-md-12 mt-3 px-0" v-if="hideTabOne">
                        <p class="col-10 hfont px-0 mb-1">Frequency:</p>

                        <div class="col-12 mt-1">
                          <div class="row border rounded">
                            <div
                              :class="{ 'default-color': oftenGive1 }"
                              class="col-md-3 fone p-3 text-center default-color1 borderl"
                              @click="givingOften"
                            >
                              Every Week
                            </div>
                            <div
                              :class="{ 'default-color': oftenGive2 }"
                              class="col-md-3 fone p-3 default-color1 text-center borderl"
                              @click="givingOften"
                            >
                              Every 2 Week
                            </div>
                            <div
                              :class="{ 'default-color': oftenGive3 }"
                              class="col-md-3 fone p-3 default-color1 text-center borderl"
                              @click="givingOften"
                            >
                              Every month
                            </div>
                            <div
                              class="col-md-3 p-3 fone text-center default-color1"
                              @click="givingOften"
                              :class="{ 'default-color': oftenGive4 }"
                            >
                              1st and 15th monthly
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <!-- end of dynamic Area 2 -->

                  <!-- start of date area -->
                  <section class="col-md-12 mt-3 px-0" v-if="hideTabOne">
                    <div class="row">
                      <p class="col-6 py-0 ml-1 hfont">Starting</p>
                      <div class="col-md-6 d-flex flex-row mt-n2">
                        <input
                          type="date"
                          class="form-control fone p-3 imp1"
                          v-model="date"
                        />
                      </div>
                    </div>
                  </section>
                  <!-- end of date area -->

                  <div class="row mt-2">
                    <div class="col-sm-1">
                      <Checkbox id="binary" v-model="checked" :binary="true" />
                    </div>
                    <div class="col-sm-10">
                      <label for="binary">As an anonymous</label>
                    </div>
                  </div>

                  <!-- start of user credentials area -->
                  <transition name="fade" mode="out-in">
  
        
                  <div class="row d-flex" v-if="checked">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12 mx-auto my-2 px-0 px-2">
                          <label class="hfont">Name</label>
                          <input
                            class="form-control col-md-12 text-left border imp2"
                            type="text"
                            placeholder="Enter your name"
                            v-model="name"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12 mx-auto my-2 px-0 px-2">
                          <label class="hfont">Phone Number</label>
                          <input
                            class="form-control col-md-12 text-left border imp2"
                            type="text"
                            v-model="phone"

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  </transition>
                  <!-- end of user credentials area -->

                  <!-- start of dynamic Area 3 -->
                  <div class="row">
                    <div class="col-md-12">
                      <section
                        class="col-10 offset-1 mt-3 px-0"
                        v-if="!hideTabOne || hideTabOne"
                      >
                        <!-- button section -->
                        <div class="row my-3" @click="donation">
                          <div class="col-md-12 text-center mt-4">
                            <button data-toggle="modal" data-target="#PaymentOptionModal"
                              class="btn btn-default btngive bt hfontb btt"
                            >
                              Give Now
                            </button>
                          </div>
                        </div>
                        <!--end of button section -->
                      </section>
                      <!-- <button type="button" class="btn btn-primary" >
            Launch demo modal
          </button> -->

                    <!-- Modal -->
                    <div class="modal fade" id="PaymentOptionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header bg-modal">
                            <h5 class="modal-title" id="exampleModalLongTitle">Payment methods</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body p-0 bg-modal pb-5">
                            <PaymentOptionModal :amount="amount" :name="name"/>
                          </div>
                          <!-- <div class="modal-footer bg-modal">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div> -->
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <!-- end of dynamic Area 3 -->
                </div>
              </div>

              <!-- payment Methods area -->
              <div class="container mt-n1">
                <div class="row">
                  <div class="col-md-3 d-sm-none d-md-block"></div>
                  <div class="col-md-6 d-flex justify-content-center">
                    <div class="col-1 px-1 ml-2">
                      <img
                        class="w-100"
                        src="../../../assets/2flutterwave.png"
                        alt=""
                      />
                    </div>
                    <div class="col-1 px-1">
                      <img
                        class="w-100"
                        src="../../../assets/1s519863150871.png"
                        alt=""
                      />
                    </div>
                    <div class="col-3 px-1">
                      <img
                        class="imgg w-100"
                        src="../../../assets/4PaystackLogo.png"
                        alt=""
                      />
                    </div>
                    <div class="col-1 px-0">
                      <img
                        class="w-100"
                        src="../../../assets/5visa_PNG30.png"
                        alt=""
                      />
                    </div>
                    <div class="col-1 px-1">
                      <img
                        class="w-100"
                        src="../../../assets/3MasterCard500.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-3 d-sm-none d-md-block"></div>
                </div>
              </div>
              <!-- payment Methods area -->
              <!-- Footer area -->
              <div class="container mt-5">
                <div class="row">
                  <div class="col-md-6 offset-md-3">
                    <div class="row hfont">
                      <p class="text-nowrap">
                        Churchplus <span><u>Terms & Conditions</u></span
                        >and
                        <span><u>Privacy Policy</u> </span>
                      </p>
                      <p class="mt-n2 text-wrap">
                        Organization Legal Name: Porters House Assembly |
                        Address:Iponri Lagos
                      </p>
                      <div class="col-12 px-0">
                        <hr />
                      </div>
                      <div class="col-md-4 px-0">
                        <img
                          class="logo img-fluid mb-5"
                          src="../../../assets/logoblue.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3"></div>
                </div>
              </div>
              <!--End of Footer area -->
              <!-- end of form area -->
            </div>
          </div>
        </div>
      </div>
      <!--end of body area -->
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import axios from "@/gateway/backendapi";
import PaymentOptionModal from "./PaymentOptionModal"
import Checkbox from 'primevue/checkbox';
export default {
  components: {
    PaymentOptionModal, Checkbox
  },
  setup() {
    const hideTabOne = ref(true);

    const toggleTabOne = () => {
      hideTabOne.value = false;
    };
    const toggleTabTwo = () => {
      hideTabOne.value = true;
    };

    const formResponse = ref({})
    const selectedContributionType = ref({});
    const funds = ref([]);

    const dfaultCurrency = ref("");
    const currencyInput = ref([]);

    const date = ref(new Date().toISOString().substr(0, 10));
    const oftenGive1 = ref(false);
    const oftenGive2 = ref(false);
    const oftenGive3 = ref(false);
    const oftenGive4 = ref(false);
    const amount = ref("")
    const name = ref("")
    const phone = ref("")
    const checked = ref(true)

    const givingOften = (e) => {
      console.log(e.target.innerText);
      // e.target.classList.add("default-color");
      // console.log(e.target.siblingElement);
      if (e.target.innerText == "Every Week") {
        oftenGive1.value = true;
        oftenGive2.value = false;
        oftenGive3.value = false;
        oftenGive4.value = false;
      } else if (e.target.innerText == "Every 2 Week") {
        oftenGive2.value = true;
        oftenGive1.value = false;
        oftenGive3.value = false;
        oftenGive4.value = false;
      } else if (e.target.innerText == "Every month") {
        oftenGive3.value = true;
        oftenGive1.value = false;
        oftenGive2.value = false;
        oftenGive4.value = false;
      } else {
        oftenGive4.value = true;
        oftenGive1.value = false;
        oftenGive2.value = false;
        oftenGive3.value = false;
      }
    };

    // getting contribution items
    const addfunds = () => {
      axios
        .get(
          // "/api/PaymentForm/GetOne?paymentFormID=4a276e37-a1e7-4077-a851-60b82180f4a0"
          "/give?paymentFormID=4A276E37-A1E7-4077-A851-60B82180F4A0"
        )
        .then((res) => {
          // funds.value = res.data.contributionItems;
          // console.log(funds.value, "kjjjhjjjje");
          // console.log(res.data);
          formResponse.value = res.data
          selectedContributionType.value = formResponse.value.currencyId
          console.log(formResponse.value);
        })
        .catch((err) => console.log(err.response));
    };
    addfunds();

    // getting currency
    const tcurrency = () => {
      axios
        .get("/api/LookUp/GetAllCurrencies")
        .then((res) => {
          currencyInput.value = res.data;
          console.log(res);
          for (let i = 0; 1 < res.data.length; i++) {
            if(formResponse.value.currencyId === res.data[i].id) {
              console.log(res.data[i], 'foundddd')
              selectedContributionType.value = res.data[i]
            } else {
              console.log('not found')
            }
            
          }
        })
        .catch((err) => console.log(err.response, "You know me! yes gang"));
    };
    tcurrency();

    const donation = () => {
          let donation = {
            payformFormId: formResponse.value.id,
            churchLogoUrl: formResponse.value.churchLogo,
            churchName: formResponse.value.churchName,
            tenantID: formResponse.value.tenantID,
            merchantID: formResponse.value.merchantId,
            name: name.value,
            email: 'oladapodaniel10@gmail.com',
            phone: phone.value,
            orderID: formResponse.value.orderId,
            currencyID: formResponse.value.currencyId,
            paymentGateway: formResponse.value.paymentGateWays,
            donationContribution: formResponse.value.contributionItems.map(i => {
              return {
                contributionItemId: i.financialContributionID,
                contributionItemName: i.financialContribution.name,
                amount: amount.value,
                contributionCurrencyId: formResponse.value.currencyId
              }
            })
          }
          console.log(donation)
          
          try {
            let  res  = axios.post('/api/PaymentForm/donation', donation)
            console.log(res)
          }
          catch (error) {
            console.log(error)
          }
          console.log(formResponse.value)
    }

    return {
      hideTabOne,
      toggleTabOne,
      funds,
      toggleTabTwo,
      Dropdown,
      selectedContributionType,
      date,
      givingOften,
      oftenGive1,
      oftenGive2,
      oftenGive3,
      oftenGive4,
      dfaultCurrency,
      currencyInput,
      amount,
      name,
      donation,
      formResponse,
      phone,
      checked
    };
  },
};
</script>

<style scoped>
.nav-color {
  background: #020f1e;
}
.nav-color2 {
  background: transparent;
}

.lstyle {
  list-style: none;
}

.logo {
  height: auto;
  object-fit: cover;
  max-width: 200px;
}

.img {
  /* width: 100vw; */
  height: 40vh;
  background: url("../../../assets/churchplusimage.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -o-object-fit: cover;
  object-fit: cover;
}

.main-font {
  font-size: 4.375rem;
}
.sub-main-font {
  font-size: 18px;
  color: #f17c30;
}

.form-area {
  background: #fff;
  border-radius: 8px;
  height: fit-content;
}

.fone {
  font-size: 10px;
  font-weight: 300;
  color: #80878d;
}

.hfont {
  font-size: 12px;
  font-weight: 400;
  color: #020f1e;
}

.imp1 {
  height: 100%;
}

.imp2 {
  height: 80%;
}

.default-color {
  background: #136acd;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.default-color1:hover {
  background: #0f58ac;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btt {
  width: 180px;
  height: 50px;
  border-radius: 10px;
}

.bt {
  background: #f17c30;
  background: #136acd;
  color: #fff;
}

.hfontb {
  font-weight: bold;
}

.pay-method {
  width: 100%;
  height: auto;
}

.borderl {
  border-right: 1px solid #dee2e6;
}

/* .mig {
  margin-top: 2rem;
}

.footer-area {
  position: absolute;
  top: 50rem;
}
.bg {
  background: #eeeeee;
} */

/* style for nav-header area */
/* .hcolor {
  background: #020f1e;
}


/*end of style for nav-header area */

/* start of style for card-area  */
/* .card-area {
  z-index: 1;
}

.givep {
  color: #f17c30;
  font-size: 20px;
  font-weight: 500;
} */
/* end of style of hero-image area  */

/* .mild {
  position: absolute;
  top: -20px;
  z-index: 9;
  background: white;
  border-radius: 0.8rem;
} */

/* .bord {
  background: #00000045;
  height: 1px;
} */

/* .input1 {
  border: none;
  max-height: 20rem;
  font-size: 80px;
  font-weight: 500;
} */
/* .input1:focus {
  border: none;
  outline: none;
  max-height: 20rem;
  font-size: 80px;
  font-weight: 500;
} */

/* .clean {
  z-index: 1;
} */
/*
.ash {
  position: absolute;
  font-size: 25px;
  font-weight: 400;
  top: 3rem;
  left: 3rem;
  z-index: 1;
} */

/* .btngive {
  width: 150px;
  background: #136acd;
  color: #fff;
} */

/* .default-color {
  background: #136acd;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
} */
/*
.default-color1:hover {
  background: #0f58ac;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
} */

.bg-modal {
  background: rgba(226, 226, 226, 0.514)
}
</style>