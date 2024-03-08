<template>
  <div class="checkout-page">
    <h1>Checkout</h1>

    <div class="payment-form">
      <label for="card-number">Full Name:</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="your full name"
      />
      <label for="card-number">Email Address:</label>
      <input
        type="text"
        id="email"
        v-model="email"
        placeholder="example@email.com"
      />
      <label for="card-number">Card Number:</label>
      <input
        type="text"
        id="card-number"
        v-model="cardNumber"
        placeholder="•••• •••• •••• ••••"
        maxlength="19"
        @input="formatCardNumber"
      />

      <div class="expiration-cvv">
        <div class="expiration-date">
          <label for="expiration-date">Expiration Date:</label>
          <input
            type="text"
            id="expiration-date"
            v-model="expirationDate"
            placeholder="MM/YY"
            maxlength="5"
          />
        </div>
        <div class="cvv">
          <label for="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            v-model="cvv"
            placeholder="123"
            maxlength="3"
          />
        </div>
      </div>

      <button @click="processPayment" class="pay-btn">Pay ${{ parseInt(total).toFixed(2) }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      total: 0,
    };
  },
  methods: {
    formatCardNumber() {
      this.cardNumber = this.cardNumber
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    },
    processPayment() {
      alert("Payment processed successfully!");
      localStorage.clear()
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.total = localStorage.getItem("total");
  },
};
</script>

<style scoped>
.checkout-page {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.payment-form {
  margin: 52px auto;
  max-width: 500px;
}

.payment-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.payment-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.expiration-cvv {
  display: flex;
  justify-content: space-between;
}

.expiration-date,
.cvv {
  width: calc(50% - 10px);
}

.pay-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
}

.pay-btn:hover {
  background-color: #0056b3;
}
</style>
