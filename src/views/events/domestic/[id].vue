<template>
    <div class="flex w-full">
        <DomesticEvents :slug="getDomesticEventSlug()" />
    </div>
</template>

<script>
import DomesticEvents from '../../../components/Destinations/Domestic.vue'

export default {
    components: {
        DomesticEvents
    },

    methods: {
        getDomesticEventSlug() {
            return this.$route.params.id
        }
    }
}
</script>