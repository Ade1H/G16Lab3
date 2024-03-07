<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  export default{


    components: {
      Navbar,
      Footer

    }

  }
</script>


<template>
  <Navbar />


  <main>
    <RouterView />
  </main>
  <Footer />
</template>


<style>
body{

  margin: 0;
  padding: 0;
  height: 100vh;
}

</style>
