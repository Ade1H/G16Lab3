<script setup>
import { ref } from "vue";

const value = ref("search");
function increment() {
  value.value++;
}
</script>

<script>
import axios from "axios";

export default {
  created() {
    axios("/api.json").then((result) => {
      this.courses = result.data.courses;
      console.log(result);
    });
  },
  method: {
    async searchResult() {
      try {
        const result = await axios.get(`/api.json/${this.searchInApi} `);
        this.courses = result.data.courses;
        console.log(result);
        console.log(this.searchInApi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
<<<<<<< HEAD
      data() {
        return {
          courses :[],
          searchInApi:'',
          searchResult:[],
          // uppercaseInput:''
        }
      }
    }

=======
  },
  data() {
    return {
      courses: [],
      searchInApi: "",
      searchResult: [],
      // uppercaseInput:''
    };
  },
};
>>>>>>> c0f0fbb904e4bcc20e950a60ec018eaf96f07b5f
</script>

<template>
  <div style="color: white" v-if="!courses.length && searchInApi.length > 0">
    No results found.
  </div>

  <div style="display: flex; flex-wrap: wrap">
    <b-card
      v-for="cours in courses"
      :key="cours.id"
      :title="cours.title"
      :img-src="cours.image"
      img-alt="Course Image"
      tag="article"
      style="max-width: 20rem; margin: 10px"
      class="mb-2">
      <b-card-text>
        {{ cours.description }}
      </b-card-text>

      <b-card-text> Price: {{ cours.price }} </b-card-text>

      <b-button variant="primary">View Details</b-button>
    </b-card>
  </div>
  <div class="nav">
  </div>
  <div class="one">
    <div class="tow" v-for="cours in courses">
      <div
        style="color: white"
        v-if="!courses.length && searchInApi.length > 0">
        No results found.
      </div>
    </div>
  </div>
</template>
