
<template>
  <main>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label> Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passEror" class="error">{{ passEror }}</div>

    <!-- <p>Email:{{ email }}</p>
    <p>Password:{{ password }}</p>
    <p>Role:{{ role }}</p>
    <p>Terms:{{ terms }}</p> -->

    <div class="submit">
      <button>Sign in</button>
    </div>
  </form>
</main>
</template>


<script>
  export default{
    data(){
      return{
        email: '',
        password:'',
        role:'choice',
        terms:false,
        passEror:''
      }

    },
    methods:{
      handleSubmit(){
        // alert('FORM SUBMITED')
        if(this.password.length < 5){
          this.passwordErros='pass is not more than 5 chart'
          alert(this.passwordErros)
        } else{
          alert('FORM SUBMITED')
        }


      }
    }
  }

</script>

<style scoped>
form{
  width: 420px;
  /* margin: 30px auto; */
  background: white;
  /* text-align: left; */
  /* padding: 100px; */
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
