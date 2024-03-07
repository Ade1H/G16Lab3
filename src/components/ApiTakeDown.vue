<script setup>
// import { ref } from 'vue'
// const value = ref('search')
// function increment() {
<<<<<<< HEAD
// value.value++
=======
  // value.value++
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
// }
</script>


<script>
<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios'
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
// import { ref } from 'vue'
export default {

  created() {
    axios("/api.json").then((result) => {
      this.courses = result.data.courses // Incorrect usage of 'this' here
      console.log(result);

    });
  },

<<<<<<< HEAD
  methods: {
    // Corrected 'methods' spelling
=======
  methods: { // Corrected 'methods' spelling
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
    // async search() {
    //   try {
    //     const result = await axios(`/api.json/${this.searchText}`);
    //     this.result = result.data.courses
    //     console.log(result);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // },
    // Deklarera en variabel för att lagra felmeddelandet
<<<<<<< HEAD
    // Deklarera en variabel för att lagra felmeddelandet

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
=======
// Deklarera en variabel för att lagra felmeddelandet



search() {
  if (this.searchText === '') {
    this.filteredCourses = [];

    this.errorMessage = ' Söktexten får inte vara tom.';
  } else {
    this.filteredCourses = this.courses.filter(course => {
      return course.title.toLowerCase().includes(this.searchText.toLowerCase());
    });


    if (this.filteredCourses.length === 0) {

      this.errorMessage = 'Inga matchningar hittades.';

    } else {

      this.errorMessage = '';
    }
  }
}

,
    addtoCard(title){

    this.$emit('addTo',title)
    // console.log(title.)


>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
    },
    addtoCard(title) {
      this.$emit("addTo", title);
      // console.log(title.)
    },
    saveCourse(title) {
      this.$emit("saveCourse", title);
      // console.log(title.)
    },
    navigateToProductView() {
      this.$router.push({ path: "/product" });
    },
  },
<<<<<<< HEAD
  emits: ["addTo"],

  data() {
    return {
      // searchText: '',
      courses: [],
      loading: false,
      searchText: "",
      filteredCourses: [],
      errorMessage: "",
      // errorMessage: string = '';
      // storedCourses: [],
      // buttonPressed: false
    };
  },
  watch: {
    // searchText(newValue, oldValue) {
    // Kontrollera om värdet har ändrats
    // if (this.text !== this.search) {
    //   this.search(); // Anropa sökfunktionen när searchText ändras
    // }
    //  this.filteredCourses = this.courses.filter(course => {
    //    return course.title.toLowerCase().includes(newValue.toLowerCase());
    //  });
    //  if(this.buttonPresse === true){
    //   this.buttonPressed = false;
    //  }
    //  console.log("ibrahim", this.filteredCourses);
    // console.log(`ddsfsfsfds${newValue}fdfsfsfs${oldValue}`)
  },
=======
  emits:['addTo'],



  data(){
    return{
      // searchText: '',
      courses: [],
      loading: false,
      searchText:'',
      filteredCourses: [],
      errorMessage : ''
      // errorMessage: string = '';
      // storedCourses: [],
      // buttonPressed: false
    }


  }
,
watch: {
    // searchText(newValue, oldValue) {
      // Kontrollera om värdet har ändrats
      // if (this.text !== this.search) {
      //   this.search(); // Anropa sökfunktionen när searchText ändras
      // }
      //  this.filteredCourses = this.courses.filter(course => {
      //    return course.title.toLowerCase().includes(newValue.toLowerCase());
      //  });
      //  if(this.buttonPresse === true){
      //   this.buttonPressed = false;
      //  }
      //  console.log("ibrahim", this.filteredCourses);
      // console.log(`ddsfsfsfds${newValue}fdfsfsfs${oldValue}`)
    }
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e

  // computed:{
  //     toUpperCase(){

  //       return this.serchText.toUpperCase()

  //     }
  //     },

<<<<<<< HEAD
  // searchResult(){
  //   this.$emit('showSearchResult')
  //     console.log(this.serchText)
  // }
=======
    // searchResult(){
    //   this.$emit('showSearchResult')
    //     console.log(this.serchText)
    // }
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
  // methods: { // Corrected 'methods' spelling
  //   async searchResult() {
  //     try {
  //       const result = await axios.get(`/api.json/${this.searchInApi}`);
  //       this.courses = result.data.courses;
  //       console.log(result);
  //       console.log(this.searchInApi);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   },
  // },
<<<<<<< HEAD
};
=======


}
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
</script>

