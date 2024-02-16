
<template>


<!--Navbar-->
<nav class="navbar navbar-light navbar-1 white">

<!-- Navbar brand -->
<a class="navbar-brand" href="#">Navbar</a>

<!-- Collapse button -->
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
  aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

<!-- Collapsible content -->
<div class="collapse navbar-collapse" id="navbarSupportedContent15">

  <!-- Links -->
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
  </ul>


  <!-- Links -->

</div>
<!-- Collapsible content -->

</nav>
<!--/.Navbar-->


<p v-if="ifMenuClicked === false" @click="menuClick"></p>
  <!-- <img s-else src="/assets/hMenu.jpg" @click="menuClick"> -->

  <nav v-show="ifMenuClicked">
    <ul style="color: aliceblue;">
      <li>
        <RouterLink style="color: azure" to="/">Hem</RouterLink>
      </li>
      <!-- <li>
        <RouterLink style="color: azure;" to="/about">Om</RouterLink> -->
      <!-- </li> -->
      <li>
        <RouterLink style="color: azure" to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
  </nav>
</template>


<script>


  export default {


    data() {
      return {

       menuText:"Menu",
       ifMenuClicked:false,
      }
    },
    methods:{
      menuClick(){
        this.ifMenuClicked = !this.ifMenuClicked
        this.menuText = this.ifMenuClicked ? "X" :"Menu"
      }
    }
  }
</script>



<style scoped>

/* nav{
  display: flex;
  flex-direction: row;
} */



  /* img{
    max-width: 30px;

  } */

</style>
