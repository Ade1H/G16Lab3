<template>
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

  <div class="container">
    <BCard
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem">
      <BCardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </BCardText>

      <BButton href="#" variant="primary">Go somewhere</BButton>
    </BCard>
  </div>
</template>
<script></script>

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
  /* position: relative; */
  padding-right: 25rem;
  padding-bottom: 8rem;
}
.container{
  margin-bottom: 15px;
}

</style>
