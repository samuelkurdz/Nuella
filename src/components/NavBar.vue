<template>
  <div class="container">
    <div class="navbar">
      <div class="logo">
        <router-link to="/"><a>
<!--          <img src="@/assets/images/logo.png" alt="logo" width="125px">-->
          Nuella's Flair
        </a></router-link>
      </div>
      <nav>
        <ul id="menu-items" ref="menuItems">
          <router-link to="/" tag="li"><a>Home</a></router-link>
          <router-link to="/products" tag="li"><a>Products</a></router-link>
<!--          <router-link to="/" tag="li"><a>About</a></router-link>-->
<!--          <router-link to="/" tag="li"><a>Contact</a></router-link>-->
          <router-link to="/account" tag="li"><a>Account</a></router-link>
        </ul>
      </nav>
      <router-link to="/cart"><a>
        <img src="@/assets/images/cart.png" alt="cart" width="25px" height="25px">
      </a></router-link>
      <img
        src="@/assets/images/menu.png" @click="menuToggle"
        class="menu-icon" alt="cart" width="25px" height="25px">
    </div>
<!--    slot for showing hero banner on landing page only-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    this.$refs.menuItems.style.maxHeight = '0px';
  },
  methods: {
    menuToggle() {
      if (this.$refs.menuItems.style.maxHeight === '0px') {
        this.$refs.menuItems.style.maxHeight = '250px';
      } else {
        this.$refs.menuItems.style.maxHeight = '0px';
      }
    },
  },
};
</script>

<style scoped>

</style>
