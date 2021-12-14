<template>
    <div class="container container-top container-wide">
        <div class="row d-flex justify-content-between px-3 mb-3">
            <div class="heading-text">Branch</div>
            <div class="mb-3">
                <div class="default-btn primary-bg text-white font-weight-bold c-pointer border-0" data-toggle="modal" data-target="#statusmodal" ref="statusmodalBtn">
                    Add Branch
                </div>
            </div>
        </div>
        <div class="contanier-fluid">
            <div class="row mb-4">
                <div class="col-12 d-flex justify-content-end">
                    <div class="mr-3">
                        <Dropdown  v-model="selectedPeriod" :options="periods" optionLabel="name" placeholder="Select a period" class="w-100" />
                    </div>
                    <div>
                        <Dropdown  v-model="selectedBranch" :options="branches" optionLabel="name" placeholder="Select branch" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid mb-3">
            <!-- <div class="container-fluid"> -->
            <div class="row justify-content-between mother-row">
                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <img class="trend-icon" src="/img/trend-icon.b63f0d8d.svg" alt="">
                            <!-- <i class="pi pi-users text-center"></i> -->
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total">200</div>
                    </div>
                    <div class="row p-2">
                        <p class="item-text ml-2">Total Branches </p>
                    </div>
                </div>

                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <!-- <i class="pi pi-users text-center"></i> -->

                            <!-- <img class="trend-icon" src="/img/trend-icon.b63f0d8d.svg" alt=""> -->
                            <img class="trend-icon " src="../../assets/dashboardlinks/people.svg" alt="">
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total pl-0">500</div>
                    </div>
                    <div class="row p-2 ">
                        <p class="item-text ml-2 text-truncate">Total People</p>
                    </div>
                </div>

                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <i class="pi pi-list text-center"></i>
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total">500</div>
                    </div>
                    <div class="row p-2">
                        <p class="item-text ml-2 text-truncate">Average Attendance</p>
                    </div>
                </div>

                <div class="col-md-2 item-Area mb-4">
                    <div class="row p-2 mb-2 d-flex justify-content-between">
                        <div class="top-icon-div d-flex justify-content-center align-items-center ml-2">
                            <i class="pi pi-list text-center"></i>
                        </div>
                        <div class="col d-flex justify-content-end font-weight-bold align-items-center item-total">100</div>
                    </div>
                <div class="row p-2">
                    <p class="item-text ml-2 text-truncate">Average monthly income/expense</p>
                </div>
            </div>
      <!-- </div> -->
    </div>
        </div>
        <div class="container-fluid mb-3 ">
            <div class="row">
                <div class="col-12 border " style="height: 100%; border-radius: 5px" v-show="mappedBranch.length > 0">
                    <!-- <div class="dhx_sample-container">
                        <div class="dhx_sample-widget w-100" ref="editor"></div>
                    </div> -->
                    <Organisation domId="orgchart2" :data="mappedBranch"/>
                </div>
                <div class="col-12 border p-3" style="height: 100%; border-radius: 5px" v-show="mappedBranch.length === 0"><div>👋 Hey!</div>
                <div> Welcome to the branching feature in Churchplus.</div> Manage your ministry branches easily via this branch feature. Start by setting up your ministry's hierarchies in <router-link to="/tenant/settings/branchlevelsettings">Settings</router-link>, then create your branches.</div>
            </div>
        </div>
    </div>
     <!-- Branch Status Level Modal -->
    <div class="modal fade" id="statusmodal" tabindex="-1" role="dialog" aria-labelledby="importgroupModalLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered" role="document" ref="modal">
        <div class="modal-content pr-2">
        <div class="modal-header py-3">
            <h5 class="modal-title font-weight-700">
            Which of these option best suit your intentions?
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="closeStatusModal" >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
            <div class="col-md-10 offset-1">
                <div class="default-btn border mb-3 text-center c-pointer" @click="setUpBranch">Setup branch network</div>
                <div class="default-btn border mb-3 text-center c-pointer" data-dismiss="modal" @click="joinBranch">Join branch network</div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    </div>
     <!-- Branch Status Level Modal -->
     <div data-toggle="modal" data-target="#levelmodal" ref="levelmodalBtn" hidden>
        Show modal
    </div>
    <div class="modal fade" id="levelmodal" tabindex="-1" role="dialog" aria-labelledby="importgroupModalLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered" role="document" ref="modal">
        <div class="modal-content pr-2">
        <div class="modal-header py-3">
            <h5 class="modal-title font-weight-700" id="importgroupModalLabel" >
            Set up your branch level
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="closeGroupModal" >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
            <div class="col-md-12">
                <div class="mb-3" style="font-size: 1.2em">You dont have branch hierarchies set up yet, create the hierarchies, then you can proceed to create your branch</div>
                <BranchSettings/>
                <button class="mt-3 mb-3 offset-5 col-4 default-btn primary-bg text-white font-weight-bold c-pointer border-0 text-center" data-dismiss="modal"  @click="goToAddBranch">Proceed</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    </div>
     <!-- Join Branch Modal -->
     <div data-toggle="modal" data-target="#joinmodal" ref="joinmodalBtn" hidden>
        Show modal
    </div>
    <div class="modal fade" id="joinmodal" tabindex="-1" role="dialog" aria-labelledby="importgroupModalLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered" role="document" ref="modal">
        <div class="modal-content pr-2">
        <div class="modal-header py-3">
            <h5 class="modal-title font-weight-700" id="importgroupModalLabel" >
            Enter your code to join a branch network
            </h5>
            <button type="button" ref="closeJoinNetworkModal" class="close" data-dismiss="modal" aria-label="Close" >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
            <div class="col-md-12">
                <div class="p-field p-col-12 p-md-4">
                    <span class="p-float-label">
                        <InputText class="w-100" id="inputtext" type="text" v-model="code" />
                        <label for="inputtext">Enter your code</label>
                    </span>
                </div>
                <button class="mt-3 mb-3 offset-5 col-4 default-btn primary-bg text-white font-weight-bold c-pointer border-0 text-center" @click="joinNetwork">Join network</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <Toast />
    
