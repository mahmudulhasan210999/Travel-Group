<template>
    <div class="w-full flex flex-col items-center md:px-6 lg:px-10 xl:px-28 py-6 md:py-12">
        <div class="container">
            <p class="lg:text-left text-xl lg:text-3xl font-semibold py-4">Stories, tips and guides</p>

            <div class="responsive-size">
                <Carousel :value="stories" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <router-link :to="{ path: '/story-details/' + slotProps.data.slug }">
                            <div class="m-2 lg:m-3 shadow rounded-b-xl rounded-t-xl">
                                <img class="rounded-t-xl h-44 lg:52 xl:h-64 w-full" :src="host + slotProps.data.blog_image" alt="Image">
                                <div class="text-left p-4">
                                    <p class="text-xl font-semibold pb-2">{{ slotProps.data.title.substring(0,35)+"..." }}</p>
                                    
                                    <div v-if="slotProps.data.story.length > 75" class="text-gray-500" v-html="slotProps.data.story.substring(0,75)+'...'"></div>
                                    <div v-else class="text-gray-500" v-html="slotProps.data.story"></div>
                                    <!-- <p class="text-gray-500">{{ slotProps.data.story.substring(0,75)+"..." }}</p> -->
                                </div>
                            </div>
                        </router-link>
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
            host: "https://api.foringerdol.com",
            responsiveOptions: [
                {
				    breakpoint: '1280px',
				    numVisible: 3,
				    numScroll: 1
			    },
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
            stories: state => state.stories.stories
        })
    },

    mounted() {
        this.$store.dispatch('stories/get_Stories')
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
