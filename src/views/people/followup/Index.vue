<template>
    <div>
        <div class="container-wide container-top">
            <div class="row my-3 d-flex justify-content-between">
            <div class="first-timers-text">
                <h2 class="page-header">Follow up</h2>
            </div>

            <div class="head-button">
                <router-link to="/">
                <button class="default-btn mr-3" @click="logout">Logout</button>
                </router-link>
            </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">People</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Task</a>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">People</a>
                    </li> -->
                    </ul>
                    <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <PeopleToFollowUp :contacts="contacts"/>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <FollowUpTask :tasks="tasks"/>
                    </div>
                    <!-- <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        
                    </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import PeopleToFollowUp from './PeopleToFollowUp.vue'
import FollowUpTask from './FollowUpTask.vue'
import axios from "@/gateway/backendapi";
export default {
    components: {
        PeopleToFollowUp: PeopleToFollowUp,
        FollowUpTask
    },
    setup () {
        const contacts = ref([])
        const tasks = ref([])

        const getFollowUpContactDetails = async() => {
            try {
                const { data } = await axios.get('/api/FirsttimerManager/contactstofollow')
                console.log(data)
                contacts.value = data.people
                tasks.value = data.tasks
            }
            catch (err) {
                console.log(err)
            }
        }
        getFollowUpContactDetails()

        const logout = () => {
            localStorage.removeItem('token')
        
        }
        return {
            contacts,
            tasks,
            logout
        }
    }
}
</script>

<style scoped>

</style>