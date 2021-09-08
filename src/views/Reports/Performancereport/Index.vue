<template>
    <div class="container">
        <div class="font-weight-bold">Performance</div>
         <div class="row mt-5">
         <div class="col-md-12 col-12 text-center">
            <div class="row  border rounded report d-flex justify-content-between p-2 p-md-4">
                
                <div class="col-md-6 col-12 pr-md-4 p-0">
                    <h4 class="ju header4">Attendance</h4>
                    <p class="ju paragraph1">Accurate information and keeping proper records make your ministry effective </p>


                </div>
                <div class="col-md-5 col-12 border-bottom">
                    <div class="row d-md-flex justify-content-md-between d-flex justify-content-between">
                       <h4 class="ju header4 d-md-flex justify-content-md-start" style="color: #136acd">Attendance Report</h4>
                         <span><i class="pi pi-angle-right" style="font-size: 30px; color: #136acd"></i></span>
                    </div>
                    <div class="row">
                        <p class="ju mb-3 paragraph1">This reports provides a detailed Attendance of your ministry</p>
                    </div>
                </div>
                
                <div class="col-md-6 col-12 pr-md-4 p-0">
                </div>
                <div class="col-md-5 col-12 mt-4">
                    <div class="row d-md-flex justify-content-md-between d-flex justify-content-between">
                        <router-link to="/tenant/attendancereport" class="linked"> <h4 class="ju header4 d-md-flex justify-content-md-start" style="color: #136acd">Group Category Report</h4></router-link>
                         <router-link to="/tenant/attendancereport"><span><i class="pi pi-angle-right" style="font-size: 30px; color: #136acd"></i></span></router-link>
                    </div>
                    <div class="row">
                        <p class="ju mb-3 paragraph1">This reports provides a detailed Group Category Attendance of your ministry</p>
                    </div>
                </div>

            </div>
     </div>
    </div>
    <div class="row mt-5">
         <div class="col-md-12 col-12 text-center">
            <div class="row  border rounded report d-flex justify-content-between p-2 p-md-4">
                
                <div class="col-md-6 col-12 pr-md-4 p-0">
                    <h4 class="ju header4">Performance</h4>
                    <p class="ju paragraph1">Accurate information and keeping proper records make your ministry effective </p>


                </div>
                <div class="col-md-5 col-12 border-bottom">
                    <div class="row d-md-flex justify-content-md-between d-flex justify-content-between">
                       <router-link to="/tenant/firsttimerperformancereport" class="linked"> <h4 class="ju header4 d-md-flex justify-content-md-start" style="color: #136acd">First Timer Report</h4></router-link>
                         <router-link to="/tenant/firsttimerperformancereport"><span><i class="pi pi-angle-right" style="font-size: 30px; color: #136acd"></i></span></router-link>
                    </div>
                    <div class="row">
                        <p class="ju mb-3 paragraph1">This reports provides a detailed Group Category Attendance of your ministry</p>
                    </div>
                </div>
                <div class="col-md-6 col-12 pr-md-4 p-0">
                </div>
                <div class="col-md-5 col-12 mt-4">
                    <div class="row d-md-flex justify-content-md-between d-flex justify-content-between">
                       <router-link to="/tenant/newconvertperformancereport" class="linked"> <h4 class="ju header4 d-md-flex justify-content-md-start" style="color: #136acd">New Convert Report</h4></router-link>
                         <router-link to="/tenant/newconvertperformancereport"><span><i class="pi pi-angle-right" style="font-size: 30px; color: #136acd"></i></span></router-link>
                    </div>
                    <div class="row">
                        <p class="ju mb-3 paragraph1">This reports provides a detailed New Convert Attendance of your ministry</p>
                    </div>
                </div>
            </div>
     </div>
    </div>
    

       
        <!--border 2-->
        <div class="row mt-5 mb-5">
         <div class="col-md-12 col-12 text-center">
            <div class="row  border rounded report d-flex justify-content-between p-2 p-md-4">
                
                <div class="col-md-6 col-12 pr-md-4 p-0">
                    <h4 class="ju header4">Summary Attendance Report</h4>
                    <p class="ju paragraph1">This reports provides a detailed Summary Attendance of your ministry</p>


                </div>
                <div class="col-md-5 col-12">
                    <div class="row d-md-flex justify-content-md-between d-flex justify-content-between">
                       <router-link to="/tenant/summaryreport"  class="linked"><h4 class="ju header4 d-md-flex justify-content-md-start" style="color: #136acd">Summary Report</h4></router-link> 
                       <router-link to="/tenant/summaryreport"> <span><i class="pi pi-angle-right" style="font-size: 30px; color: #136acd"></i></span></router-link>
                    </div>
                    <div class="row">
                        <p class="ju mb-3 paragraph1">This reports provides a detailed Summary Attendance of your ministry</p>
                    </div>
                </div>
            </div>
     </div>
    </div>
        <!--border 2-->
      
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.report{
    width: 100%;
    margin: auto;
}
.ju{
    text-align: start;

}
.header4{
    font-size: 20px;
    font-weight: 700;
}
.paragraph1{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;

}
.rounded{
    border-color:  #b0b2b5!important;
    border-radius: 15px!important;

}
.linked{
    text-decoration: none!important;
}

</style>