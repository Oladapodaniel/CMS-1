<template>
    <div class="container-fluid">
        <div class="row my-5">
            <div class="col-md-12 text-center my-4">
                <span><img :src="file.imagePath" style="height:100%;width:auto;max-height:300px;max-width:100%" alt="Media File"></span>
            </div>

            <div class="col-md-12 my-3">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <h5 class="primary-text">{{ fileName(file.name) }}</h5>
                        <span>{{ formatDate(file.dateAdded) }}</span>
                    </div>
                </div>
            </div>

            <div class="col-md-12" v-if="Number(route.query.t) === 0">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <video
                            style="width: 100%"
                            height="240"
                            controls
                            >
                            <source :src="route.query.f" />
                            <!-- <source src="movie.mp4" type="video/mp4"> -->
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            <div class="col-md-12" v-if="route.query.t === '1'">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <audio controls class="w-100 outline-none">
                            <!-- <source :src="file.filePath" type="audio/ogg"> -->
                            <source :src="route.query.f" >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-12" v-if="route.query.t === 2">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <audio controls class="w-100 outline-none">
                            <!-- <source :src="file.filePath" type="audio/ogg"> -->
                            <source :src="route.query.f" >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
            <div class="col-md-12" v-if="route.query.t === '3'">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <span><img :src="route.query.f" style="height:100%;width:auto;max-height:300px;max-width:100%" alt="Media File"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from "vue-router"
import media_service from '../../../services/media/media_service';
import dateFormatter from '../../../services/dates/dateformatter';
    export default {
        setup() {
            const file = ref({ });
            const route = useRoute();

            const getFileById = async () => {
                try {
                    file.value = await media_service.getMediaById(route.query.id);
                    console.log(file.value, "FILE");
                } catch (error) {
                    console.log(error);
                }
            }

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

            getFileById();

            return {
                file,
                route,
                fileName,
                formatDate,
            }
        }
    }
</script>

<style scoped>

</style>