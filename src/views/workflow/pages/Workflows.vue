<template>
    <div class="container-fluid">
        <Toast></Toast>
        <ConfirmDialog />
        <div class="row border">
            <div class="col-md-8 p-2 font-weight-bold">
                Name
            </div>
            <div class="col-md-2 p-2 font-weight-bold">
                Active
            </div>
            <div class="col-md-2 p-2 font-weight-bold">
                Action
            </div>
        </div>

        <div class="row border" v-if="loading">
            <div class="col-12">
                <LoadingComponent :loading="loading" />
            </div>
        </div>

        <div v-else class="row border" v-for="(workflow, index) in workflows" :key="index">
            <div class="col-md-8 p-2">
                <router-link class="text-decoration-none text-primary font-weight-700" :to="`/tenant/workflow/add?workflowId=${workflow.id}&fw=true`">
                    {{ workflow.name }}
                </router-link>
            </div>
            <div class="col-md-2 p-2">
                {{ workflow.isActive ? 'Yes' : 'No' }}
            </div>
            <div class="col-md-2 p-2">
                <i class="pi pi-trash" style="font-size:1.5rem" @click="confirmDelete(workflow.id)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import LoadingComponent from "../../../components/loading/LoadingComponent.vue"
import workflowFunctions from '../utlity/workflow_service'
import { useConfirm } from "primevue/useConfirm";
import { useToast } from "primevue/usetoast";
import axios from 'axios';

export default {
    components: { 
        LoadingComponent
    },

    setup () {
        const toast = useToast()
        const confirm = useConfirm()
        
        const loading = ref(false)
        const workflows = ref([
            { name: 'Hello', active: true },
            { name: 'jhbvjh,e e,jhkers', active: false },
            { name: 'Hello erikje', active: true }
        ])

        const getWorkflows = async () => {
            try {
                loading.value = true;
                const { returnObject: data } = await workflowFunctions.getWorkflows();
                console.log(data, 'cj test');
                workflows.value = data;
                loading.value = false;
            } catch (error) {
                loading.value = false;
                console.log(error);
            }
        }
        getWorkflows();

        const deleteWorkflow = id => {
            if(id) {
                axios
                    .delete(`/api/workflow=${id}`)
                    .then(res => {
                        console.log(res, 'delete response');
                    })
                      workflows.value = workflows.value.filter(i => i.id !== id);
           }
        }

        const confirmDelete = (id, index) => {
            confirm.require({
                message: "Are you sure you want to proceed?",
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                acceptClass: "confirm-delete",
                rejectClass: "cancel-delete",
                accept: () => {
                    deleteWorkflow(id);
                    toast.add({
                        severity: "success",
                        summary: "Deleted",
                        detail: "Workflow deleted successfully",
                        life: 2500,
                    });
                },
                reject: () => {
                toast.add({
                    severity: "info",
                    summary: "Rejected",
                    life: 3000,
                });
                },
            });
        }

        return {
            workflows,
            loading,
            confirmDelete,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>