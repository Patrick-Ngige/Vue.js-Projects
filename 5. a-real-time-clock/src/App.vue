<script setup>
import { ref } from 'vue'
import Clock from './components/Clock.vue'

//a ref to control the visibility of the clock
const showClock = ref(true)

function toggleClock() {
  showClock.value = !showClock.value
}
</script>

<template>
  <main class="app-container">
    <h1>Lifecycle Hooks Demo</h1>
    <button @click="toggleClock">
      {{ showClock ? 'Hide Clock' : 'Show Clock' }}
    </button>

    <hr />

    <Clock v-if="showClock" />
  </main>
</template>

<style scoped>
.app-container {
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
}

button {
  font-size: 1em;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
}

hr {
  margin: 20px 0;
  border: 1px solid #eee;
}
</style>
