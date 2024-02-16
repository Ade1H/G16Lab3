<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'


export default{


components: {

  Header,
  Navbar
}
}


</script>

<template>
  <p class ="text-white bg-primary"><Navbar/></P>

   <Header />
  <main >
    <RouterView />
  </main>
<nav>

  <!-- <ul>
    <li>
      <RouterLink to="/">Hem</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">Om</RouterLink>
    </li>
    <li>
      <RouterLink to="/contact">Kontakt</RouterLink>
    </li>
  </ul> -->
</nav>






</template>

<style >
*{

  margin: 0;
  padding: 0;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
