import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';  // Importa il ToastService
import Button from 'primevue/button'; 
import 'primeicons/primeicons.css';  // Icone PrimeVue


const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ToastService);  // Registra il ToastService
app.component('Button', Button); 
app.mount('#app')
