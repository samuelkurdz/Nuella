<template>
  <section>
    <NavBar />
    <div class="small-container">

      <div class="row row-2">
        <h2>All Products</h2>
        <select>
          <option>Default Sorting</option>
          <option>Sort by Price</option>
          <option>Sort by Popularity</option>
          <option>Sort by Rating</option>
          <option>Sort by Sales</option>
        </select>
      </div>

      <div class="row">
        <div class="col-4" v-for="(product, index) in Products" :key="index">
          <img :src="product.productImage" alt="product">
          <h4>{{product.productName}}</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
          <p>#{{product.price}}</p>
        </div>
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
import ProductOneImage from '@/assets/images/product-1.jpg';
import ProductTwoImage from '@/assets/images/product-2.jpg';
import ProductThreeImage from '@/assets/images/product-3.jpg';
import ProductFourImage from '@/assets/images/product-4.jpg';
import ProductFiveImage from '@/assets/images/product-5.jpg';
import ProductSixImage from '@/assets/images/product-6.jpg';
import ProductSevenImage from '@/assets/images/product-7.jpg';
import ProductEightImage from '@/assets/images/product-8.jpg';
import ProductNineImage from '@/assets/images/product-9.jpg';
import ProductTenImage from '@/assets/images/product-10.jpg';
import ProductElevenImage from '@/assets/images/product-11.jpg';
import ProductTwelveImage from '@/assets/images/product-12.jpg';

export default {
  name: 'Products',
  components: {
    NavBar,
  },
  data() {
    return {
      Products: [
        {
          productName: 'Red Printed T-Shirt',
          productImage: ProductOneImage,
          ratings: 4.5,
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
          ratings: 3.5,
          price: 3700,
          gender: 'male',
        },
        {
          productName: 'Blue Polo',
          productImage: ProductFourImage,
          ratings: 4.5,
          price: 2500,
          gender: 'male',
        },
        {
          productName: 'Canvas Shoes',
          productImage: ProductFiveImage,
          ratings: 4.0,
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
          ratings: 4.0,
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
          ratings: 4.0,
          price: 3800,
          gender: 'male',
        },
        {
          productName: 'Grey Casual Sneakers',
          productImage: ProductElevenImage,
          ratings: 4.0,
          price: 4000,
          gender: 'male',
        },
        {
          productName: 'Black Joggers',
          productImage: ProductTwelveImage,
          ratings: 4.0,
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
