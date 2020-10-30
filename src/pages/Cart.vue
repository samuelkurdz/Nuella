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
        <tr>
          <td>
            <div class="cart-info">
              <img src="@/assets/images/buy-1.jpg" alt="cart-item">
              <div>
                <p>Red Printed Shirt</p>
                <small>Price: #2.500</small>
                <br>
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" min="1">
          </td>
          <td>#5,000</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="@/assets/images/buy-2.jpg" alt="cart-item">
              <div>
                <p>Sneakers</p>
                <small>Price: #5,500</small>
                <br>
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" min="1">
          </td>
          <td>#5,000</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="@/assets/images/buy-3.jpg" alt="cart-item">
              <div>
                <p>Joggers</p>
                <small>Price: #3,500</small>
                <br>
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" min="1">
          </td>
          <td>#5,000</td>
        </tr>
      </table>

      <div class="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>#4,000</td>
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
};
</script>

<style scoped>

</style>
