<template>
<div class="container-fluid">
        <div class="row">
            <div class="col-md-12 px-0">
                    <div class="dropdown">
                      <div class="contact dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" @click="focusSearch">Select contact <i class="chevron-down"></i></div>
                      
                      <div
                        class="dropdown-menu w-100 p-2 dropdown-height"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <input
                            type="text"
                            class="form-control"
                            id="dropdownMenuButton"
                            v-model="userSearchString"
                            @input="searchForUsers"
                            ref="searchRef"
                        />

                        <a
                          class="dropdown-item"
                          href="#"
                          v-for="(member, index) in members"
                          :key="index"
                           @click="selectMember(member)"
                          >{{ member.firstName }} {{ member.lastName }}</a
                        >
                      </div>
                    </div>
                  </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import axios from "@/gateway/backendapi";
export default {
    setup () {
        const userSearchString = ref("")
        const searchRef = ref("")
        const members = ref([])

        const getMembers = async () => {
          try {
            const { data } = await axios.get('/api/People/GetPeopleBasicInfo');
            members.value = data;
          } catch (error) {
            console.log(error);
          }
        };
        getMembers();

        const selectMember = (member) => {
          userSearchString.value = member.name;
        }

        const focusSearch = () => {
          // nextTick(() => {
            searchRef.value.focus();
          // })
        }

        return {
            userSearchString,
            selectMember,
            members,
            focusSearch,
            searchRef
        }
    }
}
</script>

<style scoped>
.contact {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #cbd6e2;
    border-radius: 0
}

.dropdown-height {
  height: 200px;
  overflow: scroll;
}
</style>