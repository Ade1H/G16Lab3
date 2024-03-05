<template>


<BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">


  <BNavbarBrand href="#">
    <img src="../assets/images/logo.png" alt="" style="max-width: 100px; display: flex; border-radius: 50px;" ref="/#">
    </BNavbarBrand>

  <BNavbarToggle target="nav-collapse" />
  <BCollapse id="nav-collapse" is-nav>
    <BNavbarNav>
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
      <RouterLink class="nav-link" to="/products">Products</RouterLink>
      <RouterLink class="nav-link" to="/card">Card</RouterLink>
      <!-- <button @click="navigateTo()">vewCard/cuntinioShop</button> -->




    </BNavbarNav>
    <!-- Right aligned nav items -->
    <BNavbarNav class="ms-auto mb-2 mb-lg-0">
      <BNavItemDropdown text="Lang" right>
        <BDropdownItem href="#">EN</BDropdownItem>
        <BDropdownItem href="#">ES</BDropdownItem>
        <BDropdownItem href="#">RU</BDropdownItem>
        <BDropdownItem href="#">FA</BDropdownItem>
      </BNavItemDropdown>
      <Login />
    </BNavbarNav>
<!--
    <BNavForm  class="d-flex">
      <BFormInput  v-model="searchInApi" class="me-2" placeholder="Search" />
      <BButton variant="outline-warning"  @click="searchButonPushed()">Search</BButton>
    </BNavForm> -->
<!-- <SearchBarVue @showResult="bringInfoForTathQuary" /> -->
  </BCollapse>
</BNavbar>

</template>


<script>
import { RouterLink } from 'vue-router'
// import SearchBarVue from './SearchBar.vue'




  export default {

    components: {
    RouterLink,
    // SearchBarVue


  },


  }



</script>


<style scoped>
div{
  height: 10vh;

}


</style>
