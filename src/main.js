import { createApp } from "vue";

import { createPinia } from "pinia";
import "@fortawesome/fontawesome-free/css/all.css";

const pinia = createPinia();

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
createApp(App).use(router).use(pinia).mount("#app");

import piniaPluginPersistedState from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedState);
