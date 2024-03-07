<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";
=======
import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import RegisterView from './views/RegisterView.vue'
import LoginView from './views/LoginView.vue'
import HomeView from './views/HomeView.vue'
import Products from './views/Products.vue'
import ShopingCardView from './views/ShopingCardView.vue'
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e

import AboutView from "./views/AboutView.vue";
import RegisterView from "./views/RegisterView.vue";
import LoginView from "./views/LoginView.vue";
import HomeView from "./views/HomeView.vue";
import Products from "./views/Products.vue";
import ShopingCardView from "./views/ShopingCardView.vue";
import ProductPage from "./views/ProductPage.vue";
import CheckoutView from "./views/CheckoutView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: "/about",
    },
    {
      component: RegisterView,
      path: "/Register",
    },
    {
      component: LoginView,
      path: "/Login",
    },
    {
      component: HomeView,
      path: "/",
    },
    {
      component: Products,
<<<<<<< HEAD
      path: "/Products",
    },
    {
      component: ShopingCardView,
      path: "/card",
    },
    {
      component: ProductPage,
      path: "/product",
    },
    {
      name: "checkout",
      path: "/checkout",
      component: CheckoutView,
    },
  ],
});
=======
      path: '/Products'
    },
    {
      component: ShopingCardView,
      path: '/card'
    }

  ]
})
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
