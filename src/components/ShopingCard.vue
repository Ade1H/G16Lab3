<<<<<<< HEAD
<template>
  <div class="shopping-cart">
    <h1>Shopping Cart</h1>

    <div class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <h2>{{ item.title }}</h2>
          <p class="price">$ {{ item.price }}</p>
        </div>
        <div class="product-actions">
          <button @click="removeFromCart(item)" class="remove-btn">
            delete
          </button>
        </div>
      </div>
    </div>

    <div v-if="cart.length === 0" class="empty-cart-message">
      <p>Your cart is empty.</p>
    </div>

    <div class="cart-total" v-if="cart.length > 0">
      <p>
        Total: <span class="total">$ {{ total }}</span>
      </p>
      <button @click="checkout" class="checkout-btn">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  total: {
    type: Number,
    required: true,
  },
  methods: {
    removeFromCart(corseInfo) {
      this.$emit("remove", corseInfo);
    },
    navigateToAbout() {
      this.$router.push("/about");
    },
    checkout() {
      this.$router.push({ path: '/checkout' });
      localStorage.setItem("total", this.total)
    }
  },
  emits: ["remove"],

  computed: {
    total() {
      return this.cart.reduce(
        (accumulator, courseInfo) => accumulator + courseInfo.price,
        0
      );
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 20px;
  margin: 52px 0px;
}

.cart-item {
  display: flex;
  width: 100%;
  align-items: stretch;
  border: 1px solid #eaeaea;
  padding: 16px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.product-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;
}

.product-details h2 {
  font-size: 16px;
  margin-bottom: 5px;
}

.price {
  font-weight: bold;
  margin-bottom: 5px;
}

.product-actions {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.remove-btn {
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ff3b30;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.empty-cart-message {
  text-align: center;
}

.cart-total {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.total {
  font-size: 18px;
  font-weight: bold;
}

.checkout-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  transition: background 0.4s ease-in-out;
}

.checkout-btn:hover {
  background-color: #0056b3;
}
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
=======
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
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
