import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    images: []
}

const getters = {}

const mutations = {
    SET_IMAGES (state, items) {
        state.images = items
    }
}

const actions = {
    getImages({ commit }) {
        axios.get(FAPI.get_images).then(result => {
            let items = result.data.data
            console.log(items)
            commit('SET_IMAGES', items)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}