<template>
    <div class="w-full flex flex-col items-center px-4 lg:px-16 xl:px-28 py-6 md:py-10 lg:py-16"> 
        <div class="container">
            <div class="border-b border-gray-300 pb-8">
                <img class="w-full h-60 md:h-72 lg:h-96 rounded-xl" src="../../assets/banners/hotel_banner.jpg" alt="Image">
                <div class="text-left">
                    <p class="text-xl xl:text-2xl font-semibold pt-4">Hotels of Foringer Dol Travel Group</p>
                    <p class="pt-2 text-sm sm:text-base text-justify">Foringer Dol Information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, reprehenderit? Ad nobis ex natus, at reprehenderit ipsa in vero velit esse dolor, maxime praesentium beatae non suscipit perspiciatis eaque amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos incidunt beatae eveniet error obcaecati repellat autem tempore voluptates illum, voluptatum facere molestiae molestias aliquam, asperiores odio aperiam earum dicta?</p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
                <div v-for="(hotel, index) in hotels" :key="index">
                    <router-link :to="{ path: '/hotel/' + hotel.slug }">
                        <div class="bg-white shadow-md rounded-b-xl">
                            <img class="rounded-t-xl w-full h-52" :src="host + hotel.hotel_image" alt="">
                            <div class="text-left p-4">
                                <p class="font-semibold py-1">{{ hotel.hotel_name }}</p>
                                <p class="text-sm text-gray-500 py-1 pb-3"><i class="pi pi-map-marker text-primary pr-1" style="font-size: 12px"></i>{{ hotel.location.locations_name }}</p>
                                <!-- <div class="flex text-sm py-4 border-t border-gray-300">
                                    <p class="font-semibold pr-2">{{ hotel.quality }} Quality</p>
                                </div> -->
                                <div class="flex text-sm border-t border-gray-300 pt-3">
                                    <p>From</p>
                                    <p class="font-semibold text-black px-1">{{ hotel.price }} BDT</p>
                                    <p>/ night</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
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
            hotels: state => state.hotels.hotels,
        })
    },

    mounted() {
        this.$store.dispatch('hotels/get_Hotels_list')
    },
}
</script>
