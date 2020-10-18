<template>
  <div class="small-container">
    <h2 class="title">Latest Products</h2>
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
import StarsRatings from '@/components/StarRatings.vue';
import ProductFiveImage from '@/assets/images/product-5.jpg';
import ProductSixImage from '@/assets/images/product-6.jpg';
import ProductSevenImage from '@/assets/images/product-7.jpg';
import ProductEightImage from '@/assets/images/product-8.jpg';
import ProductNineImage from '@/assets/images/product-9.jpg';
import ProductTenImage from '@/assets/images/product-10.jpg';
import ProductElevenImage from '@/assets/images/product-11.jpg';
import ProductTwelveImage from '@/assets/images/product-12.jpg';

export default {
  name: 'LatestProducts',
  components: {
    StarsRatings,
  },
  data() {
    return {
      Products: [
        {
          productName: 'Canvas Shoes',
          productImage: ProductFiveImage,
          ratings: 3.0,
          price: 6000,
          gender: 'male',
        },
        {
          productName: 'Black Pattern T-Shirt',
          productImage: ProductSixImage,
          ratings: 4.5,
          price: 3500,
          gender: 'male',
        },
        {
          productName: 'Multiple Coloured Soaks',
          productImage: ProductSevenImage,
          ratings: 5.0,
          price: 3000,
          gender: 'male',
        },
        {
          productName: 'Fossil Black Watch',
          productImage: ProductEightImage,
          ratings: 4.0,
          price: 10000,
          gender: 'male',
        },
        {
          productName: 'Road-Star Swiss Watch',
          productImage: ProductNineImage,
          ratings: 4.0,
          price: 13000,
          gender: 'male',
        },
        {
          productName: 'Black Patterned Canvas',
          productImage: ProductTenImage,
          ratings: 3.0,
          price: 3800,
          gender: 'male',
        },
        {
          productName: 'Grey Casual Sneakers',
          productImage: ProductElevenImage,
          ratings: 4.5,
          price: 4000,
          gender: 'male',
        },
        {
          productName: 'Black Joggers',
          productImage: ProductTwelveImage,
          ratings: 2.0,
          price: 3500,
          gender: 'male',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
