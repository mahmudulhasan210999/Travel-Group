<template>
    <div class="w-full flex flex-col items-center px-4 lg:px-20 xl:px-28">
        <div class="container py-6 md:py-10 lg:py-16"> 
            <div v-for="(domestic, index) in domestics" :key="index">
                <div class="border-b border-gray-300" v-if="domestic.id == slug">
                    <img class="w-full h-60 sm:h-72 xl:h-96 rounded-xl" :src="host + domestic.banner_image" alt="Image">
                    <div class="text-left pb-4 md:pb-6 lg:pb-8">
                        <p class="text-xl font-semibold pt-4">{{ domestic.locations_name }}</p>
                        <p class="pt-2 text-sm sm:text-base text-justify">{{ domestic.details }}</p>
                    </div>
                </div>
            </div> 

            <div class="lg:flex pt-4 md:pt-6 lg:pt-8">
                <!-- Availability -->
                <div class="lg:w-2/3 text-left lg:pr-4">
                    <p class="text-xl font-semibold pb-4 responsive-size-title">Events</p>
                    <div class="grid gap-8 responsive-size" v-if="domestic_events.length > 0">
                        <div class="sm:flex border border-gray-200 rounded-lg" v-for="(details, index) in domestic_events" :key="index">
                            <div class="w-full sm:w-1/2">
                                <router-link :to="{ path: '/event/' + details.slug }">
                                    <img class="w-full h-60 lg:h-64 rounded-t-lg sm:rounded-r-none sm:rounded-l-lg" :src="host + details.event_image" alt="Image">
                                </router-link>
                            </div>
 
                            <div class="w-full sm:w-1/2 p-6">
                                <div class="flex justify-between">
                                    <p class="text-sm text-gray-500"><i class="pi pi-map-marker text-primary pr-1" style="font-size: 12px"></i>{{ details.location.locations_name }}</p>

                                    <p v-if="details.trending" class="text-primary border border-primary rounded-xl px-2 flex items-center text-xs ml-2 h-6">Trending<i class="pi pi-check text-primary pl-1" style="font-size: 12px"></i></p>
                                </div>

                                <div class="py-4 border-b border-gray-200 flex">
                                    <router-link :to="{ path: '/event/' + details.slug }">
                                        <p class="font-semibold">{{ details.event_name }}</p>
                                    </router-link>
                                    
                                    <!-- <p v-if="details.trending" class="hidden md:flex items-center text-green-800 border border-green-800 rounded-xl px-2 text-xs ml-2 h-6">Trending<i class="pi pi-check text-green-700 pl-1" style="font-size: 12px"></i></p> -->
                                </div>
                                
                                <div v-if="details.details.length > 80" class="py-2" v-html="details.details.substring(0,80)+'...'"></div>
                                <div v-else v-html="details.details"></div>

                                <div class="flex justify-center">
                                    <router-link :to="{ path: '/event/' + details.slug }">
                                        <button class="bg-primary text-white text-sm lg:text-base rounded-md py-2 w-32">
                                            Show Details
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex flex-col items-center justify-center">
                        <img class="h-72 w-72 rounded-lg" src="../../assets/logo/loading.jpg" alt="">
                        <p class="text-xl mt-6 text-primary">Events not availabe</p>
                    </div>
                </div>

                <div class="lg:w-1/3 pt-6 lg:pt-0 lg:pl-4">
                    <DomesticBar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import DomesticBar from './Domestic_Bar.vue'

export default {
    props: ['slug'],

    components: {
        DomesticBar,
    },

    data() {
        return {
            host: "https://api.foringerdol.com",
            domestic_events: [],

            trending: [
                {
                    label: "Trending",
                    value: "true"
                },
                {
                    label: "....",
                    value: "false"
                }
            ]
        }
    },

    watch: {
        domestic_event(oldValue, newValue) {
            this.$store.dispatch('events/get_Domestic_Events_by_Slug', this.slug)
            this.domestic_events = this.domestic_event
        }
    },

    computed: {
        ...mapState ({
            domestics: state => state.destinations.domestic,
            domestic_event: state => state.events.domestic_events,
        }),
    },

    mounted() {
        this.$store.dispatch('destinations/getDomestic')
        this.$store.dispatch('events/get_Domestic_Events_by_Slug', this.slug)
    }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
    .responsive-size {
        @apply px-16;
    }
    .responsive-size-title {
        @apply flex justify-center
    }
}
@media screen and (max-width: 565px) {
    .responsive-size {
        @apply px-12;
    }
}
@media screen and (max-width: 490px) {
    .responsive-size {
        @apply px-8;
    }
}
@media screen and (max-width: 420px) {
    .responsive-size {
        @apply px-0;
    }
}
</style>
