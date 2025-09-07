<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])
const loading = ref(true) //starting with a loading state
const error = ref(null)

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) {
      throw new Error('Network response was not okay.')
    }

    users.value = await response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <main class="user-list-app">
    <h1>Our Users</h1>

    <!-- conditional rendering -->
    <div v-if="loading" class="loading-message">Loading users...</div>

    <div v-else-if="error" class="error-message">
      Sorry, something went wrong: {{ error.message }}
    </div>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
.user-list-app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: sans-serif;
}

.loading-message,
.error-message {
  text-align: center;
  font-size: 1.2em;
  color: #888;
}

.error-message {
  color: #ff6b6b;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  color: #000;
}
</style>
