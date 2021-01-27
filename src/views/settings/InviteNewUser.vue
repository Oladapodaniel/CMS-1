<template>
    <div>
        <div container>
            <h1 class="mt-3 font-weight-bolder">Grace Ministry Users</h1>
            <p>You can invite a new user to access your ChurchPlus account. Only give access to people you trust, since users can see your transactions and other business information.</p>
            <div class="invite-container">
                <h4 class="font-weight-bold">Invite New User</h4>
                <div class="row">
                    <div class="col-md-8 new">
                        <p>
                        <span class="">Username</span>  <InputText type="text" class="w-50" v-model="value" />
                        </p>
                        <p>
                         <span>Password</span>  <Password v-model="value" class="w-50" />
                        </p>
                        <p>
                       <span class="">Confirm Password</span>  <Password v-model="value" class="w-50" />
                        </p>
                        <p>
                         <span> Email</span> <InputText type="text" v-model="value" />
                        </p>
                        <p>
                       <span>Secret Questions</span>  <InputText type="text" v-model="value" />
                        </p>
                        <p>
                        <span>Secret Answers</span>  <InputText type="text" v-model="value" />
                        </p>

                    </div>
                    <div class="col-md-4">

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>


<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
    export default {
        components:{InputText, Password}
        
    }
</script>

<style scoped>
.invite-container{
    width: 100%;
    margin-top: 50px;
    margin-left: 14px;
    height: 800px;

}
.new span{
    text-align: right;
}

</style>