import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    domestic: [],
    international: [],
}

const getters = {}

const mutations = {
    SET_DOMESTIC (state, items) {
        state.domestic = items
    },

    SET_INTERNATIONAL (state, items) {
        state.international = items
    },
}

const actions = {
    getDomestic({ commit }) {
        axios.get(FAPI.get_domestic).then(result => {
            let items = result.data.data
            // console.log(items)
            commit('SET_DOMESTIC', items)
        })
    },

    getInternational({ commit }) {
        axios.get(FAPI.get_international).then(result => { 
            let items = result.data.data
            console.log('int -->' ,items)
            commit('SET_INTERNATIONAL', items)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}