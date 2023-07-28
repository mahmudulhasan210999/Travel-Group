<template>
    <div>
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
}

@media screen and (min-width: 1536px) {
    .container {
        max-width: 1320px !important;
    }
}
</style>
