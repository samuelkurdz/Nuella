<template>
  <div class="small-container">
    <h2 class="title">Latest Products</h2>
    <div class="row">
      <div class="col-4" v-for="(product, index) in latestProducts" :key="index">
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
  name: 'LatestProducts',
  components: {
    StarsRatings,
  },
  data() {
    return {
    };
  },
  computed: {
    latestProducts() {
      return this.$store.getters.latestProducts;
    },
  },
};
</script>

<style scoped>

</style>
