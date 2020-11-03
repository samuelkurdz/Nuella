<template>
  <section>
    <NavBar />
    <!-- single product details -->
    <div class="small-container single-product">
      <div class="row">
        <div class="col-2">
          <img :src="productImage" alt="gallery" width="100%" id="product-img">
          <div class="small-img-row">
            <div class="small-img-col" v-for="(image, index) in product.displayImages" :key="index">
              <img
                class="small-img" :src="image"
                alt="gallery" width="100%" @click="switchMainProductImage(image)">
            </div>
          </div>
        </div>
        <div class="col-2">
          <p>home / {{product.productName}}</p>
          <h1>{{product.productName}} By Versace</h1>
          <h4>#{{product.price}}</h4>
          <select>
            <option>Select Size</option>
            <option value="size" v-for="(size, index) in product.sizes" :key="index">
              {{size}}
            </option>
          </select>
          <input type="number" value="1" min="0">
          <a href="#" class="btn">Add To Cart</a>

          <h3>
            Product Details <i class="fa fa-indent"></i>
          </h3>
          <br>
          <p>
            Gut ornare lectus sit amet est placerat in egestas erat,
            imperdiet sed nisi porta lorem mollis aliquam ut
            porttitor leo a diam nulla facilisi
            nullam vehicula ipsum a arcu.
          </p>
        </div>
      </div>
    </div>

    <!-- title -->
    <div class="small-container">
      <div class="row row-2">
        <h2>Related Products</h2>
        <p @click="showProductId">View more</p>
      </div>
    </div>
    <!-- products -->
    <div class="small-container">
      <div class="row">
        <div class="col-4">
          <img src="@/assets/images/product-9.jpg" alt="product">
          <h4>Red Printed T-Shirt</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>#2,500</p>
        </div>
        <div class="col-4">
          <img src="@/assets/images/product-10.jpg" alt="product">
          <h4>Sneakers</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>#2,500</p>
        </div>
        <div class="col-4">
          <img src="@/assets/images/product-11.jpg" alt="product">
          <h4>Red Printed T-Shirt</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>#2,500</p>
        </div>
        <div class="col-4">
          <img src="@/assets/images/product-12.jpg" alt="product">
          <h4>Blue Polo Shirt</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
          <p>#2, 500</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'ProductDetail',
  components: { NavBar },
  data() {
    return {
      productId: this.$route.params.productId,
      productImage: null,
    };
  },
  methods: {
    showProductId() {
      console.log(this.productId, this.product);
    },
    switchMainProductImage(image) {
      this.productImage = image;
    },
  },
  computed: {
    product() {
      return this.$store.state.products[this.productId];
    },
  },
  created() {
    this.productImage = this.product.productImage;
  },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   $route(to, from) {
  //     this.productId = to.params.productId;
  //   },
  // },
};
</script>

<style scoped>

</style>
