<template>
  <section>
    <NavBar />
    <div class="small-container">

      <div class="row row-2">
        <h2>All Products</h2>
        <select>
          <option>Sort by Sales</option>
          <option>Sort by Price</option>
          <option>Sort by Rating</option>
          <option>Default Sorting</option>
          <option>Sort by Popularity</option>
        </select>
      </div>

      <div class="row">
        <router-link
          v-for="(product, index) in products" :key="index"
          :to="`/product-detail/${index}`" tag="div" class="col-4">
            <img :src="product.productImage" alt="product">
            <h4>{{product.productName}}</h4>
            <starsRatings :productRatings="product.ratings"></starsRatings>
            <p>#{{product.price}}</p>
        </router-link>
      </div>
      <div class="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import StarsRatings from '@/components/StarRatings.vue';

export default {
  name: 'Products',
  components: {
    StarsRatings,
    NavBar,
  },
  data() {
    return {
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>

</style>
