

  <script setup>
  import { ref } from 'vue'


const value = ref('search')
  function increment() {
    value.value++
  }
</script>



<script>



  import axios from 'axios'

    export default {

      created() {
        //axios
        axios('/api.json').then((result)=>{
            this.courses = result.data.courses
            // this.imageS=result.data.items.images.large

            console.log(result)
        })
          // .then((response) => response.json())
          // .then((result) => {
          //   this.cities = result
          // })
      },
      method:{
      async searchResult() {
        try {
          const result = await axios.get(`/api.json/${this.searchInApi} `)
          this.courses = result.data.courses
          console.log(result)
          console.log(this.searchInApi)

        }catch (error) {
          console.error('Error fetching data:', error)
        }


      }
    },
      data() {
        return {
          courses :[],
          searchInApi:'',
          searchResult:[],
          // uppercaseInput:''
        }
      }
    }

</script>

<template>
<div style="color: white;" v-if="!courses.length && searchInApi.length >0">
               No results found.
      </div>

<!-- <div v-else>
    <b-card
      v-for="result in courses"
      :key="result.id"
      :title="result.title"
      :img-src="result.image"
      img-alt="Course Image"

      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >

      <b-card-text>
        {{ result.description }}
      </b-card-text>

      <b-card-text>
        Price: {{ result.price }}
      </b-card-text>

      <b-button variant="primary">add to card</b-button>
    </b-card>
  </div> -->
<div style=" display: flex; flex-wrap:wrap; " >
    <b-card
      v-for="cours in courses"
      :key="cours.id"
      :title="cours.title"
      :img-src="cours.image"
      img-alt="Course Image"

      tag="article"
      style="max-width: 20rem; margin: 10px; "
      class="mb-2"
    >

      <b-card-text>
        {{ cours.description }}
      </b-card-text>

      <b-card-text>
        Price: {{ cours.price }}
      </b-card-text>

      <b-button variant="primary">View Details</b-button>
    </b-card>

  </div>
  <div  class="nav">
    <!-- <input  v-model="searchInApi"  placeholder="search"  > -->

    <!-- <p>{{toUpperCase}} </p> -->
  </div>
  <!-- <BButton @click="searchButton" size="sm" squared variant="outline-primary">{{ value }}</BButton> -->
  <!-- <BButton @click="searchButton" variant="primary">{{ value }}</BButton> -->
  <!-- <button @click="searchButton">search </button> -->
    <div class="one">



      <div class="tow"  v-for="cours in courses " >
        <!-- <img  :src="cours.image" alt="Wantedimg" /> -->
        <!-- <ul>
          <li>{{cours.title}}</li>
          <li>{{cours.description}}</li>
          <li>{{cours.price}}</li>

        </ul> -->
        <!-- <p >{{cours[].description}} </p> -->

        <!-- <p style="margin-top: 5px;">{{cours}}</p> -->

        <div style="color: white;" v-if="!courses.length && searchInApi.length > 0">
                 No results found.
        </div>
      </div>

    </div>

  </template>
