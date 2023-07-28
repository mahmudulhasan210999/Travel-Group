<template>
    <div>
        <EventDetails :slug="getDetailsSlug()" />
    </div>
</template>

<script>
import EventDetails from '../../../components/Events/Event_Details.vue'

export default {
    components: {
        EventDetails,
    },

    methods: {
        getDetailsSlug() {
            return this.$route.params.id
        }
    }
}
</script>
