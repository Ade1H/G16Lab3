import { createApp } from 'vue'

import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css';


// import { Ripple, initMDB, Input } from "mdb-ui-kit";

// initMDB({ Ripple,Input, Ripple });

const pinia = createPinia()

// App.use(pinia)
// import './style.css's
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
createApp(App).use(router).use(pinia).mount('#app')
