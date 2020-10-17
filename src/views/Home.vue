<template>
  <div class="home">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
  },
};
</script>
