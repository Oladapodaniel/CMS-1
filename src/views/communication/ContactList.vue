!<template>
  <div>
    <div class="container">
      <!-- Content Box -->
      <main id="main" class="mt-3">
        <div class="container-fluid px-0">
          <div class="row px-0">
            <div class="col-md-12 px-0">
              <div class="row d-md-flex align-items-center mt-2 mb-4">
                <div class="col-md-12">
                  <router-link
                  to="/tenant/sms-communications/add-group"
                    class="create-btn font-weigth-bold border-0"
                  >
                    <span class="mr-2" style="font-size: 22px">+</span> Create
                    new group
                  </router-link>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="row header-row">
                    <div class="col-md-12">
                      <div class="row light-grey-bg py-2">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-3">
                          <span class="th">NAME</span>
                        </div>
                        <div class="col-md-4">
                          <span class="th">TOTAL PHONE NUMBER</span>
                        </div>
                        <div class="col-md-3">
                          <span class="th">DATE & TIME CREATED</span>
                        </div>
                        <div class="col-md-1">
                          <span class="th"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <hr class="hr mt-0" />
                    </div>
                  </div>

                  <div class="row" v-for="(group, index) in groups" :key="index">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>

                        <div class="col-md-3 d-md-flex justify-content-between">
                          <span class="hidden-header">NAME: </span>
                          <span>
                            <router-link class="link" :to="{name: 'EditContactList', params: { groupId: group.id}}">{{ group.name }}</router-link>
                          </span>
                        </div>

                        <div
                          class="col-md-4 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >TOTAL PHONE NUMBER:
                          </span>
                          <span>{{ group.numbers }}</span>
                        </div>

                        <div
                          class="col-md-3 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header font-weight-bold"
                            >DATE & TIME CREATED
                          </span>
                          <span>{{ new Date(group.dateEntered).toLocaleDateString() }}</span>
                        </div>

                        <div class="col-md-1 col-ms-12">
                          <span><i class="fa fa-trash delete-icon"></i></span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <hr class="hr" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row" v-if="groups.length === 0 && !loading">
                    <div class="col-md-12 d-flex justify-content-center">
                      <span class="my-4 font-weight-bold">No groups</span>
                    </div>
                  </div>

                  <div class="row" v-if="groups.length === 0 && loading">
                    <div class="col-md-12 py-2 d-flex justify-content-center">
                      <i class="fas fa-circle-notch fa-spin"></i>
                    </div>
                  </div>

                  <!-- <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-1">
                          <input type="checkbox" />
                        </div>
                        <div class="col-md-2 d-md-flex justify-content-between">
                          <span class="hidden-header">SENDER: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-5 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span>message</span>
                        </div>
                        <div
                          class="col-md-3 col-ms-12 d-flex justify-content-between"
                        >
                          <span class="hidden-header">message: </span>
                          <span>message</span>
                        </div>
                        <div class="col-md-1 col-ms-12">
                          <span><i class="fa fa-trash delete-icon"></i></span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <hr class="hr" />
                        </div>
                      </div>
                    </div>
                  </div> -->

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
import { onMounted, ref } from 'vue';
import axios from "@/gateway/backendapi";

export default {
  setup() {
    const groups = ref([ ]);
    const loading = ref(false);

    const getGroups = async () => {
      try {
        loading.value = true;
        const res = await axios.get("/api/Messaging/getPhoneGroups");
        loading.value = false;
        console.log(res, "groups");
        groups.value = res.data;
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(() => {
      getGroups();
    })

    return {
      groups,
      loading,
    }
  }
};
</script>

<style scoped>
* {
  color:  #02172e;
}

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

.create-btn {
  background: #ebeff4;
  border-radius: 21px;
  padding: 4px 18px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  text-decoration: none;
}


.link {
  text-decoration: none;
  color: #136acd !important;
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