<template>
    C<div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-12 ">
                <h2>Import customers from CSV </h2>
            </div>
            
            <div class="col-12 col-md-10  col-lg-11 col-xl-11">
                <p>A CSV (comma-seperated values) file is a spreedsheet file that is used by wave to impart customer information into your business. </p>
            </div>
            <div class=" col-lg-12 col-md-12 mx-1 border  rounded ">
                <div class="col-md-12 col-12 col-lg-12 mt-3 ">
                    <input type="file" class="col-12 ">
                </div>
                <div class="col-md-12 col-12 col-lg-12 text-center  my-3">
                    <button class="btn btn-primary  " style="border-radius: 10rem;">Upload and preview customers</button>
                </div>
                <div class="border-bottom w-100 my-2 col-md-12 "></div>
                <div class="col-12 col-md-7 col-lg-7 my-3  small "> Maximum 10MB file size. CSV file type only</div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="mt-2">
                    <i  class="fa fa-question "></i> 
                    <span>Need help creating your CSV file?</span> 
                    <a href="#" class=" text-decoration-none  font-weight-bold "> View Instruction <i class="fa fa-angle-down"></i></a> 
                </div>
                <div class="border-bottom w-100 my-3 col-12  col-md-12 col-lg-12 "></div>
            </div>
            <div class="col-6 col-md-12 col-lg-12 text-secondary font-weight-normal lead "> Customer CSV template file </div>
            <div class="col-12 col-md-12 mb-3 col-lg-12">
                <a href="#" class="text-decoration-none font-weight-bold small">Download and view our customer CSV template.</a>
                <span class="small">You can use this as a template for creating your CSV file.</span>
            </div>
            <div class="col-6 col-md-12 col-lg-12 text-secondary font-weight-normal lead my-3 "> File format </div>
            <div class="col-10 col-md-10 col-lg-10">
                <span>The first line of your customer CSV must include all of the headers listed below, which are included in the <a href="#" class="text-decoration-none font-weight-bold">customer CSV template.</a></span>  
            </div>
            <div class="col-md-2 col-lg-2 col-2 text-right"> <i class="fa fa-question "></i></div>
            <div class="row ml-1 bg-secondary my-3 rounded h-100 w-100">
                <div class="col-12 my-2 col-md-12 col-lg-12 fa fa-info-circle "><strong> Reminder:</strong> All CSV file headers are case-sensitive.
                    <div class="col-12 col-md-12 col-lg-12 border-bottom  my-2"></div> 
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p> Company Name</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p> The name of the company. if blank, it will default to the customer's first and last names,</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p> First Name</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The first name of your customer</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p> Last Name</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The last name of your customer.</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p> Email</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The email address of your customer</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p>Phone</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    The customerr's phone number.
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p> Address 1</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    The first line of the customer's address.
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p>Address 2</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The Second line of the customer's address </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p> City</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The city the customer is in</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p>Postal Code</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The ZIP or postal code for the customer's address.</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p>Country</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The customer's <a href="#" class="text-decoration-none">country ISO code</a></p>
                </div>
                <div class="col-4 col-md-4 col-lg-4 small font-weight-bold">
                    <p>Currency</p>
                </div>
                <div class="col-8 col-md-8 col-lg-8">
                    <p>The <a href="" class="text-decoration-none">currency ISO code</a> for the customer.If not specified, it will default to your business currency.</p>
                </div>
            </div>
            <div class="my-3 col-6 col-md-12 col-lg-12 text-secondary font-weight-normal lead "> Exporting your CSV file from Excel or other software </div>
            <div class="col-12 my-2 col-md-12 col-lg-12 fa fa-info-circle "><strong> Reminder:</strong> When importing customer information, your CSV file must be in UTF-8 format.</div>
            <div class="my-1 col-12 col-md-12 col-lg-12 "> 
                <p>
                    You can convert an Excel worsheet (such as the customer CSV template) to a text file by using the Save As command. In the save as type...box, choose the CSV (Comma delimited) text file format for the worsheet.
                </p>
            </div>
            <div class="col-10 col-md-10 col-lg-10">
                <p>Most spreadsheet applications have the ability to save CSV files in UTF-8 format with the save As... or Export command, depending on the program</p>
            </div>
            <div class="col-md-2 col-lg-2 col-2 text-right"> <i class="fa fa-question "></i></div>

            
        </div>
        
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>