<template>
    <div>
        <StoryDetails :slug="getStoryDetails()" />
    </div>
</template>

<script>
import StoryDetails from '../../components/Stories/Story_Details.vue'

export default {
    components: {
        StoryDetails,
    },

    methods: {
        getStoryDetails() {
            return this.$route.params.id
        }
    }
}
</script>
