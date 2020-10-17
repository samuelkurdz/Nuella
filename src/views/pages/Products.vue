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
        <div class="col-4">
          <img src="@/assets/images/product-1.jpg" alt="product">
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
          <img src="@/assets/images/product-2.jpg" alt="product">
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
          <img src="@/assets/images/product-3.jpg" alt="product">
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
          <img src="@/assets/images/product-4.jpg" alt="product">
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
      <div class="row">
        <div class="col-4">
          <img src="@/assets/images/product-5.jpg" alt="product">
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
          <img src="@/assets/images/product-6.jpg" alt="product">
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
          <img src="@/assets/images/product-7.jpg" alt="product">
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
          <img src="@/assets/images/product-8.jpg" alt="product">
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

export default {
  name: 'Products',
  components: {
    NavBar,
  },
};
</script>

<style scoped>

</style>
