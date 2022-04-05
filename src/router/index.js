import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "./../views/Home.vue";
import User from './../views/User.vue';
import DetailUser from './../views/DetailUser.vue';
import AddUser from './../views/AddUser.vue';
import Profile from './../views/Profile.vue'

import Login from './../views/Login.vue';

import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: '',
        name: 'User',
        component: User
      },
      {
        path: 'users',
        name: 'Users',
        redirect: '/'
      },
      {
        path: 'users/add',
        name: 'AddUser',
        component: AddUser
      },
      {
        path: 'users/:id',
        name: 'DetailUser',
        component: DetailUser
      },
      {
        path: 'users/:id/edit',
        name: 'EditUser',
        component: AddUser
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      }
    ],
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const isLoggedIn = store.getters['account/isLoggedIn']
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth === true)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest === true)) {
    if (isLoggedIn) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;