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
                    <div class="col-md-3 col-12 col-sm-0">
                        

                    </div>
                    <div class="col-md-5 col-12 col-sm-8">
                       <h5 class="primaryColour mt-4">Primary Colour</h5> 
                    </div>
                    <div class="col-md-1 col-sm-4 col-12" >
                        <span>Select Colours </span>
                        <label for="colorpicker"></label>
                         <input type="color" id="colorpicker" class="no-border form-control" value="#828282">
                    </div>
                    <div class="col-md-3 col-sm-0 col-12">

                    </div>
                     <hr class="mt-2 d-none d-sm-none  d-md-block">
                    
                </div>
               
                 <div class="row mt-3 px-5 px-md-0 px-lg-0 px-xl-0  d-flex justify-content-md-between">
                    <div class="col-md-3 col-sm-0 col-12">
                        

                    </div>
                    <div class="col-md-5 col-12 col-sm-8">
                       <h5 class="primaryColour mt-4">Secondary Colour</h5> 
                    </div>
                    <div class="col-md-1 col-12 col-sm-4">
                        <span>Select Colours </span>
                        <label for="colorpicker"></label>
                         <input type="color" id="colorpicker" class="no-border form-control" value="#828282">
                    </div>
                    <div class="col-md-3 col-12 col-sm-0">

                    </div>
                    <hr class="mt-2 d-none d-sm-none  d-md-block">
                    
                </div>
                
                <div class="row mt-3 px-5 px-md-0 px-lg-0 px-xl-0 d-flex justify-content-md-between">
                    <div class="col-md-3 col-12 col-sm-0">
                        

                    </div>
                    <div class="col-md-5 col-12 col-sm-8">
                       <h5 class="primaryColour mt-4">Test Colour</h5> 
                    </div>
                    <div class="col-md-1 col-12 col-sm-4">
                        <span>Pick Colours</span>
                         <label for="colorpicker"></label> 
                         <input type="color" id="colorpicker" class="no-border form-control" value="#828282">

                        
                    </div>
                    <div class="col-md-3 col-12 col-sm-0">

                    </div>
                    <hr class="mt-2 d-none d-sm-none  d-md-block">
                    
                </div>
                
                <div class="row mt-5 d-flex px-5 px-md-0 px-lg-0 px-xl-0  justify-content-md-between">
                    <div class="col-md-3 col-12 col-0">
                    </div>
                    <div class="col-md-1 col-12 col-sm-8">
                       <h5 class="logo">Logo</h5> 
                    </div>
                    <div class="col-md-5 col-12 col-sm-4" id="logoBox">
                         <div class="cs-input border-0 mt-2 ml-4">
                    <label for="imgUpload" class="choose-file mr-sm-4">
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
                    <div class=" col-md-3 col-12 col-sm0">

                    </div>
                    
                </div>
                <!--small sreen display-->
                 <div class="row mt-4 d-flex justify-content-md-between px-5 px-md-0 px-xl-0 px-lg-0 d-block d-sm-block d-md-none d-lg-none d-xl-none  ">
                    <div class="col-md-3 col-12">
                    </div>
                    <div class="col-md-1 col-12">
                    </div>
                    <div class="col-md-2 col-12 mb-2 mb-md-0 mb-lg-0 mb-xl-0">
                        <div class="col-12 text-center">
                        <button class="smallButton">Next</button>
                        <div class="mt-5 d-flex justify-content-center">
                        <div class="dash">

                        </div>
                        <div class="dash1">

                        </div>
                        <div class="dash1">

                        </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                    </div>
                    <div class="col-md-3 col-12">

                    </div>
                    
                </div>
                   
            </div>
            <div class="col-md-5 col-sm-12  d-none d-sm-none  d-md-block">
                <div class="backgroundImage">
                <div class="button2">
                    <button class="button1">Next</button>
                    <div class="mt-5 d-flex justify-content-between">
                    <div class="dash">

                    </div>
                    <div class="dash1">

                    </div>
                    <div class="dash1">

                    </div>
                    </div>
                    </div>
                    
                     
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
     position: relative;
}
.appHeading1{
font: normal normal 800 20px/60px Nunito Sans;
letter-spacing: 0px;
color: #031C39;
opacity: 1;
}
/* #colorpicker{
width: 95px;
height: 34px;
background: #136ACD;
border-radius: 5px;
opacity: 1;
cursor: pointer;
} */
.no-border{
border-radius: 20px;
opacity: 1;
cursor: pointer;
border: none;
box-shadow: none;
outline-style: 0;

}
/* #secondaryColour{
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
} */
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
/* #colorpicker{
text-align: left;
font: normal normal bold 18px/24px Nunito Sans;
letter-spacing: 0px;
color: #020E1C;
opacity: 1;  
} */
#colorpicker {
  -webkit-appearance: none;
  padding: 0;
  border: none;
  border-radius: 10px;
  /* width: 20px;
  height: 20px; */
}
#colorpicker::-webkit-color-swatch {
  border: none;
  border-radius: 10px;
  padding: 0;
}
#colorpicker::-webkit-color-swatch-wrapper {
  border: none;
  border-radius: 10px;
  padding: 0;
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

</style>