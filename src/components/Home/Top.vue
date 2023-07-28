<template>
    <div class="w-full flex flex-col">
        <div class="cover flex flex-col items-center px-6 lg:px-28 h-full" :style="{ backgroundImage:`url(${ host + banner.header })` }">
            <div class="container h-full">
                <div class="flex flex-col items-center justify-center h-full w-full">
                    <div class="lg:w-2/3 text-white flex justify-center">
                        <p class="text-3xl md:text-4xl xl:text-5xl tracking-wide">Let The Journey Begin with Foringer Dol Travel Group</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

export default {
    components: {
        Dropdown,
        Calendar,
    },

    data() {
        return {
            host: "https://api.foringerdol.com",

            filter: {
                destination: null,
                dates: null,
            },

            destinations: [
                {name: 'Tanguar Haor'},
                {name: 'Rangamati'},
                {name: 'Sajek'},
                {name: 'Coxs Bazar'},
                {name: 'Kuakata'}
            ],
        }
    },

    methods: {
        filterEvents() {
            console.log(this.filter)
        }
    },

    computed: {
        ...mapState({
            banner: state => state.images.images,
        })
    },

    mounted() {
        this.$store.dispatch('images/getImages')
    },
}
</script>

<style scoped>
.cover {
    /* background-image: url('../../assets/home_top/home_top.jpg'); */
    position: relative;
    background-size: cover;
    height: 64vh;
}

@media screen and (max-width: 1024px) {
    .cover {
        height: 54vh;
    }
}

@media screen and (max-width: 640px) {
    .cover {
        height: 44vh;
    }
}
</style>

