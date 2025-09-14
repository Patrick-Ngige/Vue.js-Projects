import { useAuthStore } from '@/stores/authStore'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach((to, _from) => {
  //getting the auth store instance inside the guard
  const authStore = useAuthStore()

  //checking if the route requires authentication
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    console.log('Redirecting to login, access denied to:', to.fullPath)

    //redirecting to the login page
    return {
      name: 'login',
    }
  }

  //if user is loggedin or route does not require auth, the user is allowed to proceed
  return true
})

export default router
