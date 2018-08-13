import Vue from 'vue';
import Router from 'vue-router';
import Moive from '@/views/moive/Moive.vue';
import Music from '@/views/music/Music.vue';
import Book from '@/views/book/Book.vue';
import Photo from '@/views/photo/Photo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/moive'
    },
    {
      path: '/moive',
      name: 'moive',
      component: Moive,
    },
    {
        path: '/music',
        name: 'music',
        component: Music,
      },
      {
        path: '/book',
        name: 'book',
        component: Book,
      },
      {
        path: '/photo',
        name: 'photo',
        component: Photo,
      },
















    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  ],
});
