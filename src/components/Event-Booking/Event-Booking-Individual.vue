<template>
    <div class="w-full flex flex-col items-center py-6 lg:py-20 bg-background">
        <Toast :breakpoints="{'640px': {width: '80%', right: '0'}}" />
        <div class="container px-4 md:px-6 lg:px-32 xl:px-56">

            <div class="text-left pb-6">
                <img class="w-full h-60 sm:h-72 xl:h-96 rounded-xl" :src="host + event_individual.banner_image" alt="Image">
                <div class="border-b border-gray-200 pt-4">
                    <p class="text-lg sm:text-xl lg:text-2xl font-semibold">{{ event_individual.event_name }}</p>
                    <p v-if="event_individual.location" class="font-medium pr-2 py-2 sm:py-4 text-sm sm:text-base"><i class="pi pi-map-marker text-primary pr-1" style="font-size: 12px"></i>{{ event_individual.location.locations_name }}</p>
                </div>
            </div>

            <div v-if="show_form" class="bg-white p-4 sm:p-6 rounded-xl" >
                <p class="text-center text-xl border-gray-400">EVENT BOOKING DETAILS</p>

                <Form @submit="submit" :validation-schema="schema">
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
                                
                                <Field
                                    class="w-full outline-none text-gray-600 p-2 border border-gray-300 rounded"
                                    style="height: 34px"
                                    type="text" 
                                    v-model="event_booking.contact_number"
                                    placeholder="Contact number"
                                    name="Phone Number"
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm" name="Phone Number" />
                            </div>
                        </div>
                    </div>
            
                    <div class="py-2 flex-breaker-py-padding flex flex-breaker">
                        <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pr-2 text-left">
                            <p class="py-2 text-left">EMAIL</p>

                            <Field
                                class="w-full outline-none text-gray-600 p-2 border border-gray-300 rounded"
                                style="height: 34px"
                                type="text" 
                                v-model="event_booking.email"
                                placeholder="Email"
                                name="Email"
                            />
                            <ErrorMessage class="text-red-500 text-sm" name="Email" />
                        </div>

                        <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pl-2">
                            <p class="py-2 flex-breaker-py-padding flex-breaker-py-padding-bottom text-left">LOCATION</p>
                            <vSelect 
                                class="text-gray-400"
                                :options="locations"
                                @option:selected="getEventsList(event_booking.location)"
                                :reduce="(locations_name) => locations_name.id" 
                                label="locations_name" 
                                v-model="event_booking.location"
                                placeholder="Select"
                                :disabled="true"
                            >
                            </vSelect>
                        </div>
                    </div>

                    <div class="py-2 flex-breaker-py-padding">
                        <p class="py-2 text-left">EVENT NAME</p>
                        <vSelect 
                            class="text-gray-400"
                            :options="eventsList"
                            :reduce="(event_name) => event_name.id" 
                            label="event_name" 
                            v-model="event_booking.events"
                            placeholder="Select"
                            :disabled="true"
                        >
                        </vSelect>
                    </div>

                    <div class="py-2 flex-breaker-py-padding flex flex-breaker">
                        <div class="w-1/2 flex-breaker-width flex-breaker-padding flex-padding-bottom pr-2">
                            <p class="py-2 text-left"> JOURNEY DATE</p>
                            <Calendar
                                class="w-full text-gray-700"
                                style="height: 34px"
                                :showIcon="true"
                                v-model="event_booking.journey_date"
                                autocomplete="off"
                                placeholder="Select a date"
                            />
                        </div>

                        <div class="w-1/2 flex-breaker-width flex-breaker-padding pl-2">
                            <p class="py-2 text-left">NUMBER OF PERSONS</p>
                            <div class="flex flex-breaker">
                                <div class="pr-2 tuttut flex-breaker-width flex-breaker-padding flex-padding-bottom w-full">
                                    <vSelect 
                                        class="text-gray-400 h-full"
                                        :options="adults"
                                        :reduce="(label) => label.value" 
                                        label="label" 
                                        v-model="event_booking.num_person_Adult"
                                        placeholder="Adult"
                                        
                                    >
                                    </vSelect>
                                </div>
                                <div class="pl-2 flex-breaker-width flex-breaker-padding w-full">
                                    <vSelect 
                                        class="text-gray-400 h-full"
                                        :options="children"
                                        :reduce="(label) => label.value" 
                                        label="label" 
                                        v-model="event_booking.num_person_Child"
                                        placeholder="Children"
                                    >
                                    </vSelect>
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
                            v-model="event_booking.details"
                            placeholder="Your comment here"
                        >
                        </textarea>
                    </div>

                    <div class="flex justify-center mt-5 mb-4">
                        <button class="bg-primary hover:bg-gray-500 text-white text-sm lg:text-base px-5 py-3 rounded-lg">SUBMIT</button>
                    </div>
                </Form>
            </div>
            <div v-else>
                <p class="text-primary text-xl font-semibold mb-4">Event Booked</p>
                <router-link to="/">
                    <button class="bg-primary hover:bg-gray-500 text-white text-sm lg:text-base px-5 py-2 rounded-lg">Go back to Home</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import moment from 'moment'
