<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()

//an instance of the auth store
const authStore = useAuthStore()

const isLoading = ref(false)
const tempUsername = ref('TestUser') //temporary username for the input

function performLogin() {
  isLoading.value = true
  console.log('Simulating login...')

  // The setTimeout now correctly represents the entire "waiting" period.
  setTimeout(() => {
    console.log('Login successful! Updating state and redirecting...')

    // 1. Update the state FIRST.
    authStore.login(tempUsername.value)

    // 2. Immediately navigate AFTER the state is updated.
    router.push({ name: 'users' })

    // We can still reset the local loading state for when the user comes back.
    isLoading.value = false
  }, 1500) // The delay happens before anything inside this block runs.
}
</script>

<template>
  <div class="page-content">
    <h1>Login Page</h1>
    <p>Enter a username and click login.</p>

    <!-- A simple text input for the username -->
    <input type="text" v-model="tempUsername" placeholder="Enter username" />
    <button @click="performLogin" :disabled="isLoading">
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </button>
  </div>
</template>

<style scoped>
input {
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
</style>
