import Vue from 'vue'
import VueRouter from 'vue-router'

const Home  = () => import('@/views/home/Home.vue');
const Category  = () => import('@/views/category/Category.vue');
const Cart  = () => import('@/views/cart/Cart.vue');
const Profile  = () => import('@/views/profile/Profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]

const router = new VueRouter({
  // base: process.env.BASE_URL,
  routes,
  mode: 'history'
})

// 前置守卫
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title;
//   next();
// });

export default router
