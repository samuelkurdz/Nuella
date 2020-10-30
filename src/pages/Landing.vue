<template>
  <div>
    <div class="header">
      <NavBar>
        <div class="row">
          <div class="col-2">
            <h1>Give Your Workout <br> A New Style</h1>
            <p>
              Success isn't always about greatness. It's About
              consistency. Consistent <br> hard work gains success.
              Greatness will come.
            </p>
            <a href="#" class="btn">Explore Now &#8594;</a>
          </div>
          <div class="col-2">
            <img src="@/assets/images/image1.png" alt="image-1">
          </div>
        </div>
      </NavBar>
    </div>
    <Categories />
    <FeaturedProducts />
    <LatestProducts />
    <Offer />
    <Testimonial />
    <ActiveUsers />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Categories from '@/components/LandingPageComponents/Categories.vue';
import FeaturedProducts from '@/components/LandingPageComponents/FeaturedProducts.vue';
import LatestProducts from '@/components/LandingPageComponents/LatestProducts.vue';
import Offer from '@/components/LandingPageComponents/Offer.vue';
import Testimonial from '@/components/LandingPageComponents/Testimonial.vue';
import ActiveUsers from '@/components/LandingPageComponents/ActiveUsers.vue';

export default {
  name: 'Landing',
  components: {
    ActiveUsers,
    Testimonial,
    Offer,
    LatestProducts,
    FeaturedProducts,
    Categories,
    NavBar,
  },
};
</script>

<style scoped>

</style>
