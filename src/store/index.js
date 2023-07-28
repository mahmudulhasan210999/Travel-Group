import { createStore } from 'vuex'
import destinations from './modules/destinations'
import trendings from './modules/trendings'
import tickets from './modules/tickets'
import stories from './modules/stories'
import reviews from './modules/reviews'
import team from './modules/team'
import hotels from './modules/hotels'
import events from './modules/events'

import event_booking from './modules/event_booking'
import images from './modules/images'
import subscribe from './modules/subscribe'

export default createStore({
    modules: {
        destinations,
        trendings,
        tickets,
        stories,
        reviews,
        team,
        hotels,
        events,

        event_booking,
        images,
        subscribe
    },

    state () {
        return {}
    },
    getters: {},
    mutaions: {},
    actions: {}
})

