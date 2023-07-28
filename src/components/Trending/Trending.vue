<template>
    <div class="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-6 md:py-12 bg-background">
        <div class="container">
            <p class="text-xl lg:text-2xl xl:text-3xl font-semibold py-4">Our Services</p>
            <div class="lg:flex justify-center">
                <div class="flex justify-center">
                    <button class="button" @click="showHotels" :class="[{ 'clicked': displayHotels }]">
                        <p class="text-sm lg:text-base">Hotels</p>
                    </button>
                    <button class="button ml-2" @click="showEvents" :class="[{ 'clicked': displayEvents }]">
                        <p class="text-sm lg:text-base">Events</p>
                    </button>
                </div>
                <!-- <div class="flex justify-center pt-2 lg:pt-0">
                    <button class="button lg:ml-2" @click="showBus" :class="[{ 'clicked': displayBus }]">
                        <p class="text-sm lg:text-base">Bus Tickets</p>
                    </button>
                    <button class="button ml-2" @click="showAir" :class="[{ 'clicked': displayAir }]">
                        <p class="text-sm lg:text-base">Air Tickets</p>
                    </button>
                    <button class="button ml-2" @click="showShip" :class="[{ 'clicked': displayShip }]">
                        <p class="text-sm lg:text-base">Ship Tickets</p>
                    </button>
                </div> -->
            </div>

            <div class="pt-8">
                <!-- displayHotels -->
                <div v-if="displayHotels">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div v-for="(hotel, index) in featured_hotels.slice(0, 8)" :key="index">
                            <router-link :to="{ path: '/hotel/' + hotel.slug }">
                                <HotelBox :hotel="hotel" />
                            </router-link>
                        </div>
                    </div>

                    <div class="pt-6">
                        <button @click="toHotels" class="bg-primary hover:bg-gray-500 text-white text-sm lg:text-base px-5 py-3 rounded-lg">See More</button>
                    </div>
                </div>

                <!-- displayEvents -->
                <div v-if="displayEvents">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div v-for="(tour, index) in featured_events.slice(0, 8)" :key="index">
                            <router-link :to="{ path: '/event/' + tour.slug }">
                                <EventBox :tour="tour" />
                            </router-link>
                        </div>
                    </div>

                    <div class="pt-6">
                        <button @click="toEvents" class="bg-primary hover:bg-gray-500 text-white text-sm lg:text-base px-5 py-3 rounded-lg">See More</button>
                    </div>
                </div>

                <div v-if="displayBus">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div v-for="(ticket, index) in buses" :key="index">
                            <TicketBox :ticket="ticket" />
                        </div>
                    </div>
                </div>

                <div v-if="displayAir">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div v-for="(ticket, index) in airs" :key="index">
                            <TicketBox :ticket="ticket" />
                        </div>
                    </div>
                </div>

                <div v-if="displayShip">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div v-for="(ticket, index) in ships" :key="index">
                            <TicketBox :ticket="ticket" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Primeicons from 'primeicons/primeicons.css';
import HotelBox from '../Trending-Boxes/HotelBox.vue';
import EventBox from '../Trending-Boxes/EventBox.vue'
import TicketBox from '../Trending-Boxes/TicketBox.vue';

export default {
    components: {
        Primeicons,
        HotelBox,
        EventBox,
        TicketBox,
    },

    data() {
        return {
            displayHotels: true,
            displayEvents: false,
            displayBus: false,
            displayAir: false,
            displayShip: false,
        }
    },

    methods: {
        showHotels() {
            this.displayHotels = true;
            this.displayEvents = false;
            this.displayBus = false;
            this.displayAir = false;
            this.displayShip = false;
        },
        showEvents() {
            this.displayHotels = false;
            this.displayEvents = true;
            this.displayBus = false;
            this.displayAir = false;
            this.displayShip = false;
            this.$store.dispatch('trendings/get_Trending_EventsList')
        },
        showBus() {
            this.displayHotels = false;
            this.displayEvents = false;
            this.displayBus = true;
            this.displayAir = false;
            this.displayShip = false;
        },
        showAir() {
            this.displayHotels = false;
            this.displayEvents = false;
            this.displayBus = false;
            this.displayAir = true;
            this.displayShip = false;
        },
        showShip() {
            this.displayHotels = false;
            this.displayEvents = false;
            this.displayBus = false;
            this.displayAir = false;
            this.displayShip = true;
        },

        toHotels() {
            this.$router.push('/hotels')
        },
        toEvents() {
            this.$router.push('/events')
        }
    },

    computed: {
        ...mapState({
            featured_hotels: state => state.trendings.featured_hotels,
            featured_events: state => state.trendings.featured_events, 
            buses: state => state.tickets.buses, 
            airs: state => state.tickets.airs,
            ships: state => state.tickets.ships,
        })
    },

    mounted() {
        this.$store.dispatch('trendings/get_Hotels')
    },
}
</script>

<style scoped>

.button {
    @apply px-3 lg:px-4 py-2 bg-white rounded-md border border-gray-200
}
.clicked {
    @apply text-white bg-primary
}
</style>
