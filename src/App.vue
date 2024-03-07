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


<<<<<<< HEAD
  <main style="background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,121,247,1) 100%);">
=======
  <main>
>>>>>>> 622c337efcccef7ccecf3ad009a36f190298721e
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
