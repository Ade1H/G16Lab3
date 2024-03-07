<template>
  <main>
   <!-- <button @click="navigateTo('card','products')">vewCard/cuntinioShop</button> -->
   <!-- <BButton style="margin-bottom: 5px;" variant="outline-warning" @click="navigateTo('card','products')">vewCard/cuntinioShop</BButton> -->
<div v-if="page === 'products'">
<ApiTakeDown @addTo="putToCard" @saveCourse="saveProductToView"  />
</div>
<div v-if="page === 'card'">
<!-- <ShopingCard :cart="card" @remove="removeFromCard" /> -->
</div>

 </main>
</template>


<script>
import ApiTakeDown from '../components/ApiTakeDown.vue'
// import ShopingCard from '../components/ShopingCard.vue'

export default {
  components: {
    ApiTakeDown,


  },
  data() {
    return {
      page:'products',
      card:[],
      corseInfo: null,

    }
  },
  // created() {

  //   const Cart = localStorage.getItem('cart');
  //   if (Cart) {
  //     this.card = JSON.parse(Cart);
  //   }
  // },
  methods: {
    putToCard(course) {
      const oldCart = JSON.parse(localStorage.getItem("cart"))
      if (oldCart) {
        this.cart = JSON.parse(localStorage.getItem("cart"))
      }
      this.card.push(course)
      localStorage.setItem('cart', JSON.stringify(this.card));
    },
    saveProductToView(course) {
      localStorage.setItem('product', JSON.stringify(course));
      this.$router.push('/product');
    }
    ,
    // removeFromCard(course) {
    //   const index = this.card.indexOf(course);
    //     if (index !== -1) {
    //       this.card.splice(index, 1);
    //       console.log(this.card)
    //       localStorage.setItem('cart', JSON.stringify(this.card));

    //   }
    // },
    navigateTo(card,products){

      if(this.page===card){
        this.page=products
      }
      else {
        this.page=card
      }
    }

  }
}
</script>
