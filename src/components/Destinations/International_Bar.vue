<template>
    <div class="w-full flex flex-col">
        <div class="text-left">
            <p class="text-lg sm:text-xl font-semibold pb-4">More International Destinations</p>
            <div class="grid gap-2 p-4 border border-gray-200 rounded-lg">
                <div class="border-b border-gray-200 cursor-pointer" v-for="(international, index) in internationals" :key="index">
                    <!-- <router-link :to="{ path: '/international/' + international.id }"> -->
                        <p @click="international_page(international.id)" class="font-semibold text-gray-600 p-2">{{ international.locations_name }}</p>
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
            internationals: state => state.destinations.international
        }),
    },

    mounted() {
        this.$store.dispatch('destinations/get_International')
    },

    methods: {
        international_page(intId) {
            this.$router.push({name:'international', params: {id:intId}})
        }
    }
}
</script>
