<template>
  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
    <BNavbarBrand href="#">
      <img
        src="../assets/images/logo.png"
        alt=""
        style="max-width: 100px; display: flex; border-radius: 50px"
        ref="/#" />
    </BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
        <RouterLink class="nav-link" to="/products">Products</RouterLink>
        <RouterLink class="nav-link" to="/card"
          >Card <span class="cart-count">{{ count }}</span></RouterLink
        >




    </BNavbarNav>
    <BNavbarNav class="ms-auto mb-2 mb-lg-0">
      <BDropdownItem href="#" v-if="!(LoggedIn())"><RouterLink class="nav-link"  to="/Register">Register</RouterLink></BDropdownItem>
      <BDropdownItem href="#" v-if="!(LoggedIn())"><RouterLink class="nav-link"  to="/Login">Sign In</RouterLink></BDropdownItem>
    
      <BDropdownItem href="#" v-if="LoggedIn()"><RouterLink class="nav-link"  to="/User">Profile</RouterLink></BDropdownItem>
      <BDropdownItem href="#" v-if="LoggedIn()"><RouterLink class="nav-link"  to="/" @click="LogoutUser()">Sign Out</RouterLink></BDropdownItem>
    </BNavbarNav>

  </BCollapse>
</BNavbar>

  </template>

<script>
import { RouterLink } from "vue-router";
import { mapStores } from "pinia";
import { useLoginStore } from "../storeUser";
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    ...mapStores(useLoginStore),
  },
  components: {
    RouterLink,
  },
  created() {
    const cartCount = parseInt(localStorage.getItem("cartCount"));
    if (cartCount) {
      this.count = JSON.parse(cartCount);
    }
  },  
  data(){
      return{
        LoginVar:false
      }
    },
    methods:{
    LoggedIn(){
      return(localStorage.getItem("Login") != null)
    },
    LogoutUser(){
      localStorage.removeItem("Login")
      window.setTimeout(location.reload(), 1)
    }
  }
}

</script>

<style scoped>
div {
  height: 10vh;
}
.cart-count {
  padding: 4px 8px;
  border-radius: 100px;
  background-color: #e01c1c;
  color: #fff;
  font-size: 10px;
}
</style>
