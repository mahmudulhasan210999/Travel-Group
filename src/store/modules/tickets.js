import b_img1 from "../../assets/tickets/ena.jpg"
import b_img2 from "../../assets/tickets/hanif.jpg"
import b_img3 from "../../assets/tickets/nabil.jpg"
import b_img4 from "../../assets/tickets/sr.jpg"

import a_img1 from "../../assets/tickets/a1.jpg"
import a_img2 from "../../assets/tickets/a2.jpg"
import a_img3 from "../../assets/tickets/a3.jpg"
import a_img4 from "../../assets/tickets/a4.jpg"

import s_img1 from "../../assets/tickets/s1.jpg"
import s_img2 from "../../assets/tickets/s2.jpg"
import s_img3 from "../../assets/tickets/s3.jpg"
import s_img4 from "../../assets/tickets/s4.jpg"

const state = {
    buses: [
        {
            id: 1,
            img: b_img1,
            name: 'Ena Transport',
            ticket_price: 1000,
            boarding: 'Abdullahpur',
            dropping: 'Rangamati',
        },
        {
            id: 2,
            img: b_img2,
            name: 'Hanif Enterprise',
            ticket_price: 800,
            boarding: 'Abdullahpur',
            dropping: 'Bandarban',
        },
        {
            id: 3,
            img: b_img3,
            name: 'Nabil Classic',
            ticket_price: 900,
            boarding: 'Abdullahpur',
            dropping: 'Chittagong',
        },
        {
            id: 4,
            img: b_img4,
            name: 'SR Travels',
            ticket_price: 1100,
            boarding: 'Abdullahpur',
            dropping: 'Rangpur',
        },
        
    ],

    airs: [
        {
            id: 1,
            img: a_img1,
            name: 'Qatar Airways',
            ticket_price: 10000,
            boarding: 'Bangladesh',
            dropping: 'Qatar',
        },
        {
            id: 2,
            img: a_img2,
            name: 'BD Airlines',
            ticket_price: 8000,
            boarding: 'Bangladesh',
            dropping: 'Australia',
        },
        {
            id: 3,
            img: a_img3,
            name: 'Air India',
            ticket_price: 9000,
            boarding: 'Bangladesh',
            dropping: 'India',
        },
        {
            id: 4,
            img: a_img4,
            name: 'American Airlines',
            ticket_price: 11000,
            boarding: 'Bangladesh',
            dropping: 'America',
        },
        
    ],

    ships: [
        {
            id: 1,
            img: s_img1,
            name: 'Titanic',
            ticket_price: 30000,
            boarding: 'Sadarghat',
            dropping: 'Rangamati',
        },
        {
            id: 2,
            img: s_img2,
            name: 'Symphony',
            ticket_price: 2000,
            boarding: 'Bhola',
            dropping: 'Bandarban',
        },
        {
            id: 3,
            img: s_img3,
            name: 'MV Bangla',
            ticket_price: 9000,
            boarding: 'Mongla',
            dropping: 'America',
        },
        {
            id: 4,
            img: s_img4,
            name: 'Arshinagar',
            ticket_price: 11000,
            boarding: 'Mongla',
            dropping: 'Canada',
        },
        
    ],
}

const getters = {}
const actions = {}
const mutations = {}

export default {
    state
}