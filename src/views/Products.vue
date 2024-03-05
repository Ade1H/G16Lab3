<template>
  <main style="background: rgb(42,116,255);
background: linear-gradient(180deg, rgba(42,116,255,1) 0%, rgba(185,248,255,1) 100%);">
   <!-- <button @click="navigateTo('card','products')">vewCard/cuntinioShop</button> -->
   <!-- <BButton style="margin-bottom: 5px;" variant="outline-warning" @click="navigateTo('card','products')">vewCard/cuntinioShop</BButton> -->
<div v-if="page === 'products'">
<ApiTakeDown @addTo="putToCard" />
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


      this.card.push(course)
      console.log(this.card)
      localStorage.setItem('cart', JSON.stringify(this.card));

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
