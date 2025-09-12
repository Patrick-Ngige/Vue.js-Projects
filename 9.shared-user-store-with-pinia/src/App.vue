<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore()

function handleLogOut() {
  authStore.logout()
}
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/users">Users</RouterLink>
          <RouterLink to="/settings">Settings</RouterLink>

          <!-- 3. Use v-if to show Login or Logout -->
          <RouterLink v-if="!authStore.isLoggedIn" to="/login">Login</RouterLink>
          <a v-else @click="handleLogout" class="logout-link">Logout</a>
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
/* ... (previous styles) ... */
.logout-link {
  cursor: pointer;
}
.welcome-message {
  text-align: center;
  margin-top: 1rem;
  color: #333;
  font-weight: bold;
}
nav a {
  /* ... (previous styles) ... */
  color: #2c3e50;
}
</style>
