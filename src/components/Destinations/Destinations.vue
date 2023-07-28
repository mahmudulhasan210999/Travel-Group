<template>
    <div class="w-full flex flex-col items-center">
        <div class="container">

            <div class="flex justify-center">
                <button class="button mr-1" @click="showDomestic" :class="[{ 'clicked': displayDomestic }]">
                    <p class="text-sm xl:text-base">Domestic</p>
                </button>
                <button class="button ml-1" @click="showInternational" :class="[{ 'clicked': displayInternational }]">
                    <p class="text-sm xl:text-base">International</p>
                </button>
            </div>

            <div class="pt-8 responsive-size">
                <div v-if="displayDomestic">
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div v-for="(domestic, index) in domestics" :key="index">
                            <router-link :to="{ path: '/domestic/' + domestic.id }">
                                <div class="d-container flex justify-center items-center">
                                    <img class="w-full h-52 lg:h-64 xl:h-72 rounded-lg effects" :src="host + domestic.location_image" alt="Image">
                                    <div class="above-text">
                                        <p class="text-xl lg:text-2xl">{{ domestic.locations_name }}</p>
                                        <p class="text-sm lg:text-base">{{ domestic.events }} Events</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div v-if="displayInternational">
                   <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div v-for="(international, index) in internationals" :key="index">
                            <router-link :to="{ path: '/international/' + international.id }">
                                <div class="d-container flex justify-center items-center">
                                    <img class="w-full h-52 lg:h-64 xl:h-72 rounded-lg effects" :src="host + international.location_image" alt="Image">
                                    <div class="above-text">
                                        <p class="text-xl lg:text-2xl">{{ international.locations_name }}</p>
                                        <p class="text-sm lg:text-base">{{ international.events }} Events</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            host: "https://api.foringerdol.com",
            displayDomestic: true,
            displayInternational: false,
        }
    },

    methods: {
        showDomestic() {
            this.displayDomestic = true;
            this.displayInternational = false;
        },
        showInternational() {
            this.displayDomestic = false;
            this.displayInternational = true
        }
    },

    computed: {
        ...mapState ({
            domestics: state => state.destinations.domestic,
            internationals: state => state.destinations.international,
        })
    },

    mounted() { 
        this.$store.dispatch('destinations/getDomestic')
        this.$store.dispatch('destinations/getInternational')
    },
        
}
</script>

<style scoped>
.d-container {
    position: relative;
    text-align: center;
    color: white;
}
.above-text {
    position: absolute;
}

.button {
    @apply px-3 lg:px-4 py-2 bg-white rounded-md border border-gray-200
}
.clicked {
    @apply text-white bg-primary
}

.effects {
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.effects:hover {
    -webkit-transform: scale(1.04);
	transform: scale(1.04);
}

@media screen and (max-width: 640px) {
    .responsive-size {
        @apply px-24;
    }
}
@media screen and (max-width: 565px) {
    .responsive-size {
        @apply px-16;
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
