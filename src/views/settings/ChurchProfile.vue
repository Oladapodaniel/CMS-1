<template>
  <form @submit.prevent="onSubmit">
    <div class="container my-content">
      <div class="row page-header">
        <div class="col-12">
          <h3 class="header-text font-weight-bold">Church Profile</h3>
        </div>
      </div>

      <div class="row form-container">
        <div class="col-10 offset-1 offset-sm-0 col-sm-12">
          <span class="sub-header">Church Details </span>
          <div class="row first-row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="firstname" class="small-text">Name</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
                name=""
                id="firstname"
                required
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Aka/Parish</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text" class="form-control input" name="" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text">Address</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text" class="form-control input" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Phone number</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text" class="form-control input" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Email</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input type="text" class="form-control input" />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text">Country</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                :options="[1, 2, 3, 4, 5]"
                placeholder="Select Country"
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text">Time zone</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                :options="[1, 2, 3, 4, 5]"
                placeholder="Select Country"
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Website URL</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
              <div class="col-md-12 px-">
                  <hr class="hr">
              </div>
          </div>

          <!-- Event attended -->
          <div class="row select-elem">
            <div class="col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Pastor's Detail</label>
            </div>
            <div class="col-12 col-md-5 form-group">
                
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Name</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for="">Email</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text" for=""></label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <button class="primary-btn text-white px-4">Save</button>
            </div>
            <div class="col-md-4"></div>
          </div>


        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import { ref, onMounted, computed } from "vue";
// import axios from "@/gateway/backendapi";
// import router from "@/router/index";
import Dropdown from "primevue/dropdown";
// import { getCurrentInstance } from "vue";

export default {
  components: { Dropdown },

};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #02172e;
}

.page-header {
  margin-bottom: 21px;
  margin-top: 15px;
}

.page-header h2 {
  color: #02172e;
  font-weight: 800;
  font-size: 30px;
}

.sub-header {
  color: #002044;
  font-size: 20px;
  font-weight: 700;
}

.form-container {
  margin-bottom: 44px;
}

.input {
  height: 40px;
  border: 1px solid #b9c5cf;
}

.first-row {
  margin-top: 10px;
}

.day-inp {
  border-radius: 8px 0 0 8px;
}

.month-inp {
  border-radius: 0;
}

.year-inp {
  border-radius: 0 8px 8px 0;
}

.select-elem {
  /* height: 50px !important; */
}

#welcomeSms,
#welcomeEmail {
  margin-top: 6px;
  margin-left: 10px;
}

.check-box {
  width: 1.2em;
  height: 1em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #b9c5cf;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.action-btn {
  background: #fff;
  border: 1px solid #002044;
  border-radius: 111px;
  width: 121px;
  height: 49px;
  outline: transparent;
}

.save-btn {
  color: #fff;
  background: #136acd;
  border-radius: 111px;
  width: 121px;
  height: 49px;
  outline: transparent;
  /* margin-left: 40px; */
}

.required {
  color: #ef0535;
}

@media screen and (max-width: 767px) {
  .select-elem {
    height: auto !important;
  }

  .select-div {
    padding: 0.8rem !important;
  }
}

.check-box:checked {
  background-color: #0f529f;
}

@media screen and (max-width: 770px) {
  .follow-up-header {
    flex-direction: column;
    justify-content: flex-start;
  }

  .followup-hr-span,
  .hr-span {
    width: 100% !important;
  }

  .sub-header {
    width: 100%;
  }
}

@media screen and (min-width: 770px) and (max-width: 1190px) {
  .followup-hr-span {
    width: 60% !important;
  }
}
</style>