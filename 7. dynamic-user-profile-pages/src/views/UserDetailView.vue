<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router' //accessing info about the current route

const user = ref(null)
const loading = ref(null)
const error = ref(null)

//accessing the current route object
const route = useRoute()

//getting id parameter from the url
const userId = route.params.id

async function fetchUser() {
  try {
    //using the id to fetch specific user
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!repsonse.ok) {
      throw new Error('User not found')
    }
    user.value = await Response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUser()
})
</script>

<template>
  <div class="page-content">
    <div v-if="loading">Loading user details...</div>
    <div v-else-if="error" style="color: red">Error: {{ error.message }}</div>

    <!-- Displaying user details -->
    <div v-else-if="user">
      <h1>{{ user.name }}</h1>
      <ul>
        <li><strong>Username:</strong>{{ user.username }}</li>
        <li><strong>Email:</strong>{{ user.email }}</li>
        <li><strong>Phone:</strong>{{ user.phone }}</li>
        <li><strong>Website:</strong>{{ user.website }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
