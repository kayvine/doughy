import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/menu/:category/:name',
    name: 'product-details',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
    // props: true
  },
  {
    path: '/menu/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "product" */ '../views/Cart.vue')
  },
  {
    path: '/gift',
    name: 'gift',
    component: () => import(/* webpackChunkName: "gift" */ '../views/Gift.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: { requiredAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // need to logins
  } else {
    next();
  }
});

export default router;
