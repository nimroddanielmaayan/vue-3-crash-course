import { createRouter, createWebHistory } from 'vue-router';
import TodosView from '../views/TodosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView,
    },
    {
      path: '/about',
      name: 'about',
      // The AboutView view is lazy-loaded
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
