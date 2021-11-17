<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <div class="table table-responsive">
                <div class="top-con">
                    <div class="table-top my-3">
                    <div class="select-all">
                        <!-- <input type="checkbox" name="all" id="all" />
                        <label>SELECT ALL</label> -->
                    </div>
                    <p @click="toggleSearch" class="search-text mt-2">
                        <i class="pi pi-search"></i> &nbsp; &nbsp; SEARCH
                    </p>
                    <div class="search d-flex">
                        <label
                        class="label-search d-flex"
                        :class="{
                            'show-search': searchIsVisible,
                            'hide-search': !searchIsVisible,
                        }"
                        >
                        <input
                            type="text"
                            placeholder="Search..."
                            v-model="searchText"
                        />
                        <span class="empty-btn">x</span>
                        <span class="search-btn">
                            <i class="pi pi-search"></i>
                        </span>
                        </label>
                    </div>
                    </div>
                    <!-- <div
                    class="filter-options"
                    :class="{ 'filter-options-shown': filterFormIsVissible }"
                    >
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-9">
                            <div class="row">
                            <div
                                class="
                                col-12 col-sm-6
                                offset-sm-3 offset-md-0
                                form-group
                                inp
                                w-100
                                "
                            >

                                <input
                                type="text"
                                class="input w-100"
                                placeholder="First Name"
                                />
                            </div>

                            <div class="col-12 col-sm-6 form-group d-none d-md-block">
                                <input
                                type="date"
                                class="form-control input inp w-100"
                                />
                            </div>
                            </div>

                            <div class="row">
                            <div class="col-12 col-sm-6 form-group d-none d-md-block">
                                <input
                                type="text"
                                class="input w-100"
                                placeholder="Last Name"
                                />
                            </div>

                            <div class="col-12 col-sm-6 form-group d-none d-md-block">
                                <input
                                type="text"
                                class="input w-100"
                                placeholder="Phone Number"
                                />
                            </div>
                            </div>
                        </div>

                        <div class="col-md-3 d-flex flex-column align-items-center">
                            <button class="apply-btn text-white">
                            Apply
                            </button>
                            <span class="mt-2">
                            <a class="clear-link mr-2" @click="clearAll">Clear all</a>
                            <span class="mx-2"
                                ><i
                                class="fas fa-circle"
                                style="font-size: 4px"
                                ></i></span
                            ><a class="hide-link ml-2" @click="hide">Hide</a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div> -->
                </div>
                <div class="row table-header font-weight-700">
                    <div class="col-1 d-none d-md-block" ></div>
                    <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">First Name</div>
                    <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">last Name</div>
                    <div class="col-3 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Phone</div>
                    <div class="col-2 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Email</div>
                    <div class="col-1 d-none d-md-block small-text text-dark text-capitalize font-weight-bold" style="font-size:16px;">Action</div>
                    <!-- <div class="col-2 d-none d-md-block">NEW CONVERTS</div> -->
                </div>

                <div
                    class="table-body row"
                   
                >
                    <div class="col-6 d-block d-md-none">
                        <div class="row">
                        <div class="col-1">
                            STATUS
                        </div>
                            <div class="col-2">
                            EVENT NAME
                        </div>
                            <div class="col-3">
                            TITLE
                        </div>
                            <div class="col-3">
                            DATE
                        </div>
                            <div class="col-1" >
                            ATTENDANCE
                        </div>
                            <div class="col-2" >
                            FIRST TIMERS
                        </div>
                       
                        </div>
                        
                    </div>
                    <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-1 col-sm-12 p-2">
                        <div class="row px-2">
                            <!-- <div class="col-8 col-md-0 d-md-none">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">Tab</span>
                            </div> -->
                            <div class="col-4 col-md-12 ">
                            <span class="d-flex justify-content-end">
                                <!-- ytygvghv -->
                                <!-- <span class=" d-sm-flex small">
                                    <div class="td-first px-1">
                                    <input type="checkbox" name="" id="" data-v-65858e43="">
                                    </div>
                                </span> -->
                                </span>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-2 col-sm-12 itemroute-color align-self-center">
                        <div>
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">First Name</span>
                            <span class=" d-sm-flex small">
                              
                                <img src="" alt="">
                            </span>
                            </span>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-12 itemroute-color align-self-center">
                        <div>
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">Last Name</span>
                            <span class=" d-sm-flex small">
                                <div class="px-1">gvsedfgv</div>
                            </span>
                            </span>
                        </div>
                        
                        </div>
                        <div class="col-md-3 col-sm-12 itemroute-color align-self-center">
                        <div>
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">Phone</span>
                            <span class=" d-sm-flex small">
                            <div class="px-1">sdfvsdfv</div>
                            </span>
                            </span>
                        </div>
                        
                        </div>
                        <div class="col-md-2 col-sm-12 itemroute-color align-self-center">
                        <div>
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">Email</span>
                            <span class=" d-sm-flex small">
                            <div class="px-1">dfsbvsdfv</div>
                            </span>
                            </span>
                        </div>
                        </div>
                        <div class="col-md-1 col-sm-12 itemroute-color align-self-center">
                        <div>
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">Action</span>
                            <span class=" d-sm-flex small">
                            <div class="dropdown">
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex">Action</span>
                            <span class=" d-sm-flex small px-1">
                            <i
                            class="fas fa-ellipsis-v cursor-pointer"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            ></i>
                            <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                            >
                            <router-link
                                :to="`/tenant/report/`"
                                class="text-decoration-none"
                            >
                                <a class="dropdown-item elipsis-items"> View Report </a>
                            </router-link>

                            <router-link
                                :to="`/tenant/event/`"
                                class="text-decoration-none"
                            >
                                <a class="dropdown-item elipsis-items"> Edit </a>
                            </router-link>
                            <!-- <router-link :to="`/tenant/event/${event.activityId}`"> -->
                            <a
                                class="dropdown-item elipsis-items cursor-pointer"
                                @click="showConfirmModal(event.activityId, index)"
                            >
                                Delete
                            </a>
                            <!-- </router-link> -->
                            </div>
                            </span>
                            </span>
                        
                        </div>
                            </span>
                            </span>
                        </div>
                        </div>
                        <!-- <div class="col-md-1 col-sm-12 itemroute-color align-self-center">
                        <div>
                            <span class="d-flex justify-content-between">
                            <span class="d-md-none d-sm-flex small-text font-weight-700 text-dark px-1">NewConverts</span>
                            <span class=" d-sm-flex small">
                            <div class="px-1">xxsxxxxsxxx</div>
                            </span>
                            </span>
                        </div>
                        </div> -->
                        <div class="col-md-3 col-sm-12 align-self-center  ">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <ConfirmDialog />
                <Toast />

                <div class="table-footer">
                    
                </div>
                </div>
            </div>
            </div>
            </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style scoped>
.table-header{

    background: #f1f3f9!important;
    color: #8898aa!important;
    font-size: 11px!important;
    text-align: left!important;
    box-shadow: 0px 3px 6px #2c28281c!important;
}

</style>