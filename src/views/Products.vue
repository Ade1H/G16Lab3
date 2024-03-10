<template>
  <main>
    <div v-if="page === 'products'">
      <ApiTakeDown @addTo="putToCard" @saveCourse="saveProductToView" />
    </div>
    <div v-if="page === 'card'"></div>
  </main>
</template>

<script>
import ApiTakeDown from "../components/ApiTakeDown.vue";

export default {
  components: {
    ApiTakeDown,
  },
  data() {
    return {
      page: "products",
      cart: [],
      corseInfo: null,
    };
  },

  methods: {
    putToCard(course) {
      const cartCount = localStorage.getItem("cartCount") ?? 0;
      const oldCart = JSON.parse(localStorage.getItem("cart"));
      if (oldCart) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      }
      this.cart.push(course);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cartCount", parseInt(cartCount) + 1);
      location.reload();
    },
    saveProductToView(course) {
      localStorage.setItem("product", JSON.stringify(course));
      this.$router.push("/product");
    },
    navigateTo(card, products) {
      if (this.page === card) {
        this.page = products;
      } else {
        this.page = card;
      }
    },
  },
};
</script>
