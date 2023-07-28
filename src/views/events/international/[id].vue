<template>
    <div>
        <EventDetails :slug="getInternationalSlug()" />
    </div>
</template>

<script>
import EventDetails from '../../../components/Destinations/International.vue'

export default {
    components: {
        EventDetails,
    },

    methods: {
        getInternationalSlug() {
            return this.$route.params.id
        }
    }
}
</script>