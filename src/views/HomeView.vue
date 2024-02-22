<script setup>
import { usecounterStore } from '../store.js';
const store= usecounterStore()
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
      <div class="container">
    <BCarousel class="arrow" controls indicators>
      <BCarouselSlide
        img-src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/542775ce-985d-4103-8f86-1bfc28afb29d.jpg">
        <div class="card-intro">
          <h4>Don’t just browse the web — design it</h4>
          <p>
            Learn web design, from user experience fundamentals to graphic
            design.
          </p>
        </div>
      </BCarouselSlide>
      <BCarouselSlide
        img-src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/203e3c26-c085-48cb-aec0-8ccbe82be2b8.jpg">
        <div class="card-intro">
          <h4>Learning for all</h4>
          <p>
            Thousands of courses to help you succeed in your goals — at work and
            in life. Starting at €12.99 through Feb 22.
          </p>
        </div>
      </BCarouselSlide>
      <BCarouselSlide
        img-src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/65540944-d2e5-4e12-af78-ce1a2c691aeb.jpg">
        <div class="card-intro">
          <h4>A broad selection of courses</h4>
          <p>
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
        </div>
      </BCarouselSlide>
    </BCarousel>
  </div>


  </div>
  <div class="button">
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
      <b-button href="#/Products" variant="primary">Read More</b-button>
    </b-card>
  </div>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
      <b-button href="#/Products" variant="primary">Read More</b-button>
    </b-card>
  </div>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
      <b-button href="#/Products" variant="primary">Read More</b-button>

    </b-card>
  </div>
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

* {
  margin: 0px;
  box-sizing: border-box;
  padding: 0%;
}
h4 {
  color: #111;
  font-family: sans-serif;
}

p {
  color: #111;
  font-family: "Times New Roman", Times, serif;
  line-height: 29px;
  font-size: larger;
  display: block;
}
.card-intro {
  display: block;
  padding-right: 25rem;
  padding-bottom: 8rem;
}
.container{
  margin-bottom: 15px;
}
</style>
