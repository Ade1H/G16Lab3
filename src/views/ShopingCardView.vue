<<<<<<< HEAD
<template>
  <main>

  <!-- </main>style="background: rgb(42,116,255);
    background: linear-gradient(180deg, rgba(42,116,255,1) 0%, rgba(185,248,255,1) 100%);"> -->

     <ShopingCard :cart="card" @remove="removeFromCard" />

  </main>

</template>


<script>
// import ApiTakeDown from '../components/ApiTakeDown.vue'

import ShopingCard from '../components/ShopingCard.vue'

  export default {

  components: {

  ShopingCard,
    //ApiTakeDown,

    },

    data(){
      return{
        card:[],
        // showModal:false, // global med pinia
        // infoo:null,
        // link:null

        corseInfo:null


      }

    },
    methods:{
      removeFromCard(course) {
      const index = this.card.indexOf(course);
        if (index !== -1) {
          this.card.splice(index, 1);
          console.log(this.card)
          localStorage.setItem('cart', JSON.stringify(this.card));

      }
    }

    },
    created() {

   const Cart = localStorage.getItem('cart');
   if (Cart) {
   this.card = JSON.parse(Cart);
   }
   },
   }
</script>


<style>

</style>
=======
<template>
  <main>

  <!-- </main>style="background: rgb(42,116,255);
    background: linear-gradient(180deg, rgba(42,116,255,1) 0%, rgba(185,248,255,1) 100%);"> -->

     <ShopingCard :cart="card" @remove="removeFromCard" />

  </main>

</template>


<script>
// import ApiTakeDown from '../components/ApiTakeDown.vue'

import ShopingCard from '../components/ShopingCard.vue'

  export default {

  components: {

  ShopingCard,
    //ApiTakeDown,

    },

    data(){
      return{
        card:[],
        // showModal:false, // global med pinia
        // infoo:null,
        // link:null

        corseInfo:null


      }

    },
    methods:{
      removeFromCard(course) {
      const index = this.card.indexOf(course);
        if (index !== -1) {
          this.card.splice(index, 1);
          console.log(this.card)
          localStorage.setItem('cart', JSON.stringify(this.card));

      }
    }

    },
    created() {

   const Cart = localStorage.getItem('cart');
   if (Cart) {
   this.card = JSON.parse(Cart);
   }
   },
   }
</script>


<style>

</style>
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
