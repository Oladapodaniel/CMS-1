<template>
<div >
        <div class="row">
            <div class="col-md-7 mt-5">
                 <div class="row mt-5 d-flex justify-content-md-between">
                    <div class="col-md-3">
                        

                    </div>
                    <div class="col-md-5">
                       <h5 class="appBranding">Social Media</h5> 
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                <div class="row mt-5 d-flex justify-content-md-between">
                    <div class="col-md-3">
                        

                    </div>
                    <div class="col-md-5">
                       <h5 class="colourText"></h5> 
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                <div class="row mt-5 d-flex justify-content-md-between">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-1">
                       <img src="../../../assets/social/facebook.svg" alt="">
                    </div>
                    <div class="col-md-5" id="logoBox">
                        <input type="text" class="w-100 py-1 border-0 outline-none px-2">

                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                <div class="row mt-4 d-flex justify-content-md-between">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-1">
                       <img src="../../../assets/social/twitter.svg" alt="">
                    </div>
                    <div class="col-md-5" id="logoBox">
                         <input type="text" class="w-100 py-1 border-0 outline-none px-2">

                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                <div class="row mt-4 d-flex justify-content-md-between">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-1">
                       <img src="../../../assets/social/instagram.svg" alt="">
                    </div>
                    <div class="col-md-5" id="logoBox">
                         <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                 <div class="row mt-4 d-flex justify-content-md-between">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-1">
                       <img src="../../../assets/social/instagram.svg" alt="">
                    </div>
                    <div class="col-md-2">
                        <h6 class="">YouTube Url</h6>
                    </div>
                    <div class="col-md-3" id="logoBox">
                         <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                 <div class="row mt-4 d-flex justify-content-md-between">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2">
                        <h6 class="p-0">Channel ID</h6>
                    </div>
                    <div class="col-md-3" id="logoBox">
                         <input type="text" class="w-100 py-1 border-0 outline-none px-2">
                    </div>
                    <div class="col-md-3">

                    </div>
                    
                </div>
                   
            </div>
            <div class="col-md-5">
                <div class="backgroundImage">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {ref} from 'vue'
    export default {
        setup(){
    // let url = ref("");
    // let image = ref("");
    // const imageSelected = (e) => {
    //   image.value = e.target.files[0];
    //   url.value = URL.createObjectURL(image.value);
    //   memberToEdit.value.pictureUrl = URL.createObjectURL(image.value);
    // };
    return{
        // imageSelected,
        // memberToEdit

    }
        }
        
    }
</script>

<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
}
.backgroundImage{
    background-image: url("../../../assets/mobileonboarding/socialimage.svg");
    background-repeat: no-repeat,repeat;
    background-size: cover;
    background-color: #cccccc;
    height: 850px;
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

</style>