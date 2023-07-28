import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    stories: [],
    story_details: []
}

const getters = {}

const mutations = {
    SET_STORIES (state, items) {
        state.stories = items
    },
    SET_STORY_DETAILS (state, items) {
        state.story_details = items
    },
}

const actions = {
    get_Stories({ commit }) {
        axios.get(FAPI.get_Stories).then(result => {
            let items = result.data.data
            console.log(items)
            commit('SET_STORIES', items)
        })
    },

    async get_Story_details ({ commit }, payload) {
        let response = await axios.get(FAPI.get_story_details + payload ).then(result => {
            let story_details = result.data.data
                commit('SET_STORY_DETAILS', story_details)
                console.log(story_details)
                return story_details
            })
            .catch(error => {
            console.log(error)
            })     
            return response
        },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}