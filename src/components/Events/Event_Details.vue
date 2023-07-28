<template>
    <div class="w-full flex flex-col items-center px-4 lg:px-16 xl:px-28 py-6 md:py-10 lg:py-16"> 
        <div class="container">
            <img class="w-full h-60 sm:h-72 xl:h-96 rounded-xl" :src="host + event.banner_image" alt="Image">

            <div class="md:flex pt-4 md:pt-6 lg:pt-10">
                <!-- Left Column -->
                <div class="md:w-2/3 md:pr-6 text-left"> 
                    <div class="border-b border-gray-200">
                        <p class="text-lg sm:text-xl lg:text-2xl font-semibold">{{ event.event_name }}</p>
                        <p v-if="event.location" class="font-medium pr-2 py-2 sm:py-4 text-sm sm:text-base"><i class="pi pi-map-marker text-primary pr-1" style="font-size: 12px"></i>{{ event.location.locations_name }}</p>
                    </div>

                    <div class="py-4 lg:py-6 border-b border-gray-200"> 
                        <p class="text-lg sm:text-xl font-semibold pb-2 sm:pb-4">About this Event</p>
                        <div class="text-gray-500 text-sm sm:text-base" v-html="event.details"></div>
                    </div>
                </div>

                <!-- Sidebar, Right column -->
                <div class="md:w-1/3 pt-6 lg:pt-0">
                    <img class="rounded-xl w-full h-60 sm:h-72 md:h-60 lg:h-72 xl:h-96 mb-6" :src="host + event.event_image" alt="Image">

                    <router-link :to="{ path: '/event-booking-individual/' + event.slug }">
                        <button class="bg-primary hover:bg-gray-500 text-white text-sm lg:text-base px-8 py-3 rounded-lg">Book Now</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: ['slug'],  

    data() {
        return {
            host: "https://api.foringerdol.com",
        }
    },

    computed: {
        ...mapState ({ 
            event: state => state.events.event_details,
        }),
    },

    mounted() {
        console.log(this.slug)
        this.$store.dispatch('events/getEventDetails', this.slug)
    }
}
</script>
