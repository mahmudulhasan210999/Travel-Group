<template>
    <div>
        <EventBookingIndividual :slug="getBookingIndividualSlug()" />
    </div>
</template>

<script>
import EventBookingIndividual from '../../components/Event-Booking/Event-Booking-Individual.vue'

export default {
    components: {
        EventBookingIndividual,
    },

    methods: {
        getBookingIndividualSlug() {
            return this.$route.params.id
        }
    }
}
</script>
