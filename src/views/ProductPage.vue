<template>
  <div class="product-page">
    <div class="product-header">
      <img class="product-image" :src="course.image" />
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
    </div>

    <div class="product-details">
      <h2>Course Details</h2>
      <ul>
        <li><strong>Duration:</strong> {{ course.duration }}</li>
        <li><strong>Instructor:</strong> {{ course.instructor }}</li>
        <li><strong>Level:</strong> {{ course.level }}</li>
        <li><strong>Price:</strong> ${{ course.price }}</li>
      </ul>
    </div>

    <div class="product-content">
      <h2>Course Content</h2>
      <ul>
        <li v-for="module in course.modules" :key="module.id">
          {{ module.title }} - <strong>{{ module.duration }}</strong>
          <span>➔</span>
        </li>
      </ul>
    </div>

    <div class="enroll-button">
      <button @click="addToCart(course)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: null,
      cart: [],
    };
  },
  created() {
    const Cart = localStorage.getItem("product");
    if (Cart) {
      this.course = JSON.parse(Cart);
    }
  },
  methods: {
    addToCart(course) {
      const oldCart = JSON.parse(localStorage.getItem("cart"))
      if (oldCart) {
        this.cart = JSON.parse(localStorage.getItem("cart"))
      }
      this.cart.push(course);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
.product-page {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 32px 46px;
}

.product-image {
  width: 100%;
}

.product-header h1 {
  font-size: 28px;
  margin-bottom: 10px;
  margin-top: 24px;
}

.product-header p {
  margin-bottom: 46px;
}

.product-details,
.product-content {
  margin-bottom: 30px;
}

.product-details h2,
.product-content h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-details ul,
.product-content ul {
  list-style-type: none;
  padding: 0;
  margin-top: 24px;
}

.product-details ul li,
.product-content ul li {
  margin-bottom: 5px;
}

.product-content li {
  display: flex;
  background-color: #eee;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
}
.product-content li:hover {
  background-color: #eee6;
}

.product-content li span {
  margin-left: auto;
}

.enroll-button button {
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.enroll-button button:hover {
  background-color: #0056b3;
}
</style>
./ProductPage.vue
