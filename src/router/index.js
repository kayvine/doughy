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
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/menu/:category/:name',
    name: 'product-details',
    component: () => import('../views/Product.vue')
    // props: true
  },
  {
    path: '/menu/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/gift',
    name: 'gift',
    component: () => import('../views/Gift.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: { requiredAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
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
