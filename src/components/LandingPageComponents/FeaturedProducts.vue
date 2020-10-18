<template>
  <div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
      <div class="col-4" v-for="(product, index) in Products" :key="index">
        <img :src="product.productImage" alt="product">
        <h4>{{product.productName}}</h4>
        <starsRatings :productRatings="product.ratings"></starsRatings>
        <p>#{{product.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOneImage from '@/assets/images/product-1.jpg';
import ProductTwoImage from '@/assets/images/product-2.jpg';
import ProductThreeImage from '@/assets/images/product-3.jpg';
import ProductFourImage from '@/assets/images/product-4.jpg';
import StarsRatings from '@/components/StarRatings.vue';

export default {
  name: 'FeaturedProducts',
  components: {
    StarsRatings,
  },
  data() {
    return {
      Products: [
        {
          productName: 'Red Printed T-Shirt',
          productImage: ProductOneImage,
          ratings: 1.5,
          price: 3000,
          gender: 'male',
        },
        {
          productName: 'Sneakers',
          productImage: ProductTwoImage,
          ratings: 4.0,
          price: 4500,
          gender: 'male',
        },
        {
          productName: 'Grey Joggers',
          productImage: ProductThreeImage,
          ratings: 2.5,
          price: 3700,
          gender: 'male',
        },
        {
          productName: 'Blue Polo',
          productImage: ProductFourImage,
          ratings: 2.5,
          price: 2500,
          gender: 'male',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
