<template>
    <div class="col-sm-12 p-0 scroll-table">
                <table class="table table-hover" style="border-radius: 0">
                    <thead>
                        <tr class="table-row-bg">
                            <th class="">Group Name</th>
                            <th class="">Name</th>
                            <th class="">Gender</th>
                            <th class="">Phone</th>
                            <th class=" rotate-text">Events</th>
                            <th class=" rotate-text">Total Absent</th>
                            <th class=" rotate-text">Total Present</th>
                            <th class=" rotate-text">Percentages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2222222222222222</td>
                            <td>2222222222222222</td>
                            <td>22222222222222222222222222222222222222222222222222222</td>
                            <td>22</td>
                            <td>22</td>
                            <td>22</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
</template>

<script>
import { ref } from "vue"
import PaginationButtons from "../../components/pagination/PaginationButtons.vue";
export default {
    components: {
        PaginationButtons
    },
    setup() {
        const searchText = ref("")
        const searchIsVisible = ref(false);
        const filterFormIsVissible = ref(false);
        const filterGroupReport = ref([])

        const toggleSearch = () => {
            searchIsVisible.value = !searchIsVisible.value;
        };

        const toggleFilterFormVissibility = () => {
            filterFormIsVissible.value = !filterFormIsVissible.value;
        };
        return {
            searchIsVisible,
            toggleSearch,
            searchText,
            filterFormIsVissible,
            toggleFilterFormVissibility,
            filterGroupReport
        }
    }
}
</script>

<style scoped>
.rotate-text {
text-orientation: mixed;
  writing-mode: vertical-rl; 

}

.table-row-bg {
    background: #ebeff4
}

.scroll-table {
    overflow-x: scroll;
}
</style>