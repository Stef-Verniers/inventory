import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Importeer de Vuex Store

const app = createApp(App)

app.use(router)
app.use(store) // Gebruik de Vuex Store

app.mount('#app')
