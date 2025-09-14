<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//router instance
const router = useRouter()

const isLoading = ref(false)

function performLogin() {
  isLoading.value = true
  console.log('Simulating login...')

  setTimeout(() => {
    console.log('Login successful! Redirecting...')

    //use router.push() to programmaticallly navigate to a new page
    // push to either a path directly or a named route
    router.push({ name: 'users' }) //redirecting to the users page

    // this: router.push('/users) will also work(direct path)

    isLoading.value = false
  }, 1500)
}
</script>

<template>
  <div class="page-content">
    <h1>Login Page</h1>
    <p>Click the button below to simulate a login and be redirected.</p>

    <button @click="performLogin" :disabled="isLoading">
      {{ isLoading ? 'Logging in...' : 'Login and Go tot Users Page' }}
    </button>
  </div>
</template>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
