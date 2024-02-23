<script>
import ApiTakeDown from "../components/ApiTakeDown.vue";



export default {
  components: {
    ApiTakeDown
  },
};
</script>

<template>
  <main
    style="
      background: rgb(95, 96, 97);
      background: linear-gradient(
        180deg,
        rgb(253, 254, 254) 0%,
        rgb(253, 255, 255) 100%
      );
    ">
    <div class="container">
      <BCarousel controls indicators>
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
              Thousands of courses to help you succeed in your goals — at work
              and in life. Starting at €12.99 through Feb 22.
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
    <div>
      <p class="discription">
        Online courses offer flexible and accessible learning opportunities for
        everyone. With a diverse range of subjects, from technology and business
        to arts and personal development, they can be taken anytime, anywhere.
        High-quality content, interactive materials, and opportunities for
        discussion create dynamic learning environments.
      </p>
      <br />
    </div>
    <!-- <div class="cards">
      <ApiTakeDown />
    </div> -->
    <div>
      <CarouselSlide/>
    </div>
  </main>
</template>

<style scoped>
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
.container {
  padding-top: 40px;
  padding-bottom: 30px;
}
.cards {
  align-items: center;
  margin-left: 35px;
}

.discription {
  text-align: center;
  padding: 30px;
}
</style>
 