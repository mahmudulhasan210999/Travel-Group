<template>
    <div class="w-full flex flex-col items-center md:px-6 lg:px-10 xl:px-28 py-6 md:py-12 bg-background">
        <div class="container">
            <p class="text-xl lg:text-3xl font-semibold py-4">Our Happy Clients</p>
        
            <div class="responsive-size">
                <Carousel :value="reviews" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                            <div class="m-2 lg:m-4 p-5 h-full bg-white rounded-xl">
                                <div class="flex justify-between">
                                    <p class="text-2xl text-left py-2">❝{{ slotProps.data.title }}❞</p>
                                    <!-- <img class="w-20 h-20 rounded-full border-2" :src="slotProps.data.reviewer_img" alt=""> -->
                                </div>
                                <p class="py-2 text-left">{{ slotProps.data.review }}</p>
                                <p class="flex justify-end pt-4 text-primary">- {{ slotProps.data.reviewer_name }}</p>
                            </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Carousel from 'primevue/carousel';

export default {
    components: {
        Carousel,
    },

    data() {
        return {
            responsiveOptions: [
			    {
				    breakpoint: '1024px',
				    numVisible: 2,
				    numScroll: 1
			    },
			    {
				    breakpoint: '640px',
				    numVisible: 1,
				    numScroll: 1
			    },
		    ],
        }
    },

    computed: {
        ...mapState ({
            reviews: state => state.reviews.reviews
        })
    },

    mounted() {
        this.$store.dispatch('reviews/get_Reviews')
    },
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
    .responsive-size {
        @apply px-16;
    }
}
@media screen and (max-width: 565px) {
    .responsive-size {
        @apply px-12;
    }
}
@media screen and (max-width: 490px) {
    .responsive-size {
        @apply px-8;
    }
}
@media screen and (max-width: 420px) {
    .responsive-size {
        @apply px-0;
    }
}
</style>
