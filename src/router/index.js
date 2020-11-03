import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/pages/Landing.vue';
import ProductDetail from '@/pages/ProductDetail.vue';
import Products from '@/pages/Products.vue';
import Cart from '@/pages/Cart.vue';
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
        meta: {
          title: 'Home - Nuella',
        },
      },
      {
        path: '/products',
        component: Products,
        meta: {
          title: 'Products - Nuella',
        },
      },
      {
        path: '/product-detail/:productId',
        component: ProductDetail,
        meta: {
          title: 'Product Detail - Nuella',
        },
      },
      {
        path: '/cart',
        component: Cart,
        meta: {
          title: 'Cart - Nuella',
        },
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "account" */ '../views/account/Account.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// This callback runs before every route change, including on page load.
// eslint-disable-next-line consistent-return,no-use-before-define
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    .forEach((tag) => document.head.appendChild(tag));
  next();
});

export default router;
