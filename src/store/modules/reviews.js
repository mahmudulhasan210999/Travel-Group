import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    reviews: []
}

const getters = {}

const mutations = {
    SET_REVIEWS (state, items) {
        state.reviews = items
    },
}

const actions = {
    get_Reviews({ commit }) {
        axios.get(FAPI.get_Reviews).then(result => {
            let items = result.data.data
            console.log(items)
            commit('SET_REVIEWS', items)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}