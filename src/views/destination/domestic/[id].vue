<template>
    <div>
        <Domestic :slug="getDomestic()" />
    </div>
</template>

<script>
import Domestic from '../../../components/Destinations/Domestic.vue'

export default {
    components: {
        Domestic,
    },

    methods: {
        getDomestic() {
            return this.$route.params.id
        }
    }
}
</script>
