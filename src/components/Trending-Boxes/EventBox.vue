<template>
    <div class="w-full flex flex-col responsive-size">
        <div class="bg-white shadow-md rounded-xl">
            <div class="w-full h-60 lg:h-52">
                <img class="rounded-t-xl w-full h-full" :src="host + tour.event_image" alt="Image">
            </div>
            <div class="text-left p-5">
                <p class="text-sm text-gray-500"><i class="pi pi-map-marker text-primary pr-1" style="font-size: 12px"></i>{{ tour.location.locations_name }}</p>

                <p v-if=" tour.event_name.length > 32 " class="font-semibold pt-1">{{ tour.event_name.substring(0,32)+"..." }}</p>
                <p v-else class="font-semibold pt-1">{{ tour.event_name }}</p>

                <!-- <div class="flex justify-between text-gray-500 border-t border-gray-300 pt-4">
                    <div class="flex text-sm">
                        <p>From</p>
                        <p class="font-semibold text-black px-1">{{ tour.price }}</p>
                        <p>BDT</p>
                    </div>
                    <div class="flex items-center py-1">
                        <i class="pi pi-clock pr-1" style="font-size: 0.7rem;"></i>
                        <p class="text-sm">{{ tour.no_of_days }} Days</p>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['tour'],

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