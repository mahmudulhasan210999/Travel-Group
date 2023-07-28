<template>
    <!-- <div class="w-full flex flex-col items-center px-28"> -->
    <div class="w-full flex flex-col items-center px-4 lg:px-16 xl:px-28 py-4 md:py-10 lg:py-16">
        <div class="container">
            <!-- <div v-for="(story, index) in stories" :key="index"> -->
                <!-- <div v-if="story.slug == slug"> -->
                    <img class="w-full h-60 lg:h-72 xl:h-96 rounded-xl" :src="host + get_details.banner_image" alt="Image">
                    <div class="text-left py-4">
                        <p class="text-xl font-semibold">{{ get_details.title }}</p>
                        <div class="pt-2 text-gray-600" v-html="get_details.story"></div>
                        <!-- <p class="pt-2 text-gray-600">{{ story.story }}</p> -->
                    </div>
                <!-- </div> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: ['slug'],

    data() {
        return {
            get_details: {},
            host: "https://api.foringerdol.com",
        }
    },

    computed: {
        ...mapState ({
            // stories: state => state.stories.stories,
            story_details: state => state.stories.story_details
        }),
    },

    mounted() {
        this.$store.dispatch('stories/get_Story_details', this.slug)
    },

    watch: {
        story_details(oldValue, newValue) {
            // console.log(oldValue)
            // console.log(newValue)
            this.get_details = this.story_details
            // console.log(this.getDetail)
        }
    }
}
</script>
