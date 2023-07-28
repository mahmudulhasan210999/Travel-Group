import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    featured_hotels: [],
    featured_events: []
}

const getters = {}

const mutations = {
    SET_HOTEL (state, items) {
        state.featured_hotels = items
    },
    SET_EVENTS (state, items) {
        state.featured_events = items
    },
}

const actions = {
    get_Hotels({ commit }) {
        axios.get(FAPI.get_hotels).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_HOTEL', items)
        })
    },

    get_Trending_EventsList({ commit }) { 
        axios.get(FAPI.get_trending_events).then(result => { 
            let items = result.data.data
            console.log(items)
            commit('SET_EVENTS', items) 
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}