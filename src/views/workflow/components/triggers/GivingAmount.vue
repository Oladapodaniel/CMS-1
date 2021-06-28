<template>
    <div class="container px-0 max-height">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :description="description" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Match an individual who is a member of</label>
            </div>
            <div class="col-md-12 mb-2">
                <MultiSelect @change="groupSelected" v-model="selectedGroup" :options="[ 'Workers', 'Choir', 'New comers' ]"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">And who gives</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown @change="rangeSelected" v-model="selectedRange" :options="[ 'Greater than', 'Less than' ]" class="w-100" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">$</label>
            </div>
            <div class="col-md-12 mb-2">
                <input type="text" class="form-control" @input="handleAmount" v-model="amount">
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">To</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ 'Any category...', 'General', 'Building' ]" class="w-100" @change="categorySelected" v-model="category" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">In</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown  @change="givingTimeSelected" v-model="givingTime" :options="[ 'A single gift', 'General', 'The last...' ]" class="w-100" />
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
import MultiSelect from "primevue/multiselect"
import TriggerDescription from "../TriggerDescription.vue"
import { reactive, ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
    components: { Dropdown, TriggerDescription, MultiSelect },

    setup (props, { emit }) {
        const data = reactive({ id: 1 });
        const selectedGroup = ref('')
        const groupSelected = (e) => {
            data.groups = e.value;
            emit('givingamount', data);
        }

        const selectedRange = ref('')
        const rangeSelected = (e) => {
            data.range = e.value;
            emit('givingamount', data);
        }

        const amount = ref(0)
        const handleAmount = (e) => {
            data.amount = e.target.value;
            emit('givingamount', data);
        }

        const category = ref('')
        const categorySelected = (e) => {
            data.category = e.value;
            emit('givingamount', data);
        }

        const givingTime = ref('')
        const givingTimeSelected = (e) => {
            data.givingTime = e.value;
            emit('givingamount', data);
        }

        const description = computed(() => {
            return {
                groups: selectedGroup.value ? [ selectedGroup.value ] : ['_____'],
                range: selectedRange.value === 'Greater than' ? '>' : '<',
                category: category.value === 'Any category' ? 'any' : category.value,
                amount: amount.value ? amount.value : '',
                time: givingTime.value ? givingTime.value : '____',
                id: 1,
             };            
        })

        return {
            groupSelected,
            selectedGroup,
            selectedRange,
            rangeSelected,
            handleAmount,
            amount,
            categorySelected,
            category,
            givingTimeSelected,
            givingTime,
            description,
        }
    }
}
</script>

<style scoped>
    .dotted-border-bottom {
        border-bottom: dotted 2px #ddd;
    }

    .max-height {
        max-height: calc(100vh - 300px);
    }
</style>