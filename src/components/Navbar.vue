<script>
  import Login from '../components/Login.vue'
import { RouterLink } from 'vue-router';

  export default {

    components: {
    RouterLink
  },
    data() {
      return {

      // menuText:"Menu",
       ifMenuClicked:false,
      }
    },
    methods:{
      menuClick(){
        console.log("menu clicked "+this.ifMenuClicked)
        this.ifMenuClicked = !this.ifMenuClicked
        console.log("menu clicked "+this.ifMenuClicked)


        // this.menuText = this.ifMenuClicked ? "X" :"Menu"
      }
    }
  }
</script>

<template>


<BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">


  <!-- <BNavbarBrand href="#">NavBar</BNavbarBrand> -->

  <BNavbarToggle target="nav-collapse" />
  <BCollapse id="nav-collapse" is-nav>
    <BNavbarNav>
      <RouterLink class="nav-link"  to="/">Home</RouterLink>
      <RouterLink class="nav-link"  to="/contact">Contact</RouterLink>
      <RouterLink class="nav-link"  to="/about">About</RouterLink>

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
      <BFormInput class="me-2" placeholder="Search" />
      <BButton variant="outline-warning">Search</BButton>
    </BNavForm>
  </BCollapse>
</BNavbar>

</template>





<style scoped>
div{
  height: 10vh;

}


</style>
