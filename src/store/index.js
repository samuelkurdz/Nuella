import Vue from 'vue';
import Vuex from 'vuex';
import TestimonialOneImage from '@/assets/images/user-1.png';
import TestimonialTwoImage from '@/assets/images/user-2.png';
import TestimonialThreeImage from '@/assets/images/user-3.png';
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

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testimonials: [
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
    products: [
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
    cart: [
      {
        productName: 'Red Printed T-Shirt',
        productImage: ProductOneImage,
        ratings: 1.5,
        price: 3000,
        gender: 'male',
        numberOrdered: 1,
      },
      {
        productName: 'Sneakers',
        productImage: ProductTwoImage,
        ratings: 4.0,
        price: 4500,
        gender: 'male',
        numberOrdered: 1,
      },
      {
        productName: 'Black Patterned Canvas',
        productImage: ProductTenImage,
        ratings: 3.0,
        price: 3800,
        gender: 'male',
        numberOrdered: 2,
      },
      {
        productName: 'Grey Casual Sneakers',
        productImage: ProductElevenImage,
        ratings: 4.5,
        price: 4000,
        gender: 'male',
        numberOrdered: 3,
      },
    ],
  },
  getters: {
    featuredProducts: (state) => state.products.slice(0, 4),
    latestProducts: (state) => state.products.slice(4),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
