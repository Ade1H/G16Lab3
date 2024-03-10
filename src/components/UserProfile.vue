
<template>
  <main>
  <div>
    <p v-if="LoggedIn()">Email: {{ LoginStore.user[0].Mail }}</p>
    <p v-if="LoggedIn()">Password: {{ LoginStore.user[0].Password }}</p>
    <p v-if="LoggedIn()">Courses:</p>
    
    <p v-if="LoginStore.user[0].Courses[0] && LoggedIn()"> {{ LoginStore.user[0].Courses[0].title }}</p>
    <p v-if="LoginStore.user[0].Courses[1] && LoggedIn()"> {{ LoginStore.user[0].Courses[1].title }}</p>
    <p v-if="LoginStore.user[0].Courses[2] && LoggedIn()"> {{ LoginStore.user[0].Courses[2].title }}</p>
    <p v-if="LoginStore.user[0].Courses[3] && LoggedIn()"> {{ LoginStore.user[0].Courses[3].title }}</p>
    <!-- <p v-for="item in LoginStore.user[0].Courses.length"> {{ LoginStore.user[0].Courses[item - 1].title }}</p> -->
    
  </div>
</main>
</template>


<script >
  import { mapStores } from 'pinia'
  import { useLoginStore } from '../storeUser'
  
  export default {
    computed: {
      ...mapStores(useLoginStore)
    },
    methods:{
    LoggedIn(){
    if (localStorage.getItem("Login") != null){
      return(localStorage.getItem("Login") != null)
    }else{
      this.$router.push('/Login')
    }
    }
  }
  }

</script>

<style scoped>
div{
  width: 420px;
  background: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

label{
  color:black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;


  }

  input, select{
    display: block;
    padding: 10px 6px;
    width:100% ;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid grey;
    color:blueviolet;
  }

  input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position:relative;
    top:2px;

  }

  button{
    background: blue;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color:white;
    border-radius: 20px;
    margin: 10px;
  }

  .submit{
    text-align: center;
  }

  .error{
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }


main{
  display: flex;
  justify-content: center;
}

</style>