<template>
  <BNavForm class="d-flex">
    <BFormInput v-model="searchText" class="me-2" placeholder="Search" />

<<<<<<< HEAD
    <BButton variant="outline-warning" @click="search()">Search</BButton>
  </BNavForm>
  <div style="color: darkgrey" v-if="errorMessage !== ''">
    {{ errorMessage }}
  </div>
  <!-- <Products :loading="loading" :courses="courses" /> -->
  <!-- <div style=" display: flex ; flex-direction: row; flex-wrap: wrap ; align-items: ; "> -->
  <div v-if="loading">Loading...</div>
  <div v-else-if="courses && courses.length > 0">
    <div v-if="filteredCourses.length !== 0">
=======


  <BNavForm class="d-flex">
      <BFormInput v-model="searchText" class="me-2" placeholder="Search" />

      <BButton variant="outline-warning" @click="search()">Search</BButton>

    </BNavForm>
    <div style="color:darkgrey;" v-if="errorMessage !== ''">{{ errorMessage }}</div>
<!-- <Products :loading="loading" :courses="courses" /> -->
<!-- <div style=" display: flex ; flex-direction: row; flex-wrap: wrap ; align-items: ; "> -->
  <div v-if="loading">Loading...</div>
    <div v-else-if="courses && courses.length > 0">
      <div v-if="filteredCourses.length !== 0">
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
      <b-card
        v-for="course in filteredCourses"
        :key="course.id"
        :title="course.title"
        :img-src="course.image"
        img-alt="Course Image"
        tag="article"
<<<<<<< HEAD
        style="max-width: 20rem; margin: 20px"
=======
        style="max-width: 20rem; margin: 20px ;"
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
        class="mb-2"
      >
        <b-card-text>
          {{ course.description }}
        </b-card-text>
<<<<<<< HEAD
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
        class="mb-2"
      >
        <b-card-text>
          {{ course.description }}
        </b-card-text>
        <b-card-text> Price: {{ course.price }} </b-card-text>
        <b-button @click="addtoCard(course)" variant="primary"
          >Add to card</b-button
        >
        <b-button @click="saveCourse(course)" variant="primary" style="margin-left: 24px;"
          >more details</b-button
        >
      </b-card>
    </div>
  </div>
  <div v-else>No courses found.</div>
  <!-- </div> -->
</template>
=======
        <b-card-text>
          Price: {{ course.price }}
        </b-card-text>
        <b-button @click="addtoCard(course)" variant="primary">Add to card</b-button>
      </b-card>
      </div>
      <div v-else style=" display: flex ; flex-direction: row; flex-wrap: wrap ; ">
      <b-card
        v-for="course in courses"
        :key="course.id"
        :title="course.title"
        :img-src="course.image"
        img-alt="Course Image"
        tag="article"
        style="max-width: 20rem; margin: 20px ;"
        class="mb-2"
      >
        <b-card-text>
          {{ course.description }}
        </b-card-text>
        <b-card-text>
          Price: {{ course.price }}
        </b-card-text>
        <b-button @click="addtoCard(course)" variant="primary">Add to card</b-button>
      </b-card>
      </div>
    </div>
    <div v-else>
      No courses found.
    </div>
  <!-- </div> -->


  </template>
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
