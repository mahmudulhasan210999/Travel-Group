<template>
    <div class="w-full flex flex-col">
        <!-- 1st Black Row -->
        <div class="flex flex-col items-center bg-gray-500 px-4 lg:px-20 xl:px-28">
            <div class="container flex justify-between">
                <div class="flex items-center text-sm text-gray-200">
                    <p class="">+8801880089100</p>
                    <div class="hidden sm:flex">
                        <p class="px-3 flex items-center">|</p>
                        <p>travelforing@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div class="flex py-1 lg:py-2">
                        <div>
                            <a target="_blank" href="https://www.facebook.com/travelforing/"><i class="pi pi-facebook" style="font-size: 15px; color: rgb(229 231 235)"></i></a>
                        </div>
                        <p class="slash">|</p>
                        <div>
                            <a target="_blank" href="https://www.youtube.com/channel/UC-CGAoKw4Cf4xJt8kT8B-ZQ"><i class="pi pi-youtube" style="font-size: 15px; color: rgb(229 231 235)"></i></a>
                        </div>
                        <p class="slash">|</p>
                        <div>
                            <a target="_blank" href="https://instagram.com/foringer_dol?igshid=YmMyMTA2M2Y="><i class="pi pi-instagram" style="font-size: 15px; color: rgb(229 231 2357)"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2nd Gray row -->
        <div class="flex flex-col items-center bg-gray-300 px-4 lg:px-20 xl:px-28 py-2 lg:py-0">
            <div class="container">

                <div class="flex lg:hidden justify-between">
                    <div>
                        <router-link to="/">
                            <img class="w-36 sm:w-40 h-9 sm:h-10" src="../../assets/logo/logo.png" alt="">
                        </router-link>
                    </div>

                    <div class="flex justify-center items-center">
                        <div>
                            <i @click="toggleNav" class="pi pi-bars cursor-pointer p-2" style="font-size:1.3rem; color:rgb(76, 175, 80)"></i>
                        </div>
                        <Navbar v-if="navToggled" @navClosed="closeNav"/>
                        <router-link class="hidden lg:flex" :to="{ path: '/' }">
                            <img class="h-10 w-36" alt="logo">
                        </router-link>
                    </div>
                </div>

                <div class="hidden lg:flex justify-between">
                    <router-link to="/">
                        <img class="w-40 xl:w-52 h-12 xl:h-16 py-1" src="../../assets/logo/logo.png" alt="">
                    </router-link>
                    <div class="flex justify-between items-center pl-24">
                        <router-link to="/">
                            <p class="options">Home</p>
                        </router-link>

                        <router-link to="/hotels">
                            <p class="options">Hotels</p>
                        </router-link>

                        <router-link to="/events">
                            <p class="options">Events</p>
                        </router-link>

                        <router-link to="/event-booking">
                            <p class="options">Event Booking</p>
                        </router-link>

                        <router-link to="/about-us">
                            <p class="options">About Us</p>
                        </router-link>

                        <router-link to="/contact-us">
                            <p class="pl-6 text-gray-600 hover:text-primary font-medium">Contact Us</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../Header/Nav.vue'

export default {
    components: {
        Navbar,
    },

    data () {
        return {
            navToggled: false,
        }
    },

    methods: {
        toggleNav: function () {
            this.navToggled = !this.navToggled
        },

        closeNav: function () {
            this.navToggled = false;
        },
    },
}
</script>

<style scoped>
.slash {
    @apply flex items-center px-3 text-xs text-gray-200
}

.options {
    @apply px-4 xl:px-6 text-gray-600 hover:text-primary font-medium;
}
</style>
