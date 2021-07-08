<template>
    <div class="container ward-table-wrapper">
        <div class="row my-3">
            <div class="col-md-10 mx-auto d-flex justify-content-end">
                <button class="default-btn font-weight-bold border primary-text add-ward-btn"
                    data-toggle="modal" data-target="#addWard"
                >Add ward</button>
            </div>
        </div>

        <div class="row th py-2" v-if="familyMembers.length > 0">
            <div class="col-md-1">
                <!-- <span class="py-2 font-weight-700">Picture</span> -->
            </div>
            <div class="col-md-7">
                <span class="py-2 font-weight-700">Name</span>
            </div>
            <div class="col-md-3">
                <span class="py-2 font-weight-700">Role</span>
            </div>
            <div class="col-md-1">
                <!-- <span class="py-2 font-weight-700">Role</span> -->
            </div>
        </div>
        <div v-else class="text-center border-top py-4 increase-font">
            When you add wards, they will show up here
        </div>
        
        <div class="row py-2" v-for="(member, index) in familyMembers" :key="index">
            <div class="col-md-1">
                <!-- <span class="py-2">
                    <img :src="member.pictureUrl" v-if="member.person.pictureUrl" class="member-image"/>
                </span> -->
            </div>
            <div class="col-md-7 align-self-center">
                <span class="py-2">{{ member.name ? member.name : "" }}</span>
            </div>
            <div class="col-md-3 align-self-center">
                <!-- <span class="py-2">{{ memberRoles.length > 0 ? memberRoles.find(i => i.id === member.familyRoleID).name : "" }}</span> -->
                <Dropdown class="p-0 w-100" :options="memberRoles" v-model="member.roleId" optionLabel="name" :filter="false" placeholder="Select role" :showClear="false">
                </Dropdown>
            </div>
            <div class="col-md-1 align-self-center">
                <!-- <span class="py-2">{{ member.name ? member.name : "" }}</span> -->
            </div>
        </div>

        <!-- <div class="row">
            <div class="col-md-12 px-0">
                <Ward />
            </div>
        </div> -->
    </div>
    
</template>

<script>
// import Ward from "./Ward"
import Dropdown from 'primevue/dropdown';
export default {
    props: ['familyMembers', 'memberRoles'],
    components: {
        Dropdown
    },
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>
    .th {
        background: #DDE2E6 0% 0% no-repeat padding-box;
    }

    .ward-table-wrapper {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DDE2E6;
        border-radius: 30px;
        opacity: 1;
    }

    .add-ward-btn {
        border: 1px solid #2E67CE !important;
    }

    .member-image {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }

    .increase-font {
        font-size: 1.1em
    }
</style>