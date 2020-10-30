<template>
  <div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
      <div class="col-4" v-for="(product, index) in featuredProducts" :key="index">
        <img :src="product.productImage" alt="product">
        <h4>{{product.productName}}</h4>
        <starsRatings :productRatings="product.ratings"></starsRatings>
        <p>#{{product.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarsRatings from '@/components/StarRatings.vue';

export default {
  name: 'FeaturedProducts',
  components: {
    StarsRatings,
  },
  data() {
    return {
    };
  },
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    },
  },
};
</script>

<style scoped>

</style>
