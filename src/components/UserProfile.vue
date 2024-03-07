
<template>
  <main>
  <div>
    <p>Email: {{ LoginStore.user[0].Mail }}</p>
    <p>Password: {{ LoginStore.user[0].Password }}</p>
  </div>
</main>
</template>


<script >
  import { mapStores } from 'pinia'
  import { useLoginStore } from '../storeUser'

  export default {
    data(){
      return{
        email: '',
        password:'',
        terms:false,
        passEror:''
      }

    },
    computed: {
      ...mapStores(useLoginStore)
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
