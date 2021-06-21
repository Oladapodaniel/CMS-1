<template>
    <div class="container-fluid ">
        <div class="row border">
            <div class="col-12 border col-md-7 col-lg-7" style="height: 99.5vh; border-radius: 30px;">
                <div class=" container  ">
                    <div class="row justify-content-center">
                        <div class=" col-10 my-5 "><img src="../../../assets/logoblue.png" style="height: 35px; width: 250px" alt=""></div>
                        <div class="col-10 my-3">
                            <h1 class="font-weight-bold ">Create an account</h1>
                        </div>
                    </div>
                    <form action="" class="row justify-content-center mb-3">
                        <div class="col-10">
                             <label class="font-weight-bold">What's your name?</label>
                        </div>
                        <div class="col-5  form-group">
                            <input type="text" class=" form-control  font-italic all-input " placeholder="Last name">
                        </div>
                        <div class="col-5 form-group">
                            <input type="text" class=" form-control all-input font-italic" placeholder="First name">
                        </div>
                        <div class="col-10 form-group">
                            <label class="font-weight-bold ">Email/Phone number</label>
                            <input type="text" class=" form-control all-input  font-italic" placeholder="Enter email/phone number">
                        </div>
                        <div class="col-5 ">
                            <label class="font-weight-bold" >Role</label>
                            <Dropdown 
                            class="w-100  all-input font-italic"
                            :options="selectMonths"
                            placeholder="Select role"
                             />
                        </div>
                        <div class="col-5 form-group">
                            <label class="font-weight-bold"> Password </label>
                            <input type="password" class=" form-control all-input font-italic" placeholder="Enter password">
                            <span>Must be six character long</span>
                        </div>
                        <div class="col-10"><button class="btn btn-primary create-btn font-weight-bold w-100">Create an account</button></div>                       
                    </form>
                    <div class="row my-3 justify-content-center ">
                        <div class="col-4  border-bottom "></div>
                        <div class="col-1 text-center">or </div>
                        <div class="col-4  border-bottom "></div>
                    </div>
                    
                    <div class="row justify-content-center ">
                        <!-- Social Media -->
                        <div class="col-2"><img src="../../../assets/google.png" alt=""></div>
                        <div class="col-2"><img src="" alt=""></div>
                        <div class="col-2"><img src="../../../assets/facebook.png" alt=""></div>
                        <div class="col-10 my-4 text-center font-weight-bold"><span>Already have an account?</span><a href="">Sign in now</a></div>
                        <div class="col-10 mt-3 font-weight-bold">All Right Reserved 2021</div>
                    </div>
                    
                    
                </div>
            </div>
            <div class="col-5  childimage d-none d-md-block  d-lg-block" >
                   <div class="text-white "><h1>Churchplus <br> Child Checkin <br> System</h1></div>
                <!-- <img src="../../../assets/child1.png" alt=""> -->
            </div>
        </div>
    </div>
    
</template>
<script>
import Dropdown from "primevue/dropdown";

export default ({
    components: { Dropdown },
    setup() {
    //       const selectMonths = ref([
    //   { name: "1", code: "NY" },
    //   { name: "2", code: "RM" },
    //   { name: "3", code: "LDN" },
    //   { name: "4", code: "IST" },
    //   { name: "5", code: "PRS" },
    //   { name: "6", code: "NY" },
    //   { name: "7", code: "RM" },
    //   { name: "8", code: "LDN" },
    //   { name: "9", code: "IST" },
    //   { name: "10", code: "PRS" },
    //   { name: "11", code: "IST" },
    //   { name: "12", code: "PRS" },
    // ]);



    // return {
    //     selectMonths
    // };
    },
})
</script>

<style scoped>
.all-input{
    height: 50px;
    background: #F6F6F6 0% 0% no-repeat padding-box;
}
.create-btn{
    background: #2E67CE 0% 0% no-repeat padding-box;
    height: 50px;
}
.childimage{
    /* height: 700px; */
    background: transparent url('../../../assets/child1.png') 0% 0% no-repeat padding-box;
    opacity: 1;
    top: 0px;
    /* left: 1133px; */
    width: 650px;
    height: 99.5vh; 
    border-radius: 30px;
    position: relative;
}
.childimage h1 {
    position: absolute;
    top: 40%;
    left: 230px ;
    font-weight: bolder;
    font-size: 60px;
}

</style>
