<template>
  <div class="testimonial">
    <div class="small-container">
      <div class="row">
        <div class="col-3" v-for="(testimony, index) in testimonials" :key="index">
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

export default {
  name: 'Testimonial',
  components: {
    StarsRatings,
  },
  data() {
    return {
    };
  },
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
};
</script>

<style scoped>
  .star-rating {
    justify-content: center;
  }
</style>
