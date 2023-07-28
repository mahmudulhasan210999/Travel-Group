import axios from "axios";
import FAPI from "../../../api-path/api-path";

const state = {
    hotels: [],
    hotel_details: [],
}

const getters = {}

const mutations = {
    SET_HOTELS (state, items) {
        state.hotels = items
    },
    SET_HOTEL_DETAILS (state, item) {
        state.hotel_details = item
    }
}

const actions = {
    get_Hotels_list ({ commit }) {
        axios.get(FAPI.get_hotels).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_HOTELS', items)
        })
    },

    get_Hotel_details ({ commit }, payload) {
        axios.get(FAPI.get_hotel_details + payload).then(result => {
            let items = result.data.data
            // console.log('details -->', items)
            commit('SET_HOTEL_DETAILS', items)
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}