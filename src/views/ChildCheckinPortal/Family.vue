<template>
   <div class="container-fluid container-wide container-top" style="border:2px red solid">
       <!-- Header Area -->
         <div class="row d-flex justify-content-center justify-content-sm-between" style="border:2px green solid">
            <div class="family-header">Family</div>
            <div class="button-add-member default-btn border-0 text-white" style="border:2px solid yellow">Add Member</div>
        </div>
        <!--End of Header Area -->

        <!-- Table Area -->
         <div class="row mt-5">
            <div class="col-12 col-sm-12">
                <div class="row">
                        <div class="col-12 px-0 mb-0 table">
                            <div class="top-con">
                                <div class="table-top">
                                    <div
                                    class="filter col-2"
                                    >
                                <p class="mt-2">
                                    <i class="fa fa-print"></i>
                                    SORT
                                </p>
                                </div>
                                <div class="filter col-2">
                                <p @click="toggleFilterFormVissibility" class="mt-2">
                                    <i class="fas fa-filter"></i>
                                    FILTER
                                </p>
                                </div>
                                <div class="col-2">
                                <p @click="toggleSearch" class="search-text w-100 mt-2">
                                    <i class="fa fa-search"></i> SEARCH
                                </p>
                                </div>

                                <div class="search d-flex ml-2">
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
                                    <i class="fa fa-search"></i>
                                    </span>
                                </label>
                                </div>
                            </div>
                            </div>
                            <div
                            class="filter-options"
                            :class="{ 'filter-options-shown': filterFormIsVissible }"
                            id="ignore1"
                            >
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-md-9">
                                    <div class="row">
                                    <div
                                        class="col-12 col-sm-6 col-md-4 offset-sm-3 offset-md-0 form-group inp w-100"
                                    >
                                        <!-- <div class="input-field"> -->

                                        <input
                                        type="text"
                                        class="input w-100"
                                        placeholder="Offering"

                                        />
                                    </div>


                                    <div class="col-12 col-md-4 form-group d-none d-md-block">
                                        <input
                                        type="text"
                                        class="input w-100"
                                        placeholder="donor"

                                        />
                                    </div>
                                    </div>
                                </div>

                                <div class="col-md-3 d-flex flex-column align-items-center">
                                    <button class="apply-btn text-white" @click="applyFilter">
                                    Apply
                                    </button>
                                    <span class="mt-2">
                                    <a class="clear-link mr-2" @click="clearAll">Clear all</a>
                                    <span class="mx-2"
                                        ><i class="fas fa-circle" style="font-size: 4px"></i></span
                                    ><a class="hide-link ml-2" @click="hide">Hide</a>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>

                            <!-- contribution -->
                            <!-- <div v-if="searchContribution.length > 0"> -->
                            <div class="container-fluid d-none d-md-block">
                                <div class="row t-header">
                                <!-- <div class="col-12 parent-desc first p-2 pl-4"> -->
                                    <div class="col-md-1 px-3"></div>
                                    <div class="small-text text-capitalize col-md-1 font-weight-bold">PICTURE</div>
                                    <div class="small-text text-capitalize col-md-2 font-weight-bold">FIRSTNAME</div>
                                    <div class="small-text text-capitalize col-md-2 font-weight-bold">LASTNAME</div>
                                    <div class="small-text text-capitalize col-md-2 font-weight-bold">PHONE</div>
                                    <div class="small-text text-capitalize col-md-1 font-weight-bold">ROLE</div>
                                    <div class="small-text text-capitalize col-md-2 font-weight-bold">GROUP</div>
                                <!-- </div> -->
                                </div>
                            </div>
                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >

                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="desc small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">23/32/1234</span>
                                    </p>
                                    </div>

                                    <div class="col-md-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>

                                        <div class="desc small-text text-right text-md-left"> item.contribution </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="desc-head small-text col-md-3">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">LASTNAME</span>
                                        <span> item.currencyName</span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="primary-text c-pointer"
                                        > item.donor</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-1">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                            <a class="dropdown-item elipsis-items">
                                        View Report
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>


                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >

                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="desc small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">23/32/1234</span>
                                    </p>
                                    </div>

                                    <div class="col-md-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>

                                        <div class="desc small-text text-right text-md-left"> item.contribution </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="desc-head small-text col-md-3">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">LASTNAME</span>
                                        <span> item.currencyName</span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="primary-text c-pointer"
                                        > item.donor</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-1">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                            <a class="dropdown-item elipsis-items">
                                        View Report
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>


                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >

                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="desc small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">23/32/1234</span>
                                    </p>
                                    </div>

                                    <div class="col-md-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>

                                        <div class="desc small-text text-right text-md-left"> item.contribution </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="desc-head small-text col-md-3">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">LASTNAME</span>
                                        <span> item.currencyName</span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="primary-text c-pointer"
                                        > item.donor</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-1">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                            <a class="dropdown-item elipsis-items">
                                        View Report
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>


                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >

                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="desc small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">23/32/1234</span>
                                    </p>
                                    </div>

                                    <div class="col-md-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>

                                        <div class="desc small-text text-right text-md-left"> item.contribution </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="desc-head small-text col-md-3">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">LASTNAME</span>
                                        <span> item.currencyName</span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="primary-text c-pointer"
                                        > item.donor</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-1">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                            <a class="dropdown-item elipsis-items">
                                        View Report
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>


                            <div class="row" style="margin:0;">
                                <div
                                class="col-12 parent-desc py-3 px-0 c-pointer tr-border-bottom  hover"
                                >

                                <div class="row w-100" style="margin:0">
                                    <div class="col-md-1 d-flex d-md-block px-3 justify-content-end">
                                    <input
                                        type="checkbox"
                                        class="form-check"
                                    />
                                    </div>

                                    <div class="desc small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">PHONE</span>
                                        <span class="text-decoration-none">23/32/1234</span>
                                    </p>
                                    </div>

                                    <div class="col-md-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">FIRSTNAME</span>
                                    <div>

                                        <div class="desc small-text text-right text-md-left"> item.contribution </div>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="desc-head small-text col-md-3">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">LASTNAME</span>
                                        <span> item.currencyName</span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-2">
                                    <p class="mb-0 d-flex justify-content-between">
                                        <span class="text-dark font-weight-bold d-flex d-md-none">ROLE</span>
                                        <span><span class="primary-text c-pointer"
                                        > item.donor</span
                                    ></span>
                                    </p>
                                    </div>

                                    <div class="small-text col-md-1">
                                    <div class="action data action-icon">
                                        <div class="dropdown">
                                        <i
                                            class="fas fa-ellipsis-v cursor-pointer"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        ></i>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                            <a class="dropdown-item elipsis-items">
                                        View Report
                                        </a>
                                            <a class="dropdown-item elipsis-items">
                                        Edit
                                        </a>
                                        <a
                                            class="dropdown-item elipsis-items cursor-pointer"
                                            @click="showConfirmModal(item.id, index)"
                                            >Delete</a
                                        >
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!--End of Table Area -->
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

.button-add-member {
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 22px;
}

.family-header {
    font: normal normal 800 29px/46px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.table-top {
  font-weight: 800;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
}
.table-top label:hover,
.table-top p:hover {
  cursor: pointer;
}
</style>