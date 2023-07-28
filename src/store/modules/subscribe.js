import axios from 'axios';
import FAPI from '../../../api-path/api-path';

const state = {
    subscriber_mail: []
}

const getters = {}

const mutations = {
    POST_SUBSCRIBER_MAIL (state, items) {
        state.subscriber_mail = items
    }
}

const actions = {

    async post_Subscriber_Mail ({ commit, dispatch }, payload) {
        // let config=
        //     {
        //         headers:  { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }    
        //     }
        // console.log(payload)

        let response = await axios.post(FAPI.post_subscriber_mail, payload).then(result => {
            let items = result.data
            // console.log(items)
            commit('POST_SUBSCRIBER_MAIL', items)
            // dispatch('get_EventsList')
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