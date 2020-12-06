<template>
    <form @submit.prevent="onSubmit">
        <div class="container my-content">
            <div class="row page-header">
                <div class="col-md-12">
                    <h2 class="header-text">First timers</h2>
                </div>
            </div>

            <div class="row form-container">
                <div class="col-md-12">
                    <span class="sub-header">Bio: </span>
                    <div class="row first-row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="firstname">Firstname <span class="required">*</span></label>
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="text" class="form-control input" name="" id="firstname" required>
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Surname</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="text" class="form-control input" name="">
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Phone number</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="text" class="form-control input" name="" id="">
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Email</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="text" class="form-control input" name="" id="">
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Address</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="text" class="form-control input" name="" id="">
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <!-- Birthday -->
                    <div class="row select-elem">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Birthday</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <div class="row">
                                <div class="col-md-4 form-group pr-0 select-div">
                                    
                                    <SelectElem name="day" id="day" :options="['Option1', 'Option2']" />
                                </div>
                                <div class="col-md-4 form-group px-0 select-div">
                                    
                                    <SelectElem name="month" id="month" :options="['Option1', 'Option2']" />
                                </div>
                                <div class="col-md-4 form-group pl-0 select-div">
                                    
                                    <SelectElem name="year" id="year" :options="['Option1', 'Option2']" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <!-- Marital status -->
                    <div class="row select-elem">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for=""></label>
                        </div>
                        <div class="col-md-4 form-group">
                            <div class="row d-flex justify-content-between">
                                <div class="col-md-6 form-group pr-0 select-div">
                                    <SelectElem name="maritalstatus" :options="['Marital status', 'Option1', 'Option2']" value="Marital status" />
                                </div>
                                <div class="col-md-5 form-group pl-0 select-div">
                                    <SelectElem name="gender" :options="['Gender', 'Option1', 'Option2']" value="Gender" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <!-- Event attended -->
                    <div class="row select-elem">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Event or service attended</label>
                        </div>
                        <div class="col-md-4 form-group mb-0">
                            <SelectElem name="maritalstatus" :options="['Option1', 'Option2']" />
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="row form-container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-11">
                            <span class="d-flex align-items-center justify-content-between follow-up-header">
                                <span class="sub-header">Insights: </span>
                                <span class="hr-span" style="width: 80%; margin-top: 10px"><hr class="hr"></span>
                            </span>
                        </div>
                    </div>

                    <!-- Hear About Us -->
                    <div class="row select-elem first-row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">How did you hear about us</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <SelectElem name="hearaboutus" :options="['Option1', 'Option2']" />
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>
                    

                    <!-- Communication means -->
                    <div class="row select-elem">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Preferref means of communication</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <SelectElem name="commeans" :options="['Option1', 'Option2']" />
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <!-- Interested in joining us -->
                    <div class="row select-elem">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Interested in joining us ?</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <SelectElem name="joininterest" :options="['Option1', 'Option2']" />
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                    <!-- Want visit -->
                    <div class="row select-elem">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for="">Want to be visited ?</label>
                        </div>
                        <div class="col-md-4 form-group">
                            <SelectElem name="wantvisit" :options="['Option1', 'Option2']" />
                        </div>
                        <div class="col-md-4">
                            
                        </div>
                    </div>

                </div>
            </div>

            <div class="row form-container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-11">
                            <span class="d-flex align-items-center justify-content-between follow-up-header">
                                <span class="sub-header">Follow up and Retention: </span>
                                <span class="followup-hr-span" style="width: 70%; margin-top: 10px"><hr class="hr"></span>
                            </span>
                        </div>
                    </div>

                    <div class="row first-row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for=""></label>
                        </div>
                        <div class="col-md-5 form-group">
                            <div class="row">
                                <div class="col-md-6 form-group d-flex">
                                    <label for="welcomeSms">Send welcome email</label>
                                    <input type="checkbox" class="check-box" name="" id="welcomeSms">
                                </div>
                                <div class="col-md-6 form-group d-flex">
                                    <label for="welcomeEmail">Send welcome email</label>
                                    <input type="checkbox" checked class="check-box" name="" id="welcomeEmail">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8 form-group">
                                    <label for="welcomeSms">Assigned automated follow-up</label>
                                    <SelectElem name="automatedfollowup" :options="['Option1', 'Option2']" value="Option1" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            
                        </div>
                    </div>

                </div>
            </div>

            <div class="row form-container">
                <div class="col-md-12">

                    <div class="row select-elem first-row">
                        <div class="col-md-4 text-md-right pr-0">
                            <label for=""></label>
                        </div>
                        <div class="col-md-5 form-group">
                            <button class="action-btn cancel-btn btn" @click.prevent="onCancel">Cancel</button>
                            <button class="action-btn save-btn btn">Save</button>
                        </div>
                        <div class="col-md-2">
                            
                        </div>
                    </div>

                </div>
            </div>

            <!-- <div class="row form-container">
                <div class="col-md-12">

                    <div class="row">
                        <div class="col-md-5 text-md-right pr-0">
                            <label for=""></label>
                        </div>
                        <div class="col-md-6 form-group">
                            <button class="cancel-btn">Cancel</button>
                            <button class="save-btn">Save</button>
                        </div>
                        <div class="col-md-1">
                            
                        </div>
                    </div>

                </div>
            </div> -->
        </div>
    </form>
</template>

<script>
    import SelectElem from '@/components/select/SelectElement.vue'
    export default {
        components: { SelectElem },

        setup() {
            const onSubmit = () => {

            }

            const onCancel = () => {

            }

            return {
                onSubmit,
                onCancel,
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        color: #02172E;;
    }

    .page-header {
        margin-bottom: 44px;
        margin-top: 15px;
    }

    .page-header h2 {
        color: #02172E;
        font-weight: 800;
        font-size: 30px;
    }

    .sub-header {
        color: #002044;
        font-size: 20px;
        font-weight: 700;
    }

    .form-container {
        margin-bottom: 44px;
    }

    .input {
        height: 40px;
        border: 1px solid #B9C5CF;
    }
    
    .first-row {
        margin-top: 10px;
    }

    .day-inp {
        border-radius: 8px 0 0 8px;
    }

    .month-inp {
        border-radius: 0;
    }

    .year-inp {
        border-radius: 0 8px 8px 0;
    }

    .select-elem {
        height: 50px !important;
    }

    #welcomeSms,
    #welcomeEmail {
        margin-top: 6px;
        margin-left: 10px;
    }

    .check-box {
        width: 1.2em;
        height: 1em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #B9C5CF;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
    }

    .action-btn {
        background: #fff;
        border: 1px solid #002044;
        border-radius: 111px;
        width: 121px;
        height: 49px;
        outline: transparent;
    }

    .save-btn {
        color: #fff;
        background: #136ACD;
        margin-left: 40px;
    }

    .required {
        color: #EF0535;
    }

    @media screen and (max-width: 767px) {
        .select-elem {
            height: auto !important;
        }

        .select-div {
            padding: .8rem !important;
        }
    }

    .check-box:checked {
        background-color: #0F529F;
    }

    @media screen and (max-width: 770px) {
        .follow-up-header {
            flex-direction: column;
            justify-content: flex-start;
        }

        .followup-hr-span, .hr-span {
            width: 100% !important;
        }

        .sub-header {
            width: 100%;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 1190px) {
        .followup-hr-span {
            width: 60% !important;
        }
    }
</style>