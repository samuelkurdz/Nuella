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
        <ul id="menu-items">
          <router-link to="/" tag="li"><a>Home</a></router-link>
          <router-link to="/products" tag="li"><a>Products</a></router-link>
          <router-link to="/" tag="li"><a>About</a></router-link>
          <router-link to="/" tag="li"><a>Contact</a></router-link>
          <router-link to="/account" tag="li"><a>Account</a></router-link>
        </ul>
      </nav>
      <router-link to="/cart"><a>
        <img src="@/assets/images/cart.png" alt="cart" width="25px" height="25px">
      </a></router-link>
      <img
        src="@/assets/images/menu.png" onclick="menuToggle()"
        class="menu-icon" alt="cart" width="25px" height="25px">
    </div>
<!--    slot for showing hero banner -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>

</style>
