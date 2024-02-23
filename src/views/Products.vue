<template>
  <main style="background: rgb(42,116,255);
background: linear-gradient(180deg, rgba(42,116,255,1) 0%, rgba(185,248,255,1) 100%);">
<ApiTakeDown @showResult="bringInfoForTathQuary"/>

</main>
</template>


<script>
  import ApiTakeDown from '../components/ApiTakeDown.vue'

export default {

  components: {

    ApiTakeDown

  },
  methods:{

    bringInfoForTathQuary(){
      console.log(this.searchText)
    }
  },
  data(){
    return{
      searchText:''
    }

  }

}
</script>
