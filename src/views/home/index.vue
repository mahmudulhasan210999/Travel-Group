<template>
    <div>
        <Top />
        <TopSecond /> 
        <div class="bg-background px-4 md:px-16 lg:px-20 xl:px-28 py-6 md:py-12">
            <p class="text-xl lg:text-2xl xl:text-3xl font-semibold pb-4">Top Destinations</p>
            <Destinations />
        </div>
        <Offer />
        <Trending />
        <Stories />
        <Reviews />
        <Subscribe />
    </div>
</template>

<script>
import Top from '../../components/Home/Top.vue'
import TopSecond from '../../components/Home/Top_Second.vue'
import Offer from '../../components/Home/Offer.vue'
import Destinations from '../../components/Top_Destinations/Top_Destinations.vue'
import Trending from '../../components/Trending/Trending.vue'
import Stories from '../../components/Stories/Stories.vue'
import Reviews from '../../components/Reviews/Reviews.vue'
import Subscribe from '../../components/Home/Subscribe.vue'

export default {
    components: {
        Top,
        TopSecond,
        Offer,
        Destinations,
        Trending,
        Stories,
        Reviews,
        Subscribe,
    }
}
</script>
