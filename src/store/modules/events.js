import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    events: [],
    event_details: {},
    domestic_events: [],
    international_events: []
}

const getters = {}

const mutations = {
    SET_EVENTS (state, items) {
        state.events = items
    },
    SET_EVENTS_DETAILS (state, item) {
        state.event_details = item
    },
    SET_DOMESTIC_EVENTS (state, items) {
        state.domestic_events = items
    },
    SET_INTERNATIONAL_EVENTS (state, items) {
        state.international_events = items
    },
}

const actions = {
    get_EventsList ({ commit }) {
        axios.get(FAPI.get_events).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_EVENTS', items)
        })
    },

    getEventDetails ({ commit }, payload) {
        let response = axios.get(FAPI.get_event_details + payload).then(result => {
            let items = result.data.data
            // console.log('details -->', items)
            commit('SET_EVENTS_DETAILS', items)
            return items
        })
        return response
    },

    get_Domestic_Events_by_Slug ({ commit }, payload) { 
        axios.get(FAPI.get_events_by_location + payload).then(result => {
            let items = result.data.data
            // console.log('domestic -->', items)
            commit('SET_DOMESTIC_EVENTS', items)
        })
    },

    get_International_Events_by_Slug ({ commit }, payload) { 
        axios.get(FAPI.get_events_by_location + payload).then(result => {
            let items = result.data.data
            // console.log('international -->', items)
            commit('SET_INTERNATIONAL_EVENTS', items)
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}