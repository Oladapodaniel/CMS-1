<template>
<div class="container-wide">
        <!-- write up part -->
        <div class="row"  style="height: 100vh">
          <div class="col-md-6 mt-5">
            <div class="row">
              <div class="col-12 setup">  Social Media</div>
              </div>
            <div class="row d-flex justify-content-md-between px-5 px-md-0 px-xl-0 px-lg-0">
                    <div class="col-md-3 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12">
                       <h5 class="colourText"></h5> 
                    </div>
                    <div class="col-md-1 col-12">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                <div class="row mt-5 ">
                    <div class="col-12 col-sm-2 mt-3">
                       <img src="../../../assets/social/facebook.svg" alt="">
                    </div>
                    <div class="col-md-8 col-12 mt-3" id="logoBox">
                        <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-2"></div>
                    <div class="col-12 col-sm-2 mt-3">

                       <img src="../../../assets/social/twitter.svg" alt="">
                    </div>
                    <div class="col-md-8 col-12 mt-3" id="logoBox">
                        <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-2"></div>
                    
                    <div class="col-12 col-sm-2 mt-3">
                       <img src="../../../assets/social/instagram.svg" alt="">
                    </div>
                    <div class="col-md-8 col-12 mt-3" id="logoBox">
                        <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-2"></div>
                    
                    <div class="col-12 col-md-2 mt-3">
                       <img src="../../../assets/mobileonboarding/youtube.svg" alt="">
                    </div>
                    <div class="col-12 col-md-2 mt-3">
                       YouTube URL
                    </div>
                    <div class="col-md-6 col-12 mt-3" id="logoBox">
                        <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-2"></div>
                    
                    <div class="col-12 col-md-2 mt-3">
                       <!-- <img src="../../../assets/mobileonboarding/youtube.svg" alt=""> -->
                    </div>
                    <div class="col-12 col-md-2 mt-3">
                        Channel ID
                    </div>
                    <div class="col-md-6 col-12 mt-3" id="logoBox">
                        <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>

                    <div class="col-10 offset-1 offset-md-0 btn primary-bg mt-5 text-white default-btn border-0" @click="saveSocialMedia">
                    Save and continue
                    </div>
 
                    
                </div>
          </div>

            <!-- image part -->
            <div class="col-md-6 col-12 bg-image d-none d-md-block">
                <div class="row mt-3">
                    <div class="col-md-12 text-center my-5 step">STEP 1 of 2</div>
                </div>
                <div> 
                </div>
            </div>
        </div>
    </div> 



<div >

    </div>
</template>

<script>
import router from '../../../router'
// import {ref} from 'vue'
    export default {
        setup(){
        

        const saveSocialMedia = () => {
              router.push({ name: 'AppBranding' })
        }
        return{
            saveSocialMedia
        }
    }
        
}
</script>

<style scoped>
.setup {
     color: #031C39;
     font: normal normal 800 30px/40px Nunito Sans;
}
.backgroundImage{
    background-image: url("../../../assets/mobileonboarding/socialimage.svg");
    background-repeat: no-repeat,repeat;
    background-size: cover;
    background-color: #cccccc;
    height: 100vh;
    width: 100%;
}
.appHeading1{
font: normal normal 800 20px/60px Nunito Sans;
letter-spacing: 0px;
color: #031C39;
opacity: 1;
}
#primaryColour{
width: 76px;
height: 34px;
background: #136ACD;
border-radius: 5px;
opacity: 1;
}
#secondaryColour{
width: 76px;
height: 34px;
background: #FF5D00 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
}
#TestColour{
width: 76px;
height: 34px;
background: #FD0604 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
}
hr{
width: 523px;
height: 0px;
margin:auto;

}
#logoBox{
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DDE2E6;
border-radius: 5px;
opacity: 1; 
width: 437px;
height: 40px;

}
.colourText{
text-align: left;
font: normal normal bold 18px/24px Nunito Sans;
letter-spacing: 0px;
color: #020E1C;
opacity: 1;

}
.appBranding{
text-align: left;
font: normal normal 800 44px/60px Nunito Sans;
letter-spacing: 0px;
color: #031C39;
opacity: 1;

}
.primaryColour{
text-align: left;
font: normal normal bold 18px/24px Nunito Sans;
letter-spacing: 0px;
color: #020E1C;
opacity: 1;  
}
.logo{
    text-align: left;
font: normal normal bold 24px/32px Nunito Sans;
letter-spacing: 0px;
color: #020E1C;
opacity: 1;
}
.button1{
background: #F1FAFF 0% 0% no-repeat padding-box;
border: 0.20000000298023224px solid #7894A6;
border-radius: 23px;
opacity: 1;
width: 180px;
height: 46px;
color: #136ACD;
}
.button2{
    text-align: center;
    height: 0;
    position: absolute;
    top: 80%;
    right: 40%;
   
}
.dash{
width: 41px;
height: 4px;
background: #136ACD 0% 0% no-repeat padding-box;
border-radius: 11px;
opacity: 1;
}
.dash1{
width: 41px;
height: 4px;
background: #f7f8fa 0% 0% no-repeat padding-box;
border-radius: 11px;
opacity: 1;
}
.smallButton{
background: #F1FAFF 0% 0% no-repeat padding-box;
border: 0.20000000298023224px solid #7894A6;
border-radius: 23px;
opacity: 1;
width: 180px;
height: 46px;
}

.image-dis {
    display: flex;
    justify-content: center;
    align-items: center;
}
.bg-image {
    background-image: url(../../../assets/mobileonboarding/socialimage.svg);
    background-size: cover;

}

.step{
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}


</style>