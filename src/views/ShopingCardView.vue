<template>
  <main>
    <ShopingCard :cart="card" @remove="removeFromCard" />
  </main>
</template>

<script>
import ShopingCard from "../components/ShopingCard.vue";

export default {
  components: {
    ShopingCard,
  },

  data() {
    return {
      card: [],
      corseInfo: null,
    };
  },
  methods: {
    removeFromCard(course) {
      const index = this.card.indexOf(course);
      if (index !== -1) {
        this.card.splice(index, 1);
        console.log(this.card);
        localStorage.setItem("cart", JSON.stringify(this.card));
      }
      const cartCount = localStorage.getItem("cartCount") ?? 0;
      if (cartCount !== 0) {
        localStorage.setItem("cartCount", parseInt(cartCount) - 1);
        location.reload();
      }
    },
  },
  created() {
    const Cart = localStorage.getItem("cart");
    if (Cart) {
      this.card = JSON.parse(Cart);
    }
  },
};
</script>

<style></style>
