<template>
    <div class="w-full flex flex-col items-center py-6 md:py-10 lg:py-16 px-4 lg:px-16 xl:px-28">
        <div class="container">
            <!-- Questions -->
            <div class="lg:flex">
                <div class="sm:px-10">
                    <div class="flex justify-center">
                        <p class="text-xl font-semibold text-gray-800 pr-2 border-b-2 border-primary py-4">WHY CHOOSE</p>
                        <p class="text-xl font-semibold text-primary border-b-2 border-primary py-4">US ?</p>
                    </div>
                    <p class="py-6 text-gray-600">Foringer Dol focuses on traveler's safety, hassle-free traveling, and well-planned tour for home and abroad journeys. We provide the best tour operators for the chosen destination with top priority for travelers. Our tour plan is designed with the best travel prices amongst all other travel groups.</p>
                </div>
                <div class="sm:px-10">
                    <div class="flex justify-center">
                        <p class="text-xl font-semibold text-gray-800 pr-2 border-b-2 border-primary py-4">OUR</p>
                        <p class="text-xl font-semibold text-primary border-b-2 border-primary py-4">MISSION</p>
                    </div>
                    <p class="py-6 text-gray-600">We want to make traveling the first choice for your relaxation in this monotonous and timebound life schedule. Our Passionate travel guides and tour operators want to make every tour with foringer dol into once in a lifetime journey. Traveling is the highest mode of learning, relaxing and best way to make memories.</p>
                </div>
                <div class="sm:px-10">
                    <div class="flex justify-center">
                        <p class="text-xl font-semibold text-gray-800 pr-2 border-b-2 border-primary py-4">WHAT WE</p>
                        <p class="text-xl font-semibold text-primary border-b-2 border-primary py-4">DO</p>
                    </div>
                    <p class="py-6 text-gray-600">While planning the tour we keep our traveler's priority in the first place, match the perfect timing to enjoy the scenic beauty of that visiting place landscape, what safety measures should be taken and what others can be arranged to make the traveler’s tour into a life event.</p>
                </div>
            </div>

            <!-- MEET OUR TEAM -->
            <div class="pt-8 lg:pt-10">
                <p class="text-2xl font-semibold py-4">MEET OUR TEAM</p>
                <div class="lg:flex justify-center">
                    <div class="px-6 py-3" v-for="(team, index) in teams" :key="index">
                        <div class="flex justify-center">
                            <img class="w-64 h-72" :src="team.img" alt="Image">
                        </div>
                        <p class="font-semibold text-gray-800 pt-2 lg:pt-3">{{ team.name }}</p>
                        <p class="text-primary">{{ team.designation }}</p>
                    </div>
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
            teams: state => state.team.team
        })
    }
}
</script>
