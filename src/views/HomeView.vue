

<script >
import ApiTakeDown from '../components/ApiTakeDown.vue';

export default {
    components: {
      ApiTakeDown
    }
  }
//  import { ref } from 'vue'
// import { usecounterStore } from '../store.js';
// const store= usecounterStore()

/////vi ska använda pinia här ist

// const value = ref(0)

// function increment() {
//   value.value++
// }




</script>

<template>
<main style="background: rgb(42,116,255);
background: linear-gradient(180deg, rgba(42,116,255,1) 0%, rgba(185,248,255,1) 100%);" >
  <!-- <div class="navbar-dark bg-primary p-2 outo text-white"></div>
  <div class="navbar-dark bg-primary p-5 text-white bg-opacity-75"></div>
    <div class="navbar-dark bg-primary p-5 text-dark bg-opacity-50"></div>
    <div class="navbar-dark bg-primary p-5 text-dark bg-opacity-25"></div>
    <div class="navbar-dark bg-primary p-5 text-dark bg-opacity-10"></div> -->

    <div class="head" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
    <div class="left" style="color: aliceblue;">



      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque laborum, deserunt, atque velit iusto accusamus pariatur dolorem molestiae porro cupiditate non deleniti perspiciatis nam ipsam! Ad fuga eos vel!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque laborum, deserunt, atque velit iusto accusamus pariatur dolorem molestiae porro cupiditate non deleniti perspiciatis nam ipsam! Ad fuga eos vel!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque laborum, deserunt, atque velit iusto accusamus pariatur dolorem molestiae porro cupiditate non deleniti perspiciatis nam ipsam! Ad fuga eos vel!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque laborum, deserunt, atque velit iusto accusamus pariatur dolorem molestiae porro cupiditate non deleniti perspiciatis nam ipsam! Ad fuga eos vel!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque laborum, deserunt, atque velit iusto accusamus pariatur dolorem molestiae porro cupiditate non deleniti perspiciatis nam ipsam! Ad fuga eos vel!</p>
    </div>
    <div class="right">

      <img style="max-width: 300px; max-height: 300px; border-radius: 10px;"  src="../assets/1.png" alt="student" >
    </div>

  </div>
  <div class="button">
   <ApiTakeDown />

</div>
<!--
     <div class="model">
      <img src="" alt="bild">
      <h2 >model</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <button style="border: solid; padding: 3px; border-radius: 5px;" class="navbar-toggler" type="submit">order</button> -->
       <!-- <input @click="store.increment1()" type="button" :value="store.value1"  /> man behöver inte alltid skriva parantes men vi gör det för att vi ska veta att det är en function*




    <div class="model">
      <img src="" alt="bild">
      <h2 >model</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <input @click="store.increment2" type="button" :value="store.value2"  />
    </div>
    <div class="model">
      <img src="" alt="bild">
      <h2 >model</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <input @click="store.increment3" type="button" :value="store.value3"  />
      </div>
    <div class="model">
      <img src="" alt="bild">
      <h2 >model</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <input @click="store.increment4" type="button" :value="store.value4"  />
      </div>
    <div class="model">
      <img src="" alt="bild">
      <h2 >model</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <input @click="store.increment5" type="button" :value="store.value5"  />
     </div>
  </div > -->

</main>
<div >

<!-- Footer -->


</div>
</template>


 <style>
.head{
  display:flex;
  height: 80vh;
  justify-content: space-between; /* Align items with space between them */
  /*align-items: center; Vertically center items */


}
.button{
  display: flex;
  justify-content: space-between;



}

.model{

  border: solid blue;
  max-width: 100px;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
}


.foot{

  background-color: blueviolet;
  height: 20vh;
}
</style>