import Toast from 'primevue/toast';

export default {
    components: {
        InputText,
        Textarea,
        vSelect,
        Calendar,
        Field,
        Form,
        ErrorMessage,
        Toast
    },

    data() {
        return {
            host: "https://api.foringerdol.com",
            show_form: true,

            event_booking: {
                name: "",
                contact_number: "",
                email: "",
                location: null,
                events: null,
                journey_date: "",
                num_person_Adult: "",
                num_person_Child: "",
                details: "",
                payment_status: 0
            },
            date: null,
            adults: [
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "10", value: "10" }
            ],
            children: [
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" }
            ],
        }
    },

    computed: {
        ...mapState ({
            eventsList: state => state.event_booking.events,
            locations: state => state.event_booking.locations,
            event_individual: state => state.events.event_details,
        }),

        schema() {
            return Yup.object({
                // 'Phone Number': Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
                // 'Name': Yup.string().required("Name is required"),
                'Email': Yup.string().required("Email is required").email("Please enter a valid email"),
            });
        }
    },

    mounted() {
        this.$store.dispatch('event_booking/get_All_EventsList')
        // console.log(this.$route.params.slug)

        this.$store.dispatch('event_booking/get_LocationsList')
        // console.log(this.locations)

        this.$store.dispatch('events/getEventDetails',this.$route.params.slug).then(response=>{
            this.event_booking.events=response.id
            this.event_booking.location=response.location.id
        })
    },

    methods: {
        getEventsList(id) {
            this.$store.dispatch('event_booking/get_Events_By_Location', id) 
        },

        submit() {
            this.date = moment(String(this.event_booking.journey_date)).format('YYYY-MM-DD')
            this.$store.dispatch('event_booking/post_Event_Booking', {event_booking:this.event_booking, journey_date:this.date}).then(response => {
                console.log(response.data.response)
                if(response.data.code == 200) { 
                    this.$toast.add({severity: 'success', summary: 'Success!', detail: response.data.response, closable: false, life: 3000})
                    this.event_booking.name= ""
                    this.event_booking.contact_number = ""
                    this.event_booking.email = ""
                    this.event_booking.location = null
                    this.event_booking.events = ""
                    this.event_booking.journey_date = ""
                    this.event_booking.num_person_Adult = ""
                    this.event_booking.num_person_Child = ""
                    this.event_booking.details = ""
                    this.show_form = false
                }
                else {
                    this.$toast.add({severity: 'error', summary: 'Error!', detail: response.data.response, closable: false, life: 3000})
                }
            })
        },
    }
}
</script>

<style scoped>
.dropdown {
    @apply text-gray-400 bg-white;
}
.input {
    @apply w-full outline-none text-gray-700 p-1 border border-gray-300 rounded;
}

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