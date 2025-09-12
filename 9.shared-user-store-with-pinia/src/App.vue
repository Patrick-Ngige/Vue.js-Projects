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
