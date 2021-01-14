<template>
  <div class="container-slim">
    <div class="container-fluid">
      <div class="row d-md-flex justify-content-between yu mt-5">
        <div class="col-md-4">
          <h2>Groups</h2>
        </div>
        <div class="col-md-4 mt-2 link">
          <router-link
            to="/tenant/create-people-group"
            class="grey-border primary-btn"
            >Add New Group</router-link
          >
        </div>
        <div class="col-md-12 px-0">
          <hr class="hr" />
        </div>
      </div>

      <div class="row mt-4 grey-rounded-border">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-center">
                  <input class="my-2" type="checkbox" />
                </div>
                <div class="col-md-4 d-md-flex align-items-center">
                  <span class="my-2 font-weight-bold">GROUP NAME</span>
                </div>
                <div class="col-md-4 d-md-flex align-items-center">
                  <span class="my-2 font-weight-bold">MEMBERSHIP SIZE</span>
                </div>
                <div class="col-md-2 d-md-flex align-items-center"></div>
              </div>
              <div class="row">
                <div class="col-md-12 px-0">
                  <hr class="hr my-0" />
                </div>
              </div>
            </div>
          </div>

          <div class="row" v-if="loading">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-12 d-flex align-items-center justify-content-center"
                >
                  <i
                    class="fas fa-circle-notch fa-spin py-4"
                    v-if="loading"
                  ></i>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 px-0">
                  <hr class="hr my-0" />
                </div>
              </div>
            </div>
          </div>

          <div class="row" v-for="(group, index) in groups" :key="index">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-center">
                  <input class="my-2" type="checkbox" />
                </div>
                <div class="col-md-4 d-md-flex align-items-center">
                  <span class="my-2 name-link">
                    <router-link
                      :to="`/tenant/create-people-group/${group.id}`"
                      >{{ group.name }}</router-link
                    >
                  </span>
                </div>
                <div class="col-md-4 d-md-flex align-items-center">
                  <span class="my-2">{{ group.peopleInGroupsCount }}</span>
                </div>
                <div class="col-md-2 d-md-flex align-items-center">
                  <div class="dropdown">
                    <i
                      class="fas fa-ellipsis-v cursor-pointer"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></i>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item">
                        <router-link
                          :to="`/tenant/sms-communications/compose-message?group=${group.name}groupId=${group.id}`"
                          >Send SMS</router-link
                        >
                      </a>
                      <a class="dropdown-item">
                        <router-link to="">Send Email</router-link>
                      </a>
                      <a class="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 px-0">
                  <hr class="hr my-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "@/gateway/backendapi";
// import router from "@/router/index";

export default {
  setup() {
    const groups = ref([]);
    const loading = ref(false);
    const getgroups = async () => {
      try {
        loading.value = true;
        const res = await axios.get("/api/GetAllGroupBasicInformation");
        (loading.value = false),
          (groups.value = res.data.map((i) => {
            return {
              dateCreated: i.dateCreated,
              description: i.description,
              name: i.name,
              id: i.id,
              tenantID: i.tenantID,
              peopleInGroupsCount: i.peopleInGroupsCount,
            };
          }));
        console.log(groups.value);
      } catch (error) {
        (loading.value = false), console.log(error.response);
      }
    };
    onMounted(() => {
      getgroups();
    });

    return {
      groups,
      loading,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.yu {
  margin-top: 5rem !important;
}

.dropdown-menu a {
  color: #02172e;
}

.link a {
  text-decoration: none;
}

.link a:hover {
  color: #fff;
}
</style>