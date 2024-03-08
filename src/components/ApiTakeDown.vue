<script>
import axios from "axios";
export default {
  created() {
    axios("/api.json").then((result) => {
      this.courses = result.data.courses;
      console.log(result);
    });
  },

  methods: {
    search() {
      if (this.searchText === "") {
        this.filteredCourses = [];

        this.errorMessage = " Söktexten får inte vara tom.";
      } else {
        this.filteredCourses = this.courses.filter((course) => {
          return course.title
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });

        if (this.filteredCourses.length === 0) {
          this.errorMessage = "Inga matchningar hittades.";
        } else {
          this.errorMessage = "";
        }
      }
    },
    addtoCard(title) {
      this.$emit("addTo", title);
    },
    saveCourse(title) {
      this.$emit("saveCourse", title);
    },
    navigateToProductView() {
      this.$router.push({ path: "/product" });
    },
  },
  emits: ["addTo"],

  data() {
    return {
      courses: [],
      loading: false,
      searchText: "",
      filteredCourses: [],
      errorMessage: "",
    };
  },
};
</script>

<template>
  <BNavForm class="d-flex">
    <BFormInput v-model="searchText" class="me-2" placeholder="Search" />

    <BButton variant="outline-warning" @click="search()">Search</BButton>
  </BNavForm>
  <div style="color: darkgrey" v-if="errorMessage !== ''">
    {{ errorMessage }}
  </div>
  <div v-if="loading">Loading...</div>
  <div v-else-if="courses && courses.length > 0">
    <div v-if="filteredCourses.length !== 0">
      <b-card
        v-for="course in filteredCourses"
        :key="course.id"
        :title="course.title"
        :img-src="course.image"
        img-alt="Course Image"
        tag="article"
        style="max-width: 20rem; margin: 20px"
        class="mb-2">
        <b-card-text>
          {{ course.description }}
        </b-card-text>
        <b-card-text> Price: {{ course.price }} </b-card-text>
        <b-button @click="addtoCard(course)" variant="primary"
          >Add to card</b-button
        >
      </b-card>
    </div>
    <div v-else style="display: flex; flex-direction: row; flex-wrap: wrap">
      <b-card
        v-for="course in courses"
        :key="course.id"
        :title="course.title"
        :img-src="course.image"
        img-alt="Course Image"
        tag="article"
        style="max-width: 20rem; margin: 20px"
        class="mb-2">
        <b-card-text>
          {{ course.description }}
        </b-card-text>
        <b-card-text> Price: {{ course.price }} </b-card-text>
        <b-button @click="addtoCard(course)" variant="primary"
          >Add to card</b-button
        >
        <b-button
          @click="saveCourse(course)"
          variant="primary"
          style="margin-left: 24px"
          >more details</b-button
        >
      </b-card>
    </div>
  </div>
  <div v-else>No courses found.</div>
</template>
