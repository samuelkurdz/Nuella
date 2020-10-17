import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/pages/Landing.vue';
import ProductDetail from '@/views/pages/ProductDetail.vue';
import Products from '@/views/pages/Products.vue';
import Cart from '@/views/pages/Cart.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Landing,
      },
      {
        path: '/products',
        component: Products,
      },
      {
        path: '/product-detail',
        component: ProductDetail,
      },
      {
        path: '/cart',
        component: Cart,
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/account/Account.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
