<template>
    <div>
        <International :slug="getInternational()" />
    </div>
</template>

<script>
import International from '../../../components/Destinations/International.vue'

export default {
    components: {
        International,
    },

    methods: {
        getInternational() {
            return this.$route.params.id
        }
    }
}
</script>
