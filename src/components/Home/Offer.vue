<template>
    <div class="w-full flex flex-col items-center px-4 md:px-16 lg:px-28 py-6 md:py-12">
        <div class="container">
            <div class="flex flex-col lg:flex-row">
                <img class="effects w-full lg:w-1/2 h-52 lg:h-72 mb-5 lg:mb-0 lg:pr-3" :src="host + images.promotionOne" alt="Image">
                <img class="effects w-full lg:w-1/2 h-52 lg:h-72 lg:pl-3" :src="host + images.promotionTwo" alt="Image">
            </div>
            <!-- <div class="flex flex-col lg:flex-row">
                <img class="effects w-full lg:w-1/2 h-52 lg:h-72 mb-5 lg:mb-0 lg:pr-3" src="../../assets/offer/offer1.png" alt="Image">
                <img class="effects w-full lg:w-1/2 h-52 lg:h-72 lg:pl-3" src="../../assets/offer/offer2.png" alt="Image">
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            host: "https://api.foringerdol.com",
        }
    },

    computed: {
        ...mapState({
            images: state => state.images.images,
        })
    },

    mounted() {
        this.$store.dispatch('images/getImages')
    },
}
</script>

<style scoped>
.effects {
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.effects:hover {
    -webkit-transform: scale(1.04);
	transform: scale(1.04);
}
</style>
