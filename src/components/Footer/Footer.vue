<template>
    <div class="w-full flex flex-col items-center px-4 lg:px-20 xl:px-28 bg-background">
        <div class="container">
            <!-- First row -->
            <div class="lg:flex py-6 lg:py-12 text-left">
                <div class="lg:w-1/4 lg:pl-6 xl:pl-10">
                    <img class="rounded-full w-28 lg:w-32 h-28 lg:h-32 bg-green-200" src="../../assets/logo/logo2.png" alt="">
                    <div class="flex pt-4 pl-2">
                        <div>
                            <a target="_blank" href="https://www.facebook.com/travelforing/"><i class="pi pi-facebook" style="font-size: 25px; color: rgb(156 163 175)"></i></a>
                        </div>
                        <div class="px-4">
                            <a target="_blank" href="https://www.youtube.com/channel/UC-CGAoKw4Cf4xJt8kT8B-ZQ"><i class="pi pi-youtube" style="font-size: 25px; color: rgb(156 163 175)"></i></a>
                        </div>
                        <div class="pr-4">
                            <a target="_blank" href="https://instagram.com/foringer_dol?igshid=YmMyMTA2M2Y="><i class="pi pi-instagram" style="font-size: 25px; color: rgb(156 163 175)"></i></a>
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/4 py-6 lg:py-0">
                    <p class="font-semibold">Why Choose Us?</p>
                    <div class="pt-4 text-gray-600">
                        <p class="hover:text-primary"><i class="pi pi-angle-double-right pr-1 sm:pr-2" style="font-size: 0.7rem"></i>Focuses on traveler's safety</p>
                        <p class="py-2 hover:text-primary"><i class="pi pi-angle-double-right pr-1 sm:pr-2" style="font-size: 0.7rem"></i>Hassle-free traveling</p>
                        <p class="pb-2 hover:text-primary"><i class="pi pi-angle-double-right pr-1 sm:pr-2" style="font-size: 0.7rem"></i>Well-planned tour</p>
                        <p class="hover:text-primary"><i class="pi pi-angle-double-right pr-1 sm:pr-2" style="font-size: 0.7rem"></i>Best reasonable travel prices</p>
                    </div>
                </div>

                <div class="lg:w-1/4 lg:pl-10  pb-6 lg:pb-0">
                    <p class="font-semibold">Company</p>
                    <div class="pt-4 text-gray-600">
                        <router-link to="/hotels">
                            <p class="hover:text-primary">Hotels</p>
                        </router-link>
                        <router-link to="/events">
                            <p class="py-2 hover:text-primary">Events</p>
                        </router-link>
                        <router-link to="/about-us">
                            <p class="pb-2 hover:text-primary">About Us</p>
                        </router-link>
                        <router-link to="/contact-us">
                            <p class="hover:text-primary">Contact Us</p>
                        </router-link>
                    </div>
                </div>
                
                <div class="lg:w-1/4">
                    <p class="font-semibold">Office Information</p>
                    <div class="pt-4 text-gray-600">
                        <p><i class="pi pi-map-marker w-6 self-center text-primary"></i>ফড়িংয়ের দল - Travel Group</p>
                        <div class="flex py-2">
                            <p class="pr-2"><i class="pi pi-phone w-6 self-start mt-1 text-primary"></i>Call Us:</p>
                            <p>01880089100<br />01880089101<br />01880089102</p>
                        </div>
                        <p><i class="pi pi-envelope w-6 self-center text-primary"></i>travelforing@gmail.com</p>
                    </div>
                </div>
            </div>

            <!-- Bottom portion -->
            <div class="py-6 border-t-2 border-gray-300">
                <p class="text-gray-600 text-sm sm:text-base">
                    © 2022 Developed by <a class="tag-color" href="https://www.facebook.com/catchbitflex" target="_blank" >BitFlex </a> | <a class="tag-color" href="https://www.facebook.com/catchbangladesh" target="_blank" >Catch Bangladesh</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.tag-color {
    @apply text-primary;
}

.tag-color:hover {
    @apply text-gray-500;
}
</style>
