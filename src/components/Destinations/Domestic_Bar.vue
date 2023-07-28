<template>
    <div class="w-full flex flex-col">
        <div class="text-left">
            <p class="text-lg sm:text-xl font-semibold pb-4">More Domestic Destinations</p>
            <div class="grid gap-2 p-4 border border-gray-200 rounded-lg pb-6">
                <div class="border-b border-gray-200 cursor-pointer" v-for="(domestic, index) in domestics" :key="index">
                    
                    <!-- <router-link :to="{ path: '/domestic/' + domestic.id }"> -->
                        <p @click="domestic_page(domestic.id)" class="font-semibold text-gray-600 p-2">{{ domestic.locations_name }}</p>
                    <!-- </router-link> -->
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
            domestics: state => state.destinations.domestic
        }),
    },

    mounted() {
        this.$store.dispatch('destinations/get_Domestic')
    },

    methods: {
        domestic_page(domId) {
            this.$router.push({name:'domestic', params: {id:domId}})
        }
    },
}
</script>
