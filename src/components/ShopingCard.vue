<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <ul v-for="corseInfo in cart" >

      <li>
        {{ corseInfo.title }} - ${{ corseInfo.price }} <BButton style="margin-bottom: 5px;" variant="outline-warning" @click="removeFromCard(corseInfo)">remove </BButton>

      </li>

    </ul>
    <div v-if="cart.length === 0" style="display: none;">
      <p>in card:{{ cart.length }}</p>
      <p> Total Price :{{ total }}</p>
      <BButton @click="navigateToAbout()" style="margin-bottom: 5px;" variant="outline-warning">Checkout</BButton>
    </div>
    <div v-else>
      <p>in card:{{ cart.length }}</p>
      <p> Total Price :{{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  total: {
      type: Number,
      required: true
    },
    methods: {
      removeFromCard(corseInfo){
        this.$emit('remove',corseInfo)

      },
      navigateToAbout(){
    this.$router.push('/about');

   }

 },
 emits:['remove'],


  computed: {
      total() {
        return this.cart.reduce((accumulator, courseInfo) => accumulator + courseInfo.price, 0);

      }
    },




    }


</script>


<style scoped>

</style>




<!--
<script>
 export default {
props: {
  corseInfo: {
        type: String,
        required: true

      }
    }
  }
</script>


<template>
 <div class="shopping-cart">
    <h2>Card</h2>
    <ul v-for="course in corseInfo">
      <p>{{corseInfo}}</p>
        Individual item elements will be added dynamically using JavaScript
    </ul>
    <div class="cart-total">
        Total: <span id="total-price">$0.00</span>
    </div>
    <button id="checkout-btn">Proceed to Checkout</button>
</div>

</template>

<style>

</style> -->
