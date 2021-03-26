<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mt-5 col-md-6">
                    <h1 class=" header1">Overview</h1>
                </div>
                <div class="mt-5 col-md-6"> 
                    <span class="">
                        <i class="pi pi-search mr-3"></i>
                     </span>
                     <input type="text" placeholder="search" class="border-0">
                    <hr>

                </div>

            </div>
            <div class="row d-flex justify-content-between mt-5">
                <div class="col-md-2 box1">
                    <div class="row mt-3 mb-5">
                        <div class="col-md-6 ">
                            <span>
                                 <img src="../../../assets/social/facebook.svg" alt="">
                            </span>
                        </div>
                         <div class="col-md-6 per">
                             +1%

                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12">
                           <h2 class="text-center">33445</h2>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div>Followers</div>
                        </div>
                         <div class="col-md-6">

                        </div>
                    </div>
                </div>
                <div class="col-md-2 box1">
                    <div class="row mt-3 mb-5">
                        <div class="col-md-6 ">
                            <span>
                                 <img src="../../../assets/social/instagram.svg" alt="">
                            </span>
                        </div>
                         <div class="col-md-6 per">
                             +3%

                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12">
                           <h2 class="text-center">444</h2>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div>Followers</div>
                        </div>
                         <div class="col-md-6">

                        </div>
                    </div>
                </div>
                <div class="col-md-2 box1">
                    <div class="row mt-3 mb-5">
                        <div class="col-md-6 ">
                            <span>
                                 <img src="../../../assets/social/twitter.svg" alt="">
                            </span>
                        </div>
                         <div class="col-md-6 per">
                             +3%

                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12">
                           <h2 class="text-center">234</h2>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div>Followers</div>
                        </div>
                         <div class="col-md-6">

                        </div>
                    </div>
                </div>
                <div class="col-md-2 box1">
                    <div class="row mt-3 mb-5">
                        <div class="col-md-6 ">
                            <span>
                                <img src="../../../assets/social/whatsapp.svg" alt="">
                            </span>
                        </div>
                         <div class="col-md-6 per">
                             +3%

                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12">
                           <h2 class="text-center">124</h2>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div>Followers</div>
                        </div>
                         <div class="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-5">
                    <h2 class="range">Range Stats</h2>

                </div>
                <div class="col-md-5">
                    <input type="date" class="border-0 d-flex justify-content-end">
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <Button label="Likes" badge="8" icon="pi pi-check" iconPos="right" class="p-button-raised p-button-rounded mt-3 mb-3" />

                </div>
                <div class="col-md-4 post">
                    
                    
                </div>
            </div>
             <div class="row d-flex justify-content-between mt-5">
                <div class="col-md-3 like px-4 py-4">
                    <div class="row">
                        <div class="col-md-4">
                            <span><i class="pi pi-check"></i></span>
                            

                        </div>
                        <div class="col-md-8">
                            <h3 class="tot">Total likes</h3>
                        </div>
                        <div class="col-md-12 text-center num">
                            <h3>2445</h3>
                        </div>

                    </div>

                </div>
                 <div class="col-md-3 like px-4 py-4">
                    <div class="row">
                        <div class="col-md-4">
                            <span><i class="pi pi-check"></i></span>
                            

                        </div>
                        <div class="col-md-8">
                            <h3 class="tot">Total likes</h3>
                        </div>
                        <div class="col-md-12 text-center num">
                            <h3>244</h3>
                        </div>

                    </div>

                </div>
                 <div class="col-md-3 like px-4 py-4">
                    <div class="row">
                        <div class="col-md-4">
                            <span><i class="pi pi-check"></i></span>
                            

                        </div>
                        <div class="col-md-8">
                            <h3 class="tot">Total likes</h3>
                        </div>
                        <div class="col-md-12 text-center num">
                            <h3>244</h3>
                        </div>

                    </div>

                </div>
            </div>
          
          

        </div>
     
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header1{
text-align: left;
font: normal normal bold 34px/46px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;

}
.box1{
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #708EB152;
border-radius: 15px;
opacity: 1;

}
.per{
font: normal normal bold 14px/19px Nunito Sans;
letter-spacing: 0px;
color: #50AB00;
opacity: 1;
}
.range{
font: normal normal bold 22px/30px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.post{
width: 319px;
height: 430px;
background: #1369CD 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
}
.like{
background: #F8F8FA 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
}
.num{
font: normal normal bold 38px/51px Nunito Sans;
letter-spacing: 0px;
color: #020F1E;
opacity: 1;
}
.tot{
font: normal normal 800 16px/22px Nunito Sans;
letter-spacing: 0px;
color: #020F1E;
opacity: 0.6;
}
</style>