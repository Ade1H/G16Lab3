import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

// App.use(pinia)
// import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
createApp(App).use(router).use(pinia).mount('#app')

