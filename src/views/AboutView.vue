<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      Welcome to our website! We are a passionate team dedicated to creating
      innovative solutions for our users. With a focus on user-centric design
      and cutting-edge technology, we strive to make a positive impact in the
      world through our products and services.
    </p>
    <p>
      Our mission is to provide high-quality solutions that address the evolving
      needs of our customers and exceed their expectations. Whether it's
      developing intuitive software applications, designing engaging user
      interfaces, or delivering personalized digital experiences, we are
      committed to delivering excellence in everything we do.
    </p>

    <h2>Our Team</h2>
    <ul class="team">
      <li v-for="teamMember in teamMembers" :key="teamMember.id">
        <strong>{{ teamMember.name }}</strong> - {{ teamMember.role }}
      </li>
    </ul>

    <h2>Our Values</h2>
    <ul class="values">
      <li v-for="value in values" :key="value.id">
        {{ value.text }}
      </li>
    </ul>

    <h2>Our Story</h2>
    <p>
      Our company was founded in 20XX by a group of like-minded individuals with
      a shared vision to revolutionize the industry. Since then, we have grown
      into a leading provider of innovative solutions, serving clients
      worldwide. Our journey has been marked by milestones, challenges, and
      triumphs, but our commitment to excellence remains unwavering.
    </p>
    <p>
      Over the years, we have built a diverse team of talented professionals who
      are passionate about their work and dedicated to achieving our common
      goals. Together, we have cultivated a culture of collaboration,
      creativity, and continuous improvement, driving our success and fueling
      our growth.
    </p>

    <h2>Why Choose Us?</h2>
    <p>
      At XYZ Company, we pride ourselves on delivering exceptional results and
      providing outstanding customer service. Here are a few reasons why you
      should choose us:
    </p>
    <ul class="reasons">
      <li>
        Expertise: Our team consists of highly skilled professionals with years
        of experience in their respective fields. We bring a wealth of knowledge
        and expertise to every project we undertake, ensuring optimal outcomes
        and maximum value for our clients.
      </li>
      <li>
        Innovation: We stay ahead of the curve by embracing the latest
        technologies and trends to deliver cutting-edge solutions. From AI and
        machine learning to blockchain and IoT, we leverage the power of
        innovation to solve complex problems and drive digital transformation.
      </li>
      <li>
        Customer Satisfaction: Our top priority is the satisfaction of our
        customers, and we go above and beyond to ensure they are delighted with
        our products and services. We listen to their needs, communicate
        transparently, and strive to exceed their expectations at every turn.
      </li>
    </ul>
  </div>
  <div>
    <CourseRating />
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { id: 1, name: "John Doe", role: "CEO" },
        { id: 2, name: "Jane Smith", role: "CTO" },
        { id: 3, name: "Michael Johnson", role: "Lead Developer" },
      ],
      values: [
        { id: 1, text: "Customer Satisfaction" },
        { id: 2, text: "Innovation" },
        { id: 3, text: "Teamwork" },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.about h2 {
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.about p {
  margin-bottom: 15px;
}

.team,
.values,
.reasons {
  margin-left: 24px;
  padding: 0;
}

.team li,
.values li,
.reasons li {
  margin-bottom: 5px;
}
</style>
