import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/users/:id',
      name: 'usersDetail',
      component: () => import('../views/UserDetailView.vue'),
    },
  ],
})

export default router
