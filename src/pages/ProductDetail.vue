<template>
  <section>
    <NavBar />
    <!-- single product details -->
    <div class="small-container single-product">
      <div class="row">
        <div class="col-2">
          <img src="@/assets/images/gallery-1.jpg" alt="gallery" width="100%" id="product-img">
          <div class="small-img-row">
            <div class="small-img-col">
              <img class="small-img" src="@/assets/images/gallery-1.jpg" alt="gallery" width="100%">
            </div>
            <div class="small-img-col">
              <img class="small-img" src="@/assets/images/gallery-2.jpg" alt="gallery" width="100%">
            </div>
            <div class="small-img-col">
              <img class="small-img" src="@/assets/images/gallery-3.jpg" alt="gallery" width="100%">
            </div>
            <div class="small-img-col">
              <img class="small-img" src="@/assets/images/gallery-4.jpg" alt="gallery" width="100%">
            </div>
          </div>
        </div>
        <div class="col-2">
          <p>home / T-shirt</p>
          <h1>Red Printed T-shirt By Versace</h1>
          <h4>#2,500</h4>
          <select>
            <option>Select Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
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
        <p>View more</p>
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
};
</script>

<style scoped>

</style>
