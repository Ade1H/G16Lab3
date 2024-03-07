<template>
<<<<<<< HEAD
  <div>
    <h3>Top Rated</h3>
    <div class="container">
      <b-carousel id="carousel1" v-model="slide" controls indicators background="#ababab" :per-page="3">
        <b-carousel-slide v-for="course in courses" :key="course.id" :img-src="course.image" style="height: 35rem;">
          <b-card :title="course.title" :img-src="course.image" img-alt="Course Image" tag="article" style="max-width: 20rem; display: flex; align-items: center ; position: ;" class="mb-2">
            <b-card-text>{{ course.description }}</b-card-text>
            <b-card-text>Price: {{ course.price }}</b-card-text>
            <b-button ref="/#/product" variant="primary" @click="navigateToAbout()">View Details </b-button>
          </b-card>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
=======
    <h3>top rated</h3>
    <div class="container">
        <b-carousel id="carousel1" v-model="slide" controls indicators background="#ababab" :per-page="3">
      <b-carousel-slide v-for="(course, index) in courses" :key="index" :img-src="course.image">
      </b-carousel-slide>
    </b-carousel>
    </div>
  </template>

  <script>
  import axios from 'axios';
>>>>>>> c06148bc96efeeab5b316d55ecd6b2ccb5376725

  export default {
    data() {
      return {
        slide: 0,
        courses: []
      }
    },
    created() {
      this.fetchCourses();
    },
    methods: {
      async fetchCourses() {
        try {
          const response = await axios.get('/api.json');
          this.courses = response.data.courses;
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      }
    },
    navigateToAbout(){
    this.$router.push('/products');

   }

  }
<<<<<<< HEAD
}
</script>

<style scoped>
.container {
  width: 50%;
}
h3 {
  font-family: monospace;
  text-align: center;
  padding-bottom: 12px;
}
img{
  border-radius: 10px;
}
</style>
=======
  </script>
  <style scoped>
  .container{
    width: 50%;
  }
  h3 {
    font-family: monospace;
    text-align: center;
    padding-bottom: 12px;

  }
  </style>
>>>>>>> c06148bc96efeeab5b316d55ecd6b2ccb5376725
