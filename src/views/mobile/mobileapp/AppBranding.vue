<template>
<div >
        <div class="row">
            <div class="col-md-7 col-12 mt-5">
                 <div class="row mt-5 d-flex justify-content-md-between">
                    <div class="col-md-3 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12">
                       <h5 class="appBranding text-center text-lg-left text-md-left text-xl-left">App Branding</h5> 
                    </div>
                    <div class="col-md-1 col-12">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                <div class="row mt-5 d-flex px-5 px-md-0 px-xl-0 px-lg-0 justify-content-md-between">
                    <div class="col-md-3 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12">
                       <h5 class="colourText">Colour</h5> 
                    </div>
                    <div class="col-md-1 col-12">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                 <div class="row mt-5 d-flex px-5 px-md-0 px-lg-0 px-xl-0 justify-content-md-between">
                    <div class="col-md-3 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12">
                       <h5 class="primaryColour">Primary Colour</h5> 
                    </div>
                    <div class="col-md-1 col-12" id="primaryColour">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                <hr class="mt-2 d-none d-sm-none  d-md-block">
                 <div class="row mt-3 px-5 px-md-0 px-lg-0 px-xl-0  d-flex justify-content-md-between">
                    <div class="col-md-3 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12">
                       <h5 class="primaryColour">Secondary Colour</h5> 
                    </div>
                    <div class="col-md-1 col-12" id="secondaryColour">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                <hr class="mt-2 d-none d-sm-none  d-md-block">
                <div class="row mt-3 px-5 px-md-0 px-lg-0 px-xl-0 d-flex justify-content-md-between">
                    <div class="col-md-3 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12">
                       <h5 class="primaryColour">Test Colour</h5> 
                    </div>
                    <div class="col-md-1 col-12" id="TestColour">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                <hr class="mt-2 d-none d-sm-none  d-md-block">
                <div class="row mt-5 d-flex px-5 px-md-0 px-lg-0 px-xl-0  justify-content-md-between">
                    <div class="col-md-3 col-12">
                    </div>
                    <div class="col-md-1 col-12">
                       <h5 class="logo">Logo</h5> 
                    </div>
                    <div class="col-md-5 col-12" id="logoBox">
                         <div class="cs-input border-0 mt-2 ml-4">
                    <label for="imgUpload" class="choose-file">
                      Choose file
                      <input
                        type="file"
                        class="input file-input"
                        placeholder=""
                        id="imgUpload"
                        @change="imageSelected"
                      />
                    </label>
                  </div>

                    </div>
                    <div class=" col-md-3 col-12">

                    </div>
                    
                </div>
                   
            </div>
            <div class="col-md-5 col-sm-12  d-none d-sm-none  d-md-block">
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
    background-image: url("../../../assets/mobileonboarding/app1.svg");
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
width: 558px;
height: 0px;
margin:auto;

}
#logoBox{
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DDE2E6;
border-radius: 5px;
opacity: 1; 
width: 437px;
height: 45px;

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