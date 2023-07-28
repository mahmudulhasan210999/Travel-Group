<template>
    <div class="w-full flex flex-col responsive-size">
        <div class="bg-white shadow-md rounded-xl">
            <div class="w-full h-60 lg:h-52">
                <img class="rounded-t-xl w-full h-full" :src="host + hotel.hotel_image" alt="Image">
            </div>
            <div class="text-left p-5">
                <p class="font-semibold py-1">{{ hotel.hotel_name }}</p>
                <p class="text-sm text-gray-500 py-1 pb-3"><i class="pi pi-map-marker text-green-700 pr-1" style="font-size: 12px"></i>{{ hotel.location.locations_name }}</p>
                <!-- <div class="flex text-sm py-4 border-t border-gray-300">
                    <p class="font-semibold pr-2">{{ hotel.popular }} Quality</p>
                </div> -->
                <div class="flex text-sm border-t border-gray-300 pt-3">
                    <p>From</p>
                    <p class="font-semibold text-black px-1">{{ hotel.price }} BDT</p>
                    <p>/ night</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['hotel'],

    data() {
        return {
            host: "https://api.foringerdol.com",
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
    .responsive-size {
        @apply px-24;
    }
}
@media screen and (max-width: 565px) {
    .responsive-size {
        @apply px-16;
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