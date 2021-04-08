<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <router-link :to="{ name: 'FileDetails', query: { id: file.id, f:file.filePath,t:file.mediaType }}" class="col-sm-4 my-3 c-pointer text-center text-decoration-none" v-for="(file, index) in files" :key="index" style="height:fit-content">
                        <span><img :src="file.imagePath" style="height:100%;width:auto;max-height:300px;max-width:100%" alt="Media File"></span>
                        <div class="row">
                            <div class="col-md-12">
                                <h5 class="primary-text font-weight-bold">{{ fileName(file.name) }}</h5>
                                <span>{{ formatDate(file.dateAdded) }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dateFormatter from '../../../../services/dates/dateformatter';
    export default {
        props: [ "files" ],

        setup() {
            const fileName = (name) => {
                if (!name) return "Unknown"
                if (!name.includes('https')) return name;
                const splitted = name.split('/');
                const derived = splitted[splitted.length - 1];
                if (!derived.includes('_')) return derived;
                return derived.split('_')[0];
            }
            const formatDate = (date) => {
                return dateFormatter.monthDayYear(date);
            }

            return {
                fileName,
                formatDate,
            }
        }
    }
</script>

<style scoped>
.bordered {
  border: 0.20000000298023224px solid #e9eef0;
  border-radius: 8px;
  background: #fff;
}

.active {
    background: #e9eef0;
    border-radius: 8px 0 0 8px;
}

.tab:hover {
    background: #d7e0ea;
}
</style>