import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue'
import Domestic from '../views/events/domestic/[id].vue'
import International from '../views/events/international/[id].vue'
import StoryDetails from '../views/stories/[id].vue'
import Hotel from '../views/trending/hotel/[id].vue'
import EventDetails from '../views/events/event_details/[id].vue'
import AboutUs from '../views/about-us/index.vue'
import ContactUs from '../views/contact-us/index.vue'
import Hotels from '../views/hotels/index.vue'
import Events from '../views/events/index.vue'
import EventBooking from '../views/event-booking/index.vue'
import EventBookingIndividual from '../views/event-booking-individual/[id].vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/domestic/:id',
        component: Domestic,
        name: 'domestic'
    },
    {
        path: '/international/:id',
        name: 'international',
        component: International
    },
    {
        path: '/story-details/:id',
        component: StoryDetails
    },
    {
        path: '/hotel/:id',
        component: Hotel
    },
    {
        path: '/hotels',
        component: Hotels
    },
    {
        path: '/event/:id',
        component: EventDetails
    },
    {
        path: '/events',
        component: Events
    },
    {
        path: '/event-booking',
        component: EventBooking
    },
    {
        path: '/event-booking-individual/:slug',
        component: EventBookingIndividual
    },
    {
        path: '/about-us',
        component: AboutUs
    },
    {
        path: '/contact-us',
        component: ContactUs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return desired position
        if (savedPosition) return savedPosition
        else return { top: 0 }
    }
})

export default router