<template>
    <div class="w-full flex flex-col items-center px-4 lg:px-16 xl:px-28 py-6 md:py-10 lg:py-16">
        <div class="container">
            <div class="border-b border-gray-300 pb-8">
                <img class="w-full h-60 md:h-72 lg:h-96 rounded-xl" src="../../assets/banners/event_banner.jpg" alt="Image">
                <div class="text-left">
                    <p class="text-xl xl:text-2xl font-semibold pt-4">Foringer Dol Travel Group</p>
                    <p class="pt-2 text-sm sm:text-base text-justify">Foringer Dol Information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, reprehenderit? Ad nobis ex natus, at reprehenderit ipsa in vero velit esse dolor, maxime praesentium beatae non suscipit perspiciatis eaque amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos incidunt beatae eveniet error obcaecati repellat autem tempore voluptates illum, voluptatum facere molestiae molestias aliquam, asperiores odio aperiam earum dicta?</p>
                </div>
            </div>

            <div class="pt-8">
                <Destinations />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Destinations from '../Destinations/Destinations.vue';

export default {
    components: {
        Destinations
    },

    data() {
        return {
            host: "https://api.foringerdol.com",
        }
    },

    computed: {
        ...mapState({
            events: state => state.events.events,
        })
    },

    mounted() {
        this.$store.dispatch('events/get_EventsList')
    },
}
</script>
