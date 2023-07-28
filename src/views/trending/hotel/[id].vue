<template>
    <div>
        <Hotel :slug="getHotel()" />
    </div>
</template>

<script>
import Hotel from '../../../components/Hotels/Hotel_Details.vue'

export default {
    components: {
        Hotel,
    },

    methods: {
        getHotel() {
            return this.$route.params.id
        }
    }
}
</script>
