<template>
  <div class="options-container">
    <div class="header">
      <p class="header-text">You haven't added any member yet</p>
    </div>
    <div class="options">
      <div class="option" @click="addPerson(`/tenant/${userId}/add-person`)">
        <div class="option-img">
          <img src="../../assets/people/phone-import.svg" alt="Phone Import" />
        </div>
        <div class="option-desc">
          <p class="option-header">Add members</p>
          <p class="option-text">Stay compliant by keeping accurate records</p>
        </div>
      </div>

      <div class="option">
        <div class="option-img">
          <img src="../../assets/people/file-import.svg" alt="File Import" />
        </div>
        <div class="option-desc">
          <p class="option-header">Import from Excel</p>
          <p class="option-text">Stay compliant by keeping accurate records</p>
        </div>
      </div>

      <div class="option">
        <div class="option-img">
          <img src="../../assets/people/file-import.svg" alt="File Import" />
        </div>
        <div class="option-desc">
          <p class="option-header">Import from Other Source</p>
          <p class="option-text">Stay compliant by keeping accurate records</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import { onMounted, ref } from "vue";
import store from "@/store/store"
import axios from "@/gateway/backendapi";

export default {
  setup() {
    const addPerson = (path) => router.push(path);
    const userId = ref('')

    onMounted(() => {
      if (store.getters.currentUser.tenantId) {
        userId.value = store.getters.currentUser.tenantId;
      } else {
        axios
          .get("/api/Membership/GetCurrentSignedInUser")
          .then((res) => {
            userId.value = res.data.tenantId;
          })
          .catch((err) => console.log(err.response));
      }
    });

    return {
      addPerson,
      userId,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #02172e;
}

.options-container .header .header-text {
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
}

.header {
  text-align: center;
  padding: 20px 0;
}

.options {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.option {
  min-width: 200px;
  background: green;
  padding: 20px;
  background: #ffffff;
  margin: 8px;
  font-weight: normal;
  transition: all 0.4s ease-in;
  border-radius: 10px;
  box-shadow: 0px 2px 15px #0000000f;
}

.option-header {
  font-size: 17px;
  font-weight: 600;
}

.option-text {
  font-size: 14px;
}

.option:hover {
  cursor: pointer;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.options .option .option-img {
  width: 70%;
  margin: auto;
}

.option .option-img img {
  width: 100%;
}

.options .option .option-desc {
  text-align: center;
}

@media screen and (min-width: 900px) {
  .option {
    width: 28%;
  }
}
</style>