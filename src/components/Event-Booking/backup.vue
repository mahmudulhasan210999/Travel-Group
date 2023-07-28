<template>
    <div class="w-full flex flex-col items-center py-6 lg:py-20 bg-background">
        <div class="container px-4 md:px-6 lg:px-32 xl:px-56">

            <div class="bg-white p-4 sm:p-6 rounded-xl" >
                <p class="text-center text-xl border-gray-400">EVENT BOOKING DETAILS</p>

                <div class="py-2 flex-breaker-py-padding">
                    <div class="flex flex-breaker">
                        <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pr-2">
                            <p class="py-2 text-left">NAME</p>
                            <input class="input" v-model="event_booking.name"
                            placeholder="Name"
                            type="text">
                        </div>

                        <div class="w-1/2 flex-breaker-width flex-breaker-padding pl-2">
                            <p class="py-2 text-left">CONTACT NUMBER</p>
                            <input class="input" v-model="event_booking.contact_number"
                            placeholder="Contact number"
                            type="text">
                        </div>
                    </div>
                </div>
        
                <div class="py-2 flex-breaker-py-padding flex flex-breaker">
                    <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pr-2">
                        <p class="py-2 text-left">EMAIL</p>
                        <input class="input" v-model="event_booking.email"
                        placeholder="Email"
                        type="text">
                    </div>

                    <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pl-2">
                        <p class="py-2 flex-breaker-py-padding flex-breaker-py-padding-bottom text-left">LOCATION</p>
                        <vSelect class="dropdown" :options="event_booking.location" placeholder="Location"></vSelect>
                    </div>
                </div>

                <div class="py-2 flex-breaker-py-padding">
                    <p class="py-2 text-left">EVENT NAME</p>
                    <vSelect class="dropdown" :options="event_booking.event_name" placeholder="Event name"></vSelect>
                </div>

                <div class="py-2 flex-breaker-py-padding flex flex-breaker">
                    <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pr-2">
                        <p class="py-2 text-left"> JOURNEY DATE</p>
                        <input class="input" v-model="event_booking.journey_date"
                        placeholder="Journey date"
                        type="text">
                    </div>

                    <div class="w-1/2 flex-breaker-width flex-breaker-padding pl-2">
                        <p class="py-2 text-left">NUMBER OF PERSONS</p>
                        <div class="flex flex-breaker">
                            <div class="pr-2 tuttut flex-breaker-width flex-breaker-padding flex-padding-bottom w-full">
                                <vSelect class="dropdown" :options="event_booking.adult" placeholder="Adult"></vSelect>
                            </div>
                            <div class="pl-2 flex-breaker-width flex-breaker-padding w-full">
                                <vSelect class="dropdown" :options="event_booking.children" placeholder="Children"></vSelect>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-2 flex-breaker-py-padding">
                    <p class="py-2 text-left">WANNA SAY SOMETHING ?</p>
                    <textarea 
                        class="input w-full" 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="5"
                        v-model="event_booking.something_text"
                    >
                    </textarea>
                </div>

                <div class="flex justify-center mt-5 mb-4">
                    <button @click="submit" class="bg-primary hover:bg-gray-500 text-white text-sm lg:text-base px-5 py-3 rounded-lg">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
// import Calendar from 'primevue/calendar';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
    components: {
        InputText,
        Textarea,
        vSelect,
        // Calendar,
    },

    data() {
        return {
            event_booking: {
                name: "",
                contact_number: "",
                email: "",
                location: [
                    'a', 'b', 'c'
                ],
                event_name: [
                    'a', 'b', 'c'
                ],
                journey_date: "",
                adult: [
                    '1', '2', '3',
                ],
                children: [
                    '1', '2', '3',
                ],
                something_text: ""
            },

            // dates: null,
            // temp_details: {
            //     f_name: '',
            //     l_name: '',
            // },
            // contact_number: [],
            // email: [],
            // event_name: [],
            // journey_date: [],
            // adult: [
            //     '1', '2', '3',
            // ],
            // children: [
            //     '1', '2', '3',
            // ],
            // something_text: [],
        }
    },

    computed: {
        ...mapState ({}),

        // mandatory_details() {
        //     return this.$store.state.mandatory_details;
        // }
    },

    methods: {
        submit() {
            this.$store.dispatch('reviews/post_Reviews', this.review).then(response => {
                console.log(response.data.response)    
                if(response.data.code == 200) { 
                    this.$toast.add({severity: 'success', summary: 'Success!', detail: response.data.response, closable: false, life: 3000})
                    this.event_booking.name= ""
                    this.event_booking.contact_number = ""
                    this.event_booking.email = ""
                }
                else {
                    this.$toast.add({severity: 'error', summary: 'Error!', detail: response.data.response, closable: false, life: 3000})
                }
            })
        },
    },

    // mounted() {
    //     console.log(this.mandatory_details)
    // },

    // mounted() {
    //     this.$store.dispatch('team/getTeams')
    // }
}
</script>

<style scoped>
.dropdown {
    @apply text-gray-400 bg-white;
}
.input {
    @apply w-full outline-none text-gray-700 p-1 border border-gray-300 rounded;
}
/* .tuttut {
    @apply my-3
} */

@media screen and (max-width: 420px) {
    .flex-breaker {
        @apply flex flex-col w-full;
    }
    .flex-breaker-width {
        @apply w-full
    }
    .flex-breaker-padding {
        @apply pr-0 pl-0
    }
    .flex-padding-bottom {
        @apply pb-3
    }
    .flex-breaker-py-padding {
        @apply py-0 pt-1
    }
    .flex-breaker-py-padding-bottom {
        @apply pb-2
    }
}
</style>
