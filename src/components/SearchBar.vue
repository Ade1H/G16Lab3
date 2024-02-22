<script>

  import axios from 'axios'

    export default {




       methods: {
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
          searchInApi:'',
          courses:[]
        }
      },


      // methods:{
    //     searchResult(result){

    //       this.$emit('showSearchResult',result)
    //     }
      }
    //   emits:['showSearchResult'],
    // }

</script>
<template>
  <div style="color: white;" v-if="!courses.length && searchInApi.length >0">
               No results found.
      </div>
<div v-else>
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
  </div>

 <BNavForm class="d-flex">
      <BFormInput v-model="searchInApi" class="me-2" placeholder="Search" />
      <BButton variant="outline-warning"  @click="searchResult()">Search</BButton>
    </BNavForm>
</template>
