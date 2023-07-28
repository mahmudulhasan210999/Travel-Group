<template>
    <div class="w-full flex flex-col items-center md:px-16 lg:px-20 xl:px-28 md:py-12">
        <Toast :breakpoints="{'640px': {width: '80%', right: '0'}}" />
        <div class="hidden md:flex">
            <div class="container md:flex">
                <div class="md:w-1/2 bg-background border border-gray-200 md:rounded-br-none md:rounded-l-2xl">
                    <img class="rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl h-72 lg:h-96 w-full" :src="host + images.footer" alt="">
                    <!-- <img class="rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl h-72 lg:h-96 w-full" src="../../assets/subscribe/subscribe.png" alt=""> -->
                </div>
                <div class="md:w-1/2 bg-background border border-gray-200 md:rounded-bl-none md:rounded-r-2xl px-2 lg:px-16 xl:px-28 flex flex-col justify-center">
                    <p class="lg:text-left text-xl lg:text-2xl font-semibold py-2">Get special offers, and more from Foringer Dol</p>
                    <p class="text-gray-500 lg:text-left text-sm lg:text-base">Subscribe to see secret deals prices drop the moment you sign up!</p>

                    <div class="flex rounded-md bg-white p-2 mt-6">
                        <InputText class="w-full" type="text" placeholder="Enter Your Email" v-model="email" />
                        <button @click="submit" class="rounded bg-primary text-white text-sm py-1.5 px-4 ml-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- for media screen 768 -->
        <div class="md:hidden w-full">
            <div class="">
                <div class="bannerStyle">
                    <div class="bg-color h-full px-4 flex flex-col justify-center text-white">
                        <p class="text-xl font-semibold p-2">Get special offers, and more from Foringer Dol</p>
                        <p class="text-sm px-10">Subscribe to see secret deals prices drop the moment you sign up!</p>

                        <div class="flex justify-center">
                            <div class="flex rounded-md bg-white p-2 mt-6 input-width">
                                <InputText class="w-full outline-none" type="text" placeholder="Email Address" v-model="email" />
                                <button @click="submit" class="rounded bg-primary text-white text-sm px-4 py-1 ml-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';

export default {
    components: {
        InputText,
        Toast
    },

    data(){
        return {
            host: "https://api.foringerdol.com",
            value: "",
            email: ""
        }
    },
    
    computed: {
        ...mapState({
            images: state => state.images.images,
        })
    },

    mounted() {
        this.$store.dispatch('images/getImages')
    },

    methods: {
        submit() {
            let payload={
                email: this.email
            }
            this.$store.dispatch('subscribe/post_Subscriber_Mail', payload).then(response => {
                console.log(response.data.response) 
                if(response.data.code == 200) { 
                    this.$toast.add({severity: 'success', summary: 'Success!', detail: response.data.response, closable: false, life: 3000})
                    this.email= ""
                }
                else {
                    this.$toast.add({severity: 'error', summary: 'Error!', detail: response.data.response, closable: false, life: 3000})
                }
            })
        },
    }
}
</script>

<style scoped>
    .bannerStyle {
        background-image: url('../../assets/subscribe/subscribe.png');
        background-size: cover;
        height: 65vh;
        background-repeat: no-repeat;
    }
    .bg-color {
        background-color: #00000058;
    }

    @media screen and (max-width: 768px) {
        .input-width {
            width: 70vw;
        }
    }
    @media screen and (max-width: 550px) {
        .bannerStyle {
            height: 55vh;
        }
        .input-width {
            width: 80vw;
        }
    }
    @media screen and (max-width: 400px) {
        .bannerStyle {
            height: 45vh;
        }
        .input-width {
            width: 90vw;
        }
    }

</style>
