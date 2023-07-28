import t_img1 from "../../assets/team/raj.jpg"
import t_img2 from "../../assets/team/mustakim.png"

const state = {
    team: [
        {
            id: 1,
            img: t_img1,
            name: 'DIN ISLAM RAZ',
            designation: 'Founder and Administrator',
        },
        {
            id: 1,
            img: t_img2,
            name: 'MUSTAKIM HASAN',
            designation: 'Founder',
        }
    ],
}

const getters = {}
const actions = {
}
const mutations = {
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}