<template>
    <div class="w-full flex flex-col">
        <div class="text-left">
            <p class="text-lg sm:text-xl font-semibold pb-2 sm:pb-4">Tours by Destinations</p>
            <div class="grid gap-2 p-4 border rounded-lg pb-6">
                <div class="border-b" v-for="(tour, index) in tours" :key="index"> 
                    <router-link :to="{ path: '/tour/' + tour.slug }">
                        <p class="font-semibold text-gray-600 hover:text-primary p-2">{{ tour.location }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState ({
            tours: state => state.tours.tours, 
        }),
    },
}
</script>
