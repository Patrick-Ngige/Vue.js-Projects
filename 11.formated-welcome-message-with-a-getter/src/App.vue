<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

function handleLogOut() {
  authStore.logout()

  //adding the watcher
  router.push('/')
}

// watching the login state
watch(
  () => authStore.isLoggedIn,
  (isNowLoggedIn, wasPreviouslyLoggedIn) => {
    //runs whenever authStore.isLoggedIn changes
    if (wasPreviouslyLoggedIn && !isNowLoggedIn) {
      console.log('User logged out, checking if redirect is needed.')
      //checking is the user is currently on a page that requires auth
      if (route.meta.requiresAuth) {
        // if yes, force them to login page
        router.push({ name: 'login' })
      }
    }
  },
)
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <!-- <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/users">Users</RouterLink> -->
          <RouterLink to="/settings">Settings</RouterLink>

          <!-- 3. Use v-if to show Login or Logout -->
          <RouterLink v-if="!authStore.isLoggedIn" to="/login">Login</RouterLink>
          <a v-else @click="handleLogOut" class="logout-link">Logout</a>
        </nav>

        <!-- 4. Show a welcome message if logged in -->
        <div v-if="authStore.isLoggedIn" class="welcome-message">
          Welcome, {{ authStore.username }}!
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
}

.logout-link {
  cursor: pointer;
}
.welcome-message {
  text-align: center;
  margin-top: 1rem;
  color: #333;
  font-weight: bold;
}

nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: #2c3e50;
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

main {
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
