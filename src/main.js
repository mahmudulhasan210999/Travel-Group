import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import router from './router/index'
import store from './store/index'

import PrimeVue from 'primevue/config';                 // PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css'  // Theme
import 'primevue/resources/primevue.min.css'            // Core CSS
import 'primeicons/primeicons.css'                      // Icons
import ToastService from 'primevue/toastservice';

createApp(App).use(router).use(store).use(PrimeVue).use(ToastService).mount('#app')