</template>

<script>
import { onMounted, ref } from "vue";
import Dropdown from "primevue/dropdown";
import Organisation from "../../components/charts/OrgChart2.vue"
import BranchSettings from "../settings/BranchLevelSettings.vue"
import axios from "@/gateway/backendapi";
import router from '../../router';
import InputText from "primevue/inputtext";
import { useToast } from "primevue/usetoast";
// import fromCDN from "from-cdn";
import { workers } from "../../services/orgchart/orgChartData";
import * as dhx from "../../services/orgchart/diagramWithEditor"
export default {
    components: {
        Organisation,
        Dropdown,
        BranchSettings,
        InputText
    },
    setup() {
        const toast = useToast()
        const periods = ref([
            { name: "One Week" },
            { name: "This Week" },
            { name: "Last Week" },
            { name: "This Month" },
            { name: "Last Month" },
            { name: "Last 30days" },
            { name: "Last 90days" },
            { name: "One Year" },
        ]);
        const branches = ref([
            { name: "Region" },
            { name: "District" },
            { name: "Zone" },
            { name: "Area" },
            { name: "Branch" },
        ]);
        const hierarchies = ref([])
        const levelmodalBtn = ref()
        const joinmodalBtn = ref()
        const closeStatusModal = ref()
        const code = ref("")
        const closeJoinNetworkModal = ref()
        const editor = ref()
        const editorr = ref(null)
        const mappedBranch = ref([])

        const getBranches = async() => {
            try {
                let { data } = await axios.get('/api/Branching')
                console.log(data)
                mappedBranch.value = data.returnObject.map(i => {
                    return {
                        id: i.id,
                        // title: 'CEO',
                        name: i.name,
                        image: i.logo,
                        parentID: i.parentID
                    }
                })
            }
            catch (err) {
                console.log(err)
            }
        }
        getBranches()

        const getHierarchies = async() => {
            try {
                let { data } = await axios.get('/branching/hierarchies')
                console.log(data)
                hierarchies.value = data.returnObject
            }
            catch (err) {
                console.log(err)
            }
        }
        getHierarchies()

        const setUpBranch = () => {
            if (hierarchies.value.length === 0) {
                levelmodalBtn.value.click()
            }   else {
                closeStatusModal.value.click()
                router.push('/tenant/branch/addbranch')
            }
        }

        const joinBranch = () => {
            joinmodalBtn.value.click()
        }

        const goToAddBranch = () => {
            closeStatusModal.value.click()
            router.push('/tenant/branch/addbranch')
        }

        const joinNetwork = async() => {
            try {
                let { data } = await axios.post('/api/Branching/joinnetwork', { code: code.value })
                console.log(data)
                closeJoinNetworkModal.value.click()
                    toast.add({
                        severity: "success",
                        summary: "Success",
                        detail: data.response,
                        life: 5000,
                    });
            }
            catch (err) {
                console.log(err)
            }
        }
        
        onMounted(() => {
            console.log(workers)
            // fromCDN([
            //     "../../services/orgchart/diagramWithEditor"
                // "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
                // ]).then(() => {
                // eslint-disable-next-line no-undef
                editorr.value = new dhx.DiagramEditor(editor.value, {
                    type: "org",
                    shapeType: "img-card",
                });
                editorr.value.parse(workers);
                // });
        })

        return {
            periods,
            branches,
            hierarchies,
            setUpBranch,
            levelmodalBtn,
            goToAddBranch,
            closeStatusModal,
            joinBranch,
            joinmodalBtn,
            code,
            joinNetwork,
            closeJoinNetworkModal,
            editor,
            editorr,
            mappedBranch
        }
    },
}
</script>
<style scoped>
@import "../../services/orgchart/diagramWithEditor.css";
@import "../../services/orgchart/index.css";
    .heading-text {
        font: normal normal 800 1.5rem Nunito sans;
}
.item-Area{
border-radius: 5px;
/* margin-left: 1.5rem; */
padding: 0px 10px;
background: #fff;
border: 1px solid #00204424;
}
.top-icon-div{
color: #136acd;
font-size: 24px;
width:50px;
height:50px;
background: #f1f5f8;
padding: 4px;
border-radius: 50%;
}
.item-text{
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
}

.item-total{
font-size: 20px;
font-weight: 500;
line-height: 1.2;
}

.pi{
font-size: 1.5rem;
}

</style>