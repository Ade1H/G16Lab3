
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
      <BNavItemDropdown right>
        <!-- Using 'button-content' slot -->
        <template #button-content>
          <em>User</em>
        </template>
        <BDropdownItem href="#">Profile</BDropdownItem>
        <BDropdownItem href="#">Sign Out</BDropdownItem>
      </BNavItemDropdown>
    </BNavbarNav>

   <SearchBar />

  </BCollapse>
</BNavbar>

</template>


<script>

import { RouterLink } from 'vue-router';
import SearchBar from './SearchBar.vue';

  export default {

    components: {
    RouterLink,
    SearchBar
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


<style scoped>
div{
  height: 10vh;

}


</style>
