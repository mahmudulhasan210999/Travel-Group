<template>
    <div class="flex flex-col navbar">
        <div class="nav-cross">
            <div>
                <i @click="$emit('navClosed')" class="pi pi-times py-2.5 px-3"></i>
            </div>
        </div>

        <div class="w-full text-left" @click="$emit('navClosed')">
            <router-link :to="{ path: '/'}" >
                <p class="options"> Home </p>
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
                <p class="options">Contact Us</p>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return{}
    }
}
</script>

<style scoped>

.navbar {
    z-index: 999;
    width: 80vw;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @apply shadow-lg bg-white;
}

.nav-cross { 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-start;
    padding-top: 2%;
    padding-right: 4%;
    margin-bottom: 4%;
    @apply border-b border-gray-300;
}

.options {
    @apply px-4 my-2 py-1 capitalize font-semibold
}
</style>