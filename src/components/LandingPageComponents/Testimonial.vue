<template>
  <div class="testimonial">
    <div class="small-container">
      <div class="row">
        <div class="col-3" v-for="(testimony, index) in Testimonials" :key="index">
          <i class="fa fa-quote-left"></i>
          <p>{{testimony.report}}</p>
          <starsRatings :productRatings="testimony.rating"></starsRatings>
          <img :src="testimony.image" alt="user">
          <h3>{{testimony.userName}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarsRatings from '@/components/StarRatings.vue';
import TestimonialOneImage from '@/assets/images/user-1.png';
import TestimonialTwoImage from '@/assets/images/user-2.png';
import TestimonialThreeImage from '@/assets/images/user-3.png';

export default {
  name: 'Testimonial',
  components: {
    StarsRatings,
  },
  data() {
    return {
      Testimonials: [
        {
          report: 'ut ornare lectus sit amet est placerat in egestas erat, imperdiet sed nisi porta lorem mollis aliquam ut porttitor leo a diam nulla facilisi nullam vehicula ipsum a arcu.',
          rating: 4.0,
          image: TestimonialOneImage,
          userName: 'Sheila Wolff',
        },
        {
          report: 'ut ornare lectus sit amet est placerat in egestas erat, imperdiet sed nisi porta lorem mollis aliquam ut porttitor leo a diam nulla facilisi nullam vehicula ipsum a arcu.',
          rating: 2.0,
          image: TestimonialTwoImage,
          userName: 'Hammond Holland',
        },
        {
          report: 'ut ornare lectus sit amet est placerat in egestas erat, imperdiet sed nisi porta lorem mollis aliquam ut porttitor leo a diam nulla facilisi nullam vehicula ipsum a arcu.',
          rating: 3.5,
          image: TestimonialThreeImage,
          userName: 'Catherine Jones',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .star-rating {
    justify-content: center;
  }
</style>
