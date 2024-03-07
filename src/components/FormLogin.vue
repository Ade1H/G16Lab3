
<template>
  <main>
  <form  @submit.prevent="Submit">
    <p >Email:</p>
    <input type="email" required v-model="email">

    <p> Password:</p>
    <input type="password" required v-model="password">
    <div v-if="passEror" class="error">{{ passEror }}</div>

    <div class="submit">
      <button>Sign in</button>
    </div>
  </form>

</main>
</template>

<script >
  import { mapStores } from 'pinia'
  import { useAccountsStore } from '../storeUsers'
  import { useLoginStore } from '../storeUser'

  export default{
    computed: {
      ...mapStores(useAccountsStore),
      ...mapStores(useLoginStore)
    },
    data(){
      return{
        email: '',
        password:'',
        passEror:''
      }

    },
    methods:{
      Submit(){
          
        if( this.accountsStore.accounts.find( (user) => user.Mail === this.email && user.Password === this.password ) != null){
          this.LoginStore.LoginUser({
            Mail: this.email, 
            Password: this.password
          })
          alert("inloggad som: " + this.email)
        } 
        else{
          alert('Fel användarnamn eller lösenord.')
        }
      }
    }
  }

</script>

<style scoped>
form{
  width: 420px;
  background: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

p{
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
