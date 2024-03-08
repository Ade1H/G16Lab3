
<template>
  <main>
  <form  @submit.prevent="handleSubmit">
    <p >Email:</p>
    <input type="email" required v-model="email">

    <p> Password:</p>
    <input type="password" required v-model="password">
    <div v-if="passEror" class="error">{{ passEror }}</div>

    <div class="terms" >
      <input type="checkbox" v-model="terms" required name="" id="">
      <p>Accept terms and conditions</p>
    </div>

    <div class="submit">
      <button>Create account</button>
    </div>
  </form>

</main>
</template>


<script >
  import { mapStores } from 'pinia'
  import { useAccountsStore } from '../storeUsers'

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
      ...mapStores(useAccountsStore)
    },
    methods:{
      handleSubmit(){
        const account = this.accountsStore.accounts.find(
            (user) =>
            user.Mail === this.email
            )

        if(account != null){
          alert("Användarnamn är upptaget")
        } else if(this.password.length < 1){
          this.passwordErros='pass is not more than 1 chart'
          alert(this.passwordErros)
        } else{
          this.accountsStore.CreateAccounts({
            Mail: this.email,
            Password: this.password
          })
          alert('FORM SUBMITED')
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
