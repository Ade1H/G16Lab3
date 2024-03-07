<template>
  <hr>
  <h4>Cours Reviews </h4>
  <hr>
  <div class="ratings-list">
    <div v-for="(rating, index) in ratings" :key="index" class="rating-card">
      <h3>{{ rating.customerName }}</h3>
      <h5>{{ rating.coursName }}</h5>
      <div class="stars">
        <span v-for="n in 5" :key="n" :class="{ filled: n <= rating.stars }"
          >&#9733;</span
        >
      </div>
      <p>{{ rating.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: [
        {
          customerName: "Alice",
          stars: 5,
          comment: "Great course, highly recommended!",
          coursName: "Mobile App Development",
        },
        {
          customerName: "Bob",
          stars: 4,
          comment: "Very informative, but could use more exercises.",
          coursName: "Data Science Masterclass",
        },
        {
          customerName: "Charlie",
          stars: 3,
          comment: "Decent content, but too short.",
          coursName: "Python for Beginners",
        },

        {
          customerName: "David",
          stars: 5,
          comment: "Excellent course, loved every bit of it!",
          coursName: "Health and Fitness Mastery",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ratings-list {
  color: white;
  display: flex;
  flex-wrap: wrap;
}

.rating-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
}

.stars {
  color: #f8ce0b;
}

.stars span {
  font-size: 24px;
}

.stars span.filled {
  color: #f8ce0b;
}

.rating-card h3 {
  margin-top: 0;
}

h5{
  color: white;
}

h4{
color:white;
  padding-left: 25px;
  font-style: italic;
}

hr{
  border: 2px dotted rgb(21, 22, 21);
}
</style>
