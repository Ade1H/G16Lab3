<template>


<BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">


  <BNavbarBrand href="#">Eduwill</BNavbarBrand>

  <BNavbarToggle target="nav-collapse" />
  <BCollapse id="nav-collapse" is-nav>
    <BNavbarNav>
      <RouterLink class="nav-link"  to="/">Home</RouterLink>
      <RouterLink class="nav-link"  to="/about">About</RouterLink>
      <RouterLink class="nav-link"  to="/products">Products</RouterLink>

    </BNavbarNav>
    <!-- Right aligned nav items -->
    <BNavbarNav class="ms-auto mb-2 mb-lg-0">
          <BDropdownItem href="#" class="LogOrReg"><RouterLink class="nav-link"  to="/Register">Register</RouterLink></BDropdownItem>
          <BDropdownItem href="#" class="LogOrReg"><RouterLink class="nav-link"  to="/Login">Sign In</RouterLink></BDropdownItem>
          <BDropdownItem href="#" class="LogoutOrProfile"><RouterLink class="nav-link"  to="/User">Profile</RouterLink></BDropdownItem>
          <BDropdownItem href="#" class="LogoutOrProfile"><RouterLink class="nav-link"  to="/User">Sign Out</RouterLink></BDropdownItem>
    </BNavbarNav>

    <BNavForm  class="d-flex">
      <BFormInput   class="me-2" placeholder="Search" />
      <BButton variant="outline-warning"  @click="searchResult()">Search</BButton>
    </BNavForm>

  </BCollapse>
</BNavbar>

</template>


<script>
import { RouterLink } from 'vue-router';


  export default {

    components: {
    RouterLink,

  },
    data() {
      return {
       ifMenuClicked:false,
      }
    },
    methods:{
      menuClick(){
        console.log("menu clicked "+this.ifMenuClicked)
        this.ifMenuClicked = !this.ifMenuClicked
        console.log("menu clicked "+this.ifMenuClicked)


      // menuText:"Menu",
      //  ifMenuClicked:false,
       searchInApi:''
      }
    }
    ,
    methods:{
    searchResult(){
      this.$emit('showResult')
        console.log(this.searchInApi)
    }
  }
    // methods:{
    //   menuClick(){
    //     console.log("menu clicked "+this.ifMenuClicked)
    //     this.ifMenuClicked = !this.ifMenuClicked
    //     console.log("menu clicked "+this.ifMenuClicked)


    //     // this.menuText = this.ifMenuClicked ? "X" :"Menu"
    //   }
    // }
  }
</script>


<style scoped>
div{
  height: 10vh;

}


</style>
