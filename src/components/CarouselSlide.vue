<template>
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
  }
}
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
