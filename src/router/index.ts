import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/prova',
    name: 'prova',
    component: () => import('../views/ProvaView.vue')
  },
  {
    path: '/contatti',
    name: 'contatti',
    component: () => import('../views/ListCardContattiView.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoView.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import('../views/FilterView.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('../views/404View.vue')
  },
  {
    path: '/fakeRegister',
    name: 'fakeRegister',
    component: () => import('../views/FakeRegister.vue')
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import('../views/FetchView.vue')
  },
  {
    path: '/fetch2',
    name: 'fetch2',
    component: () => import('../views/FetchRicercaView.vue')
  },
  {
    path: '/star',
    name: 'star',
    component: () => import('../views/StarRatingView.vue')
  },
  {
    path: '/toolbar',
    name: 'toolbar',
    component: () => import('../views/ToolbarView.vue')
  },
  {
    path: '/notifiche',
    name: 'notifiche',
    component: () => import('../views/NotificheView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
