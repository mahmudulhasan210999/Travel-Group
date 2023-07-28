<template>
    <div class="w-full flex flex-col items-center py-6 md:py-10 lg:py-16 px-4 lg:px-16 xl:px-28">
        <div class="container">
            <div class="lg:flex lg:flex-row">
                <!-- Map -->
                <div class="lg:w-3/5 sm:px-12 md:px-16 lg:px-8">
                    <iframe 
                        class="map rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3469480320155!2d90.38367131493551!3d23.877312884526987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5e629326181%3A0xad2c6d91f2f3c7d8!2zRm9yaW5nZXIgRG9sIFRyYXZlbCBHcm91cCAtIOCmq-CnnOCmv-CmguCnn-Cnh-CmsCDgpqbgprI!5e0!3m2!1sen!2sbd!4v1642587405507!5m2!1sen!2sbd"
                        style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>

                <!-- Address -->
                <div class="lg:w-2/5 pt-6 lg:pt-0 flex justify-center items-center w-full">
                    <ul class="w-full">
                        <li class="lg:flex lg:flex-row flex flex-col">
                            <div class="contact">
                                <i class="pi pi-map-marker text-primary" aria-hidden="true"></i>
                                <p class="pt-1">Address</p>
                            </div>
                            <div class="flex justify-center items-center pl-8">
                                <p class="text-content">Block-B, House-74, Road-21, Banani, Dhaka-1213, Bangladesh</p>
                            </div>
                        </li>
                        <li class="lg:flex lg:flex-row flex flex-col mt-4 lg:mt-8">
                            <div class="contact">
                                <i class="pi pi-phone text-primary"  aria-hidden="true"></i>
                                <p class="pt-1">Call Us</p>
                            </div>
                            <div class="flex justify-center items-center lg:pl-8">
                                <p class="text-content">01880089100<br />01880089101<br />01880089102<br /></p>
                            </div>
                        </li>
                        <li class="lg:flex lg:flex-row flex flex-col mt-4 lg:mt-8">
                            <div class="contact">
                                <i class="pi pi-envelope text-primary" aria-hidden="true"></i>
                                <p class="pt-1">Email</p>
                            </div>
                            <div class="flex justify-center items-center lg:pl-8">
                                <p class="text-content">travelforing@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.map {
    width: 100%;
    height: 420px;
}

.contact {
    border-right-width: 2px;
    min-width: 30%;
    @apply uppercase pt-2 pb-2 flex flex-col justify-center items-center border-primary;
}

.text-content {
    @apply text-gray-600 font-normal text-center lg:text-left;
}

@media screen and (max-width: 1280px) {
    .map {
       height: 350px;
    }
}

@media screen and (max-width: 1024px) {
    .map {
        @apply w-full h-80;
    }
    .contact {
        border-right-width: 0px;
        @apply border-0;
    }
}

@media screen and (max-width: 628px) {
    .map {
        @apply w-full h-72;
    }
}

@media screen and (max-width: 470px) {
    .map {
        @apply w-full h-60;
    }
}

@media screen and (max-width: 335px) {
    .map {
        @apply w-full h-48;
    }
}
</style>
