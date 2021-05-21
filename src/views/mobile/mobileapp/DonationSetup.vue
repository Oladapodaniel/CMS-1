<template>
    <div class="container-fluid">
        <!-- write up part -->
        <div class="row">
          <div class="col-md-7 mt-5" :class="{ 'slide-right' : slide }">
            <div class="row">
              <DonationSetup  @payment-form="formCreated"/>
            </div>
          </div>

            <!-- image part -->
            <div class="col-md-5 col-12 bg-image d-none d-md-block" :class="{ 'slide-left' : slide }">
                <div class="row mt-3">
                    <div class="col-md-12 text-center my-5 step">STEP 1 of 4</div>
                </div>
                <div class="image-dis">
                    <img src="../../../assets/mobileonboarding/church1.svg" style="height:40%; width:40%;">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"
import router from '../../../router'
import DonationSetup from "../../donation/PaymentTransaction"
export default {
    components: {
        DonationSetup
    },
    setup () {
        const pastors = ref([{}])
        const slide = ref(false)



        const addPastors = () => {
          pastors.value.push({})
        }

        const deleteItem = (index) => {
          pastors.value.splice(index, 1)
        }

        const saveSetUp = () => {
          router.push({ name: 'SocialMedia' })
        }

        const formCreated = (payload) => {
            slide.value = payload
        }

        return {
            pastors,
            addPastors,
            deleteItem,
            saveSetUp,
            formCreated,
            slide
        }
    }
}
</script>
<style scoped>
.setup {
     color: #031C39;
     font: normal normal 800 30px/40px Nunito Sans;
}
    .check-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color:#136ACD;
}
.pi {
    color: #fff;
    margin-top: 6px;
    margin-left: 2px;
}
.btn-button{
 border-radius: 25px!important;
 width: 40%;
 height: 25px;
 line-height: 10px;
}
.bg-image{
    background: transparent linear-gradient(180deg, #2E67CE 0%, #690C7F 100%) 0% 0% no-repeat padding-box;
    height: 133vh;
}
.image-dis {
    display: flex;
    justify-content: center;
    align-items: center;
}
.next-btn {
    background: #F1FAFF 0% 0% no-repeat padding-box;
    border: 0.20000000298023224px solid #7894A6;
    border-radius: 23px;
    opacity: 1;
}
.next-text {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    opacity: 1;
}
.step {
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
/* Add pastor style */
.modal-title {
  margin-left: 2rem;
}
.form-cover {
  margin-left: 1.5rem !important;
  width: 100%;
}
.form-group {
  margin-top: 0rem !important;
}
.form-group label {
  padding-top: 0;
  font-weight: bold;
}

.form-control {
  width: 98%;
}

.select option {
  width: 150px;
}

.upload-Btn {
  border-radius: 25px;
  height: 30px;
  width: 90px;
  line-height: 15px;
}

.container {
  width: 100%;
  height: 35vh;

  border-radius: 27px !important;
  background: rgb(248, 248, 249);
  margin-top: 0.3rem;
}

.photo-box {
  border-radius: 27px;
  width: 95%;
  height: 55%;
  background-color: rgb(100%, 100%, 100%);
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
}

.social-input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  /* end add pastor detail */
}
.bg-mission {
    background: #DEDEDE61 0% 0% no-repeat padding-box;
    border: 1px solid #D2CFCF5C;
    border-radius: 24px;
    opacity: 0.64;
    height: 30px;
    padding-right: 50px
}
.mission {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #002044;
}
.edit {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #136ACD;
    cursor: pointer;
}

.pastors-name {
  font: normal normal 600 16px/22px Nunito Sans;
}

.edit-pastor-details {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136ACD;
  cursor: pointer;
}

.btnIcons {
    color: #136acd;
    background-color: #dde2e6;
    border-radius: 40px;
    border: none;
    padding: 7px;
    text-align: center
}

.slide-left {
    transition: all 1s ease-in-out;
    transform: translateX(-596px);
}

.slide-right {
    transition: all 1s ease-in-out;
    transform: translateX(478px);
}
</style>
