import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Work from './views/Work.vue';
import Book from './views/Book.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'About' },
    },
    {
      path: '/works',
      name: 'works',
      component: Work,
      meta: { title: 'Works' },
    },
    {
      path: '/books',
      name: 'books',
      component: Book,
      meta: { title: 'Books' },
    },
  ],
});
