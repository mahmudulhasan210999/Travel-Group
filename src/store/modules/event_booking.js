import axios from 'axios';
import FAPI from "../../../api-path/api-path";

const state = {
    locations: [],
    events: [],
    event_booking: []
}

const getters = {}

const mutations = {
    SET_LOCATIONS (state, items) {
        state.locations = items
    },

    SET_EVENTS (state, items) {
        state.events = items
    },

    POST_EVENT_BOOKING (state, items) {
        state.event_booking = items
    }
}

const actions = {
    get_LocationsList ({ commit }) {
        axios.get(FAPI.get_locations).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_LOCATIONS', items)
        })
    },

    get_All_EventsList ({ commit }) {
        axios.get(FAPI.get_events).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_EVENTS', items)
        })
    },

    get_Events_By_Location ({ commit }, payload) {
        axios.get(FAPI.get_events_by_location + payload).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_EVENTS', items)
        })
    },

    async post_Event_Booking ({ commit }, payload) {
        console.log(payload)
        let response = await axios.post(FAPI.post_booking, 
            {
                name: payload.event_booking.name,
                email: payload.event_booking.email,
                contact_number: payload.event_booking.contact_number,
                details: payload.event_booking.details,
                num_person_Adult: payload.event_booking.num_person_Adult,
                num_person_Child: payload.event_booking.num_person_Child,
                journey_date: payload.journey_date,
                payment_status: payload.event_booking.payment_status,
                location: payload.event_booking.location,
                events: payload.event_booking.events

            }).then(result => {
            let items = result.data
            console.log(items)
            commit('POST_EVENT_BOOKING', items)
            return result
        })
        return response
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}