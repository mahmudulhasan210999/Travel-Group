<template>
    <div class="w-full flex flex-col responsive-size">
        <div class="bg-white shadow-md rounded-xl">
            <div class="w-full h-60 lg:h-52">
                <img class="rounded-t-xl w-full h-full" :src="ticket.img" alt="Image">
            </div>
            <div class="text-left p-4">
                <p class="font-semibold pb-2">{{ ticket.name }}</p>
                <!-- <div class="flex py-2">
                    <p>Ticket Price:</p>
                    <p class="font-semibold px-1">{{ ticket.ticket_price }}</p>
                    <p>BDT</p>
                </div> -->
                <p>From: {{ ticket.boarding }}</p>
                <p>To: {{ ticket.dropping }}</p>
                <p><a href="tel:+4733378901">+47 333 78 901</a></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['ticket'],
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
