<template>


<BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">


  <BNavbarBrand href="#">Eduwill</BNavbarBrand>

  <BNavbarToggle target="nav-collapse" />
  <BCollapse id="nav-collapse" is-nav>
    <BNavbarNav>
      <RouterLink class="nav-link"  to="/">Home</RouterLink>
      <RouterLink class="nav-link"  to="/contact">Contact</RouterLink>
      <RouterLink class="nav-link"  to="/about">About</RouterLink>
      <RouterLink class="nav-link"  to="/products">Products</RouterLink>

    </BNavbarNav>
    <!-- Right aligned nav items -->
    <BNavbarNav class="ms-auto mb-2 mb-lg-0">
      <BNavItemDropdown text="Lang" right>
        <BDropdownItem href="#">EN</BDropdownItem>
        <BDropdownItem href="#">ES</BDropdownItem>
        <BDropdownItem href="#">RU</BDropdownItem>
        <BDropdownItem href="#">FA</BDropdownItem>
      </BNavItemDropdown>
      <Login/>
    </BNavbarNav>

    <BNavForm class="d-flex">
      <BFormInput v-model="searchInApi" class="me-2" placeholder="Search" />
      <BButton variant="outline-warning"  @click="searchResult()">Search</BButton>
    </BNavForm>

  </BCollapse>
</BNavbar>

</template>


<script>
import Login from '../components/Login.vue'
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
      }
    }
  }
</script>


<style scoped>
div{
  height: 10vh;

}


</style>
