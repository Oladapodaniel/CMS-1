<template>
    <div class="dropdown">
        <input
            type="text"
            class="form-control dropdown-toggle"
            :class="{ 'phone-input' : stylesidebarinput }"
            id="dropdownMenuButton"
            v-model="userSearchString"
            @input="searchForUsers"
            ref="searchRef"
            data-toggle="dropdown"
            placeholder="Search from members"
        />
        <div
        class="dropdown-menu w-100 dropdown-height"
        aria-labelledby="dropdownMenuButton"
        >
        <i class="pl-1 m-0 pi pi-spin pi-spinner" v-if="loading && userSearchString.length >= 3"></i>
        <a
            class="dropdown-item c-pointer"
            v-for="(member, index) in members"
            :key="index"
            @click="selectMember(member)"
            >{{ member.name }}</a
        >
        <p class="pl-1 bg-secondary m-0" v-if="userSearchString.length < 3"> Enter 3 or more characters </p>
        <!-- <p class="pl-1 m-0 text-danger" v-if="members.length === 0 && userSearchString.length >= 3 && !loading">No member found, try again</p> -->
        
        <a
            class="dropdown-item font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text c-pointer"
            style="border-top: 1px solid rgb(0, 32, 68); color: rgb(19, 106, 205);"
            @click="() => display = true"
            >Add new member</a
        >
        </div>
    </div>
    <Dialog
        header="Create New Member"
        v-model:visible="display"
        :style="{ width: '70vw', maxWidth: '600px'}"
        :modal="true"
        position="top"
        >
        <div class="row">
            <div class="col-md-12">
            <NewPerson @cancel="() => display = false" @person-id="getPersonId($event)"/>
            </div>
        </div>
    </Dialog>
    
</template>

<script>
import { ref, watchEffect } from "vue"
import axios from "@/gateway/backendapi";
import NewPerson from './NewDonor.vue';
import Dialog from "primevue/dialog";
export default {
    emits: ['memberdetail'],
    props: ['currentMember', 'stylesidebarinput'],
    components: {
        NewPerson,
        Dialog
    },
    setup (props, { emit }) {
        const userSearchString = ref("")
        const searchRef = ref("")
        const members = ref([])
        const loading = ref(false)
        const display = ref(false)

        const searchForUsers = async () => {
            loading.value = true
          if (userSearchString.value.length >= 3) {
              try {
                const { data } = await axios.get(`/api/Membership/GetSearchedUSers?searchText=${userSearchString.value}`);
                members.value = data;
                console.log(data)
                loading.value = false
            } catch (error) {
                console.log(error);
                loading.value = false
            }
          } else if (userSearchString.value === "") {
              members.value = new Array()
          }
        };

        const selectMember = (member) => {
          userSearchString.value = member.name;
          emit('memberdetail', member)
        }

        // const focusSearch = () => {
        //   // nextTick(() => {
        //     searchRef.value.focus();
        //   // })
        // }

        watchEffect(() => {
            if (props.currentMember && Object.keys(props.currentMember).length > 0 && Object.keys(props.currentMember).find(i => i == 'id')) {
                console.log(props.currentMember)
                userSearchString.value = `${props.currentMember.name}`
            }
        })

        const getPersonId = ({ personEmail, personFirstName, personLastName, personId, personNumber }) => {
            // console.log(payload)
            const formatPayload = {
                email: personEmail,
                id: personId,
                name: `${personFirstName} ${personLastName}`,
                nameResult: `${personFirstName} ${personLastName} - ${personNumber}`,
                phone: personNumber
            }
            emit("memberdetail", formatPayload)
        }

        return {
            userSearchString,
            selectMember,
            members,
            // focusSearch,
            searchRef,
            searchForUsers,
            loading,
            getPersonId,
            display
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
  max-height: 200px;
  overflow: scroll;
}

.phone-input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #cbd6e2;
    border-radius: 0
}
</style>