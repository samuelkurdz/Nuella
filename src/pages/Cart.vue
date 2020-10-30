<template>
  <section>
    <NavBar />
    <!-- cart items details -->
    <div class="small-container cart-page">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr v-for="(cartItem, index) in cart" :key="index">
          <td>
            <div class="cart-info">
              <img :src="cartItem.productImage" alt="cart-item">
              <div>
                <p>{{cartItem.productName}}</p>
                <small>Price: #{{cartItem.price}}</small>
                <br>
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" min="1" v-model="cartItem.numberOrdered">
          </td>
          <td>#{{cartItem.price * cartItem.numberOrdered}}</td>
        </tr>
      </table>

      <div class="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>#{{subTotal}}</td>
          </tr>
          <tr>
            <td>Shipping Fees</td>
            <td>#1,000</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>#15,000</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Cart',
  components: { NavBar },
  data() {
    return {
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    subTotal() {
      let subtotal = 0;
      this.cart.forEach((cartItem) => {
        subtotal += (cartItem.price * cartItem.numberOrdered);
      });
      return subtotal;
    },
  },
};
</script>

<style scoped>

</style>
