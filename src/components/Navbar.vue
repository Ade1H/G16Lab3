
<template>

<!-- <div class="collapse" id="navbarToggleExternalContent" :class="{ 'show': ifMenuClicked }>
  // <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
 </div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> -->

<div class="pos-f-t navbar navbar-dark bg-primary"  >
  <div class=" collapse " id="navbarSupportedContent22" :class="{ 'show': ifMenuClicked }" >

  <!-- Links -->
  <ul class="navbar-nav mr-auto"  style="display: flex; flex-direction: row; " >
  <li class="nav-item active" style="margin: 25px 10px;">
    <RouterLink class="nav-link"  to="/">Home</RouterLink>
  </li>
  <li class="nav-item" style="margin: 25px 10px;" >
    <RouterLink class="nav-link"  to="/contact">Contact</RouterLink>
  </li>
  <li class="nav-item" style="margin: 25px 10px;">
    <RouterLink class="nav-link"  to="/about">About</RouterLink>
  </li>
  <li class="nav-item" style="margin: 25px 10px;">
    <RouterLink class="nav-link"  to="/products">Producter</RouterLink>
  </li>
  </ul>
  <!-- Links -->

  </div>

  <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarToggleExternalContent"
    aria-controls="navbarToggleExternalContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"  @click="menuClick"></span>

  </button>



  <form style="display: flex; flex-direction: row ;"  class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="width: 360px;">
    <BButton variant="primsry" type="submit">Search</BButton>
  </form>
</div>

</template>


<script>

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


<style scoped>
div{
  height: 10vh;

}


</style>
